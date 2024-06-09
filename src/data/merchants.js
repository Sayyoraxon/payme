export const merchants = 
{
    "merchants": [
        {
            "_id": "5ab8f99d7819302eec5d49d9",
            "paycom_id": "5ab8f99d7819302eec5d49d9",
            "name": "Ipoteka Bank",
            "organization": "Ipoteka bank Credits",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/510c8139c4b8dd92b20d23268e93008eb03e3d43.png",
            "date": 1399114284044,
            "terminal": {
                "type": "form",
                "amount": {
                    "min": 1,
                    "max": 1000000000
                },
                "account": [
                    {
                        "name": "loan_id",
                        "title": "Kredit kodi",
                        "content": "number",
                        "type": "text",
                        "prefix": null,
                        "replace": null,
                        "validation": null,
                        "error": null,
                        "placeholder": "",
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "кредит",
                "kredit",
                "kreditni so'ndirish",
                "погашение",
                "ипотека",
                "bgjntrf",
                "шзщеулф",
                "Ipoteka Bank"
            ],
            "myhome": true,
            "weight": 0.0022635769809020018,
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        },
        {
            "_id": "5964d3c9d20c5b00cc959ebf",
            "paycom_id": "601d38423b640f425ede1aca",
            "name": "Mikrokreditbank",
            "organization": "Mikrokreditbank",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/4671b74652ba19b8019fee24df401b7611ec1d8a.png",
            "date": 1399114284038,
            "terminal": {
                "type": "form",
                "amount": {
                    "min": 1,
                    "max": 1000000000
                },
                "account": [
                    {
                        "name": "loan_id",
                        "title": "Kredit kodi",
                        "content": "number",
                        "type": "text",
                        "prefix": null,
                        "replace": null,
                        "validation": null,
                        "error": null,
                        "placeholder": "",
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "кредит",
                "kredit",
                "kreditni so'ndirish",
                "погашение",
                "mkb",
                "micro",
                "credit",
                "микро",
                "мкб",
                "ьли",
                "ьшлкщ",
                "vbrhj",
                "vr,"
            ],
            "additional_info": true,
            "myhome": true,
            "weight": 0.0010833187955529501,
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        },
        {
            "_id": "65c5e2bd5a28ca784d917b13",
            "paycom_id": "65815d9a5c8188fb6e904a58",
            "name": "TBC Bank",
            "organization": "АО «\"TBC BANK\" ATB»",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/1427794180f318dbe7de5857d1d558a5aef5807e.png",
            "date": 1707467453949,
            "terminal": {
                "type": "form",
                "amount": {
                    "max": 99999999900,
                    "min": 100,
                    "round": false
                },
                "account": [
                    {
                        "content": "text",
                        "name": "loan_id",
                        "placeholder": "",
                        "replace": "[ -]",
                        "title": "Код кредита",
                        "type": "text",
                        "validation": "^[0-9]+$",
                        "prefix": null,
                        "require": null,
                        "error": null,
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "loan replayment",
                "лоан реплеймент",
                "дщфт куздфньуте"
            ],
            "additional_info": true,
            "weight": 0.0008146474761083818,
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        },
        {
            "_id": "6005759984bdb89f3c126fd3",
            "paycom_id": "60056dbc2b6a141db0f2b41d",
            "name": "АО \"ANOR BANK\"",
            "organization": "АО \"ANOR BANK\"",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/7c01169db696381ea4959f16e9e2d9e026e36dd7.png",
            "date": 1610970521239,
            "terminal": {
                "type": "form",
                "amount": {
                    "min": 1,
                    "max": 9000000000,
                    "round": false
                },
                "account": [
                    {
                        "content": "text",
                        "name": "loan_id",
                        "placeholder": "",
                        "replace": "[ -]",
                        "title": "Kredit kodi",
                        "type": "text",
                        "validation": null,
                        "prefix": {
                            "type": "static",
                            "value": "01183",
                            "output": true
                        },
                        "require": null,
                        "error": null,
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "анор",
                "кредит",
                "kredit",
                "банк",
                "ФТЩК ИФТЛ"
            ],
            "myhome": true,
            "weight": 0.0008082661803618814,
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        },
        {
            "_id": "589315b7afb81c0f68cbe584",
            "paycom_id": "589315b7afb81c0f68cbe584",
            "name": "Kapital bank",
            "organization": "ATB «Kapitalbank»",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/kapital-credits.png",
            "date": 1485870681337,
            "terminal": {
                "type": "form",
                "amount": {
                    "min": 1,
                    "max": 1000000000
                },
                "account": [
                    {
                        "name": "loan_id",
                        "title": "Kredit kodi (MFO + Anketa raqami)",
                        "content": "number",
                        "type": "text",
                        "prefix": null,
                        "replace": null,
                        "validation": null,
                        "error": null,
                        "placeholder": "",
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "кредит",
                "kredit",
                "kreditni so'ndirish",
                "погашение",
                "капиталбанк",
                "so'ndirish",
                "qarz",
                "credit",
                "pogasheniye",
                "rhtlbn",
                "gjufitybt",
                "rfgbnfk,fyr",
                "Kapital bank"
            ],
            "additional_info": true,
            "myhome": true,
            "weight": 0.00043392811076202714,
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        },
        {
            "_id": "59898b8d40d435212801926a",
            "paycom_id": "59898b8d40d435212801926a",
            "name": "Trastbank",
            "organization": "Trastbank Credits",
            "active": true,
            "type": 275,
            "logo": "https://cdn.payme.uz/merchants/trast-credits.png",
            "date": 1399114284039,
            "terminal": {
                "type": "form",
                "amount": {
                    "min": 1,
                    "max": 1000000000
                },
                "account": [
                    {
                        "name": "loan_id",
                        "title": "Kredit kodi",
                        "content": "number",
                        "type": "text",
                        "prefix": null,
                        "replace": null,
                        "validation": null,
                        "error": null,
                        "placeholder": "",
                        "scan": null,
                        "optional": false,
                        "visible": null
                    }
                ]
            },
            "keywords": [
                "кредит",
                "kredit",
                "kreditni so'ndirish",
                "погашение"
            ],
            "additional_info": true,
            "myhome": true,
            "weight": 0.00040211547461403246,
            "maintenance": "Поставщик временно не доступен, проводятся технические работы",
            "options": {
                "prompts": {
                    "amount_disabled": false,
                    "requisite_disabled": false
                }
            }
        }
    ]
}
