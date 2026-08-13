// Fichier généré — 100 comptes par défaut (inspiré de 201.ts)

export type Account = {
  id: string;
  type: string;
  number: string;
  balance: number;
  icon: string;
};

export type Transaction = {
  id: number;
  type: string;
  reference: string;
  date: string;
  amount: number;
  status: string;
  category: string;
};

export type DefaultUser = {
  id: string;
  identifiant: string;
  codepersonnel: string;
  nom: string;
  prenom: string;
  location: string;
  manager: string;
  status: string;
  lastConnection: string;
  accounts: Account[];
  transactions: Transaction[];
  card: {
    number: string;
    holder: string;
    expiry: string;
    isBlocked: boolean;
    foreignPayments: boolean;
    limit: number;
    withdrawalLimit: number;
  };
  rib: {
    bankName: string;
    bankCode: string;
    branchCode: string;
    accountNumber: string;
    key: string;
    iban: string;
    swift: string;
  };
};

export const DEFAULT_USERS: DefaultUser[] = [
  {
    "id": "user_000",
    "identifiant": "1000000000",
    "codepersonnel": "101234",
    "nom": "Dupont",
    "prenom": "Jean",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2200",
        "balance": 1000000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5400",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8800",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6600",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400000",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400000",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8800 2200",
      "holder": "Jean Dupont",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230000",
      "key": "10",
      "iban": "FR29 3000 4100 54350 1230000 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_001",
    "identifiant": "1000000001",
    "codepersonnel": "101235",
    "nom": "Martin",
    "prenom": "Marie",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2201",
        "balance": 998750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5401",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8801",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6601",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400001",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400001",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8801 2201",
      "holder": "Marie Martin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230001",
      "key": "10",
      "iban": "FR36 3000 4100 54350 1230001 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_002",
    "identifiant": "1000000002",
    "codepersonnel": "101236",
    "nom": "Bernard",
    "prenom": "Pierre",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2202",
        "balance": 997500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5402",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8802",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6602",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400002",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400002",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8802 2202",
      "holder": "Pierre Bernard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230002",
      "key": "10",
      "iban": "FR43 3000 4100 54350 1230002 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_003",
    "identifiant": "1000000003",
    "codepersonnel": "101237",
    "nom": "Thomas",
    "prenom": "Sophie",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2203",
        "balance": 996250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5403",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8803",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6603",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400003",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400003",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8803 2203",
      "holder": "Sophie Thomas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230003",
      "key": "10",
      "iban": "FR50 3000 4100 54350 1230003 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_004",
    "identifiant": "1000000004",
    "codepersonnel": "101238",
    "nom": "Robert",
    "prenom": "Lucas",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2204",
        "balance": 995000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5404",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8804",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6604",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400004",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400004",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8804 2204",
      "holder": "Lucas Robert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230004",
      "key": "10",
      "iban": "FR57 3000 4100 54350 1230004 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_005",
    "identifiant": "1000000005",
    "codepersonnel": "101239",
    "nom": "Petit",
    "prenom": "Camille",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2205",
        "balance": 993750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5405",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8805",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6605",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400005",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400005",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8805 2205",
      "holder": "Camille Petit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230005",
      "key": "10",
      "iban": "FR64 3000 4100 54350 1230005 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_006",
    "identifiant": "1000000006",
    "codepersonnel": "101240",
    "nom": "Durand",
    "prenom": "Julien",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2206",
        "balance": 992500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5406",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8806",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6606",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400006",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400006",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8806 2206",
      "holder": "Julien Durand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230006",
      "key": "10",
      "iban": "FR71 3000 4100 54350 1230006 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_007",
    "identifiant": "1000000007",
    "codepersonnel": "101241",
    "nom": "Leroy",
    "prenom": "Léa",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2207",
        "balance": 991250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5407",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8807",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6607",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400007",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400007",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8807 2207",
      "holder": "Léa Leroy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230007",
      "key": "10",
      "iban": "FR78 3000 4100 54350 1230007 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_008",
    "identifiant": "1000000008",
    "codepersonnel": "101242",
    "nom": "Moreau",
    "prenom": "Thomas",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2208",
        "balance": 990000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5408",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8808",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6608",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400008",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400008",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8808 2208",
      "holder": "Thomas Moreau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230008",
      "key": "10",
      "iban": "FR85 3000 4100 54350 1230008 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_009",
    "identifiant": "1000000009",
    "codepersonnel": "101243",
    "nom": "Simon",
    "prenom": "Emma",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2209",
        "balance": 988750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5409",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8809",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6609",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400009",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400009",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8809 2209",
      "holder": "Emma Simon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230009",
      "key": "10",
      "iban": "FR92 3000 4100 54350 1230009 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_010",
    "identifiant": "1000000010",
    "codepersonnel": "101244",
    "nom": "Laurent",
    "prenom": "Nicolas",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2210",
        "balance": 987500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5410",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8810",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6610",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400010",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400010",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8810 2210",
      "holder": "Nicolas Laurent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230010",
      "key": "10",
      "iban": "FR02 3000 4100 54350 1230010 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_011",
    "identifiant": "1000000011",
    "codepersonnel": "101245",
    "nom": "Lefebvre",
    "prenom": "Chloé",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2211",
        "balance": 986250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5411",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8811",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6611",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400011",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400011",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8811 2211",
      "holder": "Chloé Lefebvre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230011",
      "key": "10",
      "iban": "FR09 3000 4100 54350 1230011 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_012",
    "identifiant": "1000000012",
    "codepersonnel": "101246",
    "nom": "Michel",
    "prenom": "Alexandre",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2212",
        "balance": 985000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5412",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8812",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6612",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400012",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400012",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8812 2212",
      "holder": "Alexandre Michel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230012",
      "key": "10",
      "iban": "FR16 3000 4100 54350 1230012 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_013",
    "identifiant": "1000000013",
    "codepersonnel": "101247",
    "nom": "Garcia",
    "prenom": "Manon",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2213",
        "balance": 983750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5413",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8813",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6613",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400013",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400013",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8813 2213",
      "holder": "Manon Garcia",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230013",
      "key": "10",
      "iban": "FR23 3000 4100 54350 1230013 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_014",
    "identifiant": "1000000014",
    "codepersonnel": "101248",
    "nom": "David",
    "prenom": "Antoine",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2214",
        "balance": 982500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5414",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8814",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6614",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400014",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400014",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8814 2214",
      "holder": "Antoine David",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230014",
      "key": "10",
      "iban": "FR30 3000 4100 54350 1230014 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_015",
    "identifiant": "1000000015",
    "codepersonnel": "101249",
    "nom": "Bertrand",
    "prenom": "Sarah",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2215",
        "balance": 981250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5415",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8815",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6615",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400015",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400015",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8815 2215",
      "holder": "Sarah Bertrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230015",
      "key": "10",
      "iban": "FR37 3000 4100 54350 1230015 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_016",
    "identifiant": "1000000016",
    "codepersonnel": "101250",
    "nom": "Roux",
    "prenom": "Maxime",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2216",
        "balance": 980000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5416",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8816",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6616",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400016",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400016",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8816 2216",
      "holder": "Maxime Roux",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230016",
      "key": "10",
      "iban": "FR44 3000 4100 54350 1230016 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_017",
    "identifiant": "1000000017",
    "codepersonnel": "101251",
    "nom": "Vincent",
    "prenom": "Laura",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2217",
        "balance": 978750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5417",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8817",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6617",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400017",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400017",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8817 2217",
      "holder": "Laura Vincent",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230017",
      "key": "10",
      "iban": "FR51 3000 4100 54350 1230017 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_018",
    "identifiant": "1000000018",
    "codepersonnel": "101252",
    "nom": "Fournier",
    "prenom": "Romain",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2218",
        "balance": 977500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5418",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8818",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6618",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400018",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400018",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8818 2218",
      "holder": "Romain Fournier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230018",
      "key": "10",
      "iban": "FR58 3000 4100 54350 1230018 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_019",
    "identifiant": "1000000019",
    "codepersonnel": "101253",
    "nom": "Morel",
    "prenom": "Julie",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2219",
        "balance": 976250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5419",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8819",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6619",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400019",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400019",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8819 2219",
      "holder": "Julie Morel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230019",
      "key": "10",
      "iban": "FR65 3000 4100 54350 1230019 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_020",
    "identifiant": "1000000020",
    "codepersonnel": "101254",
    "nom": "Girard",
    "prenom": "Florian",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2220",
        "balance": 975000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5420",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8820",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6620",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400020",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400020",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8820 2220",
      "holder": "Florian Girard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230020",
      "key": "10",
      "iban": "FR72 3000 4100 54350 1230020 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_021",
    "identifiant": "1000000021",
    "codepersonnel": "101255",
    "nom": "Andre",
    "prenom": "Alice",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2221",
        "balance": 973750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5421",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8821",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6621",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400021",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400021",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8821 2221",
      "holder": "Alice Andre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230021",
      "key": "10",
      "iban": "FR79 3000 4100 54350 1230021 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_022",
    "identifiant": "1000000022",
    "codepersonnel": "101256",
    "nom": "Mercier",
    "prenom": "Damien",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2222",
        "balance": 972500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5422",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8822",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6622",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400022",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400022",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8822 2222",
      "holder": "Damien Mercier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230022",
      "key": "10",
      "iban": "FR86 3000 4100 54350 1230022 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_023",
    "identifiant": "1000000023",
    "codepersonnel": "101257",
    "nom": "Blanc",
    "prenom": "Clara",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2223",
        "balance": 971250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5423",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8823",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6623",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400023",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400023",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8823 2223",
      "holder": "Clara Blanc",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230023",
      "key": "10",
      "iban": "FR93 3000 4100 54350 1230023 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_024",
    "identifiant": "1000000024",
    "codepersonnel": "101258",
    "nom": "Guerin",
    "prenom": "Vincent",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2224",
        "balance": 970000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5424",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8824",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6624",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400024",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400024",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8824 2224",
      "holder": "Vincent Guerin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230024",
      "key": "10",
      "iban": "FR03 3000 4100 54350 1230024 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_025",
    "identifiant": "1000000025",
    "codepersonnel": "101259",
    "nom": "Boyer",
    "prenom": "Louise",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2225",
        "balance": 968750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5425",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8825",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6625",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400025",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400025",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8825 2225",
      "holder": "Louise Boyer",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230025",
      "key": "10",
      "iban": "FR10 3000 4100 54350 1230025 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_026",
    "identifiant": "1000000026",
    "codepersonnel": "101260",
    "nom": "Garnier",
    "prenom": "Benoît",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2226",
        "balance": 967500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5426",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8826",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6626",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400026",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400026",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8826 2226",
      "holder": "Benoît Garnier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230026",
      "key": "10",
      "iban": "FR17 3000 4100 54350 1230026 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_027",
    "identifiant": "1000000027",
    "codepersonnel": "101261",
    "nom": "Chevalier",
    "prenom": "Margot",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2227",
        "balance": 966250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5427",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8827",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6627",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400027",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400027",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8827 2227",
      "holder": "Margot Chevalier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230027",
      "key": "10",
      "iban": "FR24 3000 4100 54350 1230027 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_028",
    "identifiant": "1000000028",
    "codepersonnel": "101262",
    "nom": "Francois",
    "prenom": "Sébastien",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2228",
        "balance": 965000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5428",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8828",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6628",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400028",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400028",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8828 2228",
      "holder": "Sébastien Francois",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230028",
      "key": "10",
      "iban": "FR31 3000 4100 54350 1230028 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_029",
    "identifiant": "1000000029",
    "codepersonnel": "101263",
    "nom": "Legrand",
    "prenom": "Océane",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2229",
        "balance": 963750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5429",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8829",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6629",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400029",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400029",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8829 2229",
      "holder": "Océane Legrand",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230029",
      "key": "10",
      "iban": "FR38 3000 4100 54350 1230029 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_030",
    "identifiant": "1000000030",
    "codepersonnel": "101264",
    "nom": "Gauthier",
    "prenom": "Frédéric",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2230",
        "balance": 962500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5430",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8830",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6630",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400030",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400030",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8830 2230",
      "holder": "Frédéric Gauthier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230030",
      "key": "10",
      "iban": "FR45 3000 4100 54350 1230030 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_031",
    "identifiant": "1000000031",
    "codepersonnel": "101265",
    "nom": "Lambert",
    "prenom": "Céline",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2231",
        "balance": 961250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5431",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8831",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6631",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400031",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400031",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8831 2231",
      "holder": "Céline Lambert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230031",
      "key": "10",
      "iban": "FR52 3000 4100 54350 1230031 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_032",
    "identifiant": "1000000032",
    "codepersonnel": "101266",
    "nom": "Bonnet",
    "prenom": "Grégory",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2232",
        "balance": 960000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5432",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8832",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6632",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400032",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400032",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8832 2232",
      "holder": "Grégory Bonnet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230032",
      "key": "10",
      "iban": "FR59 3000 4100 54350 1230032 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_033",
    "identifiant": "1000000033",
    "codepersonnel": "101267",
    "nom": "Dubois",
    "prenom": "Aurélie",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2233",
        "balance": 958750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5433",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8833",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6633",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400033",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400033",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8833 2233",
      "holder": "Aurélie Dubois",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230033",
      "key": "10",
      "iban": "FR66 3000 4100 54350 1230033 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_034",
    "identifiant": "1000000034",
    "codepersonnel": "101268",
    "nom": "Meunier",
    "prenom": "Cédric",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2234",
        "balance": 957500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5434",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8834",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6634",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400034",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400034",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8834 2234",
      "holder": "Cédric Meunier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230034",
      "key": "10",
      "iban": "FR73 3000 4100 54350 1230034 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_035",
    "identifiant": "1000000035",
    "codepersonnel": "101269",
    "nom": "Lemaire",
    "prenom": "Élodie",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2235",
        "balance": 956250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5435",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8835",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6635",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400035",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400035",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8835 2235",
      "holder": "Élodie Lemaire",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230035",
      "key": "10",
      "iban": "FR80 3000 4100 54350 1230035 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_036",
    "identifiant": "1000000036",
    "codepersonnel": "101270",
    "nom": "Noel",
    "prenom": "Stéphane",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2236",
        "balance": 955000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5436",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8836",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6636",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400036",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400036",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8836 2236",
      "holder": "Stéphane Noel",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230036",
      "key": "10",
      "iban": "FR87 3000 4100 54350 1230036 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_037",
    "identifiant": "1000000037",
    "codepersonnel": "101271",
    "nom": "Meyer",
    "prenom": "Nathalie",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2237",
        "balance": 953750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5437",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8837",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6637",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400037",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400037",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8837 2237",
      "holder": "Nathalie Meyer",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230037",
      "key": "10",
      "iban": "FR94 3000 4100 54350 1230037 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_038",
    "identifiant": "1000000038",
    "codepersonnel": "101272",
    "nom": "Dufour",
    "prenom": "Christophe",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2238",
        "balance": 952500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5438",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8838",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6638",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400038",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400038",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8838 2238",
      "holder": "Christophe Dufour",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230038",
      "key": "10",
      "iban": "FR04 3000 4100 54350 1230038 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_039",
    "identifiant": "1000000039",
    "codepersonnel": "101273",
    "nom": "Meier",
    "prenom": "Véronique",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2239",
        "balance": 951250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5439",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8839",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6639",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400039",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400039",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8839 2239",
      "holder": "Véronique Meier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230039",
      "key": "10",
      "iban": "FR11 3000 4100 54350 1230039 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_040",
    "identifiant": "1000000040",
    "codepersonnel": "101274",
    "nom": "Rousseau",
    "prenom": "Pascal",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2240",
        "balance": 950000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5440",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8840",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6640",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400040",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400040",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8840 2240",
      "holder": "Pascal Rousseau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230040",
      "key": "10",
      "iban": "FR18 3000 4100 54350 1230040 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_041",
    "identifiant": "1000000041",
    "codepersonnel": "101275",
    "nom": "Fontaine",
    "prenom": "Sandrine",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2241",
        "balance": 948750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5441",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8841",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6641",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400041",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400041",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8841 2241",
      "holder": "Sandrine Fontaine",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230041",
      "key": "10",
      "iban": "FR25 3000 4100 54350 1230041 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_042",
    "identifiant": "1000000042",
    "codepersonnel": "101276",
    "nom": "Rousseau",
    "prenom": "Laurent",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2242",
        "balance": 947500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5442",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8842",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6642",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400042",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400042",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8842 2242",
      "holder": "Laurent Rousseau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230042",
      "key": "10",
      "iban": "FR32 3000 4100 54350 1230042 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_043",
    "identifiant": "1000000043",
    "codepersonnel": "101277",
    "nom": "Nicolas",
    "prenom": "Isabelle",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2243",
        "balance": 946250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5443",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8843",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6643",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400043",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400043",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8843 2243",
      "holder": "Isabelle Nicolas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230043",
      "key": "10",
      "iban": "FR39 3000 4100 54350 1230043 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_044",
    "identifiant": "1000000044",
    "codepersonnel": "101278",
    "nom": "Robin",
    "prenom": "Éric",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2244",
        "balance": 945000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5444",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8844",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6644",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400044",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400044",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8844 2244",
      "holder": "Éric Robin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230044",
      "key": "10",
      "iban": "FR46 3000 4100 54350 1230044 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_045",
    "identifiant": "1000000045",
    "codepersonnel": "101279",
    "nom": "Masson",
    "prenom": "Sandrine",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2245",
        "balance": 943750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5445",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8845",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6645",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400045",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400045",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8845 2245",
      "holder": "Sandrine Masson",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230045",
      "key": "10",
      "iban": "FR53 3000 4100 54350 1230045 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_046",
    "identifiant": "1000000046",
    "codepersonnel": "101280",
    "nom": "Sanchez",
    "prenom": "Jérôme",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2246",
        "balance": 942500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5446",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8846",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6646",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400046",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400046",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8846 2246",
      "holder": "Jérôme Sanchez",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230046",
      "key": "10",
      "iban": "FR60 3000 4100 54350 1230046 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_047",
    "identifiant": "1000000047",
    "codepersonnel": "101281",
    "nom": "Gerard",
    "prenom": "Cécile",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2247",
        "balance": 941250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5447",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8847",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6647",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400047",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400047",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8847 2247",
      "holder": "Cécile Gerard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230047",
      "key": "10",
      "iban": "FR67 3000 4100 54350 1230047 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_048",
    "identifiant": "1000000048",
    "codepersonnel": "101282",
    "nom": "Roche",
    "prenom": "Matthieu",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2248",
        "balance": 940000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5448",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8848",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6648",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400048",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400048",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8848 2248",
      "holder": "Matthieu Roche",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230048",
      "key": "10",
      "iban": "FR74 3000 4100 54350 1230048 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_049",
    "identifiant": "1000000049",
    "codepersonnel": "101283",
    "nom": "Roy",
    "prenom": "Pauline",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2249",
        "balance": 938750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5449",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8849",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6649",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400049",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400049",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8849 2249",
      "holder": "Pauline Roy",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230049",
      "key": "10",
      "iban": "FR81 3000 4100 54350 1230049 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_050",
    "identifiant": "1000000050",
    "codepersonnel": "101284",
    "nom": "Picard",
    "prenom": "Quentin",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2250",
        "balance": 937500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5450",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8850",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6650",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400050",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400050",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8850 2250",
      "holder": "Quentin Picard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230050",
      "key": "10",
      "iban": "FR88 3000 4100 54350 1230050 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_051",
    "identifiant": "1000000051",
    "codepersonnel": "101285",
    "nom": "Sabatier",
    "prenom": "Charlotte",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2251",
        "balance": 936250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5451",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8851",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6651",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400051",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400051",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8851 2251",
      "holder": "Charlotte Sabatier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230051",
      "key": "10",
      "iban": "FR95 3000 4100 54350 1230051 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_052",
    "identifiant": "1000000052",
    "codepersonnel": "101286",
    "nom": "Faure",
    "prenom": "Alexis",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2252",
        "balance": 935000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5452",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8852",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6652",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400052",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400052",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8852 2252",
      "holder": "Alexis Faure",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230052",
      "key": "10",
      "iban": "FR05 3000 4100 54350 1230052 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_053",
    "identifiant": "1000000053",
    "codepersonnel": "101287",
    "nom": "Aubin",
    "prenom": "Eva",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2253",
        "balance": 933750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5453",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8853",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6653",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400053",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400053",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8853 2253",
      "holder": "Eva Aubin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230053",
      "key": "10",
      "iban": "FR12 3000 4100 54350 1230053 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_054",
    "identifiant": "1000000054",
    "codepersonnel": "101288",
    "nom": "Vidal",
    "prenom": "Hugo",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2254",
        "balance": 932500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5454",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8854",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6654",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400054",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400054",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8854 2254",
      "holder": "Hugo Vidal",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230054",
      "key": "10",
      "iban": "FR19 3000 4100 54350 1230054 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_055",
    "identifiant": "1000000055",
    "codepersonnel": "101289",
    "nom": "Baron",
    "prenom": "Inès",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2255",
        "balance": 931250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5455",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8855",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6655",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400055",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400055",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8855 2255",
      "holder": "Inès Baron",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230055",
      "key": "10",
      "iban": "FR26 3000 4100 54350 1230055 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_056",
    "identifiant": "1000000056",
    "codepersonnel": "101290",
    "nom": "Benoit",
    "prenom": "Léo",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2256",
        "balance": 930000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5456",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8856",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6656",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400056",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400056",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8856 2256",
      "holder": "Léo Benoit",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230056",
      "key": "10",
      "iban": "FR33 3000 4100 54350 1230056 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_057",
    "identifiant": "1000000057",
    "codepersonnel": "101291",
    "nom": "Aubert",
    "prenom": "Jade",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2257",
        "balance": 928750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5457",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8857",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6657",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400057",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400057",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8857 2257",
      "holder": "Jade Aubert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230057",
      "key": "10",
      "iban": "FR40 3000 4100 54350 1230057 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_058",
    "identifiant": "1000000058",
    "codepersonnel": "101292",
    "nom": "Boucher",
    "prenom": "Nathan",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2258",
        "balance": 927500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5458",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8858",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6658",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400058",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400058",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8858 2258",
      "holder": "Nathan Boucher",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230058",
      "key": "10",
      "iban": "FR47 3000 4100 54350 1230058 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_059",
    "identifiant": "1000000059",
    "codepersonnel": "101293",
    "nom": "Colin",
    "prenom": "Lola",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2259",
        "balance": 926250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5459",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8859",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6659",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400059",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400059",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8859 2259",
      "holder": "Lola Colin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230059",
      "key": "10",
      "iban": "FR54 3000 4100 54350 1230059 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_060",
    "identifiant": "1000000060",
    "codepersonnel": "101294",
    "nom": "Renard",
    "prenom": "Gabriel",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2260",
        "balance": 925000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5460",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8860",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6660",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400060",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400060",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8860 2260",
      "holder": "Gabriel Renard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230060",
      "key": "10",
      "iban": "FR61 3000 4100 54350 1230060 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_061",
    "identifiant": "1000000061",
    "codepersonnel": "101295",
    "nom": "Deschamps",
    "prenom": "Anna",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2261",
        "balance": 923750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5461",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8861",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6661",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400061",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400061",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8861 2261",
      "holder": "Anna Deschamps",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230061",
      "key": "10",
      "iban": "FR68 3000 4100 54350 1230061 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_062",
    "identifiant": "1000000062",
    "codepersonnel": "101296",
    "nom": "Humbert",
    "prenom": "Louis",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2262",
        "balance": 922500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5462",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8862",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6662",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400062",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400062",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8862 2262",
      "holder": "Louis Humbert",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230062",
      "key": "10",
      "iban": "FR75 3000 4100 54350 1230062 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_063",
    "identifiant": "1000000063",
    "codepersonnel": "101297",
    "nom": "Perrin",
    "prenom": "Zoé",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2263",
        "balance": 921250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5463",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8863",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6663",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400063",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400063",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8863 2263",
      "holder": "Zoé Perrin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230063",
      "key": "10",
      "iban": "FR82 3000 4100 54350 1230063 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_064",
    "identifiant": "1000000064",
    "codepersonnel": "101298",
    "nom": "Morin",
    "prenom": "Arthur",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2264",
        "balance": 920000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5464",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8864",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6664",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400064",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400064",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8864 2264",
      "holder": "Arthur Morin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230064",
      "key": "10",
      "iban": "FR89 3000 4100 54350 1230064 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_065",
    "identifiant": "1000000065",
    "codepersonnel": "101299",
    "nom": "Mathieu",
    "prenom": "Ambre",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2265",
        "balance": 918750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5465",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8865",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6665",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400065",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400065",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8865 2265",
      "holder": "Ambre Mathieu",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230065",
      "key": "10",
      "iban": "FR96 3000 4100 54350 1230065 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_066",
    "identifiant": "1000000066",
    "codepersonnel": "101300",
    "nom": "Clement",
    "prenom": "Victor",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2266",
        "balance": 917500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5466",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8866",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6666",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400066",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400066",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8866 2266",
      "holder": "Victor Clement",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230066",
      "key": "10",
      "iban": "FR06 3000 4100 54350 1230066 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_067",
    "identifiant": "1000000067",
    "codepersonnel": "101301",
    "nom": "Gallet",
    "prenom": "Nina",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2267",
        "balance": 916250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5467",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8867",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6667",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400067",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400067",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8867 2267",
      "holder": "Nina Gallet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230067",
      "key": "10",
      "iban": "FR13 3000 4100 54350 1230067 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_068",
    "identifiant": "1000000068",
    "codepersonnel": "101302",
    "nom": "Brun",
    "prenom": "Adam",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2268",
        "balance": 915000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5468",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8868",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6668",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400068",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400068",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8868 2268",
      "holder": "Adam Brun",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230068",
      "key": "10",
      "iban": "FR20 3000 4100 54350 1230068 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_069",
    "identifiant": "1000000069",
    "codepersonnel": "101303",
    "nom": "Adam",
    "prenom": "Romane",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2269",
        "balance": 913750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5469",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8869",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6669",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400069",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400069",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8869 2269",
      "holder": "Romane Adam",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230069",
      "key": "10",
      "iban": "FR27 3000 4100 54350 1230069 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_070",
    "identifiant": "1000000070",
    "codepersonnel": "101304",
    "nom": "Lacroix",
    "prenom": "Paul",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2270",
        "balance": 912500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5470",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8870",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6670",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400070",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400070",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8870 2270",
      "holder": "Paul Lacroix",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230070",
      "key": "10",
      "iban": "FR34 3000 4100 54350 1230070 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_071",
    "identifiant": "1000000071",
    "codepersonnel": "101305",
    "nom": "Renault",
    "prenom": "Sarah",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2271",
        "balance": 911250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5471",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8871",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6671",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400071",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400071",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8871 2271",
      "holder": "Sarah Renault",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230071",
      "key": "10",
      "iban": "FR41 3000 4100 54350 1230071 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_072",
    "identifiant": "1000000072",
    "codepersonnel": "101306",
    "nom": "Jacquet",
    "prenom": "Samuel",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2272",
        "balance": 910000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5472",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8872",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6672",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400072",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400072",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8872 2272",
      "holder": "Samuel Jacquet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230072",
      "key": "10",
      "iban": "FR48 3000 4100 54350 1230072 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_073",
    "identifiant": "1000000073",
    "codepersonnel": "101307",
    "nom": "Riviere",
    "prenom": "Agathe",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2273",
        "balance": 908750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5473",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8873",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6673",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400073",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400073",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8873 2273",
      "holder": "Agathe Riviere",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230073",
      "key": "10",
      "iban": "FR55 3000 4100 54350 1230073 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_074",
    "identifiant": "1000000074",
    "codepersonnel": "101308",
    "nom": "Lucas",
    "prenom": "Théo",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2274",
        "balance": 907500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5474",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8874",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6674",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400074",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400074",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8874 2274",
      "holder": "Théo Lucas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230074",
      "key": "10",
      "iban": "FR62 3000 4100 54350 1230074 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_075",
    "identifiant": "1000000075",
    "codepersonnel": "101309",
    "nom": "Brunet",
    "prenom": "Iris",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2275",
        "balance": 906250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5475",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8875",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6675",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400075",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400075",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8875 2275",
      "holder": "Iris Brunet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230075",
      "key": "10",
      "iban": "FR69 3000 4100 54350 1230075 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_076",
    "identifiant": "1000000076",
    "codepersonnel": "101310",
    "nom": "Gaillard",
    "prenom": "Eliott",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2276",
        "balance": 905000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5476",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8876",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6676",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400076",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400076",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8876 2276",
      "holder": "Eliott Gaillard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230076",
      "key": "10",
      "iban": "FR76 3000 4100 54350 1230076 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_077",
    "identifiant": "1000000077",
    "codepersonnel": "101311",
    "nom": "Barbier",
    "prenom": "Rose",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2277",
        "balance": 903750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5477",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8877",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6677",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400077",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400077",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8877 2277",
      "holder": "Rose Barbier",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230077",
      "key": "10",
      "iban": "FR83 3000 4100 54350 1230077 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_078",
    "identifiant": "1000000078",
    "codepersonnel": "101312",
    "nom": "Arnaud",
    "prenom": "Timéo",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2278",
        "balance": 902500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5478",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8878",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6678",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400078",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400078",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8878 2278",
      "holder": "Timéo Arnaud",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230078",
      "key": "10",
      "iban": "FR90 3000 4100 54350 1230078 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_079",
    "identifiant": "1000000079",
    "codepersonnel": "101313",
    "nom": "Martinez",
    "prenom": "Luna",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2279",
        "balance": 901250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5479",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8879",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6679",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400079",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400079",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8879 2279",
      "holder": "Luna Martinez",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230079",
      "key": "10",
      "iban": "FR97 3000 4100 54350 1230079 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_080",
    "identifiant": "1000000080",
    "codepersonnel": "101314",
    "nom": "Gerard",
    "prenom": "Noah",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2280",
        "balance": 900000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5480",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8880",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6680",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400080",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400080",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8880 2280",
      "holder": "Noah Gerard",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230080",
      "key": "10",
      "iban": "FR07 3000 4100 54350 1230080 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_081",
    "identifiant": "1000000081",
    "codepersonnel": "101315",
    "nom": "Roche",
    "prenom": "Apolline",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2281",
        "balance": 898750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5481",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8881",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6681",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400081",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400081",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8881 2281",
      "holder": "Apolline Roche",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230081",
      "key": "10",
      "iban": "FR14 3000 4100 54350 1230081 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_082",
    "identifiant": "1000000082",
    "codepersonnel": "101316",
    "nom": "Leduc",
    "prenom": "Marius",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2282",
        "balance": 897500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5482",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8882",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6682",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400082",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400082",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8882 2282",
      "holder": "Marius Leduc",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230082",
      "key": "10",
      "iban": "FR21 3000 4100 54350 1230082 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_083",
    "identifiant": "1000000083",
    "codepersonnel": "101317",
    "nom": "Bazin",
    "prenom": "Lou",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2283",
        "balance": 896250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5483",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8883",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6683",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400083",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400083",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8883 2283",
      "holder": "Lou Bazin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230083",
      "key": "10",
      "iban": "FR28 3000 4100 54350 1230083 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_084",
    "identifiant": "1000000084",
    "codepersonnel": "101318",
    "nom": "Huet",
    "prenom": "Aubin",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2284",
        "balance": 895000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5484",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8884",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6684",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400084",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400084",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8884 2284",
      "holder": "Aubin Huet",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230084",
      "key": "10",
      "iban": "FR35 3000 4100 54350 1230084 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_085",
    "identifiant": "1000000085",
    "codepersonnel": "101319",
    "nom": "Pineau",
    "prenom": "Maëlys",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2285",
        "balance": 893750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5485",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8885",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6685",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400085",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400085",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8885 2285",
      "holder": "Maëlys Pineau",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230085",
      "key": "10",
      "iban": "FR42 3000 4100 54350 1230085 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_086",
    "identifiant": "1000000086",
    "codepersonnel": "101320",
    "nom": "Landais",
    "prenom": "Antonin",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2286",
        "balance": 892500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5486",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8886",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6686",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400086",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400086",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8886 2286",
      "holder": "Antonin Landais",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230086",
      "key": "10",
      "iban": "FR49 3000 4100 54350 1230086 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_087",
    "identifiant": "1000000087",
    "codepersonnel": "101321",
    "nom": "Hamon",
    "prenom": "Alix",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2287",
        "balance": 891250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5487",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8887",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6687",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400087",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400087",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8887 2287",
      "holder": "Alix Hamon",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230087",
      "key": "10",
      "iban": "FR56 3000 4100 54350 1230087 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_088",
    "identifiant": "1000000088",
    "codepersonnel": "101322",
    "nom": "Vasseur",
    "prenom": "Baptiste",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2288",
        "balance": 890000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5488",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8888",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6688",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400088",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400088",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8888 2288",
      "holder": "Baptiste Vasseur",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230088",
      "key": "10",
      "iban": "FR63 3000 4100 54350 1230088 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_089",
    "identifiant": "1000000089",
    "codepersonnel": "101323",
    "nom": "Leclerc",
    "prenom": "Capucine",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2289",
        "balance": 888750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5489",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8889",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6689",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400089",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400089",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8889 2289",
      "holder": "Capucine Leclerc",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230089",
      "key": "10",
      "iban": "FR70 3000 4100 54350 1230089 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_090",
    "identifiant": "1000000090",
    "codepersonnel": "101324",
    "nom": "Renaud",
    "prenom": "Clément",
    "location": "France",
    "manager": "Arnaud Leroy",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2290",
        "balance": 887500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5490",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8890",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6690",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400090",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400090",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8890 2290",
      "holder": "Clément Renaud",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230090",
      "key": "10",
      "iban": "FR77 3000 4100 54350 1230090 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_091",
    "identifiant": "1000000091",
    "codepersonnel": "101325",
    "nom": "Dumas",
    "prenom": "Garance",
    "location": "France",
    "manager": "Sophie Bernard",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2291",
        "balance": 886250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5491",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8891",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6691",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400091",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400091",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8891 2291",
      "holder": "Garance Dumas",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230091",
      "key": "10",
      "iban": "FR84 3000 4100 54350 1230091 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_092",
    "identifiant": "1000000092",
    "codepersonnel": "101326",
    "nom": "Barre",
    "prenom": "Édouard",
    "location": "France",
    "manager": "Marc Durand",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2292",
        "balance": 885000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5492",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8892",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6692",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400092",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400092",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8892 2292",
      "holder": "Édouard Barre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230092",
      "key": "10",
      "iban": "FR91 3000 4100 54350 1230092 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_093",
    "identifiant": "1000000093",
    "codepersonnel": "101327",
    "nom": "Perez",
    "prenom": "Iris",
    "location": "France",
    "manager": "Claire Martin",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2293",
        "balance": 883750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5493",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8893",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6693",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400093",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400093",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8893 2293",
      "holder": "Iris Perez",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230093",
      "key": "10",
      "iban": "FR98 3000 4100 54350 1230093 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_094",
    "identifiant": "1000000094",
    "codepersonnel": "101328",
    "nom": "Lebrun",
    "prenom": "Fabien",
    "location": "France",
    "manager": "Émilie Petit",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2294",
        "balance": 882500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5494",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8894",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6694",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400094",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400094",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8894 2294",
      "holder": "Fabien Lebrun",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230094",
      "key": "10",
      "iban": "FR08 3000 4100 54350 1230094 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_095",
    "identifiant": "1000000095",
    "codepersonnel": "101329",
    "nom": "Mahe",
    "prenom": "Jeanne",
    "location": "France",
    "manager": "François Moreau",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2295",
        "balance": 881250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5495",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8895",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6695",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400095",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400095",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8895 2295",
      "holder": "Jeanne Mahe",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230095",
      "key": "10",
      "iban": "FR15 3000 4100 54350 1230095 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_096",
    "identifiant": "1000000096",
    "codepersonnel": "101330",
    "nom": "Bourgeois",
    "prenom": "Georges",
    "location": "France",
    "manager": "Catherine Simon",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2296",
        "balance": 880000,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5496",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8896",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6696",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400096",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400096",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8896 2296",
      "holder": "Georges Bourgeois",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230096",
      "key": "10",
      "iban": "FR22 3000 4100 54350 1230096 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_097",
    "identifiant": "1000000097",
    "codepersonnel": "101331",
    "nom": "Pierre",
    "prenom": "Karine",
    "location": "France",
    "manager": "Laurent Michel",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2297",
        "balance": 878750,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5497",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8897",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6697",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400097",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400097",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8897 2297",
      "holder": "Karine Pierre",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230097",
      "key": "10",
      "iban": "FR29 3000 4100 54350 1230097 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_098",
    "identifiant": "1000000098",
    "codepersonnel": "101332",
    "nom": "Renou",
    "prenom": "Henri",
    "location": "France",
    "manager": "Isabelle David",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2298",
        "balance": 877500,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5498",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8898",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6698",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400098",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400098",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8898 2298",
      "holder": "Henri Renou",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230098",
      "key": "10",
      "iban": "FR36 3000 4100 54350 1230098 10",
      "swift": "BNPAFRPPXXX"
    }
  },
  {
    "id": "user_099",
    "identifiant": "1000000099",
    "codepersonnel": "101333",
    "nom": "Gaudin",
    "prenom": "Lydie",
    "location": "France",
    "manager": "Thierry Garnier",
    "status": "Actif",
    "lastConnection": "",
    "accounts": [
      {
        "id": "cc",
        "type": "Compte Courant",
        "number": "N°******2299",
        "balance": 876250,
        "icon": "wallet"
      },
      {
        "id": "livret",
        "type": "Livret A",
        "number": "N°******5499",
        "balance": 0,
        "icon": "piggy-bank"
      },
      {
        "id": "plan",
        "type": "Plan Épargne",
        "number": "N°******8899",
        "balance": 0,
        "icon": "chart-line"
      },
      {
        "id": "livret-jeune",
        "type": "Livret Jeune",
        "number": "N°******6699",
        "balance": 0,
        "icon": "piggy-bank"
      }
    ],
    "transactions": [
      {
        "id": 1,
        "type": "Virement sortant",
        "reference": "FR76000000003000400000400099",
        "date": "14 Avril 2025",
        "amount": -25000,
        "status": "Effectué",
        "category": "Virement"
      },
      {
        "id": 2,
        "type": "Virement entrant",
        "reference": "FR76000000004000400000400099",
        "date": "05 Mars 2025",
        "amount": 20000,
        "status": "Effectué",
        "category": "Revenu"
      }
    ],
    "card": {
      "number": "4973 1200 8899 2299",
      "holder": "Lydie Gaudin",
      "expiry": "12/27",
      "isBlocked": false,
      "foreignPayments": true,
      "limit": 3000,
      "withdrawalLimit": 1200
    },
    "rib": {
      "bankName": "BNP PARIBAS",
      "bankCode": "30004",
      "branchCode": "100",
      "accountNumber": "543501230099",
      "key": "10",
      "iban": "FR43 3000 4100 54350 1230099 10",
      "swift": "BNPAFRPPXXX"
    }
  }
];
