export const bank =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "5a40d625fdc97e44a4923e14",
                "paycom_id": "5a40d625fdc97e44a4923e14",
                "name": "Asakabank",
                "organization": "Asakabank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/bbfbdcfbb309421382934161b7f17bf50ca76185.png",
                "date": 1399114284041,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "асака",
                    "Asakabank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0003472175626772276,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a90065cbdf99c00e4231b1b",
                "paycom_id": "5a90065cbdf99c00e4231b1b",
                "name": "O`zsanoatqurilishbank",
                "organization": "O`zsanoatqurilishbank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/sqb_credits.png",
                "date": 1399114284043,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "psb",
                    "sqb",
                    "O`zsanoatqurilishbank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0002877213640995621,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5e7dd649c647575130796576",
                "paycom_id": "5e7dd649c647575130796576",
                "name": "Tenge Bank",
                "organization": "Tenge bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/tengebank-credit.png",
                "date": 1585305830980,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "tenge",
                    "тенге",
                    "ntyut",
                    "еутпу"
                ],
                "myhome": true,
                "weight": 0.00026707599550794314,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58a2cd5f53d31d12dc4220a7",
                "paycom_id": "58a2cd5f53d31d12dc4220a7",
                "name": "Davr bank",
                "organization": "Davr bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/davr-credits.png",
                "date": 1485870681339,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита (МФО + Номер анкеты)",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{6,}$",
                            "validation_error": "Ошибка в коде кредита",
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
                    "давр",
                    "credit",
                    "вфмк",
                    "lfdh",
                    "rhtlbn",
                    "gjufitybt",
                    "скувше",
                    "Davr bank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00014132693226808236,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5e318a44ba8ac3e976c4c081",
                "paycom_id": "5e170d61b996f9382f223c49",
                "name": "Orient Finans Bank",
                "organization": "Orient Finans Bank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/cc7cd79d9aca3d25f8db879b42cea2fc8865a4ba.png",
                "date": 1580304964983,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
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
                    "kredit",
                    "credit",
                    "ofb",
                    "ja,",
                    "кредит",
                    "офб",
                    "щаи",
                    "Щкшуте Аштфты Ифтл"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00012490447997929457,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f3689442953343c2864689e",
                "paycom_id": "5f31214937c4fb1f68eef788",
                "name": "Ipak Yuli Bank",
                "organization": "Ipak Yuli Bank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/d2ce0cb814e3fa8ba290ecaf0ce4f55a7c96e188.png",
                "date": 1597409604730,
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
                            "title": "Код кредита",
                            "type": "text",
                            "validation": "^[0-9]{6,}$",
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
                    "погашение",
                    "ипак",
                    "кредит",
                    "qaytarish",
                    "kredit",
                    "Ипак Йули Банк"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0001243414244722504,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5bc5d41b489ce62470205e2f",
                "paycom_id": "5bc5d41b489ce62470205e2f",
                "name": "Asia Alliance Bank Credits",
                "organization": "Asia Alliance Bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/aab-credits.png",
                "date": 1399114284045,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "Asia Alliance Bank Credits",
                    "AAB"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00010604212049331545,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5899a92eafb81c0f68cbe58c",
                "paycom_id": "5899a92eafb81c0f68cbe58c",
                "name": "Invest-Finans bank",
                "organization": "Invest-Finans bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/infin-credits.png",
                "date": 1485870681338,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита (МФО + Номер анкеты)",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{6,}$",
                            "validation_error": "Ошибка в коде кредита",
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
                    "infin",
                    "инфин",
                    "byaby",
                    "шташт",
                    "rhtlbn",
                    "gjuitybt",
                    "лкувше",
                    "скувше",
                    "дщфт",
                    "Invest-Finans bank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00009966082474681505,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5947b2dcf507111f98649786",
                "paycom_id": "5947b2dcf507111f98649786",
                "name": "Garant bank",
                "organization": "Garant bank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/64793501c23e2cb4ed2ab623bd78a753d1f7ab45.png",
                "date": 1399114284037,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "credit",
                    "kreditni so'ndirish",
                    "погашение",
                    "савдогар",
                    "cfdljufh",
                    "ыфмвщпфк",
                    "garant",
                    "гарант",
                    "пфкфте",
                    "ufhfyn"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00007620017861997535,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "593915bdf507111f98649771",
                "paycom_id": "5e2047a17e9d572738eb3de6",
                "name": "Biznesni Rivojlantirish Banki",
                "organization": "Biznesni Rivojlantirish Banki",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/127df099a6af4edc2507d44d4e11e0e477f6b504.png",
                "date": 1399114284034,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "Biznesi Rivojlantirish Banki",
                    "бизнес",
                    "biznes"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.000020645368591618937,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a410a92fdc97e44a4923e16",
                "paycom_id": "5a410a92fdc97e44a4923e16",
                "name": "Universalbank",
                "organization": "Universalbank",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/universal-credits2.png",
                "date": 1399114284042,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "Universalbank",
                    "универсал банк"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00001341948958455231,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ec649a7343eb86f54d333ab",
                "paycom_id": "5ec529c5a66c1a3017f01c5b",
                "name": "Saderat Bank Credits",
                "organization": "ООО Saderat Bank Credits»",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/57f69711dfbb83048f9652f45112b64f6bb766ea.png",
                "date": 1590053287967,
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
                    "садерат",
                    "кредит",
                    "kredit",
                    "saderat"
                ],
                "myhome": true,
                "weight": 0.000004222916302831147,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58ac11ef53d31d12dc4220ad",
                "paycom_id": "58ac11ef53d31d12dc4220ad",
                "name": "Ravnaq Bank",
                "organization": "Ravnaq Bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/ravnaq-credits.png",
                "date": 1485870681340,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита (МФО + Номер анкеты)",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{6,}$",
                            "validation_error": "Ошибка в коде кредита",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "birthday",
                            "title": "Дата рождения (дд-мм-гггг)",
                            "content": "text",
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
                    "Ravnaq Bank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0000016891665211324584,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58b80086f50711229c5446d2",
                "paycom_id": "5fe5b7f52b6a140fc0a60670",
                "name": "Ziraat Bank",
                "organization": "Ziraat Bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/zirrat-credits.png",
                "date": 1485870681341,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита (МФО + Номер анкеты)",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{6,}$",
                            "validation_error": "Ошибка в коде кредита",
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
                    "зираат",
                    "pbhffn",
                    "ziraat",
                    "яшкффе",
                    "credit",
                    "rhtlbn",
                    "gjufitybt",
                    "utbank",
                    "ziroat",
                    "Ziraat Bank",
                    "zirat"
                ],
                "additional_info": false,
                "myhome": true,
                "weight": 0.0000015953239366250997,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58eb6bb2f507110a7885391f",
                "paycom_id": "58eb6bb2f507110a7885391f",
                "name": "Madad Invest Bank",
                "organization": "Madad Invest Bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/17697f57f2f5a7587104965ec609b77ed9e3112a.png",
                "date": 1485870681342,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 9000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита (МФО + Номер анкеты)",
                            "content": "number",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "01142",
                                "output": true
                            },
                            "replace": null,
                            "validation": "^\\d{6,}$",
                            "validation_error": "Ошибка в коде кредита",
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
                    "madad",
                    "mib",
                    "vflfl",
                    "vb,",
                    "мадад",
                    "инвест",
                    "ьфвфв",
                    "штмуые",
                    "скувше",
                    "лкувше",
                    "credit",
                    "gjufitybt",
                    "Madad Invest Bank"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.000001407638767610382,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d3ece1fa1864f26dab4b513",
                "paycom_id": "5d3ece1fa1864f26dab4b513",
                "name": "Poytaxt Bank",
                "organization": "Poytaxt bank Credits",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/3a3b05ca5fb1498d91829ce877130f232256789f.png",
                "date": 1587039820288,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "loan_id",
                            "title": "Код кредита",
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
                    "credit",
                    "погашение",
                    "poytaxt",
                    "gjqnf[n",
                    "пойтахт",
                    "зщнефче"
                ],
                "myhome": true,
                "weight": 0.0000011261110140883058,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6603f51b12d57e0dca11ef66",
                "paycom_id": "6603f4e15b347a44404c6976",
                "name": "TEXNOPARK ",
                "organization": "ООО «\"TEXNOPARK KSG\" MCHJ»",
                "active": true,
                "type": 275,
                "logo": "https://cdn.payme.uz/merchants/fe190f5dfd8402d7dc91d4075df3b53f73542918.png",
                "date": 1711535387663,
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
                            "name": "branch",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филлиал",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Бекобод",
                                    "value": "1",
                                    "title": "Бекобод",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Олмалик",
                                    "value": "2",
                                    "title": "Олмалик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Паркент",
                                    "value": "3",
                                    "title": "Паркент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бука",
                                    "value": "4",
                                    "title": "Бука",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Учкуприк",
                                    "value": "5",
                                    "title": "Учкуприк",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бешкент",
                                    "value": "6",
                                    "title": "Бешкент",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "dogovor",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID договора",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": null,
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
                    "TEXNOPARK ",
                    "TEXNOPARK KSG",
                    "ООО «\"TEXNOPARK KSG\" MCHJ»"
                ],
                "weight": 9.38425845073588e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            }
        ]
    }
}