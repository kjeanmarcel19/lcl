/*
 * Site LCL — Procédure de virement via IBAN (envoi SMTP au destinataire).
 *
 * Logique :
 * 1. Valider les champs du formulaire (schema zod côté procédure).
 * 2. Vérifier que l'utilisateur LCL connecté a un solde suffisant sur son
 *    compte courant.
 * 3. Déduire le montant du solde (persisté en localStorage → passé par le
 *    client dans la requête ; cohérence assurée par relecture côté serveur
 *    dans DEFAULT_USERS via le fichier statique).
 * 4. Envoyer un email de confirmation au destinataire via nodemailer
 *    (config SMTP fournie par variables d'environnement).
 * 5. Retourner le résultat pour afficher le modal de confirmation.
 */
import nodemailer from "nodemailer";
import { z } from "zod";
import { publicProcedure, router } from "./trpc_local";
import type { DefaultUser } from "./comptes";
// pdfkit expose directement la classe de document comme export par défaut.
import { createRequire } from "module";
const PDFDoc = createRequire(import.meta.url)("pdfkit");
import { Writable } from "stream";

/** Schéma du formulaire de virement (identique aux champs du frontend). */
export const virementSchema = z.object({
  identifiant: z.string().min(10).max(10),
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  iban: z.string().min(15, "IBAN invalide"),
  swift: z.string().min(8, "Code SWIFT/BIC invalide"),
  bankCode: z.string().min(1, "Le code banque est requis"),
  amount: z.number().positive("Le montant doit être supérieur à 0"),
  email: z.string().email("Adresse email invalide"),
  label: z.string().optional(),
  sourceAccountId: z.string().optional(),
});

export type VirementInput = z.infer<typeof virementSchema>;

/** Configuration SMTP via variables d'environnement. */
function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
    from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@lcl.fr",
  };
}


const LCL_LOGO_URL = "data:image/png;base64,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";

/**
 * Construit un e-mail de confirmation de virement professionnel :
 * logo LCL en en-tête, charte graphique LCL (bleu / jaune), tableau de
 * récapitulatif de la transaction et footer pro avec mentions légales.
 * Structure en tableaux imbriqués pour une compatibilité maximale avec
 * les clients e-mail (Gmail, Outlook, Apple Mail).
 */
