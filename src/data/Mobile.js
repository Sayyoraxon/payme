export const mobileOperators =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
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
                "weight": 0.004916037632002499,
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