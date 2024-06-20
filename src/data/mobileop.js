export const operators =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "545c7ecd5ae5eca82d1b462f",
                "paycom_id": "607d6f64ae0f7b0dc46badb1",
                "name": "Beeline",
                "organization": "ООО «Unitel»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/3a9f50a0737ffe196d5a6268f1fa3ac3858f2013.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 150000000
                    },
                    "account": [
                        {
                            "name": "phone",
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
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
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
                    "beline",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.15004872980293021,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1d9a5ae5eca82d1b4632",
                "paycom_id": "608bcd608ad987025c606085",
                "name": "UzMobile CDMA",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/uzmobile-cdma.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Telefon raqami",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validate": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "_validate": "^(\\+?998)?((99)[0-9]{7}|(95)[0-9]{7}|(77)[0-9]{7})$",
                            "error": null,
                            "placeholder": "",
                            "validation": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узмобайл сидима",
                    "epvj,fqk cblbvf",
                    "сотовый",
                    "мобильный",
                    "cdma",
                    "телефон",
                    "telefon"
                ],
                "additional_info": false,
                "myhome": true,
                "weight": 0.14259131002066694,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1b1e5ae5eca82d1b4630",
                "paycom_id": "620f8e865bc11f13c1d8fcb5",
                "name": "Ucell",
                "organization": "ООО «COSCOM»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/ucell.png",
                "date": 1399114284039,
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
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "placeholder": "",
                            "replace": "[ -]",
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "юселл",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.12176967258857455,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "549981c05ae5eca82d1b4661",
                "paycom_id": "54f419dcd2c4830936e6c82a",
                "name": "UMS",
                "organization": "ООО «Universal Mobile Systems»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/76fecb746b69a3ee09cba43bc3976751a9c0e6ce.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Telefon raqami",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "юмс",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon",
                    "mobiuz",
                    "мобиуз"
                ],
                "myhome": true,
                "weight": 0.11683162174100185,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1cae5ae5eca82d1b4631",
                "paycom_id": "607ea4daae0f7b0dc46bae5c",
                "name": "Perfectum",
                "organization": "ИП ООО «Rubicon Wireless Communication»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/perfectum.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "phone",
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
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "перфектум",
                    "сотовый",
                    "мобильный",
                    "cdma",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.005007612628199699,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "55478199d2c4830936e6c832",
                "paycom_id": "608bcd608ad987025c606085",
                "name": "UzMobile",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/3c42a7f5eef5de70f228aa41bb85e83dcf6ed8b1.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Telefon raqami",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validate": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "_validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "validation": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узмобайл джсм",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon",
                    "cdma",
                    "gsm",
                    "сидима",
                    "жсм"
                ],
                "additional_info": false,
                "myhome": true,
                "weight": 0,
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








export const operatorsru =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "545c7ecd5ae5eca82d1b462f",
                "paycom_id": "607d6f64ae0f7b0dc46badb1",
                "name": "Beeline",
                "organization": "ООО «Unitel»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/3a9f50a0737ffe196d5a6268f1fa3ac3858f2013.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 150000000
                    },
                    "account": [
                        {
                            "name": "phone",
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
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
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
                    "beline",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.15004872980293021,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1d9a5ae5eca82d1b4632",
                "paycom_id": "608bcd608ad987025c606085",
                "name": "UzMobile CDMA",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/uzmobile-cdma.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Номер телефона",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validate": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "_validate": "^(\\+?998)?((99)[0-9]{7}|(95)[0-9]{7}|(77)[0-9]{7})$",
                            "error": null,
                            "placeholder": "",
                            "validation": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узмобайл сидима",
                    "epvj,fqk cblbvf",
                    "сотовый",
                    "мобильный",
                    "cdma",
                    "телефон",
                    "telefon"
                ],
                "additional_info": false,
                "myhome": true,
                "weight": 0.14259131002066694,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1b1e5ae5eca82d1b4630",
                "paycom_id": "620f8e865bc11f13c1d8fcb5",
                "name": "Ucell",
                "organization": "ООО «COSCOM»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/ucell.png",
                "date": 1399114284039,
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
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "placeholder": "",
                            "replace": "[ -]",
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "юселл",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.12176967258857455,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "549981c05ae5eca82d1b4661",
                "paycom_id": "54f419dcd2c4830936e6c82a",
                "name": "UMS",
                "organization": "ООО «Universal Mobile Systems»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/76fecb746b69a3ee09cba43bc3976751a9c0e6ce.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Номер телефона",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "юмс",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon",
                    "mobiuz",
                    "мобиуз"
                ],
                "myhome": true,
                "weight": 0.11683162174100185,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e1cae5ae5eca82d1b4631",
                "paycom_id": "607ea4daae0f7b0dc46bae5c",
                "name": "Perfectum",
                "organization": "ИП ООО «Rubicon Wireless Communication»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/perfectum.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "phone",
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
                            "validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "перфектум",
                    "сотовый",
                    "мобильный",
                    "cdma",
                    "телефон",
                    "telefon"
                ],
                "myhome": true,
                "weight": 0.005007612628199699,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "55478199d2c4830936e6c832",
                "paycom_id": "608bcd608ad987025c606085",
                "name": "UzMobile",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 50,
                "logo": "https://cdn.payme.uz/merchants/3c42a7f5eef5de70f228aa41bb85e83dcf6ed8b1.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "phone",
                            "title": "Номер телефона",
                            "content": "phone",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "replace": "[ -]",
                            "validate": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "_validation": "^(\\+?998)?([0-9]{2})[0-9]{7}$",
                            "error": null,
                            "placeholder": "",
                            "validation": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узмобайл джсм",
                    "сотовый",
                    "мобильный",
                    "телефон",
                    "telefon",
                    "cdma",
                    "gsm",
                    "сидима",
                    "жсм"
                ],
                "additional_info": false,
                "myhome": true,
                "weight": 0,
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