function buildTransferEmailHtml(
  input: { firstName: string; lastName: string; iban: string; swift: string; amount: number; label?: string },
  user: DefaultUser,
): string {
  const montant = input.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
  const date = new Date().toLocaleString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });

  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head><meta charset="utf-8"></head>
  <body style="margin:0;padding:0;background-color:#f3f5f8;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f5f8;padding:24px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(31,38,56,0.10);">

          <!-- En-tête bleu avec logo LCL -->
          <tr>
            <td style="background-color:#004B87;padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${LCL_LOGO_URL}" alt="LCL" width="52" height="52" style="display:block;border-radius:50%;background-color:#ffffff;padding:6px;" />
                  </td>
                  <td style="vertical-align:middle;padding-left:16px;">
                    <div style="font-size:15px;font-weight:bold;color:#FFC629;letter-spacing:2px;">LCL</div>
                    <div style="font-size:12px;color:#d8e4f0;margin-top:2px;">Ma vie. Ma ville. Ma banque.</div>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <div style="font-size:11px;color:#d8e4f0;">Confirmation de virement</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Corps du message -->
          <tr>
            <td style="padding:32px 32px 8px 32px;">
              <p style="margin:0 0 8px 0;font-size:16px;color:#1f2638;">
                Bonjour <strong>${input.firstName} ${input.lastName}</strong>,
              </p>
              <p style="margin:0;font-size:14px;color:#5a6472;line-height:1.6;">
                Un virement vient d'être effectué en votre faveur. Vous trouverez ci-dessous le récapitulatif de la transaction.
              </p>
            </td>
          </tr>

          <!-- Tableau récapitulatif -->
          <tr>
            <td style="padding:16px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#f7f9fc;border-radius:10px;overflow:hidden;border:1px solid #e4e9f0;">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;width:42%;">Émetteur</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;font-weight:bold;">${user.prenom} ${user.nom}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">Montant crédité</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:18px;color:#1e7a34;font-weight:bold;">${montant}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">IBAN du compte destinataire</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;font-family:Consolas,monospace;letter-spacing:0.5px;">${input.iban}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">Code SWIFT/BIC</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;font-family:Consolas,monospace;letter-spacing:0.5px;">${input.swift}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">Libellé</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;">${input.label || "—"}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;font-size:13px;color:#7a8494;">Date de la transaction</td>
                  <td style="padding:14px 16px;font-size:14px;color:#1f2638;">${date}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Note de sécurité -->
          <tr>
            <td style="padding:4px 32px 28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#fef9ee;border:1px solid #f3e4bd;border-radius:10px;overflow:hidden;">
                <tr>
                  <td width="28" style="padding:12px 0 12px 14px;font-size:15px;color:#b4851a;font-weight:bold;">!</td>
                  <td style="padding:12px 14px;font-size:12px;color:#7a6a2e;line-height:1.5;">
                    La LCL ne vous demandera jamais vos codes d'accès, ni par e-mail ni par téléphone. En cas de doute, contactez votre agence ou votre conseiller.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer pro -->
          <tr>
            <td style="background-color:#1a2a4a;padding:26px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:14px;border-bottom:1px solid #2c3d61;">
                    <img src="${LCL_LOGO_URL}" alt="LCL" width="36" height="36" style="display:block;border-radius:50%;background-color:#ffffff;padding:4px;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:14px;font-size:11px;color:#a9b7ce;line-height:1.7;">
                    LCL – Le Crédit Lyonnais, Société Anonyme au capital de 2 040 000 000 euros<br />
                    9 rue des Deux-Gares, 75010 Paris, France<br />
                    Société de courtage et de crédit bancaire immatriculée à l'ORIAS<br />
                    Ce message a été envoyé automatiquement par le service de virement LCL.<br />
                    Veuillez ne pas répondre à cet e-mail. Pour toute question, contactez<br />
                    votre agence ou votre conseiller <strong style="color:#FFC629;">${user.manager}</strong>.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:12px;font-size:10px;color:#6c7c99;">
                    © ${new Date().getFullYear()} LCL – Tous droits réservés.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
}

/**
 * Génère un récépissé PDF professionnel de virement (charte LCL : bleu/jaune),
 * renvoyé au client en base64 pour téléchargement direct.
 */
