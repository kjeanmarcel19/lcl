var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// api/comptes.ts
var comptes_exports = {};
__export(comptes_exports, {
  DEFAULT_USERS: () => DEFAULT_USERS
});
var DEFAULT_USERS;
var init_comptes = __esm({
  "api/comptes.ts"() {
    "use strict";
    DEFAULT_USERS = [
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
            "number": "N\xB0******2200",
            "balance": 1e6,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5400",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8800",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6600",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400000",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8800 2200",
          "holder": "Jean Dupont",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2201",
            "balance": 998750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5401",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8801",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6601",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400001",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8801 2201",
          "holder": "Marie Martin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2202",
            "balance": 997500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5402",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8802",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6602",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400002",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8802 2202",
          "holder": "Pierre Bernard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2203",
            "balance": 996250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5403",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8803",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6603",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400003",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8803 2203",
          "holder": "Sophie Thomas",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2204",
            "balance": 995e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5404",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8804",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6604",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400004",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8804 2204",
          "holder": "Lucas Robert",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2205",
            "balance": 993750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5405",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8805",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6605",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400005",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8805 2205",
          "holder": "Camille Petit",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2206",
            "balance": 992500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5406",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8806",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6606",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400006",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8806 2206",
          "holder": "Julien Durand",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "L\xE9a",
        "location": "France",
        "manager": "Laurent Michel",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2207",
            "balance": 991250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5407",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8807",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6607",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400007",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8807 2207",
          "holder": "L\xE9a Leroy",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2208",
            "balance": 99e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5408",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8808",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6608",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400008",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8808 2208",
          "holder": "Thomas Moreau",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2209",
            "balance": 988750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5409",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8809",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6609",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400009",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8809 2209",
          "holder": "Emma Simon",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2210",
            "balance": 987500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5410",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8810",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6610",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400010",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8810 2210",
          "holder": "Nicolas Laurent",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Chlo\xE9",
        "location": "France",
        "manager": "Sophie Bernard",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2211",
            "balance": 986250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5411",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8811",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6611",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400011",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8811 2211",
          "holder": "Chlo\xE9 Lefebvre",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2212",
            "balance": 985e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5412",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8812",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6612",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400012",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8812 2212",
          "holder": "Alexandre Michel",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2213",
            "balance": 983750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5413",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8813",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6613",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400013",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8813 2213",
          "holder": "Manon Garcia",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2214",
            "balance": 982500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5414",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8814",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6614",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400014",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8814 2214",
          "holder": "Antoine David",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2215",
            "balance": 981250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5415",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8815",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6615",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400015",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8815 2215",
          "holder": "Sarah Bertrand",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2216",
            "balance": 98e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5416",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8816",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6616",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400016",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8816 2216",
          "holder": "Maxime Roux",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2217",
            "balance": 978750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5417",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8817",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6617",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400017",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8817 2217",
          "holder": "Laura Vincent",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2218",
            "balance": 977500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5418",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8818",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6618",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400018",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8818 2218",
          "holder": "Romain Fournier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2219",
            "balance": 976250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5419",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8819",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6619",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400019",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8819 2219",
          "holder": "Julie Morel",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2220",
            "balance": 975e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5420",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8820",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6620",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400020",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8820 2220",
          "holder": "Florian Girard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2221",
            "balance": 973750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5421",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8821",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6621",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400021",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8821 2221",
          "holder": "Alice Andre",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2222",
            "balance": 972500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5422",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8822",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6622",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400022",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8822 2222",
          "holder": "Damien Mercier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2223",
            "balance": 971250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5423",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8823",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6623",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400023",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8823 2223",
          "holder": "Clara Blanc",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2224",
            "balance": 97e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5424",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8824",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6624",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400024",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8824 2224",
          "holder": "Vincent Guerin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2225",
            "balance": 968750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5425",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8825",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6625",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400025",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8825 2225",
          "holder": "Louise Boyer",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Beno\xEEt",
        "location": "France",
        "manager": "Catherine Simon",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2226",
            "balance": 967500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5426",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8826",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6626",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400026",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8826 2226",
          "holder": "Beno\xEEt Garnier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2227",
            "balance": 966250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5427",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8827",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6627",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400027",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8827 2227",
          "holder": "Margot Chevalier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "S\xE9bastien",
        "location": "France",
        "manager": "Isabelle David",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2228",
            "balance": 965e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5428",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8828",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6628",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400028",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8828 2228",
          "holder": "S\xE9bastien Francois",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Oc\xE9ane",
        "location": "France",
        "manager": "Thierry Garnier",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2229",
            "balance": 963750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5429",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8829",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6629",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400029",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8829 2229",
          "holder": "Oc\xE9ane Legrand",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Fr\xE9d\xE9ric",
        "location": "France",
        "manager": "Arnaud Leroy",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2230",
            "balance": 962500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5430",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8830",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6630",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400030",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8830 2230",
          "holder": "Fr\xE9d\xE9ric Gauthier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "C\xE9line",
        "location": "France",
        "manager": "Sophie Bernard",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2231",
            "balance": 961250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5431",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8831",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6631",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400031",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8831 2231",
          "holder": "C\xE9line Lambert",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Gr\xE9gory",
        "location": "France",
        "manager": "Marc Durand",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2232",
            "balance": 96e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5432",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8832",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6632",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400032",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8832 2232",
          "holder": "Gr\xE9gory Bonnet",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Aur\xE9lie",
        "location": "France",
        "manager": "Claire Martin",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2233",
            "balance": 958750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5433",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8833",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6633",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400033",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8833 2233",
          "holder": "Aur\xE9lie Dubois",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "C\xE9dric",
        "location": "France",
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2234",
            "balance": 957500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5434",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8834",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6634",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400034",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8834 2234",
          "holder": "C\xE9dric Meunier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "\xC9lodie",
        "location": "France",
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2235",
            "balance": 956250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5435",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8835",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6635",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400035",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8835 2235",
          "holder": "\xC9lodie Lemaire",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "St\xE9phane",
        "location": "France",
        "manager": "Catherine Simon",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2236",
            "balance": 955e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5436",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8836",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6636",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400036",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8836 2236",
          "holder": "St\xE9phane Noel",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2237",
            "balance": 953750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5437",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8837",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6637",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400037",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8837 2237",
          "holder": "Nathalie Meyer",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2238",
            "balance": 952500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5438",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8838",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6638",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400038",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8838 2238",
          "holder": "Christophe Dufour",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "V\xE9ronique",
        "location": "France",
        "manager": "Thierry Garnier",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2239",
            "balance": 951250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5439",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8839",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6639",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400039",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8839 2239",
          "holder": "V\xE9ronique Meier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2240",
            "balance": 95e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5440",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8840",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6640",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400040",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8840 2240",
          "holder": "Pascal Rousseau",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2241",
            "balance": 948750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5441",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8841",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6641",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400041",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8841 2241",
          "holder": "Sandrine Fontaine",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2242",
            "balance": 947500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5442",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8842",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6642",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400042",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8842 2242",
          "holder": "Laurent Rousseau",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2243",
            "balance": 946250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5443",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8843",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6643",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400043",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8843 2243",
          "holder": "Isabelle Nicolas",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "\xC9ric",
        "location": "France",
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2244",
            "balance": 945e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5444",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8844",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6644",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400044",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8844 2244",
          "holder": "\xC9ric Robin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2245",
            "balance": 943750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5445",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8845",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6645",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400045",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8845 2245",
          "holder": "Sandrine Masson",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "J\xE9r\xF4me",
        "location": "France",
        "manager": "Catherine Simon",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2246",
            "balance": 942500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5446",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8846",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6646",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400046",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8846 2246",
          "holder": "J\xE9r\xF4me Sanchez",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "C\xE9cile",
        "location": "France",
        "manager": "Laurent Michel",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2247",
            "balance": 941250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5447",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8847",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6647",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400047",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8847 2247",
          "holder": "C\xE9cile Gerard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2248",
            "balance": 94e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5448",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8848",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6648",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400048",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8848 2248",
          "holder": "Matthieu Roche",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2249",
            "balance": 938750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5449",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8849",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6649",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400049",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8849 2249",
          "holder": "Pauline Roy",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2250",
            "balance": 937500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5450",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8850",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6650",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400050",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8850 2250",
          "holder": "Quentin Picard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2251",
            "balance": 936250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5451",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8851",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6651",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400051",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8851 2251",
          "holder": "Charlotte Sabatier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2252",
            "balance": 935e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5452",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8852",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6652",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400052",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8852 2252",
          "holder": "Alexis Faure",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2253",
            "balance": 933750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5453",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8853",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6653",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400053",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8853 2253",
          "holder": "Eva Aubin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2254",
            "balance": 932500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5454",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8854",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6654",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400054",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8854 2254",
          "holder": "Hugo Vidal",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "In\xE8s",
        "location": "France",
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2255",
            "balance": 931250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5455",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8855",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6655",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400055",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8855 2255",
          "holder": "In\xE8s Baron",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "L\xE9o",
        "location": "France",
        "manager": "Catherine Simon",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2256",
            "balance": 93e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5456",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8856",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6656",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400056",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8856 2256",
          "holder": "L\xE9o Benoit",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2257",
            "balance": 928750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5457",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8857",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6657",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400057",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8857 2257",
          "holder": "Jade Aubert",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2258",
            "balance": 927500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5458",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8858",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6658",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400058",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8858 2258",
          "holder": "Nathan Boucher",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2259",
            "balance": 926250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5459",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8859",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6659",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400059",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8859 2259",
          "holder": "Lola Colin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2260",
            "balance": 925e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5460",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8860",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6660",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400060",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8860 2260",
          "holder": "Gabriel Renard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2261",
            "balance": 923750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5461",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8861",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6661",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400061",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8861 2261",
          "holder": "Anna Deschamps",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2262",
            "balance": 922500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5462",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8862",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6662",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400062",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8862 2262",
          "holder": "Louis Humbert",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Zo\xE9",
        "location": "France",
        "manager": "Claire Martin",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2263",
            "balance": 921250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5463",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8863",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6663",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400063",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8863 2263",
          "holder": "Zo\xE9 Perrin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2264",
            "balance": 92e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5464",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8864",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6664",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400064",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8864 2264",
          "holder": "Arthur Morin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2265",
            "balance": 918750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5465",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8865",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6665",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400065",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8865 2265",
          "holder": "Ambre Mathieu",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2266",
            "balance": 917500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5466",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8866",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6666",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400066",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8866 2266",
          "holder": "Victor Clement",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2267",
            "balance": 916250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5467",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8867",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6667",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400067",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8867 2267",
          "holder": "Nina Gallet",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2268",
            "balance": 915e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5468",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8868",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6668",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400068",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8868 2268",
          "holder": "Adam Brun",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2269",
            "balance": 913750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5469",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8869",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6669",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400069",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8869 2269",
          "holder": "Romane Adam",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2270",
            "balance": 912500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5470",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8870",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6670",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400070",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8870 2270",
          "holder": "Paul Lacroix",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2271",
            "balance": 911250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5471",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8871",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6671",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400071",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8871 2271",
          "holder": "Sarah Renault",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2272",
            "balance": 91e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5472",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8872",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6672",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400072",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8872 2272",
          "holder": "Samuel Jacquet",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2273",
            "balance": 908750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5473",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8873",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6673",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400073",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8873 2273",
          "holder": "Agathe Riviere",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Th\xE9o",
        "location": "France",
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2274",
            "balance": 907500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5474",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8874",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6674",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400074",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8874 2274",
          "holder": "Th\xE9o Lucas",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2275",
            "balance": 906250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5475",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8875",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6675",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400075",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8875 2275",
          "holder": "Iris Brunet",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2276",
            "balance": 905e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5476",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8876",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6676",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400076",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8876 2276",
          "holder": "Eliott Gaillard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2277",
            "balance": 903750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5477",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8877",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6677",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400077",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8877 2277",
          "holder": "Rose Barbier",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Tim\xE9o",
        "location": "France",
        "manager": "Isabelle David",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2278",
            "balance": 902500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5478",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8878",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6678",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400078",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8878 2278",
          "holder": "Tim\xE9o Arnaud",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2279",
            "balance": 901250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5479",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8879",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6679",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400079",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8879 2279",
          "holder": "Luna Martinez",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2280",
            "balance": 9e5,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5480",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8880",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6680",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400080",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8880 2280",
          "holder": "Noah Gerard",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2281",
            "balance": 898750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5481",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8881",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6681",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400081",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8881 2281",
          "holder": "Apolline Roche",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2282",
            "balance": 897500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5482",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8882",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6682",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400082",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8882 2282",
          "holder": "Marius Leduc",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2283",
            "balance": 896250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5483",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8883",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6683",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400083",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8883 2283",
          "holder": "Lou Bazin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2284",
            "balance": 895e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5484",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8884",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6684",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400084",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8884 2284",
          "holder": "Aubin Huet",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Ma\xEBlys",
        "location": "France",
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2285",
            "balance": 893750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5485",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8885",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6685",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400085",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8885 2285",
          "holder": "Ma\xEBlys Pineau",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2286",
            "balance": 892500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5486",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8886",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6686",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400086",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8886 2286",
          "holder": "Antonin Landais",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2287",
            "balance": 891250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5487",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8887",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6687",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400087",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8887 2287",
          "holder": "Alix Hamon",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2288",
            "balance": 89e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5488",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8888",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6688",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400088",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8888 2288",
          "holder": "Baptiste Vasseur",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2289",
            "balance": 888750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5489",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8889",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6689",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400089",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8889 2289",
          "holder": "Capucine Leclerc",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "Cl\xE9ment",
        "location": "France",
        "manager": "Arnaud Leroy",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2290",
            "balance": 887500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5490",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8890",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6690",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400090",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8890 2290",
          "holder": "Cl\xE9ment Renaud",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2291",
            "balance": 886250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5491",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8891",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6691",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400091",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8891 2291",
          "holder": "Garance Dumas",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "prenom": "\xC9douard",
        "location": "France",
        "manager": "Marc Durand",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2292",
            "balance": 885e3,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5492",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8892",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6692",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400092",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8892 2292",
          "holder": "\xC9douard Barre",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2293",
            "balance": 883750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5493",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8893",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6693",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400093",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8893 2293",
          "holder": "Iris Perez",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "\xC9milie Petit",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2294",
            "balance": 882500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5494",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8894",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6694",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400094",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8894 2294",
          "holder": "Fabien Lebrun",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
        "manager": "Fran\xE7ois Moreau",
        "status": "Actif",
        "lastConnection": "",
        "accounts": [
          {
            "id": "cc",
            "type": "Compte Courant",
            "number": "N\xB0******2295",
            "balance": 881250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5495",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8895",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6695",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400095",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8895 2295",
          "holder": "Jeanne Mahe",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2296",
            "balance": 88e4,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5496",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8896",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6696",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400096",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8896 2296",
          "holder": "Georges Bourgeois",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2297",
            "balance": 878750,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5497",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8897",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6697",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400097",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8897 2297",
          "holder": "Karine Pierre",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2298",
            "balance": 877500,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5498",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8898",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6698",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400098",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8898 2298",
          "holder": "Henri Renou",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
            "number": "N\xB0******2299",
            "balance": 876250,
            "icon": "wallet"
          },
          {
            "id": "livret",
            "type": "Livret A",
            "number": "N\xB0******5499",
            "balance": 0,
            "icon": "piggy-bank"
          },
          {
            "id": "plan",
            "type": "Plan \xC9pargne",
            "number": "N\xB0******8899",
            "balance": 0,
            "icon": "chart-line"
          },
          {
            "id": "livret-jeune",
            "type": "Livret Jeune",
            "number": "N\xB0******6699",
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
            "amount": -25e3,
            "status": "Effectu\xE9",
            "category": "Virement"
          },
          {
            "id": 2,
            "type": "Virement entrant",
            "reference": "FR76000000004000400000400099",
            "date": "05 Mars 2025",
            "amount": 2e4,
            "status": "Effectu\xE9",
            "category": "Revenu"
          }
        ],
        "card": {
          "number": "4973 1200 8899 2299",
          "holder": "Lydie Gaudin",
          "expiry": "12/27",
          "isBlocked": false,
          "foreignPayments": true,
          "limit": 3e3,
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
  }
});

// shared/const.ts
var COOKIE_NAME = "app_session_id";
var ONE_YEAR_MS = 1e3 * 60 * 60 * 24 * 365;

// api/virement.ts
import nodemailer from "nodemailer";
import { z } from "zod";

// api/trpc_local.ts
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
var t = initTRPC.context().create({
  transformer: superjson
});
var router = t.router;
var publicProcedure = t.procedure;
var protectedProcedure = t.procedure.use(
  t.middleware((opts) => {
    const { ctx, next } = opts;
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
    }
    return next({ ctx });
  })
);
var adminProcedure = t.procedure.use(
  t.middleware((opts) => {
    const { ctx, next } = opts;
    if (!ctx.user) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have required permission"
      });
    }
    return next({ ctx });
  })
);

