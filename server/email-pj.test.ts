import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock nodemailer avant l'import du module virement
const mockSendMail = vi.fn().mockResolvedValue({ messageId: "test-id" });
vi.mock("nodemailer", () => ({
  __esModule: true,
  default: {
    createTransport: () => ({ sendMail: mockSendMail }),
  },
}));

// Mock des variables d'environnement SMTP (le serveur lit getSmtpConfig à chaque appel)
beforeEach(() => {
  process.env.SMTP_HOST = "smtp.gmail.com";
  process.env.SMTP_PORT = "587";
  process.env.SMTP_SECURE = "false";
  process.env.SMTP_USER = "test@gmail.com";
  process.env.SMTP_PASS = "test-app-password";
  process.env.SMTP_FROM = "test@gmail.com";
  mockSendMail.mockClear();
});

afterEach(() => {
  delete process.env.SMTP_HOST;
  delete process.env.SMTP_PORT;
  delete process.env.SMTP_SECURE;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  delete process.env.SMTP_FROM;
});

import { virementRouter } from "./virement";

describe("Email de confirmation : pièce jointe PDF", () => {
  it("joint le récépissé PDF à l'email de confirmation", async () => {
    const caller = virementRouter.createCaller({} as never);

    const result = await caller.execute({
      identifiant: "1000000001",
      sourceAccountId: "compte_courant",
      iban: "FR7612345678901234567890189",
      swift: "LCLC8545SD",
      bankCode: "30004",
      amount: 50,
      email: "destinataire@example.com",
      firstName: "Koassi",
      lastName: "Jeanmarcel",
      label: "Test piece jointe PDF",
    });

    expect(result.success).toBe(true);
    // Le virement n'échoue pas à cause de la pièce jointe (login SMTP mocké)
    expect(mockSendMail).toHaveBeenCalledTimes(1);

    const mailOptions = mockSendMail.mock.calls[0][0];
    expect(mailOptions.to).toBe("destinataire@example.com");
    expect(mailOptions.subject).toContain("Confirmation de virement");
    expect(Array.isArray(mailOptions.attachments)).toBe(true);
    expect(mailOptions.attachments.length).toBe(1);

    const pj = mailOptions.attachments[0];
    expect(pj.filename).toMatch(/^recu-virement-50,00EUR-\d{8}-\d{4}\.pdf$/);
    expect(pj.contentType).toBe("application/pdf");
    // Le contenu base64 décodé doit commencer par %PDF-
    const decoded = Buffer.from(pj.content as Buffer, "base64");
    expect(decoded.subarray(0, 5).toString()).toBe("%PDF-");
    // Le PDF contient bien le contenu (bandeau, tableau, footer compressés) —
    // taille réelle observée ~2,7 Ko : on vérifie qu'il dépasse 1 Ko de contenu
    expect(decoded.length).toBeGreaterThan(1000);
  });

  it("renvoie le PDF base64 au client pour le téléchargement", async () => {
    const caller = virementRouter.createCaller({} as never);
    const result = await caller.execute({
      identifiant: "1000000001",
      sourceAccountId: "compte_courant",
      iban: "FR7612345678901234567890189",
      swift: "LCLC8545SD",
      bankCode: "30004",
      amount: 25,
      email: "destinataire@example.com",
      firstName: "Marie",
      lastName: "Dupont",
      label: "test",
    });
    expect(result.receiptPdfBase64).toBeTruthy();
    const decoded = Buffer.from(result.receiptPdfBase64, "base64");
    expect(decoded.subarray(0, 5).toString()).toBe("%PDF-");
  });
});