function buildReceiptPdf(opts: {
  emetteur: string;
  beneficiaire: string;
  iban: string;
  swift: string;
  amount: number;
  label: string;
  sourceAccountType: string;
  sourceAccountNumber: string;
  manager: string;
}): Promise<string> {
  return new Promise((resolve) => {
    const doc = new PDFDoc({ size: "A4", margins: { top: 110, bottom: 100, left: 50, right: 50 }, bufferPages: true });
    const chunks: Buffer[] = [];
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.from(chunk));
        cb();
      },
      final(cb) {
        resolve(Buffer.concat(chunks).toString("base64"));
        cb();
      },
    });

    const BLUE = "#004B87";
    const YELLOW = "#FFC629";
    const DARK = "#1a2a4a";
    const GRAY = "#5a6472";

    // ---- En-tête bleu ----
    doc.rect(0, 0, 595, 92).fill(BLUE);
    doc.font("Helvetica-Bold").fontSize(24).fillColor(YELLOW).text("LCL", 50, 26, { width: 100, align: "left" });
    doc.font("Helvetica").fontSize(10).fillColor("#d8e4f0").text("Ma vie. Ma ville. Ma banque.", 108, 38);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#ffffff").text("RÉCÉPISSÉ DE VIREMENT", 330, 30, { width: 215, align: "right" });
    const ref = `LCL-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(Math.random() * 9000 + 1000)}`;
    doc.font("Helvetica").fontSize(9).fillColor("#d8e4f0").text(`Réf. ${ref}`, 330, 48, { width: 215, align: "right" });

    doc.moveDown(2);

    // ---- Titre et date ----
    const date = new Date().toLocaleString("fr-FR", {
      weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
    });
    doc.y = 120;
    doc.font("Helvetica-Bold").fontSize(15).fillColor(DARK).text(`Virement effectué — ${opts.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}`, { lineGap: 6 });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(`Date : ${date}`);
    doc.moveDown(1);

    // ---- Tableau récapitulatif ----
    doc.font("Helvetica").fontSize(10);
    const rows: [string, string, boolean][] = [
      ["Émetteur", opts.emetteur, true],
      ["Bénéficiaire", opts.beneficiaire, true],
      ["Montant viré", opts.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }), true],
      ["Compte débité", `${opts.sourceAccountType} n° ${opts.sourceAccountNumber}`, false],
      ["IBAN du destinataire", opts.iban, false],
      ["Code SWIFT/BIC", opts.swift, false],
      ["Libellé", opts.label, false],
    ];
    rows.forEach(([k, v], i) => {
      const fill = i === 2 ? "#eaf5ee" : "#f7f9fc";
      const rowY = doc.y;
      doc.rect(50, rowY, 495, 24).fill(fill);
      doc.rect(50, rowY, 495, 24).stroke("#e4e9f0");
      doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(k, 64, rowY + 8);
      doc.font(i === 2 ? "Helvetica-Bold" : "Helvetica").fontSize(i === 2 ? 12 : 10)
        .fillColor(i === 2 ? "#1e7a34" : DARK).text(v, 300, rowY + 8, { width: 230, align: "right" });
      doc.y = rowY + 26;
    });
    doc.moveDown(1);

    // ---- Note de sécurité ----
    const warnY = doc.y;
    doc.rect(50, warnY, 495, 40).fill("#fef9ee");
    doc.rect(50, warnY, 495, 40).stroke("#f3e4bd");
    doc.font("Helvetica-Bold").fontSize(14).fillColor("#b4851a").text("!", 64, warnY + 13);
    doc.font("Helvetica").fontSize(8.5).fillColor("#7a6a2e").text(
      "La LCL ne vous demandera jamais vos codes d'accès, ni par e-mail ni par téléphone. En cas de doute, contactez votre agence ou votre conseiller.",
      88, warnY + 12, { width: 440 }
    );
    doc.y = warnY + 40;

    // ---- Footer (en bas de la dernière page, sans débordement) ----
    const footerTop = 690; // les 3 lignes du texte (8pt + lineGap 5) finissent vers ~712, sous la limite 742
    const footerH = 842 - footerTop; // s'étend jusqu'au bas réel de la page (842)
    const pageContentH = footerTop - 2; // zone disponible avant le footer
    if (doc.y > pageContentH) {
      doc.addPage({ size: "A4", margins: { top: 20, bottom: 130, left: 50, right: 50 } });
      doc.y = 20;
    }
    doc.y = Math.max(doc.y, footerTop - 44); // remonte jusqu'à proximité du footer si contenu court
    doc.rect(0, footerTop, 595, footerH).fill(DARK);
    // Un seul appel text() multi-lignes : pdfkit crée une page par appel de text() dépassant la limite,
    // regrouper en un seul appel garantit que le footer tient sur la page 1.
    doc.font("Helvetica").fontSize(8).fillColor("#a9b7ce");
    doc.text(
      `LCL – Le Crédit Lyonnais, Société Anonyme au capital de 2 040 000 000 euros\n9 rue des Deux-Gares, 75010 Paris – Immatriculé à l'ORIAS – Document généré automatiquement\nConseiller de compte : ${opts.manager} – © ${new Date().getFullYear()} LCL – Tous droits réservés.`,
      50, footerTop + 12, { width: 495, align: "center", lineGap: 5 }
    );

    doc.pipe(sink);
    doc.end();
  });
}

/** Charge la base de comptes par défaut (fichier statique du client). */
async function loadUsers(): Promise<DefaultUser[]> {
  const mod = await import("./comptes");
  return mod.DEFAULT_USERS;
}

