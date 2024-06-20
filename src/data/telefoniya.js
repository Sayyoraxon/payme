
export const telefoniya =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "585bdb2ae084e20c5099792c",
                "paycom_id": "585bcbe7e084e20c50997928",
                "name": "Uzbektelecom",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/telephone.png",
                "date": 1482394258419,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 10000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Telefon raqami",
                            "content": "phone",
                            "length": 9,
                            "placeholder": "",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": null,
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "домашний",
                    "городской",
                    "domashniy",
                    "gorodskoy",
                    "телефон",
                    "telefon",
                    "shaxar",
                    "шахар",
                    "tshtt",
                    "тштт",
                    "узтелеком",
                    "абонетская",
                    "Uzbektelecom",
                    "городской телефон"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.005036231138547744,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a17c68f80a11b2eb0bda8bd",
                "paycom_id": "599189654e4319d92565aee3",
                "name": "Карты Центральный телеграф",
                "organization": "Alfa Sugurta",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/central-telegraph.png",
                "date": 1511506937496,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 300000,
                        "max": 10000000,
                        "require": "nominal"
                    },
                    "account": [
                        {
                            "name": "nominal",
                            "title": "Nominal",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "3000",
                                    "amount": 300000,
                                    "title": "3 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "5000",
                                    "amount": 500000,
                                    "title": "5 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10000",
                                    "amount": 1000000,
                                    "title": "10 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "20000",
                                    "amount": 2000000,
                                    "title": "20 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "50000",
                                    "amount": 5000000,
                                    "title": "50 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "100000",
                                    "amount": 10000000,
                                    "title": "100 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "4500",
                                    "amount": 450000,
                                    "title": "4 500 - Rossiya-Qozoqiston",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "6600",
                                    "amount": 660000,
                                    "title": "6 600 - Rossiya-Qozoqiston",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "13200",
                                    "amount": 1320000,
                                    "title": "13 200 - Rossiya-Qozoqiston",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "центральный телеграф",
                    "central telegraph",
                    "международная телефония",
                    "междугородная телефония",
                    "карта",
                    "карты",
                    "пин",
                    "pin"
                ],
                "myhome": true,
                "weight": 0.00010653606041973327,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a1fd41f2868fa18387c014b",
                "paycom_id": "5a1fd2302868fa18387c0142",
                "name": "Для международных звонков",
                "organization": "ЧП «Ильхамов Илёс»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/central-telegraph2.png",
                "date": 1512035306588,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 300000,
                        "max": 10000000,
                        "require": "nominal"
                    },
                    "account": [
                        {
                            "name": "nominal",
                            "title": "Nominal",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "3000",
                                    "amount": 300000,
                                    "title": "3 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "5000",
                                    "amount": 500000,
                                    "title": "5 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10000",
                                    "amount": 1000000,
                                    "title": "10 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "20000",
                                    "amount": 2000000,
                                    "title": "20 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "50000",
                                    "amount": 5000000,
                                    "title": "50 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "100000",
                                    "amount": 10000000,
                                    "title": "100 000",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "центральный телеграф",
                    "central telegraph",
                    "uztelecom",
                    "uztelekom",
                    "узбектелеком",
                    "узтелеком",
                    "международная телефония",
                    "междугородная телефония",
                    "карта",
                    "карты",
                    "пин",
                    "pin"
                ],
                "myhome": true,
                "weight": 0.00009995589198204386,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5825749764c7f063ab8c4a22",
                "paycom_id": "5e99fd507e9d5726ece415d6",
                "name": "East Telecom",
                "organization": "ООО «East Telecom»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/21069bcd4ee4cff55b41df2e7ebf1491388b62ff.png",
                "date": 1478848429079,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "account",
                            "title": "Telefon raqami",
                            "content": "phone",
                            "length": 9,
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "placeholder": "",
                            "validation": "^(\\+998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ист",
                    "уфые еудусщь",
                    "телефония",
                    "видеотелефония",
                    "etc",
                    "уес",
                    "east",
                    "telecom",
                    "East Telecom"
                ],
                "myhome": true,
                "weight": 0.000022873918854825085,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6422d81a6a689d2b4b959554",
                "paycom_id": "6422cf57fc0dc40f82607ca7",
                "name": "UZGPS",
                "organization": "ООО «\"UZGPS\" MCHJ»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/243dd796b2aee46f1af379c47d19e7849c2d73c2.png",
                "date": 1680005146887,
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
                            "name": "vid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Xizmat turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "пакет подключения",
                                    "value": "1",
                                    "title": "пакет подключения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "абонентская плата",
                                    "value": "2",
                                    "title": "абонентская плата",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "абонентская плата",
                                    "value": "3",
                                    "title": "доп.услуги с разовой оплатой",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "U-",
                                "output": false
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
                    "UZGPS",
                    "uzgps ",
                    "узгпс"
                ],
                "weight": 0.000004282331840401044,
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