// api/virement.ts
import { createRequire } from "module";
import { Writable } from "stream";
var PDFDoc = createRequire(import.meta.url)("pdfkit");
var virementSchema = z.object({
  identifiant: z.string().min(10).max(10),
  firstName: z.string().min(1, "Le pr\xE9nom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  iban: z.string().min(15, "IBAN invalide"),
  swift: z.string().min(8, "Code SWIFT/BIC invalide"),
  bankCode: z.string().min(1, "Le code banque est requis"),
  amount: z.number().positive("Le montant doit \xEAtre sup\xE9rieur \xE0 0"),
  email: z.string().email("Adresse email invalide"),
  label: z.string().optional(),
  sourceAccountId: z.string().optional()
});
function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : void 0,
    from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@lcl.fr"
  };
}
var LCL_LOGO_URL = "data:image/png;base64,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";
function buildTransferEmailHtml(input, user) {
  const montant = input.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
  const date = (/* @__PURE__ */ new Date()).toLocaleString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head><meta charset="utf-8"></head>
  <body style="margin:0;padding:0;background-color:#f3f5f8;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f5f8;padding:24px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(31,38,56,0.10);">

          <!-- En-t\xEAte bleu avec logo LCL -->
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
                Un virement vient d'\xEAtre effectu\xE9 en votre faveur. Vous trouverez ci-dessous le r\xE9capitulatif de la transaction.
              </p>
            </td>
          </tr>

          <!-- Tableau r\xE9capitulatif -->
          <tr>
            <td style="padding:16px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#f7f9fc;border-radius:10px;overflow:hidden;border:1px solid #e4e9f0;">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;width:42%;">\xC9metteur</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;font-weight:bold;">${user.prenom} ${user.nom}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">Montant cr\xE9dit\xE9</td>
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
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:13px;color:#7a8494;">Libell\xE9</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #e4e9f0;font-size:14px;color:#1f2638;">${input.label || "\u2014"}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;font-size:13px;color:#7a8494;">Date de la transaction</td>
                  <td style="padding:14px 16px;font-size:14px;color:#1f2638;">${date}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Note de s\xE9curit\xE9 -->
          <tr>
            <td style="padding:4px 32px 28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#fef9ee;border:1px solid #f3e4bd;border-radius:10px;overflow:hidden;">
                <tr>
                  <td width="28" style="padding:12px 0 12px 14px;font-size:15px;color:#b4851a;font-weight:bold;">!</td>
                  <td style="padding:12px 14px;font-size:12px;color:#7a6a2e;line-height:1.5;">
                    La LCL ne vous demandera jamais vos codes d'acc\xE8s, ni par e-mail ni par t\xE9l\xE9phone. En cas de doute, contactez votre agence ou votre conseiller.
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
                    LCL \u2013 Le Cr\xE9dit Lyonnais, Soci\xE9t\xE9 Anonyme au capital de 2 040 000 000 euros<br />
                    9 rue des Deux-Gares, 75010 Paris, France<br />
                    Soci\xE9t\xE9 de courtage et de cr\xE9dit bancaire immatricul\xE9e \xE0 l'ORIAS<br />
                    Ce message a \xE9t\xE9 envoy\xE9 automatiquement par le service de virement LCL.<br />
                    Veuillez ne pas r\xE9pondre \xE0 cet e-mail. Pour toute question, contactez<br />
                    votre agence ou votre conseiller <strong style="color:#FFC629;">${user.manager}</strong>.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:12px;font-size:10px;color:#6c7c99;">
                    \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} LCL \u2013 Tous droits r\xE9serv\xE9s.
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
function buildReceiptPdf(opts) {
  return new Promise((resolve) => {
    const doc = new PDFDoc({ size: "A4", margins: { top: 110, bottom: 100, left: 50, right: 50 }, bufferPages: true });
    const chunks = [];
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.from(chunk));
        cb();
      },
      final(cb) {
        resolve(Buffer.concat(chunks).toString("base64"));
        cb();
      }
    });
    const BLUE = "#004B87";
    const YELLOW = "#FFC629";
    const DARK = "#1a2a4a";
    const GRAY = "#5a6472";
    doc.rect(0, 0, 595, 92).fill(BLUE);
    doc.font("Helvetica-Bold").fontSize(24).fillColor(YELLOW).text("LCL", 50, 26, { width: 100, align: "left" });
    doc.font("Helvetica").fontSize(10).fillColor("#d8e4f0").text("Ma vie. Ma ville. Ma banque.", 108, 38);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#ffffff").text("R\xC9C\xC9PISS\xC9 DE VIREMENT", 330, 30, { width: 215, align: "right" });
    const ref = `LCL-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(Math.random() * 9e3 + 1e3)}`;
    doc.font("Helvetica").fontSize(9).fillColor("#d8e4f0").text(`R\xE9f. ${ref}`, 330, 48, { width: 215, align: "right" });
    doc.moveDown(2);
    const date = (/* @__PURE__ */ new Date()).toLocaleString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    doc.y = 120;
    doc.font("Helvetica-Bold").fontSize(15).fillColor(DARK).text(`Virement effectu\xE9 \u2014 ${opts.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}`, { lineGap: 6 });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(`Date : ${date}`);
    doc.moveDown(1);
    doc.font("Helvetica").fontSize(10);
    const rows = [
      ["\xC9metteur", opts.emetteur, true],
      ["B\xE9n\xE9ficiaire", opts.beneficiaire, true],
      ["Montant vir\xE9", opts.amount.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }), true],
      ["Compte d\xE9bit\xE9", `${opts.sourceAccountType} n\xB0 ${opts.sourceAccountNumber}`, false],
      ["IBAN du destinataire", opts.iban, false],
      ["Code SWIFT/BIC", opts.swift, false],
      ["Libell\xE9", opts.label, false]
    ];
    rows.forEach(([k, v], i) => {
      const fill = i === 2 ? "#eaf5ee" : "#f7f9fc";
      const rowY = doc.y;
      doc.rect(50, rowY, 495, 24).fill(fill);
      doc.rect(50, rowY, 495, 24).stroke("#e4e9f0");
      doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(k, 64, rowY + 8);
      doc.font(i === 2 ? "Helvetica-Bold" : "Helvetica").fontSize(i === 2 ? 12 : 10).fillColor(i === 2 ? "#1e7a34" : DARK).text(v, 300, rowY + 8, { width: 230, align: "right" });
      doc.y = rowY + 26;
    });
    doc.moveDown(1);
    const warnY = doc.y;
    doc.rect(50, warnY, 495, 40).fill("#fef9ee");
    doc.rect(50, warnY, 495, 40).stroke("#f3e4bd");
    doc.font("Helvetica-Bold").fontSize(14).fillColor("#b4851a").text("!", 64, warnY + 13);
    doc.font("Helvetica").fontSize(8.5).fillColor("#7a6a2e").text(
      "La LCL ne vous demandera jamais vos codes d'acc\xE8s, ni par e-mail ni par t\xE9l\xE9phone. En cas de doute, contactez votre agence ou votre conseiller.",
      88,
      warnY + 12,
      { width: 440 }
    );
    doc.y = warnY + 40;
    const footerTop = 690;
    const footerH = 842 - footerTop;
    const pageContentH = footerTop - 2;
    if (doc.y > pageContentH) {
      doc.addPage({ size: "A4", margins: { top: 20, bottom: 130, left: 50, right: 50 } });
      doc.y = 20;
    }
    doc.y = Math.max(doc.y, footerTop - 44);
    doc.rect(0, footerTop, 595, footerH).fill(DARK);
    doc.font("Helvetica").fontSize(8).fillColor("#a9b7ce");
    doc.text(
      `LCL \u2013 Le Cr\xE9dit Lyonnais, Soci\xE9t\xE9 Anonyme au capital de 2 040 000 000 euros
9 rue des Deux-Gares, 75010 Paris \u2013 Immatricul\xE9 \xE0 l'ORIAS \u2013 Document g\xE9n\xE9r\xE9 automatiquement
Conseiller de compte : ${opts.manager} \u2013 \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} LCL \u2013 Tous droits r\xE9serv\xE9s.`,
      50,
      footerTop + 12,
      { width: 495, align: "center", lineGap: 5 }
    );
    doc.pipe(sink);
    doc.end();
  });
}
async function loadUsers() {
  const mod = await Promise.resolve().then(() => (init_comptes(), comptes_exports));
  return mod.DEFAULT_USERS;
}
var virementRouter = router({
  execute: publicProcedure.input(virementSchema).mutation(async ({ input }) => {
    const users = await loadUsers();
    const user = users.find((u) => u.identifiant === input.identifiant);
    if (!user) {
      throw new Error("Compte introuvable. Veuillez vous reconnecter.");
    }
    let source = user.accounts.find((a) => a.id === input.sourceAccountId) ?? null;
    if (!source) {
      source = user.accounts.find((a) => a.type !== "Cr\xE9dit" && a.type !== "Assurance") ?? null;
    }
    if (!source) {
      throw new Error("Aucun compte disponible pour le pr\xE9l\xE8vement.");
    }
    const currentBalance = source.balance;
    if (input.amount > currentBalance) {
      throw new Error("Solde insuffisant pour effectuer cette transaction.");
    }
    if (input.amount > 1e4) {
      throw new Error(
        "LCL_AMOUNT_OVER_PLAFOND: Transaction refus\xE9e : montant sup\xE9rieur au plafond autoris\xE9 (10 000 \u20AC)."
      );
    }
    const smtp = getSmtpConfig();
    let emailSent = false;
    let emailError = "";
    let receiptPdfBase64 = "";
    let receiptPdfBuffer;
    try {
      receiptPdfBase64 = await buildReceiptPdf({
        emetteur: `${user.prenom} ${user.nom}`,
        beneficiaire: `${input.firstName} ${input.lastName}`,
        iban: input.iban,
        swift: input.swift,
        amount: input.amount,
        label: input.label || "\u2014",
        sourceAccountType: source.type,
        sourceAccountNumber: source.number,
        manager: user.manager
      });
      if (receiptPdfBase64) {
        receiptPdfBuffer = Buffer.from(receiptPdfBase64, "base64");
      }
    } catch (err) {
      console.error("[PDF] \xC9chec de g\xE9n\xE9ration du r\xE9c\xE9piss\xE9 :", err);
    }
    if (smtp.host) {
      try {
        const transporter = nodemailer.createTransport(smtp);
        const attachmentEntry = receiptPdfBuffer ? {
          filename: (() => {
            const safeLabel = (input.label || "virement").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30);
            void safeLabel;
            const now = /* @__PURE__ */ new Date();
            const pad = (n) => String(n).padStart(2, "0");
            const dateStr = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
              now.getDate()
            )}-${pad(now.getHours())}${pad(now.getMinutes())}`;
            const amountStr = input.amount.toFixed(2).replace(".", ",");
            return `recu-virement-${amountStr}EUR-${dateStr}.pdf`;
          })(),
          content: receiptPdfBuffer,
          contentType: "application/pdf",
          encoding: "base64"
        } : void 0;
        await transporter.sendMail({
          from: smtp.from,
          to: input.email,
          subject: `Confirmation de virement re\xE7u \u2014 ${input.label || "virement"}`,
          html: buildTransferEmailHtml(input, user),
          attachments: attachmentEntry ? [attachmentEntry] : []
        });
        emailSent = true;
      } catch (err) {
        console.error("[SMTP] \xC9chec d'envoi :", err);
        emailError = err instanceof Error ? err.message : String(err);
      }
    } else {
      emailError = "Serveur SMTP non configur\xE9 (variables SMTP manquantes).";
    }
    const transferRecord = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      firstName: input.firstName,
      lastName: input.lastName,
      iban: input.iban,
      amount: input.amount,
      label: input.label || "",
      emailSent,
      status: "Effectu\xE9",
      sourceAccountId: source.id,
      sourceAccountType: source.type,
      sourceAccountNumber: source.number,
      fullName: `${user.prenom} ${user.nom}`
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
      receiptPdfBase64
    };
  })
});

// api/routers.ts
function isSecureRequest(req) {
  if (req.protocol === "https") return true;
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (!forwardedProto) return false;
  const protoList = Array.isArray(forwardedProto) ? forwardedProto : forwardedProto.split(",");
  return protoList.some((proto) => proto.trim().toLowerCase() === "https");
}
function getSessionCookieOptions(req) {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: isSecureRequest(req)
  };
}
async function createContext(opts) {
  return {
    req: opts.req,
    res: opts.res,
    user: null
  };
}
var appRouter = router({
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    })
  }),
  virement: virementRouter
});

// api/trpc.js
function trpcApi(req, res) {
  if (!res.clearCookie) res.clearCookie = () => {
  };
  if (!res.cookie) res.cookie = () => {
  };
  if (!req.originalUrl) {
    req.originalUrl = req.url.split("?")[0];
  }
  createContext({ req, res }).then(async (ctx) => {
    const protocol = req.headers["x-forwarded-proto"] || (req.socket && "encrypted" in req.socket && req.socket.encrypted ? "https" : "http");
    const host = req.headers.host || "localhost";
    const url = `${protocol}://${host}${req.url}`;
    const headers = {};
    for (const key in req.headers) {
      if (key.startsWith(":")) continue;
      const val = req.headers[key];
      headers[key] = Array.isArray(val) ? val.join(", ") : val;
    }
    let body = "";
    req.on("data", (chunk) => body += chunk);
    req.on("end", async () => {
      try {
        const requestInit = { method: req.method, headers };
        if (body) requestInit.body = body;
        const fetchRequest = new Request(url, requestInit);
        const { fetchRequestHandler } = await import("@trpc/server/adapters/fetch");
        const response = await fetchRequestHandler({
          endpoint: "/api/trpc",
          req: fetchRequest,
          router: appRouter,
          createContext: async () => ctx,
          onError({ error }) {
            console.error("[tRPC error]", error);
          }
        });
        res.statusCode = response.status;
        for (const [key, val] of response.headers.entries()) {
          res.setHeader(key, val);
        }
        const respBody = await response.text();
        res.end(respBody);
      } catch (err) {
        console.error("[trpcApi error]", err);
        res.statusCode = 500;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ error: { message: String(err) } }));
      }
    });
  });
}
export {
  trpcApi as default
};