export const virementRouter = router({
  execute: publicProcedure.input(virementSchema).mutation(async ({ input }) => {
    const users = await loadUsers();
    const user = users.find((u) => u.identifiant === input.identifiant);
    if (!user) {
      throw new Error("Compte introuvable. Veuillez vous reconnecter.");
    }

    // Compte de prélèvement : celui choisi par le client, sinon le premier
    // compte courant/épargne disponible (hors Crédit/Assurance).
    let source = user.accounts.find((a) => a.id === input.sourceAccountId) ?? null;
    if (!source) {
      source = user.accounts.find((a) => a.type !== "Crédit" && a.type !== "Assurance") ?? null;
    }
    if (!source) {
      throw new Error("Aucun compte disponible pour le prélèvement.");
    }

    const currentBalance = source.balance;

    if (input.amount > currentBalance) {
      throw new Error("Solde insuffisant pour effectuer cette transaction.");
    }

    if (input.amount > 10000) {
      throw new Error(
        "LCL_AMOUNT_OVER_PLAFOND: Transaction refusée : montant supérieur au plafond autorisé (10 000 €)."
      );
    }

    // ---- Envoi de l'email SMTP au destinataire ----
    const smtp = getSmtpConfig();
    let emailSent = false;
    let emailError = "";

    // ---- Génération du récépissé PDF professionnel ----
    let receiptPdfBase64 = "";
    let receiptPdfBuffer: Buffer | undefined;
    try {
      receiptPdfBase64 = await buildReceiptPdf({
        emetteur: `${user.prenom} ${user.nom}`,
        beneficiaire: `${input.firstName} ${input.lastName}`,
        iban: input.iban,
        swift: input.swift,
        amount: input.amount,
        label: input.label || "—",
        sourceAccountType: source.type,
        sourceAccountNumber: source.number,
        manager: user.manager,
      });
      if (receiptPdfBase64) {
        receiptPdfBuffer = Buffer.from(receiptPdfBase64, "base64");
      }
    } catch (err) {
      console.error("[PDF] Échec de génération du récépissé :", err);
    }

    if (smtp.host) {
      try {
        const transporter = nodemailer.createTransport(smtp);
        const attachmentEntry = receiptPdfBuffer
          ? {
              filename: (() => {
                const safeLabel = (input.label || "virement")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")
                  .slice(0, 30);
                void safeLabel;
                const now = new Date();
                const pad = (n: number) => String(n).padStart(2, "0");
                const dateStr = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
                  now.getDate()
                )}-${pad(now.getHours())}${pad(now.getMinutes())}`;
                const amountStr = input.amount.toFixed(2).replace(".", ",");
                return `recu-virement-${amountStr}EUR-${dateStr}.pdf`;
              })(),
              content: receiptPdfBuffer,
              contentType: "application/pdf",
              encoding: "base64" as const,
            }
          : undefined;
        await transporter.sendMail({
          from: smtp.from,
          to: input.email,
          subject: `Confirmation de virement reçu — ${input.label || "virement"}`,
          html: buildTransferEmailHtml(input, user),
          attachments: attachmentEntry ? [attachmentEntry] : [],
        });
        emailSent = true;
      } catch (err) {
        console.error("[SMTP] Échec d'envoi :", err);
        emailError = err instanceof Error ? err.message : String(err);
      }
    } else {
      emailError = "Serveur SMTP non configuré (variables SMTP manquantes).";
    }

    // Le solde est mis à jour côté client via le retour ; le serveur renvoie
    // le solde avant et après déduction pour cohérence.
    // ---- Persistance de l'historique des virements ----
    const transferRecord = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toISOString(),
      firstName: input.firstName,
      lastName: input.lastName,
      iban: input.iban,
      amount: input.amount,
      label: input.label || "",
      emailSent,
      status: "Effectué" as const,
      sourceAccountId: source.id,
      sourceAccountType: source.type,
      sourceAccountNumber: source.number,
      fullName: `${user.prenom} ${user.nom}`,
    };

    return {
      success: true,
      emailSent,
      emailError,
      previousBalance: currentBalance,
      newBalance: Math.round((currentBalance - input.amount) * 100) / 100,
      amount: input.amount,
      fullName: `${user.prenom} ${user.nom}`,
      sourceAccountId: source.id,
      sourceAccountType: source.type,
      sourceAccountNumber: source.number,
      transfer: transferRecord,
      receiptPdfBase64,
    } as const;
  }),
});