export const telefoniyaru =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "585bdb2ae084e20c5099792c",
                "paycom_id": "585bcbe7e084e20c50997928",
                "name": "Uzbektelecom",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/telephone.png",
                "date": 1482394258419,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 10000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Номер телефона",
                            "content": "phone",
                            "length": 9,
                            "placeholder": "",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": null,
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "домашний",
                    "городской",
                    "domashniy",
                    "gorodskoy",
                    "телефон",
                    "telefon",
                    "shaxar",
                    "шахар",
                    "tshtt",
                    "тштт",
                    "узтелеком",
                    "абонетская",
                    "Uzbektelecom",
                    "городской телефон"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.005036231138547744,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a17c68f80a11b2eb0bda8bd",
                "paycom_id": "599189654e4319d92565aee3",
                "name": "Карты Центральный телеграф",
                "organization": "Alfa Sugurta",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/central-telegraph.png",
                "date": 1511506937496,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 300000,
                        "max": 10000000,
                        "require": "nominal"
                    },
                    "account": [
                        {
                            "name": "nominal",
                            "title": "Номинал",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "3000",
                                    "amount": 300000,
                                    "title": "3 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "5000",
                                    "amount": 500000,
                                    "title": "5 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10000",
                                    "amount": 1000000,
                                    "title": "10 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "20000",
                                    "amount": 2000000,
                                    "title": "20 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "50000",
                                    "amount": 5000000,
                                    "title": "50 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "100000",
                                    "amount": 10000000,
                                    "title": "100 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "4500",
                                    "amount": 450000,
                                    "title": "4 500 - Россия-Казахстан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "6600",
                                    "amount": 660000,
                                    "title": "6 600 - Россия-Казахстан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "13200",
                                    "amount": 1320000,
                                    "title": "13 200 - Россия-Казахстан",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "центральный телеграф",
                    "central telegraph",
                    "международная телефония",
                    "междугородная телефония",
                    "карта",
                    "карты",
                    "пин",
                    "pin"
                ],
                "myhome": true,
                "weight": 0.00010653606041973327,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a1fd41f2868fa18387c014b",
                "paycom_id": "5a1fd2302868fa18387c0142",
                "name": "Для международных звонков",
                "organization": "ЧП «Ильхамов Илёс»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/central-telegraph2.png",
                "date": 1512035306588,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 300000,
                        "max": 10000000,
                        "require": "nominal"
                    },
                    "account": [
                        {
                            "name": "nominal",
                            "title": "Номинал",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "3000",
                                    "amount": 300000,
                                    "title": "3 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "5000",
                                    "amount": 500000,
                                    "title": "5 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10000",
                                    "amount": 1000000,
                                    "title": "10 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "20000",
                                    "amount": 2000000,
                                    "title": "20 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "50000",
                                    "amount": 5000000,
                                    "title": "50 000",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "100000",
                                    "amount": 10000000,
                                    "title": "100 000",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "центральный телеграф",
                    "central telegraph",
                    "uztelecom",
                    "uztelekom",
                    "узбектелеком",
                    "узтелеком",
                    "международная телефония",
                    "междугородная телефония",
                    "карта",
                    "карты",
                    "пин",
                    "pin"
                ],
                "myhome": true,
                "weight": 0.00009995589198204386,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5825749764c7f063ab8c4a22",
                "paycom_id": "5e99fd507e9d5726ece415d6",
                "name": "East Telecom",
                "organization": "ООО «East Telecom»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/21069bcd4ee4cff55b41df2e7ebf1491388b62ff.png",
                "date": 1478848429079,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "account",
                            "title": "Номер телефона",
                            "content": "phone",
                            "length": 9,
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "placeholder": "",
                            "validation": "^(\\+998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ист",
                    "уфые еудусщь",
                    "телефония",
                    "видеотелефония",
                    "etc",
                    "уес",
                    "east",
                    "telecom",
                    "East Telecom"
                ],
                "myhome": true,
                "weight": 0.000022873918854825085,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6422d81a6a689d2b4b959554",
                "paycom_id": "6422cf57fc0dc40f82607ca7",
                "name": "UZGPS",
                "organization": "ООО «\"UZGPS\" MCHJ»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/243dd796b2aee46f1af379c47d19e7849c2d73c2.png",
                "date": 1680005146887,
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
                            "name": "vid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "пакет подключения",
                                    "value": "1",
                                    "title": "пакет подключения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "абонентская плата",
                                    "value": "2",
                                    "title": "абонентская плата",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "абонентская плата",
                                    "value": "3",
                                    "title": "доп.услуги с разовой оплатой",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "U-",
                                "output": false
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
                    "UZGPS",
                    "uzgps ",
                    "узгпс"
                ],
                "weight": 0.000004282331840401044,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "653f7baa74b04dc1cef6689f",
                "paycom_id": "653f7a82e994d122185940e2",
                "name": "BUZTON - Телефония",
                "organization": "ООО «Payme»",
                "active": true,
                "type": 175,
                "logo": "https://cdn.payme.uz/merchants/4f89bd58bbc67c3c4a02f56c86eccf6883b0e5b5.png",
                "date": 1698659242748,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Номер телефона",
                            "content": "phone",
                            "length": 9,
                            "placeholder": "",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": null,
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "biline",
                    "билайн",
                    "телефония",
                    "telephony"
                ],
                "weight": 3.1334135417568613e-7,
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