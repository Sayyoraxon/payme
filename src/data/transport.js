export const transport =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "5e280fb8ba8ac3e976c4bead",
                "paycom_id": "5e26d62cee1d825e7c022cf7",
                "name": "ATTO",
                "organization": "ООО «AVTOMATLASHTIRILGAN TRANSPORT TO’LOV TIZIMI OPERATORI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a4d5cad3ad9d8f0c6dbde0cdbb23166bce83a88b.png",
                "date": 1579683768716,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "card_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Transport karta raqami",
                            "type": "text",
                            "validation": "^[0-9]{16}$",
                            "prefix": null,
                            "require": null,
                            "scan": "CARD_NUMBER",
                            "error": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "karta",
                    "transport",
                    "карта",
                    "транспорт",
                    "автобус",
                    "метро",
                    "metro",
                    "avtobus",
                    "card",
                    "atto",
                    "атто",
                    "fnnj",
                    "феещ",
                    "cart",
                    "проездной ато",
                    "Транспортная карта",
                    "Transport kartasi"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.015471856045132853,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "59f9cae72081d7311ce4a619",
                "paycom_id": "59e88cf05edcd7253218424f",
                "name": "MyTaxi",
                "organization": "ООО «My Taxi Ops»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/my-taxi2.png",
                "date": 1509542614699,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "Haydovchi ID raqami",
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
                    "MyTaxi",
                    "My Taxi",
                    "майтакси",
                    "ьнефчш",
                    "ми такси",
                    "My Taxi Ops"
                ],
                "weight": 0.0033675839804441572,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60bf1851b8d597ed134dbdc9",
                "paycom_id": "60b886740d44ad636479e40c",
                "name": "YOTO",
                "organization": "ООО «YOTO CORP»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/db4c52a3f4ccd996380482edac7090c93d46bd1c.png",
                "date": 1623136337736,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 500000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "yoto",
                    "yoto corp",
                    "ёто",
                    "yoto",
                    "нщещ"
                ],
                "weight": 0.002791975912823422,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ce3e63db8cf8b180c5fc2b2",
                "paycom_id": "61e860fe82e271b9d3c22a4a",
                "name": "UZ TAXI",
                "organization": "ООО «UZ TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76db370a8e043c0e9fd4e5528ffef3c14f114c32.png",
                "date": 1558438722896,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 200000,
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
                                "output": true
                            },
                            "replace": "[ -]",
                            "placeholder": "",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "uzdriver",
                    "UZ TAXI",
                    "уз такси",
                    "uz taksi",
                    "уздрайвер",
                    "уз драйвер",
                    "taxi",
                    "такси"
                ],
                "weight": 0.0018043239644616592,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fad24488b38a19f0b399b34",
                "paycom_id": "60eed13b4be7164be6d92141",
                "name": "UNIVERSAL TAXI",
                "organization": "ООО «OOO Namangan Taksi Servis»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/22e337c48b2690781c22f3a2b571c32e6613ca4a.png",
                "date": 1605182536184,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi raqami",
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
                    "универсал",
                    "такси",
                    "водителям",
                    "taxi UNIVERSAL",
                    "универсал такси"
                ],
                "weight": 0.0009877563954798212,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6086a07cb8d597ed134d97d8",
                "paycom_id": "6086989d7bb924422cdc6ce2",
                "name": "MAXIMUM INCOM",
                "organization": "ООО «ООО \"MAXIMUM INCOM\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ffd268168308870b5a1daecc4366d454e8d1f4d7.png",
                "date": 1619435644574,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi raqami",
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
                    "maximum incom",
                    "rohat qulay taksi",
                    "qulay taksi",
                    "taxi",
                    "рохат такси",
                    "INCOM",
                    "ШТСЩЬ"
                ],
                "weight": 0.0005101282893820025,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61f1491397451069bafadbac",
                "paycom_id": "61f14832d4531dde9ea95925",
                "name": "GRAND DOSTAVKA",
                "organization": "ООО «GLOBAL STAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f5197c2068e0a81c331171c10296bcc6777973bf.png",
                "date": 1643202835936,
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
                            "name": "number_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID raqamlari",
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
                    "grand dostavka",
                    "гранд доставка",
                    "пкфтв вщыефмлф"
                ],
                "weight": 0.00034543455357158775,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f6228e343ac7e3a95983",
                "paycom_id": "62f4f08ca12ad7a48f4a861f",
                "name": "Real Taxi Plus",
                "organization": "ООО «ALI GRAND WAY SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9ba5171f7de72cdceac52d60ac23830c91bd7a04.png",
                "date": 1660220962339,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Real driver",
                    "Куфд вкшмук",
                    "реал драйвер",
                    "реал драйвер"
                ],
                "myhome": true,
                "weight": 0.00030630219583201916,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65968bd64de4489c5e27b712",
                "paycom_id": "6596482d5c8188fb6e91c756",
                "name": "TAXI OK",
                "organization": "ООО «\"TAXI 01\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/167612c8320724f43366b23b673ca7aa88850813.png",
                "date": 1704365014101,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "taxi ok",
                    "такси ок",
                    "ефчш щл"
                ],
                "weight": 0.0002564717834586116,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "660502db12d57e0dca11f1dc",
                "paycom_id": "6605024f5b347a44404c79dd",
                "name": "TAXI SULTAN",
                "organization": "ООО «\"TAXI-SULTAN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/408c26b546d60d34fe082c533f95bacdf07cc713.png",
                "date": 1711604443281,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "901234567",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "park_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hudud",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ташкент",
                                    "value": "1",
                                    "title": "Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарканд",
                                    "value": "2",
                                    "title": "Самарканд",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухара",
                                    "value": "3",
                                    "title": "Бухара",
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
                        }
                    ]
                },
                "keywords": [
                    "Taxi sultan",
                    "taksi sultan",
                    "такси султан",
                    "taxisultan",
                    "sultan taxi",
                    "sultantaxi",
                    "sultan taksi"
                ],
                "weight": 0.0002004477605077184,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "652e7d884c0c6f03e2a70c10",
                "paycom_id": "65293180f67194aa76c65100",
                "name": "Mana Mustang N 1",
                "organization": "ООО «\"HUMOYUN MUSTANG TAXI PARK\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f38e3d9f556a25712ac3353b3f141a58364c552d.png",
                "date": 1697545608694,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ҳайдовчи ID",
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
                    "MANA TAXI",
                    "MANA TAksi",
                    "мана такси"
                ],
                "weight": 0.0001888112800288059,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62da91192cfc087774bba5e5",
                "paycom_id": "60dc21442bb66530d56bb481",
                "name": "Orient taxi - Водитель",
                "organization": "ООО «ООО \"ORIENT TAXI SYSTEM\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a400339a78b1a60d0bf727d6dc418ca859beb0c4.png",
                "date": 1658491161182,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "Orient Taxi",
                    "Щкшуте Ефчш",
                    "ориент такси",
                    "jhbtyn nfrcb"
                ],
                "weight": 0.00018364993788090117,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6189f910d0b8d9eb96e41dc5",
                "paycom_id": "6189f83d64198587b894c9fc",
                "name": "GRAND TAXI",
                "organization": "ООО «GLOBAL STAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a423e616c0e3f6a915076b56ecf717089c8c6987.png",
                "date": 1636432144535,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "taxi",
                    "tahi",
                    "такси",
                    "гранд",
                    "grand",
                    "nfrcb",
                    "uhfyl",
                    "перевоз",
                    "авто",
                    "пкфтв ефчш"
                ],
                "weight": 0.00018121003068370987,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60d9999e0a40376aa994a34b",
                "paycom_id": "60d998e92bb66530d56b7f80",
                "name": "CAR WASH",
                "organization": "ООО «\"AVTORITET CAR WASH\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/198f956222b5f112e0b5d04ce13f1f875c9c928c.png",
                "date": 1624873374308,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Avtomobil raqami",
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Filiali",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Kadysheva",
                                    "value": "Kadysheva",
                                    "title": "Kadysheva",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Tarakkiet",
                                    "value": "Tarakkiet",
                                    "title": "Tarakkiet",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Nurafshon",
                                    "value": "Nurafshon",
                                    "title": "Nurafshon",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Northern",
                                    "value": "Northern",
                                    "title": "Shimoliy",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Lunacharsky",
                                    "value": "Lunacharsky",
                                    "title": "Lunacharskiy Markazi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чигатай",
                                    "value": "Chigatay",
                                    "title": "Chiq'atoy",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган",
                                    "value": "namangan",
                                    "title": "Namangan",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Депо",
                                    "value": "depo",
                                    "title": "Депо",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Юнусабад",
                                    "value": "yunus",
                                    "title": "Юнусабад",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мироншох",
                                    "value": "mironshox",
                                    "title": "Мироншох",
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
                        }
                    ]
                },
                "keywords": [
                    "car wash",
                    "мойка автомобиля машины",
                    "кар ваш",
                    "AVTORITET"
                ],
                "weight": 0.00017079350380339302,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f4258e343ac7e3a95953",
                "paycom_id": "62f4f039a12ad7a48f4a860c",
                "name": "Smart taxi",
                "organization": "ООО «Smart way trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aa3792468c78c4ac00ef8be96afdae20ecb834fa.png",
                "date": 1660220453211,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Smart taxi",
                    "Ыьфке ефчш",
                    "смарт такси",
                    "cvfhn nfrcb"
                ],
                "myhome": true,
                "weight": 0.00017051197604987095,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62736e4574c0eaf7a054e918",
                "paycom_id": "62736c7ef4b7573acb3ddaa7",
                "name": "Zoom Logistic",
                "organization": "ООО «STOR FAMILJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3cb827be44307c6c06443a17ba205ab94ab50ed4.png",
                "date": 1651732037980,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "Zoom Taxi",
                    "Зум Такси",
                    "Ящщь Ефчш",
                    "Pev Nfrcb",
                    "Zoom Logistic"
                ],
                "weight": 0.00014254688586667804,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62ce99aecb6e753eb77b1953",
                "paycom_id": "62c3f479b2a26248fca89edf",
                "name": "Yapartner ",
                "organization": "ООО «ООО \"LEVELPAY\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f45cf7500b108ccc40cbe4fc7384883b64963e8f.png",
                "date": 1657706926842,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone",
                            "placeholder": "Kod bilan to'liq raqamni kiriting",
                            "replace": "[ -]",
                            "title": "Phone",
                            "type": "text",
                            "validation": null,
                            "require": null,
                            "error": null,
                            "prefix": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "Нфзфкетук",
                    "япартнер",
                    "Ya partner"
                ],
                "weight": 0.00014076387676103822,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5db9873b60753c412ac3b7e4",
                "paycom_id": "5db959227a1066cc7fe97b5b",
                "name": "777 TAXI",
                "organization": "ООО «777 TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ffebaf8aedbe67d5245602ddb821858c57f3cb5d.png",
                "date": 1572439867123,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Driver_ID",
                            "placeholder": "",
                            "title": "Xaydovchi ID",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "такси",
                    "777",
                    "777 taxi",
                    "taxi",
                    "taksi",
                    "taksi 777"
                ],
                "weight": 0.00014067003417653085,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fcbc8e343ac7e3a95a19",
                "paycom_id": "62f4f1bfa12ad7a48f4a8662",
                "name": "Start taxi",
                "organization": "ООО «Start taxi plus»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/66cdba15c3bf1fcb8348cf8d2f820e84fb9197e3.png",
                "date": 1660222652624,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Start taxi",
                    "Ыефке ефчш",
                    "старт такси",
                    "cnfhn nfrcb"
                ],
                "myhome": true,
                "weight": 0.00013616559012017763,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6426d9926a689d2b4b959bea",
                "paycom_id": "6426d684fc0dc40f8260df01",
                "name": "GTA TAXI",
                "organization": "ООО «\"TAQVO 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/34c71c7ba743f3790ff912f9db5987ea3d4fe5cd.png",
                "date": 1680267666964,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "gta taxi",
                    "TAQVO 777",
                    "gta taksi",
                    "taksi gta",
                    "taxi gta",
                    "такси гта",
                    "пеф ефчш"
                ],
                "weight": 0.00013128577572579496,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659b8a654de4489c5e27bcd3",
                "paycom_id": "6597f1cf581cb23f75f171a5",
                "name": "CARDIN ZARAFSHON",
                "organization": "ООО «\"SAFARON LINE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2da4daebd1e75edc952059c46fbd30a5776482b9.png",
                "date": 1704692325504,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
                            "type": "text",
                            "validation": "^[0-9]{0,9}$",
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
                    "CARDIN ZARAFSHON",
                    "KARDIN ZARAFSHON",
                    "кардин зарафшон",
                    "taxi cardin zarafshon"
                ],
                "weight": 0.0001254675354863387,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f76a8e343ac7e3a959c4",
                "paycom_id": "62f4f0d9a12ad7a48f4a8630",
                "name": "BRAVO TAXI",
                "organization": "ООО «Cabman»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/df4fd60e8ab9ebe03f8f9a832800c450396ef433.png",
                "date": 1660221290261,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "CABMAN",
                    "СФИЬФТ",
                    "кабман",
                    "rf,vfy"
                ],
                "myhome": true,
                "weight": 0.00011542637894405134,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64de1a1d2208ca5249eef0e0",
                "paycom_id": "64de0c84d213de58efc511ee",
                "name": "RICH TAXI",
                "organization": "ООО «ООО \"RICH TAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/63862157065863d0f8938070c91f2ee8068faa75.png",
                "date": 1692277277947,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "rich taxi",
                    "rich taksi",
                    "рич такси",
                    "taxi rich",
                    "taksi rich"
                ],
                "weight": 0.00010153767643696223,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6433a4d2edabbd6b24e6df80",
                "paycom_id": "642d5316227b71e871934063",
                "name": "BUXORO TAXI",
                "organization": "ООО «\"ATOSH TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c6627884cfec014ae5da278a1230e8cbd4f9e83b.png",
                "date": 1681106130731,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
                            "type": "text",
                            "validation": "^[0-9]{3,10}$",
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
                    "buxoro taxi",
                    "taksi buxoro",
                    "taxi buxoro",
                    "такси бухоро",
                    "бухоро такси",
                    "игчщкщ ефчш"
                ],
                "weight": 0.00009234110315524107,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "660fa46090823bcdf98bf294",
                "paycom_id": "660e3f8c8dd95c4de5e1a852",
                "name": "Bekjaan taxi",
                "organization": "ООО «\"BEKJAAN ALOQA SIYSTEM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/281abffc2e8de4675367f8e4183e98788ad8b28b.png",
                "date": 1712301152452,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi ID",
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
                    "Bekjaan taxi",
                    "Bekjan taxi",
                    "Bekjaan taksi",
                    "бекжан такси"
                ],
                "weight": 0.00008530290931718915,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "646ef4aed46ad0b8e075a4cf",
                "paycom_id": "646c9fbb2302bceec65e7baa",
                "name": "TAXI UNIQUE",
                "organization": "ООО «MILLENNIUM GLOBAL TREYDING MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/63e5889fdce6356be239d72f4c49044c8d6c69fb.png",
                "date": 1684993198677,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "TAXI UNIQUE ",
                    "ЕФЧШ ГТШЙГУ ",
                    "такси юник",
                    "nfrcb .ybr"
                ],
                "weight": 0.00007713860446504894,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5cd505543dd3183058ae7093",
                "paycom_id": "60939abb5d157d44f1e302ae",
                "name": "GM Uzbekistan",
                "organization": "АО UzAuto Motors",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5cd505543dd3183058ae7093.png",
                "date": 1557480218652,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 50000000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To`lov turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Оплата за автомобиль",
                                    "value": "01",
                                    "title": "Оплата за автомобиль по ПИНФЛ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за автомобиль по договорам до 1 июля 2021 года",
                                    "value": "02",
                                    "title": "Оплата за автомобиль по ИНН",
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
                            "name": "pinfl",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haridor PINFL",
                            "type": "text",
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "PINFL 14 ta raqamdan iborat va noldan boshlanmasligi kerak",
                            "optional": true,
                            "prefix": null,
                            "visible": {
                                "require": "payment_type",
                                "value": "^01$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haridor STIRi",
                            "type": "text",
                            "validation": "^\\d{9}$",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^02$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_n",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
                            "type": "text",
                            "validation": "^\\d-\\d{3}-\\d{4}-((\\d{5}[a-zA-Z]{2})|(\\d{7}))$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "contract_d",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma sanasi",
                            "type": "text",
                            "validation": "^\\d{2}\\.\\d{2}\\.\\d{4}$",
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
                    "avto",
                    "auto",
                    "credit",
                    "gmuz",
                    "uzavto",
                    "uzauto",
                    "авто",
                    "автосаноат",
                    "гмуз",
                    "узавто",
                    "kredit",
                    "кредит",
                    "avtokredit",
                    "avtocredit",
                    "autocredit",
                    "car",
                    "motors",
                    "моторс",
                    "vjnjhc",
                    "ьщещкы",
                    "uvep",
                    "пьгя",
                    "GM Uzbekistan",
                    "GMUzbekistan",
                    "ГМУзбекистан",
                    "Uz avto",
                    "uz auto",
                    "UzAuto Motors",
                    "гяфмещ",
                    "epfdnj"
                ],
                "additional_info": true,
                "weight": 0.0000735725862537693,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61c16e255098a0cc1ad453de",
                "paycom_id": "61c08112204c85a50a899b4d",
                "name": "CITY TAXI ",
                "organization": "ООО «\"HEYSOLUTION\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6a38a343cf6e317c24a6b18b1ea0e94a45bee55c.png",
                "date": 1640066597665,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi raqami",
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
                    "CITY TAXI",
                    "сититакси",
                    "сити такси",
                    "CITYTAXI"
                ],
                "weight": 0.00006784818859882042,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5cb430263715d318dc943d29",
                "paycom_id": "5cb429ae12b024d116516417",
                "name": "PRO TAXI",
                "organization": "ООО «Two Winners Group»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/pro_taxi.png",
                "date": 1555312281555,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "Haydovchi ID",
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
                    "такси",
                    "про такси",
                    "транспорт",
                    "taxi",
                    "PRO TAXI"
                ],
                "weight": 0.00006700360533825418,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0f6a86a26af9b0b1d5a12",
                "paycom_id": "65b0f5de3c319dec9d889c6b",
                "name": "\"ZETA PETROL\" MCHJ",
                "organization": "ООО «\"ZETA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706096296515,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "ZETA PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.00005593018036638585,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63f35a366a689d2b4b955592",
                "paycom_id": "63f0a339711fdb85d8880649",
                "name": "PROFI TAXI - Yandex Go",
                "organization": "ООО «PREMIUM NEW TAXI SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/809b7bfd229343cf5e1b7365633ec17731645d2a.png",
                "date": 1676892726100,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "PROFI TAXI - Yandex Go",
                    "ЗКЩАШ ЕФЧШ - Нфтвуч Пщ",
                    "Профи такси - яндекс го",
                    "Ghjab nfrcb - zyltrc uj"
                ],
                "weight": 0.000051613421479047344,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64004c746a689d2b4b956c4d",
                "paycom_id": "63fdee778fcd96f893b6cf17",
                "name": "Novza Taxi",
                "organization": "ООО «\"01 POYTAXT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/79394485c0fb7338af8db56e706e02d3cea43613.png",
                "date": 1677741172964,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "novza taxi",
                    "новза такси",
                    "такси новза",
                    "taksi novza",
                    "тщмяф ефчш"
                ],
                "weight": 0.00004842277360579714,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64352175edabbd6b24e6e2e3",
                "paycom_id": "6435034f5a04ae2eb622c118",
                "name": "MD TAXI",
                "organization": "ООО «\"MANSUR SHAX\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5cebb558c84279e103ab28c59edaec9f4354f65f.png",
                "date": 1681203573665,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "taxi md",
                    "md taxi",
                    "mdtaxi",
                    "такси мд",
                    "мд такси",
                    "ьв ефчш",
                    "taksi md"
                ],
                "weight": 0.00004607670899311317,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64abab165b17f8b641a8e9d1",
                "paycom_id": "64aba8ffe4e564c982849a0d",
                "name": "SUPER GOOD OIL",
                "organization": "ООО «OOO \"SUPER GOOD OIL»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/17f140ad83f09e2da4d2aba9ff68cf1010013ba4.png",
                "date": 1688972054152,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ -80",
                                    "value": "ai80",
                                    "title": "АИ -80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ - 92",
                                    "value": "ai92",
                                    "title": "АИ - 92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ - 95",
                                    "value": "ai95",
                                    "title": "АИ - 95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Dizel",
                                    "value": "dizelfuel",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "SUPER GOOD OIL",
                    "good oil",
                    "super gud oil",
                    "gud oil",
                    "супер гуд оил",
                    "ыгзук пщщв щшд",
                    "пщщв щшд"
                ],
                "weight": 0.000043167588873385054,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61d8331920e4769f447b2419",
                "paycom_id": "61d831bc94e58c782a45f7ca",
                "name": "FRESH GLOBUS",
                "organization": "ООО «ООО \"KATARSIS\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/06e63927d9817d1b089c1b9547943ec4100e25cc.png",
                "date": 1641558809958,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "FRESH GLOBUS",
                    "GLOBUS",
                    "транспорт"
                ],
                "weight": 0.000042698375950848256,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65aa1069f1b913a488b0ed9a",
                "paycom_id": "65a7ac3a727f520807e927f7",
                "name": "Alif Taxi",
                "organization": "ООО «\"ALLONE DRIVER\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/db6dfd318cb40c9e46ec8c3fbef4a45bafcde866.png",
                "date": 1705644137278,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi ID",
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
                    "Alif Taxi",
                    "алиф такси",
                    "aliff taxi",
                    "alif taksi"
                ],
                "weight": 0.00004063383909168636,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "642e6813edabbd6b24e6db15",
                "paycom_id": "642e67c369ec50f00a60030c",
                "name": "Full Oil",
                "organization": "ООО «ООО \"FULLOIL\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b892dcb583afbcc1c79fff9a6447a67e9ce14f1.png",
                "date": 1680762899230,
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
                            "name": "fuel",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ -80",
                                    "value": "80",
                                    "title": "АИ -80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ -92",
                                    "value": "92",
                                    "title": "АИ -92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Dizel",
                                    "value": "dizel",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "Full Oil",
                    "Oil",
                    "FULLOIL "
                ],
                "weight": 0.00003838161706350975,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6556f8ac2810c5501703709e",
                "paycom_id": "6555ed20ae6f794a7c7c2fd6",
                "name": "AVIA TAXI",
                "organization": "ООО «\"NOVAIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/547c086dbd9fb42c4eb5b9222e178e9a67b93477.png",
                "date": 1700198572228,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "AVIA TAXI ",
                    "АВИА ТАКСИ",
                    "такси авиа ",
                    "TAXI  AVIA "
                ],
                "weight": 0.000038193931894495034,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f5021f8e343ac7e3a95a54",
                "paycom_id": "62f4f290a12ad7a48f4a86a1",
                "name": "Xon Taxi",
                "organization": "ООО «\"LATIF TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ada5e95bcc77c96de351a7642e9702b37e638c51.png",
                "date": 1660224031713,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Xon Taxi",
                    "Чщт Ефчш",
                    "[jy nfrcb",
                    "хон такси"
                ],
                "myhome": true,
                "weight": 0.000036035552450825785,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a4ce6e91578e6d2d800dcc",
                "paycom_id": "65a4ce2dc9a68d35404e9638",
                "name": "Davr TAXI",
                "organization": "ООО «\"MUBINA REVIVEL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8a0c8fa23172aa8bc44ab008d585059609fa2393.png",
                "date": 1705299566149,
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
                            "name": "id_driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID haydovchi",
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
                    "Davr TAXI",
                    "Давр такси",
                    "Davron taxi"
                ],
                "weight": 0.00003584786728181106,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659f98cfdd5445e8fefd8dec",
                "paycom_id": "659f97b05c8188fb6e927e3e",
                "name": "TULPAR TAXI",
                "organization": "ООО «\"TULPAR XXX\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4a7494ca1d5158584671c730816c510c00256d20.png",
                "date": 1704958159063,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "998",
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
                    "TULPAR taxi",
                    "taxi tulpar",
                    "tulpar taksi",
                    "taksi tulpar",
                    "тулпар"
                ],
                "weight": 0.00003566018211279635,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a2d22a5b17f8b641a8df6f",
                "paycom_id": "64a1425894aff0d52dbdd5d9",
                "name": "ONIX TAXI",
                "organization": "ООО «\"BENEFITS AND GOALS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b7dfa97fb3a0392b21cffc2532871e182cc53bb.png",
                "date": 1688392234399,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "onix taxi",
                    "oniks taksi",
                    "оник такси",
                    "taxi oniks",
                    "taxi onix"
                ],
                "weight": 0.000035097126605752195,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "629dd034aa40a686d47ce9c2",
                "paycom_id": "629dcf743cfcbb1628b3dee9",
                "name": "MOBILE TAXI",
                "organization": "ООО «ООО \"MOBILE TAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/39a442ec63b923ac6b3242ab07cbcf569e78a501.png",
                "date": 1654509620360,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi chaqiruvi",
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
                    "mobile taxi",
                    "мобайл такси",
                    "такси",
                    "TAXI",
                    "ьщишду ефчш",
                    "vj,fqk nfrcb"
                ],
                "weight": 0.0000346279136832154,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "639874e2ceaba24113c3896f",
                "paycom_id": "639866dd0c4c67ea060422ec",
                "name": "DELFIN TAXI",
                "organization": "ООО «\"SHAXRAM SHOXJAHON 2022\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f65207e1a9bede72a805d12ed183a0f1d9f59b4f.png",
                "date": 1670935778156,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "DELFIN TAXI",
                    "ВУДАШТ ЕФЧШ",
                    "Дельфин такси",
                    "Ltkmaby nfrcb"
                ],
                "weight": 0.0000346279136832154,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63186617e5b34221aeba1fe0",
                "paycom_id": "6315e60edfcda2d1a53f72b0",
                "name": "Taxi 1053",
                "organization": "ООО «\"TAXI LEADER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/eefac1100aa812b4504a876dc76385a7c961532b.png",
                "date": 1662543383006,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi raqami",
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
                    "taxi 1053",
                    "ефчш 1053",
                    "такси 1053",
                    "nfrcb 1053"
                ],
                "weight": 0.000033407960084619737,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63bf989d885f2bda14e730e2",
                "paycom_id": "63be7626d3af34dee9995d14",
                "name": "AS TAXI",
                "organization": "ООО «\"AS-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/071fd066114fc80b977ef214d2e503367e2a7d5b.png",
                "date": 1673500829685,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "ФЫ Ефчш",
                    "As Taxi",
                    "АС Такси"
                ],
                "weight": 0.00003256337682405351,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5efdbe31343eb86f54d3448d",
                "paycom_id": "5efdbd2e469ba6fe197a9e74",
                "name": "YaMotors",
                "organization": "ООО «OMA MOTORS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/850564bbac5cf5a5558e9e36ce111881b06dbc55.png",
                "date": 1593687601706,
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
                            "name": "Drivers_call_sign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi chaqiruvi",
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
                            "name": "Phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "перегон",
                    "доставка",
                    "такси",
                    "oma motors",
                    "YaMotors"
                ],
                "weight": 0.00003171879356348728,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fe3d8e343ac7e3a95a2b",
                "paycom_id": "62f4f240a12ad7a48f4a8687",
                "name": "TAXI OSON",
                "organization": "ООО «TAXI OSON MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/99dfebbb26f7355c21859a1300444ca452e9ea43.png",
                "date": 1660223037519,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "TAXI OSON",
                    "ЕФЧШ ЩЫЩТ",
                    "такси осон",
                    "nfrcb jcjy"
                ],
                "myhome": true,
                "weight": 0.0000314372658099652,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fb0f8e343ac7e3a95a03",
                "paycom_id": "62f4f167a12ad7a48f4a8644",
                "name": "Free Taxi",
                "organization": "ООО «Smart group truck»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8e51b970e3ea06499e14da1b446abe7a0e659f53.png",
                "date": 1660222223090,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Free Taxi",
                    "Акуу Ефчш",
                    "фпи такси",
                    "agb nfrcb"
                ],
                "myhome": true,
                "weight": 0.00003078036771841369,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64b9038f5b17f8b641a905ee",
                "paycom_id": "64b90342e4e564c98285ba3a",
                "name": "LINE-TAXI 77",
                "organization": "ООО «\"LINE-TAXI 77\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d728cb5bdbc1be5386769e25d2e48d0fb247c53f.png",
                "date": 1689846671402,
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
                            "name": "poziv",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "LINE-TAXI 77",
                    "LINE TAXI 77",
                    "line taksi 77"
                ],
                "weight": 0.000030311154795876893,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659bd1aa4de4489c5e27bf62",
                "paycom_id": "6597f13de75f9e9e68034451",
                "name": "CARDIN XATIRCHI",
                "organization": "ООО «\"CARDINGO\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/596b844daf9bec9ce9881cb662303672678ba600.png",
                "date": 1704710570363,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
                            "type": "text",
                            "validation": "^[0-9]{0,9}$",
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
                    "CARDIN XATIRCHI",
                    "cardin xatirchi",
                    "kardin xatirchi",
                    "кардин хатирчи"
                ],
                "weight": 0.000027777405014178206,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e6bd6a26af9b0b1d595a",
                "paycom_id": "65b0e6143c319dec9d8899e7",
                "name": "\"PETROL DELTA\"",
                "organization": "ООО «\"PETROL DELTA\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706092221952,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "PETROL DELTA",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000027026664338119335,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "637c92eecd272e1b86e36878",
                "paycom_id": "637c91204050a4f6853383e9",
                "name": "TAKSI TEZZ",
                "organization": "ООО «\"TAKSI TEZZ\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3e670a4333cc2862b99835c307e15fe4390d6cb1.png",
                "date": 1669108462346,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1000000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "drver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Qo'ng'iroq belgisi",
                            "type": "text",
                            "validation": "^[0-9]{1,4}$",
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
                    "TAKSI TEZZ",
                    "Такси Тэзз",
                    "Тэз",
                    "Ефлыш Еуяя"
                ],
                "weight": 0.000024868284894450085,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648050f7c34b8a5ddef9ab57",
                "paycom_id": "64802aa4bdb73dc1caa9a00a",
                "name": "UZUN TAXI",
                "organization": "ООО «\"MIR-COMFORT N1\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/894639f0c82d4e4dd87e9feb903156034bc6927d.png",
                "date": 1686130935156,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "UZUM TAXI",
                    "Узум такси",
                    "гягь ефчш",
                    "epev nfrcb"
                ],
                "weight": 0.00002439907197191329,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "609a177eb8d597ed134da44f",
                "paycom_id": "6098b9a651d5f0862e0d2230",
                "name": "ZERO TAXI PLUS",
                "organization": "ООО «ООО \"ZERO TAXI PLUS\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f078c683d7631d482a29f242d407e47461ff0af1.png",
                "date": 1620711294128,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Qo'ng'iroq",
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
                    "zero taxi plus",
                    "taxi plus",
                    "зеро такси",
                    "pthj nfrcb",
                    "яукщ ефлыш",
                    "ЕФЧШ ЗДГЫ"
                ],
                "weight": 0.000022897590619795548,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64351009edabbd6b24e6e2bd",
                "paycom_id": "6434a660e1c7455cbbf62731",
                "name": "LION SHER",
                "organization": "ООО «\"SHER BEST AVTO \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c71a31fc47d1dd97c8c0a08c86783cceef6a6da4.png",
                "date": 1681199113088,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "SHER BEST AVTO",
                    "lion sher",
                    "taxi lion",
                    "taksi sher",
                    "такси шер",
                    "лион шер",
                    "дшщт ырук"
                ],
                "weight": 0.000022897590619795548,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e23b6a26af9b0b1d58e3",
                "paycom_id": "65b0e1b73c319dec9d88994e",
                "name": "\"TRANSFER PETROL\" MCHJ",
                "organization": "ООО «\"TRANSFER PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091067365,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "TRANSFER PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.00002261606286627347,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659b8bd04de4489c5e27bd07",
                "paycom_id": "6597f0896789a5d9654594a2",
                "name": "CARDIN UCHQUDUQ",
                "organization": "ООО «\"TAXI CARDIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dad3dae15f32c343fade7a4946b55985bcb6ffee.png",
                "date": 1704692688959,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
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
                    "CARDIN UCHQUDUQ",
                    "kARDIN UCHQUDUQ",
                    "kardin uchquduk",
                    "cardin uchkuduk",
                    "UCHQUDUQ cardin",
                    "taxi cardin uchquduq"
                ],
                "weight": 0.000020457683422604218,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a10c0291578e6d2d800a69",
                "paycom_id": "65a10bcbc9a68d35404e4482",
                "name": "Smart Control Technology",
                "organization": "ООО «\"SMART CONTROL TECHNOLOGY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a5abb3028dd6bcd281b83b438c3280c41c1f1d4f.png",
                "date": 1705053186495,
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
                            "name": "data_content",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "TIN / PINFL",
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
                    "Smart Control Technology",
                    "Смарт контрол технологи",
                    "Смарт котроль технологий"
                ],
                "weight": 0.00002036384083809686,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6447777efdac8ead525c63cf",
                "paycom_id": "643e4f4f7eb779614cac01e6",
                "name": "Korzinka Parking",
                "organization": "ИП ООО «\"ANGLESEY FOOD\" MCHJ XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5ea04356512ae9989b5a89e2d8c2ace8ca2e1b81.png",
                "date": 1682405246683,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 1,
                        "round": false,
                        "require": "card"
                    },
                    "account": [
                        {
                            "name": "parking",
                            "title": "Парковка",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "values": [
                                {
                                    "name": "AZIMOVA PARKING",
                                    "value": "6470a9a42cb83937a7556c51",
                                    "title": "Korzinka — Azimov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "TURKMENSKY PARKING",
                                    "value": "6470a9902cb83937a7556c4c",
                                    "title": "Korzinka — Turkmenskiy",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ABAYA PARKING",
                                    "value": "6470a9802cb83937a7556c49",
                                    "title": "Korzinka — Abaya",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Avtomobil raqami",
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
                            "name": "card",
                            "type": "dynamic-select",
                            "requires": [
                                "car_number"
                            ],
                            "optional": true,
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "title": "Parkovka haqida ma'lumot",
                            "placeholder": "",
                            "error": null,
                            "scan": null,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "парковка корзинка",
                    "RPS Korzinka",
                    "gfhrjdrf rjhpbyrf"
                ],
                "weight": 0.000020269998253589503,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0ebdd6a26af9b0b1d597e",
                "paycom_id": "65b0eb6f3c319dec9d889ac7",
                "name": "\"GAMA PETROL\" MCHJ",
                "organization": "ООО «\"GAMA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706093533269,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "GAMA PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.000019800785331052708,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63982068ceaba24113c387a1",
                "paycom_id": "63975a6f0c4c67ea060407a8",
                "name": "YENGIL TAXI",
                "organization": "ООО «\"YENGIL AVTO TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a2a101f792497fee65d511163068a8848b765939.png",
                "date": 1670914152386,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "YENGIL TAXI",
                    "НУТПШД ЕФЧШ",
                    "ЕНГИЛ ТАХИ",
                    "ЕНГИЛ ТАКСИ"
                ],
                "weight": 0.000019050044654993837,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f2326c671506667ac65dbd",
                "paycom_id": "62e92c2a39c675be34e5bccf",
                "name": "Tezkor Taxi",
                "organization": "ООО «\"TIME-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cf0a63d69e93143001c8af75f9317e99af257740.png",
                "date": 1660039788997,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 50000000,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Tezkor Taxi",
                    "Еуялщк Ефчш",
                    "тезкор такси",
                    "ntprjh nfrcb"
                ],
                "weight": 0.000016610137457802507,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "624433495bc3e35a0e922337",
                "paycom_id": "624432d5257faf2854fd2c0e",
                "name": "CHILONZOR AVTO-PARKING",
                "organization": "ООО «\"CHILONZOR AVTO-PARKING\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dec05f8ef32010808afc8ef3e2b3d572b58bac08.png",
                "date": 1648636745022,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "adres",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Manzil",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Чилонзор №1 мавзе",
                                    "value": "chil1",
                                    "title": "Чилонзор №1 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 2 мавзе",
                                    "value": "chil2",
                                    "title": "Чилонзор № 2 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 3 мавзе",
                                    "value": "chil3",
                                    "title": "Чилонзор № 3 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 4 мавзе",
                                    "value": "chil4",
                                    "title": "Чилонзор № 4 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор №5 мавзе",
                                    "value": "chil5",
                                    "title": "Чилонзор №5 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 6 мавзе",
                                    "value": "chil6",
                                    "title": "Чилонзор № 6 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 7 мавзе",
                                    "value": "chil7",
                                    "title": "Чилонзор № 7 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 8 мавзе",
                                    "value": "chil8",
                                    "title": "Чилонзор № 8 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 9 мавзе",
                                    "value": "chil9",
                                    "title": "Чилонзор № 9 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 10 мавзе",
                                    "value": "chil10",
                                    "title": "Чилонзор № 10 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор №16 мавзе",
                                    "value": "chil16",
                                    "title": "Чилонзор №16 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 17 мавзе",
                                    "value": "chil17",
                                    "title": "Чилонзор № 17 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 18 мавзе",
                                    "value": "chil18",
                                    "title": "Чилонзор № 18 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 19 мавзе",
                                    "value": "chil19",
                                    "title": "Чилонзор № 19 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 20 мавзе",
                                    "value": "chil20",
                                    "title": "Чилонзор № 20 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 20А мавзе",
                                    "value": "chil20a",
                                    "title": "Чилонзор № 20А мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор  Ўзбек фильм мавзе",
                                    "value": "filmchil",
                                    "title": "Чилонзор  Ўзбек фильм мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Қозиробод мавзе",
                                    "value": "chilkoz",
                                    "title": "Чилонзор Қозиробод мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Қизил Шарқ мавзе",
                                    "value": "chilshark",
                                    "title": "Чилонзор Қизил Шарқ мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Гулистон мавзе",
                                    "value": "chilgul",
                                    "title": "Чилонзор Гулистон мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Алгоритм мавзе",
                                    "value": "chilalgo",
                                    "title": "Чилонзор Алгоритм мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Мевазор мавзе",
                                    "value": "chilmeva",
                                    "title": "Чилонзор Мевазор мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Лутфий мавзе",
                                    "value": "chillutf",
                                    "title": "Чилонзор Лутфий мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Бунёдкор кўчаси",
                                    "value": "chilbunyod",
                                    "title": "Чилонзор Бунёдкор кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Муқимий кўчаси",
                                    "value": "chilmuk",
                                    "title": "Чилонзор Муқимий кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор И-24 мавзе",
                                    "value": "chili24",
                                    "title": "Чилонзор И-24 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Наққошлик мавзе",
                                    "value": "chilnak",
                                    "title": "Чилонзор Наққошлик мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Беш ёғоч мавзе",
                                    "value": "chilbesho",
                                    "title": "Чилонзор Беш ёғоч мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Туроб Тўла кўчаси",
                                    "value": "chilturob",
                                    "title": "Чилонзор Туроб Тўла кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Бўрижар кўчаси",
                                    "value": "chilbur",
                                    "title": "Чилонзор Бўрижар кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 1А  Алгоритм",
                                    "value": "avto1",
                                    "title": "Автостоянка № 1А  Алгоритм",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 2А  Алгоритм",
                                    "value": "avto2",
                                    "title": "Автостоянка № 2А  Алгоритм",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 7Н  Наққошлик",
                                    "value": "avto7",
                                    "title": "Автостоянка № 7Н  Наққошлик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 8  5-мавзе",
                                    "value": "avto8",
                                    "title": "Автостоянка № 8  5-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 12Г  Гулистон",
                                    "value": "avto12",
                                    "title": "Автостоянка № 12Г  Гулистон",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 75  10-мавзе",
                                    "value": "avto75",
                                    "title": "Автостоянка № 75  10-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 230  16-мавзе",
                                    "value": "avto230",
                                    "title": "Автостоянка № 230  16-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Ц мавзе",
                                    "value": "chil_C_mavze",
                                    "title": "Чилонзор Ц мавзе",
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
                            "name": "autobox",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Autobox raqami",
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
                    "CHILONZOR AVTO-PARKING",
                    "парковка",
                    "сршдщтящк фмещ зфклштп"
                ],
                "weight": 0.000016047081950758355,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f04c5b88f9930638b5c9f1",
                "paycom_id": "65f04ab187d10089440447ad",
                "name": "TAXI 1415",
                "organization": "ЧП «O‘ROQOVA ZEBO»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aee324cb5dc2a0da7cd067fde72a8b9d6dffed2f.png",
                "date": 1710247003210,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
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
                    "TAXI 1415",
                    "taxi1415",
                    "taksi 1415",
                    "taksi1415",
                    "такси1415",
                    "такси 1415"
                ],
                "weight": 0.000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648c4af1f328b7550bba0482",
                "paycom_id": "648c4a01ad7a6692b68e24f2",
                "name": "SMS TAXI",
                "organization": "ООО «\"YENGIL AVTO TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/35dfb49e9f7e7bed04181efc54b132346d856ac3.png",
                "date": 1686915825251,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "SMS taxi",
                    "ЫЬЫ ефчш",
                    "смс такси",
                    "cvc nfrcb"
                ],
                "weight": 0.000012387221154971362,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64c217d2914d940008fe5f8d",
                "paycom_id": "64c216cec708e50621ebe98d",
                "name": "Best Oil Nurafshon",
                "organization": "ООО «\"BEST OIL NURAFSHON\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ba685a27d4cea09ea3ac0e8a071fc695af353ba1.png",
                "date": 1690441682640,
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
                            "name": "oil_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Benzin turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "4",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "best oil nurafshon",
                    "oil nurafshon",
                    "иуые щшд тгкфаырщт",
                    "бэст оил нурафшон"
                ],
                "weight": 0.00001173032306341985,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f9ae8e343ac7e3a959e0",
                "paycom_id": "62f4f118a12ad7a48f4a863c",
                "name": "SHOH TAXI",
                "organization": "ООО «Shohruh»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/361216aa8aac5665d4ed5a75345a5fc6f77d679e.png",
                "date": 1660221870283,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "Shoh Taxi",
                    "Ырщр Ефчш",
                    "шох таски",
                    "ij[ nfcrb"
                ],
                "myhome": true,
                "weight": 0.000011636480478912493,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64c212d2914d940008fe5f5f",
                "paycom_id": "64c2116ac708e50621ebe8e5",
                "name": "Super Good Oil Avangart",
                "organization": "ООО «\"SUPER GOOD OIL AVANGART\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ba685a27d4cea09ea3ac0e8a071fc695af353ba1.png",
                "date": 1690440402501,
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
                            "name": "oil_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Benzin turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "4",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "super good oil avangart",
                    "oil avangart",
                    "ыгзук пщщв щшд фмфтпфке",
                    "супер гуд оил авангард"
                ],
                "weight": 0.000011448795309897774,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0ede06a26af9b0b1d59a1",
                "paycom_id": "65b0ec9b3c319dec9d889af0",
                "name": "\"ALFA PETROL\" MCHJ",
                "organization": "ООО «\"ALFA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706094048646,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "ALFA PETROL",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000010698054633838904,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "640eb9706a689d2b4b958110",
                "paycom_id": "640eb54d8298b09e6a7e68d1",
                "name": "ADMIRAL TAXI",
                "organization": "ООО «\"PREMIUM ADMIRAL \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f827edba525c8dd3cdb5cc2f946f378ed592ae5f.png",
                "date": 1678686576892,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "Admiral Taxi",
                    "taxi admiral",
                    "адмирал такси",
                    "фвьшкфд ефчш",
                    "taksi admiral"
                ],
                "weight": 0.000010604212049331545,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f431de12d57e0dca11d4bc",
                "paycom_id": "65f2f1b487d1008944048a5f",
                "name": "TTB",
                "organization": "ООО «\"TEMIR TULPOR BUXORO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/42a1b658d9149730e9df90c982300688b6ca3480.png",
                "date": 1710502366199,
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
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi telefon raqami (9* ***  ** **)",
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
                    "TTB (TEZKOR TAXI BUXORO)",
                    "TTB (Tezkor taxi baraka)",
                    "temir TULPOR BUXORO"
                ],
                "weight": 0.000010510369464824187,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61e901b087325e773d7715fc",
                "paycom_id": "61e9014282e271b9d3c2341b",
                "name": "EXIM TRANS LOGISTICS",
                "organization": "ООО «MCHJ VED CONSULTANT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6efd0c2e6393053d9145d78f34484d7c1c74abc2.png",
                "date": 1642660272763,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Qo'ng'iroq raqami",
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
                    "EXIM TRANS",
                    "экзам транс ",
                    "EXIMTRANS"
                ],
                "weight": 0.000010228841711302109,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e8031388f9930638b5ba54",
                "paycom_id": "65e8025f3c319dec9d8d369e",
                "name": "DRIVER PRO",
                "organization": "ООО «\"DRIVER PRO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c2599e8944275fd36b0a1eafd920fca096ff6afc.png",
                "date": 1709703955533,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "DRIVER PRO",
                    "draiver pro",
                    "driverpro",
                    "pro driver",
                    "драйвер про"
                ],
                "weight": 0.000009102730697213804,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6576f3717aff6eaacc086b28",
                "paycom_id": "6576e25e43057b5376de6df9",
                "name": "ANZO TAXI",
                "organization": "ООО «\"AN-ZO GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7202d6a06ae01b8e1df23f969bf20891b2d29ee1.png",
                "date": 1702294385832,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "ANZO TAXI",
                    "ФТЯЩ ЕФЧШ",
                    "анзо такси",
                    "fypj nfrcb"
                ],
                "weight": 0.00000872736035918437,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e3a86a26af9b0b1d5917",
                "paycom_id": "65b0e3233c319dec9d889984",
                "name": "Petrol Shipment",
                "organization": "ООО «\"PETROL SHIPMENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091432771,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "PETROL SHIPMENT",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000008445832605662293,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6439517c3b2ea5dd250e5415",
                "paycom_id": "64394dfe5a04ae2eb6231df6",
                "name": "BARON TAXI",
                "organization": "ООО «\"BARON-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f44f093e7dc6491a05fa35d6a26ae719227c08c2.png",
                "date": 1681478012097,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "baron taxi",
                    "baron taksi",
                    "taksi baron",
                    "taxi baron",
                    "такси барон",
                    "барон такси",
                    "Барон",
                    "Baron",
                    "Ба",
                    "Ba"
                ],
                "weight": 0.000007695091929603422,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "646cb846d46ad0b8e075a10a",
                "paycom_id": "646cb70d2cb83937a7552289",
                "name": "KESH TAXI",
                "organization": "ООО «\"ABULAZIZ-BIZNES-TRADE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b19e4f5019fe4e81ab378f5ed6aa65f10429723a.png",
                "date": 1684846662535,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "purpose",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
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
                    "kesh taxi",
                    "kesh taksi",
                    "cash taxi",
                    "кеш такси",
                    "kesh taxi",
                    "taxi kesh"
                ],
                "weight": 0.000007413564176081346,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fae7f0b8b38a19f0b399c11",
                "paycom_id": "5fae402ee938edd0061771ef",
                "name": "Town Taxi",
                "organization": "ООО «\"TOWN-TAXI\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8ca401d48a8d3d8dc30525b290ebe44449b08dcc.png",
                "date": 1605271307899,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "town taxi",
                    "такси",
                    "такса",
                    "таун такси",
                    "тоун такси",
                    "Ещцт Ефчш",
                    "nfey nfrcb",
                    "taxi"
                ],
                "weight": 0.0000071320364225592694,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64df1d3a2208ca5249eef1e7",
                "paycom_id": "64df096040e7b5db63108d9e",
                "name": "ALO PRESTIJ SERVIS",
                "organization": "ООО «\"ALO PRESTIJ SERVIS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f3447e713ce68d67e9bb1874981828df981cca81.png",
                "date": 1692343610073,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "ALO PRESTIJ SERVIS",
                    "a'lo taxi",
                    "taxi a'lo",
                    "alo taxi",
                    "alo taksi"
                ],
                "weight": 0.000007038193838051911,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648fec56f328b7550bba0540",
                "paycom_id": "648fe7a1e76c7c81b6b1ae82",
                "name": "X GO TAXI",
                "organization": "ООО «\"X-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/79bcd5dd775bd2185984d6dc743ec87455564938.png",
                "date": 1687153750276,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "X GO TAXI",
                    "Ч ПЩ ЕФЧШ",
                    "х го такси",
                    "[ uj nfrcb",
                    "xgo"
                ],
                "weight": 0.0000062874531619930404,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b20dd01a8f7b82592d251d",
                "paycom_id": "65b20d573c319dec9d88afd7",
                "name": "OIL LEADER",
                "organization": "ООО «\"OIL LEADER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/83635deb3216715d2ca1875649448afdae9c38d2.png",
                "date": 1706167760420,
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
                            "name": "fuel",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Benzin",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "disel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "oil leader",
                    "оил лидер ",
                    "щшвд дуфвук"
                ],
                "weight": 0.0000062874531619930404,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64db601871e0baa108e0c906",
                "paycom_id": "64db5d180b643eeb1574de51",
                "name": "Fincom Rent",
                "organization": "ООО «\"FINCOM RENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d17d8bbfd0d9ccb5cea01b355d1558cc8bf9a342.png",
                "date": 1692098584195,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "gov_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hukumat raqami",
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
                    "Chery rent",
                    "чери рент",
                    "срукн куте",
                    "fincom rent"
                ],
                "weight": 0.000006193610577485681,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6597e1134de4489c5e27ba4e",
                "paycom_id": "659799225c8188fb6e91e0e4",
                "name": "Cheap Taxi",
                "organization": "ООО «\"CHEAP TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2382533ef080db35b209147858f994047bdccbb7.png",
                "date": 1704452371275,
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
                            "name": "ID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "CHEAP TAXI",
                    "CHEEP TAXI",
                    "chip taxi",
                    "cheap taksi",
                    "cheep taksi",
                    "chip taksi",
                    "чип такси"
                ],
                "weight": 0.000005912082823963605,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e4ea6a26af9b0b1d5935",
                "paycom_id": "65b0e4773c319dec9d8899af",
                "name": "\"TETA PETROL\" MCHJ",
                "organization": "ООО «\"TETA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091754586,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "TETA PETROL",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000005724397654948887,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0d22d6a26af9b0b1d57f7",
                "paycom_id": "65b0d1af3c319dec9d889726",
                "name": "\"RICH NEFT\" MCHJ",
                "organization": "ООО «\"RICH NEFT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706086957926,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "RICH NEFT",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.000005349027316919452,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64ca382c601456d371c9f45d",
                "paycom_id": "64ca375bc5a0995831759482",
                "name": "Fly taxi",
                "organization": "ООО «\"FARSAN TRIUMF\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5b06490eca9627bb28fc7ad1b3873646dc887fdb.png",
                "date": 1690974252216,
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
                            "name": "id_driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi identifikatori",
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
                    "FARSAN TRIUMF",
                    "FARSAN",
                    "фарсан",
                    "Fly taxi"
                ],
                "weight": 0.000005255184732412094,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "661e176de08b752620c60c67",
                "paycom_id": "661e1441067bde847beaba67",
                "name": "GOLD TAXI",
                "organization": "ООО «MCHJ PILOT SERVER»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/29f3c4a5ddbb55f531ab994ee2ef35610acd0735.png",
                "date": 1713248109860,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
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
                    "Gold Taxi",
                    "goldtaxi",
                    "gold taksi",
                    "голд такси",
                    "goldtaksi"
                ],
                "weight": 0.000005255184732412094,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b10c6d6a26af9b0b1d5aa5",
                "paycom_id": "65b0f9793c319dec9d889d1b",
                "name": "Car24",
                "organization": "ООО «\"GOLD MAX MAGUS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0ec1d5d345093d98878495cdfab16e2a67fce118.png",
                "date": 1706101869321,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "car.24",
                    "GOLD MAX MAGUS",
                    "car"
                ],
                "weight": 0.0000045982866408605816,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65094a1bb67d0fc8b73a5f5d",
                "paycom_id": "65055ce02e002e2aabe783fa",
                "name": "571 TAXI",
                "organization": "ООО «\"EKSPRESS TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7f86ec00905b9f57c05a24ebc61fdf8da7dbbadb.png",
                "date": 1695107611442,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqam",
                            "type": "text",
                            "validation": "^[0-9]{9}$",
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
                    "571 taxi",
                    "571 taksi",
                    "taxi 571"
                ],
                "weight": 0.000004316758887338505,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e8141e88f9930638b5bb0a",
                "paycom_id": "65e813283c319dec9d8d398e",
                "name": "Taxi Allo",
                "organization": "ООО «\"GOODWILL TRIPS LOGISTICS\" Mas'ulitati Cheklangan Jamiyat»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9d861a2648188415442bf4219189262e0f96358c.png",
                "date": 1709708318216,
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
                            "name": "vodid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi identifikatori",
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
                    "A'lo Taxi",
                    "Allo Taxi ",
                    "GOODWILL TRIPS LOGISTICS"
                ],
                "weight": 0.000004035231133816429,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65bb4b59163b6c10823ca0bc",
                "paycom_id": "65b8f4103c319dec9d893e7b",
                "name": "Original Taxi",
                "organization": "ООО «\"BUXORO ORIGINAL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/252b1a8408ae519df67d03fab614ca72565969b7.png",
                "date": 1706773337628,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi belgisi",
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
                    "ORIGINAL TAXI",
                    "original taksi",
                    "оригинал такси",
                    "щкшпштфд ефчш"
                ],
                "weight": 0.0000039413885493090696,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e237c19a8b36c4d03c541f",
                "paycom_id": "62e2371639c675be34e492a2",
                "name": "YANGIHAYOT AVTOTURARGOH",
                "organization": "ООО «\"YANGIHAYOT AVTOTURARGOH\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/fc028eecd181d389879572824713b680b6c35034.png",
                "date": 1658992577765,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Manzil",
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
                            "name": "state_vehicle_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Transport vositasining davlat raqami",
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
                            "name": "order_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Order raqami",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "YANGIHAYOT AVTOTURARGOH",
                    "Янгихаёт Автотураргох",
                    "Нфтпшрфнще Фмещегкфкпщр"
                ],
                "weight": 0.000003753703380294352,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6033ad5f84bdb89f3c128481",
                "paycom_id": "604ef54648ff0dacb0c1c7f6",
                "name": "yoko 1054",
                "organization": "ООО «\"YORQIN KELAJAK SAVDO\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a3bd6ab390791b2e4bd1d45db1e0cafe01a01e70.png",
                "date": 1613999455334,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi IDsi",
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
                    "йоко такси",
                    "пополнение баланса",
                    "yoko taksi",
                    "balansni to'ldirish",
                    "nfrcb",
                    "ефчш",
                    "taxi",
                    "yoko taxi"
                ],
                "weight": 0.0000036598607957869936,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0f20b6a26af9b0b1d59ec",
                "paycom_id": "65b0f1163c319dec9d889bbf",
                "name": "\"GAZ NEFT - AVTO BENZIN\" MCHJ",
                "organization": "ООО «\"GAZ NEFT - AVTO BENZIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706095115444,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "GAZ NEFT - AVTO BENZIN",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.0000032844904577575584,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0dfa86a26af9b0b1d589c",
                "paycom_id": "65afb7423c319dec9d8885a1",
                "name": "\"BEST PETROL\" MCHJ",
                "organization": "ООО «\"BEST PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706090408636,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "BEST PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.0000031906478732501995,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625660fcd88dabe401b53196",
                "paycom_id": "62565ff18a3ae29b7063986c",
                "name": "UBER DOSTAVKA",
                "organization": "ООО «\"INTRO MIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a94712e86cc05b6398c85c86c27a882b1dedaa5f.png",
                "date": 1649828092241,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "UBER DOSTAVKA",
                    "Убер Доставка",
                    "Гиук Вщыефмлф"
                ],
                "weight": 0.0000030968052887428405,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa8ca012d57e0dca11e161",
                "paycom_id": "65fa8b785b347a44404bbaae",
                "name": "KOTTA BOLA TAXI",
                "organization": "ООО «\"KOTTA BOLA TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dc4de2db068433ca8afcc8a472dfdf236d6c000b.png",
                "date": 1710918816939,
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "KOTTA BOLA TAXI",
                                    "value": "1",
                                    "title": "KOTTA BOLA TAXI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "KOTTA BOLA DASTAFKA",
                                    "value": "2",
                                    "title": "KOTTA BOLA DASTAFKA",
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi pozivnoy",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "KOTTA BOLA TAXI",
                    "KOTA BOLA TAXI",
                    "KOTTA BOlLA TAXI",
                    "kotta bola taksi",
                    "taxi kotta bola",
                    "kottabola",
                    "котта бола такси",
                    "katta bola taxi"
                ],
                "weight": 0.0000030968052887428405,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63061af5e5b34221aeb9ba8a",
                "paycom_id": "630618897066d254af79ab91",
                "name": "iTaxi.uz",
                "organization": "ООО «SMART-FUTURE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b0e4de09f7e0f15a4b7357d4f9c21c33aecde1a2.png",
                "date": 1661344501136,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "SMART-FUTURE",
                    "смарт футуре",
                    "такси"
                ],
                "weight": 0.000002909120119728123,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63a04973ceaba24113c38fe2",
                "paycom_id": "63a0493e4b7facfd06c39d86",
                "name": "TAKSI 855",
                "organization": "ООО «\"TAKSI 855\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2cc66cf5e5eb8c43a1ac538a1efad6aae784ed7b.png",
                "date": 1671448947629,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "TAKSI",
                    "такси 855",
                    "855"
                ],
                "weight": 0.000002627592366206047,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e5a17b88f9930638b5b452",
                "paycom_id": "65e5a08a3c319dec9d8d03ee",
                "name": "AVTO TAQSIT UDM",
                "organization": "ООО «\"AVTO TAQSIT UDM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6d52834b7c432174c72492f6bf1f087b31a60c2b.png",
                "date": 1709547899635,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "usmoniy taxi",
                    "усмоний такси",
                    "гыьщтшн ефчш"
                ],
                "weight": 0.000002627592366206047,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a8be8e625b7310ceb8dffe",
                "paycom_id": "65a79cfb44b50c0d6c2dd1a7",
                "name": "TUK TUK TAXI",
                "organization": "ООО «\"TUK TUK TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/1d6772cce341e50d59a47082deed852d8d29a5f3.png",
                "date": 1705557646463,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID raqami",
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
                    "TUK TUK TAXI",
                    "TUK TUK TAksI",
                    "tuktuk taksi",
                    "tuktuk taxi",
                    "тук тук такси",
                    "туктук такси"
                ],
                "weight": 0.000002439907197191329,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659bce114de4489c5e27bf3f",
                "paycom_id": "6597ad2644d39e2572d9d8ea",
                "name": "CARDIN TAXI",
                "organization": "ООО «\"CARDIN\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9011d97047e676d934829578df3b6b39c726d07c.png",
                "date": 1704709649551,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
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
                    "CARDIN TAXI",
                    "KARDIN TAXI",
                    "CARDIN TAksiI",
                    "cardin taxi"
                ],
                "weight": 0.00000234606461268397,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61a0e7733605ed2b7405c0ac",
                "paycom_id": "61a0e706bede17c4c1b7438a",
                "name": "EXIM TRANS TAXI ",
                "organization": "ООО «MCHJ VED CONSULTANT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b6a38b9fc16e02a9aca9527a25c7f9ced46ad1a.png",
                "date": 1637934963112,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Qo'ng'iroq raqami",
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
                    "VED CONSULTANT",
                    "вэд консультант",
                    "вед консультант",
                    "МУВ СЩТЫГДЕФТЕ",
                    "dtl rjycekmnfyn",
                    "учшь екфты"
                ],
                "weight": 0.0000021583794436692526,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e0b26a26af9b0b1d58bd",
                "paycom_id": "65b0e0823c319dec9d889914",
                "name": "\"OIL START\" MCHJ",
                "organization": "ООО «\"OIL START\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706090674264,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "OIL START",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.0000020645368591618937,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63ef299a6a689d2b4b9551e9",
                "paycom_id": "63ecb2a572052b0744199cfe",
                "name": "UpTaxi",
                "organization": "ООО «MCHJ XOREZM BAZA»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4d028054f8ac2fb70813246f5407beb9eebfc766.png",
                "date": 1676618138729,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining belgisi",
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
                    "uptaxi",
                    "гзефчш",
                    "аптакси",
                    "fgnfrcb"
                ],
                "weight": 0.0000019706942746545348,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61fd0e66b0159dc2d9e448c5",
                "paycom_id": "61fd0c2bcb53f72644f2aaad",
                "name": "MY IMG",
                "organization": "ООО «\"MY IMG\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/675a164c88916c04dbc73f038aa0f516e708093a.png",
                "date": 1643974246195,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
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
                    "MY IMG",
                    "img",
                    "ьн шьп"
                ],
                "weight": 0.0000015953239366250997,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f996989ea62ccfa6119d037",
                "paycom_id": "5f996897740f35d3638ae54a",
                "name": "HYUNDAI AUTO ASIA",
                "organization": "ООО «HYUNDAI AUTO ASIA»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76bb0242d044504b324bbc10690d4dc0a148c787.png",
                "date": 1603889545456,
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
                            "name": "Contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "Date_of_agreement",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma tuzilgan sana",
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
                            "title": "F.I.Sh",
                            "type": "text",
                            "validation": "^[a-zA-z'\\\\-]+( [a-zA-z'\\\\-]+){1,3}$",
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
                    "хёндай",
                    "автосалон",
                    "машина",
                    "hyundai",
                    "РНГТВФШ",
                    "HYUNDAI AUTO ASIA"
                ],
                "weight": 0.0000015014813521177408,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65afa1216a26af9b0b1d5450",
                "paycom_id": "65af9ffd3c319dec9d8881e7",
                "name": "\"FORMULA PETROL\"",
                "organization": "ООО «\"FORMULA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706008865314,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Yoqilg'i turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "FORMULA PETROL",
                    "заправка",
                    "бензин"
                ],
                "weight": 0.0000015014813521177408,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64db695571e0baa108e0c935",
                "paycom_id": "64d4ebfad2d6248f97c1e53b",
                "name": "AKA TAXI-DRIVER",
                "organization": "ООО «\"AKA TAXI-DRIVER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/683049db3e7cfd7d054fd58bd4d9815e6609380b.png",
                "date": 1692100949179,
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
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hamyon identifikatori",
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
                    "aka taxi",
                    "ака такси",
                    "флф ефчш"
                ],
                "weight": 0.0000012199535985956645,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e96bbdd5445e8fefd8c07",
                "paycom_id": "659e96815c8188fb6e926fa9",
                "name": "HYPEROIL",
                "organization": "ООО «\"SB BINOKOR UYLARI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b64377f554ca8a4904dd61d4301224887ece284.png",
                "date": 1704892091859,
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
                            "name": "oil_brand",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Benzin markasi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
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
                        }
                    ]
                },
                "keywords": [
                    "SB BINOKOR UYLARI",
                    "Сб бинокор уйлари",
                    "СБ СТРОИТЕЛИ ДОМА",
                    "HYPEROIL"
                ],
                "weight": 0.0000012199535985956645,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6385aadf912b0e828a2bf7c8",
                "paycom_id": "6385a95c4050a4f68534a2dd",
                "name": "ActiveCargo",
                "organization": "ООО «YUMA BEST SOFT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/307b373fad9167e546360e67098193b2607ae0cf.png",
                "date": 1669704415565,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "ActiveCargo",
                    "АктивКарго",
                    "ФсешмуСфкпщ",
                    "FrnbdRfhuj"
                ],
                "weight": 0.0000011261110140883058,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f28a27de9f2783922f43b5",
                "paycom_id": "65798c0d1fbd780a67093e2e",
                "name": "NUR TAXI",
                "organization": "ООО «\"XON AVTO TRANS 700\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a3832d649be252e027a839365b21216766632964.png",
                "date": 1710393895807,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "NUR TAXI",
                    "nur taksi",
                    "nurtaxi",
                    "nurtaksi",
                    "нур такси",
                    "нуртакси",
                    "тгк ефчш"
                ],
                "weight": 0.0000011261110140883058,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64b76f145b17f8b641a90117",
                "paycom_id": "64abd407277265fa82e0e569",
                "name": "GLOW STAR XIVA MCHJ",
                "organization": "ООО «MCHJ \"GLOW STAR XIVA\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/832dc7f24cf3f87595c17006cde1fe8e36122509.png",
                "date": 1689743124380,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi IDsi",
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
                    "GLOW STAR XIVA MCHJ",
                    "ООО \"ГЛОУ СТАР XIVA\"",
                    "GLOW STAR XIVA LLC",
                    "GLOW STAR XIVA",
                    "СВЕТЯЩАЯСЯ ЗВЕЗДА XIVA"
                ],
                "weight": 0.0000010322684295809468,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625ea592927f281be0ff784d",
                "paycom_id": "625ea523927f281be0ff7842",
                "name": "X-Taxi",
                "organization": "ООО «\"X-taxi\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/72c812895f60417b30176c0634d21cebdfbaf0c7.png",
                "date": 1650369892411,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi raqami",
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
                    "X-Taxi",
                    "XTaxi",
                    "X Taxi",
                    "1311"
                ],
                "weight": 8.445832605662292e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa7f8012d57e0dca11e0e1",
                "paycom_id": "65c31b19a10775d0a7ff05e4",
                "name": "MASTER-ZAR",
                "organization": "ООО «\"MASTER-ZAR\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3add3aaab9ddba1cf8edbcb1ae370b7fa9a2e5a3.png",
                "date": 1710915456376,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi ID",
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
                    "master zar",
                    "baraka taxi",
                    "мастер зар",
                    "ьфыеук яфк"
                ],
                "weight": 8.445832605662292e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "662ba6fde90d731d6a2844a9",
                "paycom_id": "662ba6702eb76ec81b699ad3",
                "name": "DUBAI TAXI",
                "organization": "ООО «\"TAXI  CAR TRADE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/04c7afeb140acbbc3abc11fc2dfcb6e498e6f677.png",
                "date": 1714136829453,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "DUBAI TAXI",
                    "DUBAI TAKSI",
                    "dubay taxi",
                    "дубай такси",
                    "TAXI CAR TRADE"
                ],
                "weight": 8.445832605662292e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "658bec884de4489c5e279d8d",
                "paycom_id": "658bec045c8188fb6e91208d",
                "name": "UZVIP Black Car Transportation",
                "organization": "ООО «\"UZVIPTRANSSERVICE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6e40ce0463acc368e411f0d7c9f0e5a0cf262d8a.png",
                "date": 1703668872752,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                    "UZVIP Black Car Transportation",
                    "Black Car Transportation",
                    "Car Transportation",
                    "УЗВИП Блэк Автоперевозки",
                    "Car Transportation"
                ],
                "weight": 7.507406760588704e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f4460b12d57e0dca11d57e",
                "paycom_id": "65f445d987d100894404b1f4",
                "name": "DOOSAN",
                "organization": "ООО «\"DOOSAN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e591b7742a99783e922a601411fdb9a6e8fb7f7a.png",
                "date": 1710507531191,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "DOOSAN",
                    "ВЩЩЫФТ",
                    "дусан",
                    "lecfy"
                ],
                "weight": 7.507406760588704e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5edde13c343eb86f54d33ad8",
                "paycom_id": "5eb5264b6420f3660dc7f2e1",
                "name": "AMIR AVTO BAHOLASH",
                "organization": "ООО «AMIR AVTO BAHOLASH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c1d05b233374be459df4305cf6e25756f6bc7364.png",
                "date": 1591599420575,
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
                            "name": "Full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "Phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "amir avto baholash",
                    "avto baholash",
                    "оценка авто",
                    "avtomobil baholash"
                ],
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f044382343eb86f54d34583",
                "paycom_id": "5f044320f4e693d74a13ea99",
                "name": "Halol Taxi Andijan",
                "organization": "Drive taxi",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0c6e054a1e8b2d293ae55f833067b9c40326d73a.png",
                "date": 1594114946047,
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
                            "name": "Id_of_the_subscriber",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Abonent Id",
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
                    "доставка",
                    "перегон",
                    "такси",
                    "машина",
                    "Taxi Andijan",
                    "такси халол"
                ],
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "661e47bfe08b752620c60e2b",
                "paycom_id": "661e4727067bde847beac123",
                "name": "Fincom Rent Саида Барака",
                "organization": "ООО «\"FINCOM RENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/eea238168ba85fa52ae14861b6286b8b97cd235a.png",
                "date": 1713260479410,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "gov_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hukumat raqami",
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
                    "Fincom Rent Саида Барака",
                    "Fincom Rent Саид Барака",
                    "Finkom Rent Саида Барака",
                    "финком рент саид барака",
                    "саид барака fincom rent",
                    "fincomrent Саида Барака"
                ],
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ee36a0a343eb86f54d33cfe",
                "paycom_id": "5ee3653ec2a2e8e1604a7d6a",
                "name": "Premium taxi",
                "organization": "ООО «Premium new taxi servis»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/60444667be005f9679464a3eb6ed0c1830364dc3.png",
                "date": 1591962122436,
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
                            "name": "State_number_car",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Davlat avtomobil raqami",
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
                    "такси",
                    "перегон",
                    "доставка"
                ],
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643d4c3a3b2ea5dd250e57bb",
                "paycom_id": "643cf92e7eb779614cabe5e1",
                "name": "THE METAN GROUP",
                "organization": "ООО «\"THE METAN GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c29f4f4366d4b179c32d99e19af5d6a7912ea5ed.png",
                "date": 1681738810100,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Avtomobil raqami",
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
                    "THE METAN GROUP",
                    "METAN",
                    " METAN GROUP"
                ],
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62677e455f4122709934ff62",
                "paycom_id": "62677d6f8fa454efd5adde17",
                "name": "FERGANA CITY TAXI",
                "organization": "ООО «\"FERGHANA CITY TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/93d4e559919739bf98acda03b1b4f4dd27a3d61e.png",
                "date": 1650949701726,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "fergana city taxi",
                    "citytaxi",
                    "фергана такси"
                ],
                "weight": 4.69212922536794e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "631ef8c1475ca6fbf57d11c0",
                "paycom_id": "631ed9c7d160a6d6294b3a5f",
                "name": "MASTER DOSTAVKA ",
                "organization": "ООО «Smart way trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a7359cff3f030df69db78b298966c4461fc91f3e.png",
                "date": 1662974145469,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "MASTER DOSTAVKA",
                    "ЬФЫЕУК ВЩЫЕФМЛФ",
                    "мастер доставка",
                    "vfcnth ljcnfdrf"
                ],
                "myhome": true,
                "weight": 4.69212922536794e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a7afff5b17f8b641a8e6a9",
                "paycom_id": "64a7afab5dad647a181813b9",
                "name": "ACTIVE Taxi",
                "organization": "ООО «\"XB ACTIVE COMMUNITY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/91a1b3dd07d2d1a9d0c2d3639b2b58fb30ac0400.png",
                "date": 1688711167904,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining qo'ng'iroq belgisi",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "ACTIVE Taxi",
                    "ФСЕШМУ Ефчш",
                    "актив такси",
                    "frnbd nfrcb"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64bf7bb45b17f8b641a90f64",
                "paycom_id": "64bf79f1e4e564c982863658",
                "name": "SOFIYA LUCKY",
                "organization": "ООО «\"SOFIYA LUCKY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/537e96e4ccb08da3a5d4af1c855ffbe7d6e14aab.png",
                "date": 1690270644271,
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
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
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
                    "SOFIYA LUCKY",
                    "ЫЩАШНФ ДГСЛН",
                    "София лаки",
                    "Cjabz kfrb"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e6857dd5445e8fefd8a91",
                "paycom_id": "659e68235c8188fb6e92688f",
                "name": "MEGAVOLT",
                "organization": "ООО «\"DELIKATESI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d6de58694f16e2116a43cdc7a9f21f85e617830d.png",
                "date": 1704880215286,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Uchun to'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Автосалон",
                                    "value": "1",
                                    "title": "Автосалон",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Центр оказания услуг",
                                    "value": "2",
                                    "title": "Центр оказания услуг",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Зарядная станция",
                                    "value": "3",
                                    "title": "Зарядная станция",
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
                        }
                    ]
                },
                "keywords": [
                    "MEGAVOLT",
                    "Мегавольт",
                    "ьупфмщде"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f2dbc0de9f2783922f4672",
                "paycom_id": "65f2ca4fea95cfb944cc2a98",
                "name": "Cardin Go Driver",
                "organization": "ООО «\"CARDIN\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5f53eb7da08fdd036c36366d3784f6240dad22a6.png",
                "date": 1710414784562,
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
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi Idsi",
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
                    "Cardin Go Driver",
                    "Kardin Go Driver",
                    "Cardin Go Drayver",
                    "кардин го драйвер"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa81f912d57e0dca11e0f8",
                "paycom_id": "65fa816a5b347a44404bb948",
                "name": "SOOSAN",
                "organization": "ООО «\"SOOSAN HEAVY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c418d22329740593ee3244f9048192cbe3fe0d7b.png",
                "date": 1710916089774,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "SOOSAN ",
                    "SOOSAN HEAVY",
                    "сусан"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6601172e12d57e0dca11e5a8",
                "paycom_id": "65f96c655b347a44404ba560",
                "name": "ALFA TAXI",
                "organization": "ООО «\"GRAND ONE WAY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5a8bfdb41dcb6614b7c84558814bd7a9be9f87af.png",
                "date": 1711347502583,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy",
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
                    "Alfa taxi",
                    "Alfa taksi",
                    "альфа такси",
                    "алфа такси",
                    "alfataxi"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6627a6fee90d731d6a283a58",
                "paycom_id": "662798062eb76ec81b694af7",
                "name": " CHAQMOQ TEZKOR",
                "organization": "ООО «\"CHAQMOQ-TEZKOR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/64088c18695a56997987028928e8652b7641cfb8.png",
                "date": 1713874686023,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami (9 xona)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
                            "prefix": null,
                            "require": null,
                            "length": 9,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "park_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hudud",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ташкент",
                                    "value": "1",
                                    "title": "Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Нукус",
                                    "value": "2",
                                    "title": "Нукус",
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
                        }
                    ]
                },
                "keywords": [
                    "CHAQMOQ TEZKOR",
                    "CHAkMOQ TEZKOR",
                    "CHAQMOQ taxi",
                    "чакмок такси"
                ],
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62a830f72abe8594b27f365d",
                "paycom_id": "62a6d4f6e7e77db81e86cbf4",
                "name": "Taxida",
                "organization": "ООО «\"SAYT INFO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cbfa3942d6f15a39abe2416b0019f0933be44bbc.png",
                "date": 1655189751925,
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
                            "name": "user_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi ID",
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
                    "Taxida",
                    "Ефчшвф",
                    "таксида",
                    "nfrcblf"
                ],
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63d7b3240f60b188c6c4610b",
                "paycom_id": "63d7ad5a45caa8355e11fe3b",
                "name": "166 EXPRESS",
                "organization": "ООО «\"166 EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7d91325b4840ab59fa91cdf85488ed1fb6245ba5.png",
                "date": 1675080484334,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Mashina raqami",
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
                    "166 EXPRESS ",
                    "1331",
                    "166"
                ],
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e6f90dd5445e8fefd8afa",
                "paycom_id": "659e6c305c8188fb6e926938",
                "name": "MEGA AVTOTEX INNOVATION",
                "organization": "ООО «\"MEGA AVTOTEX INNOVATION\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b242763aeea083d6ff222a5b2dc66aba2f313e98.png",
                "date": 1704882064299,
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
                            "name": "coment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Izohlar",
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
                    "MEGA AVTOTEX INNOVATION",
                    "Мега автотех инноватион",
                    "МЕГА АВТОТЕКС ИННОВАЦИЯ"
                ],
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a4f74691578e6d2d800ec1",
                "paycom_id": "65a4e1abc9a68d35404e9a07",
                "name": "Tires Shop",
                "organization": "ООО «\"YANGI-ZAMON G R O U P\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/40a521a49a3a3f4b850455e16650ba622f8c10fa.png",
                "date": 1705310022851,
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                    "Tires Shop",
                    "тирес шоп",
                    "ешкуы ырщз"
                ],
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "662f7b28e90d731d6a2847d6",
                "paycom_id": "662f7abf2eb76ec81b69cc42",
                "name": "TRAKTORBOR.UZ",
                "organization": "ООО «\"PLANETA SERVIS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76bd21ceb1aad68a9be423544dd9bae70de22bd1.png",
                "date": 1714387752646,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "pass",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID yoki pasport raqami",
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
                    "TRAKTORBOR.UZ",
                    "TRAKTORBOR",
                    "\"PLANETA SERVIS\" MCHJ "
                ],
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fd0ce0758bb9fee75c0e8bf",
                "paycom_id": "5fd0cd461c849a7578de00b8",
                "name": "Т такси",
                "organization": "ООО «ООО \"APRIORI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/fe6d01b0c809186825b07a1227f5e87921f580dc.png",
                "date": 1607519751339,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "apriori",
                    "априори",
                    "транспортировка и хранение",
                    "такси",
                    "taxi"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "614c1976cfeca453b4a00ef6",
                "paycom_id": "614c1bfb4594962b460bc050",
                "name": "YaTaxi",
                "organization": "ООО «ООО \"RUSTAM TRANS EKSKLYUZIV\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/979f4523a3eb27850d0f5e7220e35eca7c1b5b4e.png",
                "date": 1632377206610,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi IDsi",
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
                    "YaTaxi 1069",
                    "ятакси",
                    "yataksi",
                    "яtaksi",
                    "яtaxi",
                    "нфефчш"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "607fc550b8d597ed134d9220",
                "paycom_id": "607fc4845cefd1b5a2508e41",
                "name": "GMC",
                "organization": "ООО «GENERAL MONITORING COMPANY»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8dcef03a5f9b1620a56c5543ea6e91cb13923d00.png",
                "date": 1618986320536,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
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
                    "gmc",
                    "general monitoring company",
                    "генерал мониторинг",
                    "мониторинг компанй",
                    "MONITORING COMPANY"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6256777dd88dabe401b5340a",
                "paycom_id": "62566ed88a3ae29b70639c14",
                "name": "GBO NASIYA METAN SAVDO ",
                "organization": "ООО «MCHJ GBO NASIYA METAN SAVDO»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/83f603f3eb609b26df9c0d7de1584bcdc0210a8d.png",
                "date": 1649833853066,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh",
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
                            "name": "number_car",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Mashina raqami",
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
                            "name": "namber_telephone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Raqam telefon",
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
                    "GBO NASIYA METAN SAVDO",
                    "ГБО НАСИЯ МЕТАН САВДО",
                    "ПИЩ ТФЫШНФ ЬУЕФТ ЫФМВЩ"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625fa1e0d88dabe401b55198",
                "paycom_id": "625f8efc3b252ec2c453793d",
                "name": "YUKSAK TAYANCH",
                "organization": "ООО «MCHJ YUKSAK TAYANCH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/78b11d3fcced7cd25e5ba74705937e1dbce1bd4c.png",
                "date": 1650434528938,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "high support",
                    "yuksak tayanch",
                    "TAYANCH"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62ce9899cb6e753eb77b194c",
                "paycom_id": "62c553ef4c11d19b6709d335",
                "name": "Yapartner Курьер",
                "organization": "ООО «ООО \"LEVELPAY\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/86cb9af1d17f19df29784ceb736aa58395b2cb3c.png",
                "date": 1657706649739,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Phone",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "998",
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
                    "Yapartner",
                    "япартнер",
                    "Нфзфкетук"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "637f3666bac96cb75c462326",
                "paycom_id": "636ca5172cfb25761a99e6af",
                "name": "TIRGO subscription",
                "organization": "ООО «\"TIRGO LOG\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/598e8048a0c8fe23edfd7906c6fbafed4eab3cbd.png",
                "date": 1669281382085,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1000,
                        "max": 10000000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "UserID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "User ID",
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
                    "TIRGO",
                    "Тирго",
                    "Ешкпщ",
                    "Nbhuj"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "638de873ceaba24113c380ba",
                "paycom_id": "6389a7f4aeeb8dd185fca662",
                "name": "ALADDIN TAXI",
                "organization": "ООО «ООО \"ALADDIN ONLINE\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d35a0ecbd174627bcb271457c283976379405b9e.png",
                "date": 1670244467937,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "ALADDIN TAXI",
                    "ФДФВВШТ ЕФЧШ",
                    "аладдин такси",
                    "fkfllby nfrcb"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "641310296a689d2b4b9589f1",
                "paycom_id": "64130bd321c354c60e296b1b",
                "name": "ELITE MOTORS HAYDOVCHI",
                "organization": "ООО «\"ELITE GAS MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/afe334b95daae18cce7ced386c435dd3ebf8e30e.png",
                "date": 1678970921283,
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
                            "name": "driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi belgisi",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "elite gas motors",
                    "elite motors haydovchi",
                    "elite haydovchi",
                    "элит моторс хайдовчи",
                    "удшеу ьщещкы"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6495939f5b17f8b641a8d9fa",
                "paycom_id": "649592c7406523fd2dffc70d",
                "name": "Eprotocol",
                "organization": "ООО «Eprotocol service»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4fd6a5e2fd9831ba326a8364056abd231c6b9306.png",
                "date": 1687524255126,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                    "Eprotocol",
                    "епротокол",
                    "узкщещсщд"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659ced854de4489c5e27c207",
                "paycom_id": "6598fc505c8188fb6e91fc46",
                "name": "SAM AVTO RENTAL",
                "organization": "ООО «\"SAM AVTO RENTAL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/1b1b568e0684ac0479215b35923f2c182521e56d.png",
                "date": 1704783237839,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 500000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_info",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Info",
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
                    "SAM AVTO RENTAL",
                    "sam avto",
                    "sam auto rental",
                    "аренда машин",
                    "сам авто аренда"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e1a42088f9930638b5afbb",
                "paycom_id": "65dc59df3c319dec9d8c3953",
                "name": "TIRGO service",
                "organization": "ООО «\"ALPHAGROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6c9e213a494c8f847c5fbc5cab736f755081475c.png",
                "date": 1709286432640,
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
                            "name": "UserID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi ID",
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
                    "TIRGO",
                    "Тирго",
                    "Ешкпщ",
                    "Nbhuj"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6604100612d57e0dca11f057",
                "paycom_id": "6603eaa95b347a44404c67c9",
                "name": "MustangTaxi",
                "organization": "ООО «\"OLMALIQ AVTO MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7f450692ea459fc8b06f0ba026788cbf8e8c1824.png",
                "date": 1711542278364,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ҳайдовчи ID",
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
                    "мустанг такси",
                    "vecnfyu nfrcb",
                    "Mustang Taxi",
                    "Ьгыефтп Ефчш"
                ],
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5be2b348c439933460989cea",
                "paycom_id": "5be2b2d2c439933460989ce8",
                "name": "Global Taksi",
                "organization": "ООО «Global Service Company»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/global-taksi.png",
                "date": 1541583673103,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "Haydovchining ID",
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
                    "Global Taksi",
                    "глобал такси",
                    "пдщифд ефлыш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5c3c74cab20d521bf0ad6af1",
                "paycom_id": "606d93441403083e18871828",
                "name": "Taxi Real",
                "organization": "ЧП «Vodiy Darxon Trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/46c5b94b15dd6a10ec8494ca969c7a92a2bce826.png",
                "date": 1547645484730,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "user_id",
                            "title": "Hisob raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[0-9]+$",
                            "validation_error": "Ошибка в аккаунте",
                            "visible": null,
                            "placeholder": "",
                            "scan": null,
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "taxi",
                    "такси",
                    "taksi",
                    "real",
                    "реал",
                    "ефчш",
                    "куфд",
                    "nfrcb",
                    "htfk"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ef302b4343eb86f54d341a8",
                "paycom_id": "5ef301f5b18e52dd0c1afe45",
                "name": "Ali grand way servise",
                "organization": "ООО «Ali grand way servise»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b1e260069ddeb4aa096aea7f830f42a41caa1f8f.png",
                "date": 1592984244366,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Davlat avtomobil raqami",
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
                    "ali grand way servise",
                    "услуги такси",
                    "оплата такси",
                    "taksi to'lovi",
                    "taksi xizmati",
                    "taksi",
                    "Али Гранд Путь Сервис",
                    "taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fd351a158bb9fee75c0e9c9",
                "paycom_id": "5fce1d661c849a7578ddccb7",
                "name": "PREMIUM AUTO",
                "organization": "ООО «PREMIUM AUTO MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4957dd81fbfc1491fb63ab3e9b6d217a5a2f95d0.png",
                "date": 1607684513203,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "pay_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov",
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
                    "premium auto",
                    "премиум авто",
                    "автомобили и запчасти"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60a349dab8d597ed134da70d",
                "paycom_id": "60a348b27852bd0ebce1ad27",
                "name": "АЛЛО ТАКСИ",
                "organization": "ООО «\"FERGANA AUTO TRANS LIKE\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/26c0bdaf4bb203bdf000908d6f78c6eff421b3eb.png",
                "date": 1621314010965,
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
                            "name": "Full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Qo'ng'iroq",
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
                    "такси",
                    "перевоз",
                    "перегон",
                    "машина",
                    "вызов",
                    "taksi",
                    "FERGANA AUTO TRANS LIKE",
                    "allo taksi"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60cc77bbb8d597ed134dc67b",
                "paycom_id": "60700164e928245e531c4b9d",
                "name": "ASIA TAXI",
                "organization": "ООО «ООО \"TEZTAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8f6548524b61392e2a5b0759c52f5f434daea314.png",
                "date": 1624012731839,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "tez driver",
                    "teztaxi",
                    "еуя вкшмук",
                    "тез драйвер",
                    "ntp lhfqdth",
                    "такси",
                    "taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60d57a560a40376aa994a23e",
                "paycom_id": "60d568e12bb66530d56b3414",
                "name": "IN RENT",
                "organization": "ООО «IN RENT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/990fc10b147d8394dfcc802967d0434784b13852.png",
                "date": 1624603222097,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.SH.",
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
                            "name": "Contract",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma sansi",
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
                    "Прокат автомобилей",
                    "Avtomobil ijarasi",
                    "аренда",
                    "arenda",
                    "IN RENT",
                    "ин рент",
                    "ШТ КУТЕ",
                    "by htyn"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60e42efb16527be45e019cb0",
                "paycom_id": "60e42dcc3cde2522635f7fd6",
                "name": "TOP ASSIST ",
                "organization": "АО «TOP ASSIST»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/38c407ee13b39c57910fbe41132f01edc655727d.png",
                "date": 1625566971180,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "TOP ASSIST",
                    "ещз фыышые",
                    "топ ассист",
                    "njg fccbcn"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "610a35bf12950f485b3b1562",
                "paycom_id": "60f5167ba556a9f9a27e64eb",
                "name": "UZAVTOVOKZAL",
                "organization": "ГУП «UZAVTOVOKZAL SERVIS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/994500ed8fd4d44c231e1c94092c4e94c8959549.png",
                "date": 1628059071015,
                "terminal": {
                    "type": "link",
                    "endpoint": "https://avtoticket.uz/",
                    "link_type": "external"
                },
                "keywords": [
                    "UZAVTOVOKZAL",
                    "узавтовокзал",
                    "гяфмещмщлящд",
                    "vokzal",
                    "вокзал"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f169798343eb86f54d349bd",
                "paycom_id": "5e7c77381274dcf3623c332d",
                "name": "TAXI EXPRESS",
                "organization": "ООО «OSKAR TAXI EXPRESS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e517b1181b3207ed72f8e85c7ee27808fe16a6a8.png",
                "date": 1595316120446,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "такси экспресс",
                    "транспорт",
                    "taxi express",
                    "transport",
                    "ЕФЧШ УЧЗКУЫЫ"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60339b7484bdb89f3c128452",
                "paycom_id": "60339ae0a10b214d8d11fe9c",
                "name": "HAMROZ",
                "organization": "ООО «\"A-TAXIST\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7610f4e7b63ca1b1b22da34d3d7d690260b133b9.png",
                "date": 1613994868987,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Uchun to'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Провайдер",
                                    "value": "1",
                                    "title": "Провайдер",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Пользователь",
                                    "value": "2",
                                    "title": "Пользователь",
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
                        }
                    ]
                },
                "keywords": [
                    "хамроз",
                    "такси",
                    "hamroz",
                    "taksi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "606eaf35b8d597ed134d86f0",
                "paycom_id": "606db7851403083e18871d61",
                "name": "SMART Logistics",
                "organization": "ООО «AVTO YUK SHINOMONTAJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/df490544cdaf452b4703313d0c12cbedf9e59999.png",
                "date": 1617866549980,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Lot soni",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9\\-]{8,8}$",
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
                    "smart logistics",
                    "смарт логистик",
                    "логистика",
                    "ыьфке дщпшыешсы"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6151a846cfeca453b4a01184",
                "paycom_id": "6151a7c83c73a4edffcdd87c",
                "name": "MB-AUTO ",
                "organization": "ЧП «XAYDAROV SARVAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4bc823b6234fd6ee1feaa309382ffb65c24991ff.png",
                "date": 1632741446159,
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
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Avtomobil zaxira qismlari turi",
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
                    "MB-AUTO",
                    "MB AUTO",
                    "ьи фгещ",
                    "MB AVTO",
                    "мб ауто",
                    "мб авто"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61badec55098a0cc1ad43e35",
                "paycom_id": "61bade2b204c85a50a88bf6e",
                "name": "XORAZMAVTOTEXXIZMAT",
                "organization": "ООО «ООО \"XORAZMAVTOTEXXIZMAT\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/44a55c6595ba37aafca6ce105e9bbdf148a8a428.png",
                "date": 1639636677599,
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
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Счёт справка",
                                    "value": "Hisob_malumotnoma",
                                    "title": "Hisob ma'lumotnoma",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Другие оплаты",
                                    "value": "Boshqa_tolovlar",
                                    "title": "Boshqa to'lovlar",
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
                        }
                    ]
                },
                "keywords": [
                    "XORAZM AVTO TEX XIZMAT",
                    "ЧЩКФЯЬ ФМЕЩ ЕУЧ ЧШЯЬФЕ",
                    "хоразм авто тех хизмат",
                    "[jhfpv fdnj nt[ [bpvfn",
                    "харезм тех услуги",
                    "avtotexxizmat xorazm"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6245ac2b5bc3e35a0e92296c",
                "paycom_id": "6245ab4d257faf2854fd63b0",
                "name": "NUR ASSIST",
                "organization": "ООО «\"NUR ASSIST\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a809d820d7077d7aa4b2dd8c084554c53acdbd94.png",
                "date": 1648733227659,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "NUR ASSIST",
                    "nur",
                    "тгк фыышые",
                    "Нур Ассист"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6284e2c944589c0316db4280",
                "paycom_id": "6284e1de72a6247c42005aff",
                "name": "TIMETAXI",
                "organization": "ООО «\"KATTAKURGAN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c2e7aef8ae6272b704c5f6d4ec019474465b8a04.png",
                "date": 1652875977380,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "TIMETAXI",
                    "Таймтакси",
                    "Ешьуефчш",
                    "Nfqvnfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62de86de2cfc087774bbbeae",
                "paycom_id": "62d50e9cff4570e51ef3bb0e",
                "name": "Royal Driver",
                "organization": "ООО «\"YOU CLOUD\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b97ae42b204fb953dfb732225ac1678a97fee7df.png",
                "date": 1658750686613,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                    "Royal Driver",
                    "Кщнфд Вкшмук",
                    "роял драйвер",
                    "hjzk lhfqdth"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e925033a23b719dc986853",
                "paycom_id": "62e924b039c675be34e5badc",
                "name": "CONGRESS-HALL BUS",
                "organization": "ООО «\"CONGRESS-HALL BUS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0d26e592db925924ac287f169f00a2d80ecfc04a.png",
                "date": 1659446531297,
                "terminal": {
                    "type": "link",
                    "endpoint": "https://congresshall.itoffer.uz",
                    "link_type": "external"
                },
                "keywords": [
                    "congress hall bus",
                    "сщтпкуыы рудд игы",
                    "конгресс",
                    "алл комфорт",
                    "allcomfort"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "631ef911475ca6fbf57d11c8",
                "paycom_id": "631eda11d160a6d6294b3a79",
                "name": "REAL DOSTAVKA",
                "organization": "ООО «ALI GRAND WAY SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4d7862623b655e68a3a580107b2168a6e3c99b4a.png",
                "date": 1662974225772,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "REAL DOSTAVKA",
                    "КУФД ВЩЫЕФМЛФ",
                    "реал доставка",
                    "htfk ljcnfdrf"
                ],
                "myhome": true,
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "632044d3475ca6fbf57d2022",
                "paycom_id": "63203a8cf16104bde41dd563",
                "name": "Pitak24",
                "organization": "ООО «\"GOLD PYRAMIDS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c94f9076c1c2e94580843b0f9699522015ba0c27.png",
                "date": 1663059155702,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 300000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "user_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hisob raqami",
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
                    "Pitak24",
                    "GOLD PYRAMIDS",
                    "голд пирамидс",
                    "питак24"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63359f791fe5cc9de25ea011",
                "paycom_id": "632d66e20076c5b9e24de26e",
                "name": "Elektrichka Energy",
                "organization": "ООО «\"ELEKTRICHKA\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5ba0ed8e301999e232bab3235c8358252fe845c1.png",
                "date": 1664458617967,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "elektichka",
                    "удулекшсрлф",
                    "электричка",
                    "'ktrnhbxrf"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6343e6bf1fe5cc9de25ebff1",
                "paycom_id": "6343e5840c7921dcc839b6d7",
                "name": "YUBOR",
                "organization": "ООО «\"YUBOR EXPRESS LOGISTIC SOLUTIONS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/eadae2cc5399124cbe8993ca136e4783470339d0.png",
                "date": 1665394367329,
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
                            "name": "number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Posilkani ro'yxatdan o'tkazish raqami",
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
                    "YUBOR",
                    "yubor",
                    "юбор",
                    "нгищк"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6346adad1fe5cc9de25ec549",
                "paycom_id": "6319d74cd160a6d6294a936d",
                "name": "Mana Taxi",
                "organization": "ООО «\"THE BEST IT ONE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4017be32c3a6fa52ee3d6ada49f13a7b3bc0d613.png",
                "date": 1665576365272,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 20000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "Mana Taxi",
                    "Ьфтф Ефчш",
                    "мана такси",
                    "vfyf nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63982ef4ceaba24113c387c8",
                "paycom_id": "6393319f0c4c67ea06038cf3",
                "name": "CARAVAN TAXI",
                "organization": "ООО «MCHJ CARAVAN TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3c01d7640af3ee79a9f30fc6dd7fab1f101c76a6.png",
                "date": 1670917876013,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
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
                    "rfhfdfy nfrcb",
                    "сфкфмфт ефчш",
                    "caravan taxi",
                    "караван такси",
                    "караван"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6399c92cceaba24113c38be9",
                "paycom_id": "6390c6270c4c67ea06034e7f",
                "name": "A'LO BARAKA TAKSI",
                "organization": "ООО «\"A'LO BARAKA TAKSI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/deca5202f69c0629eba402bc80d12bc17e9170bf.png",
                "date": 1671022892303,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqam",
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
                    "A'LO BARAKA TAKSI",
                    "ФэДЩ ИФКФЛФ ЕФЛЫШ",
                    "АЛО БАРАКА ТАКСИ",
                    "FKJ <FHFRF NFRCB"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63a93d3dab7cf72a0316e11d",
                "paycom_id": "63a93c4c3a3886fdf06c9286",
                "name": "DIYOR TAXI",
                "organization": "ООО «\"PULOTXONOV INVEST\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/821b40603e371bd0928e7838e2120140ef766d5a.png",
                "date": 1672035645816,
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
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "DIYOR TAXI",
                    "дийор такси",
                    "ВШНЩК ЕФЧШ"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63ca72679d9e2612eb6e7e67",
                "paycom_id": "63ca306ace3c82119b047c1d",
                "name": "DRIVE TAXI ",
                "organization": "ООО «\"GTA DRIVE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aa7f5f511a0636308e30b799d46e1d6c4cd5e496.png",
                "date": 1674211943917,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "GTA DRIVE",
                    "DRIVE TAXI",
                    "такси",
                    "DRIVE TAXI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63d0c7149d9e2612eb6e8894",
                "paycom_id": "63d0c6d945caa8355e10a6dc",
                "name": "BOTLEND EXPRESS",
                "organization": "ООО «\"BOTLEND EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/10a37cd4f6e9dfe5c14441d70f1b98244f8f03d5.png",
                "date": 1674626836152,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "contract_date",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma sanasi",
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
                    "BOTLEND EXPRESS",
                    "ИЩЕДУТВ УЧЗКУЫЫ",
                    "ботленд экспресс",
                    ",jnktyl 'rcghtcc"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64107c246a689d2b4b9585d7",
                "paycom_id": "640ed6148298b09e6a7e6d96",
                "name": "Buyuk Yol",
                "organization": "ЧП «ALIKULOV ABDULLOH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0ccf20b7b05332088ea2e2cab104d971226e59d2.png",
                "date": 1678801956686,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balance_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "Buyuk yo'l",
                    "ALIKULOV ABDULLOH",
                    "buyuk yo'l taxi",
                    "игнгл нщд"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "641c28296a689d2b4b958e25",
                "paycom_id": "641c2142fed6675a2280e2c1",
                "name": "EDU EXPO",
                "organization": "ООО «EDU EXPO MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/828df2953c3e1cb239def172bed23c5b46f596c6.png",
                "date": 1679566889629,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                    "EDU EXPO",
                    "еду експо",
                    "EDU"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "642d536dedabbd6b24e6d9bf",
                "paycom_id": "642d529943cc102e6d51b7e6",
                "name": "ATOSH TRANS 777",
                "organization": "ООО «\"ATOSH TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0915eef23bc1340e5ff3b1f094b244c7e34b8963.png",
                "date": 1680692077133,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Davlat avtomobil raqami",
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
                    "atosh trans 777",
                    "777 atosh",
                    "атош транс 777",
                    "фещыр екфты 777",
                    "щещыр",
                    "otosh"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64364182edabbd6b24e6e460",
                "paycom_id": "643514bb8ee89704b5229ad3",
                "name": "Shaxodat Univer Plus",
                "organization": "ООО «Shaxodat Univer Plus»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/12fc0b1eb4bfcfba90c9133bf8cb46a45c2ba168.png",
                "date": 1681277314511,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Xizmatlar",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Туристические услуги",
                                    "value": "1",
                                    "title": "Туристические услуги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Услуги трансфера с аэропорта",
                                    "value": "2",
                                    "title": "Услуги трансфера с аэропорта",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Услуги автобусов",
                                    "value": "3",
                                    "title": "Услуги автобусов",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Туристическая консультация",
                                    "value": "4",
                                    "title": "Туристическая консультация",
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
                            "name": "comment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Izoh",
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
                    "Shaxodat Univer Plus",
                    "siddiq bus",
                    "сиддик бус",
                    "bus siddiq",
                    "sidiq bus",
                    "ышввшй игы"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643937e4850676df804b2846",
                "paycom_id": "6437b6f841d21297c117dd7b",
                "name": "IMKON TAXI",
                "organization": "ООО «\"IMKON-LINE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9f11a1575f3d73ba4d4776cda96f3b0a08cab6e8.png",
                "date": 1681471460230,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "imkon taxi",
                    "taxi imkon",
                    "imkon taksi",
                    "imkontaxi",
                    "имкон такси",
                    "такси имкон"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643e42e43b2ea5dd250e585e",
                "paycom_id": "643e3ffd7eb779614cabfff6",
                "name": "INTELEKT XORAZM",
                "organization": "ООО «\"INTELLEKT XORAZM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/66c5a9f2d9c4b2ea6c339709dd2aecdc67a4092f.png",
                "date": 1681801956919,
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
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Оценка автотранспортных средств",
                                    "value": "vehicle_value",
                                    "title": "Avtomobilni baholash",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оценка дорожно-транспортных происшествий",
                                    "value": "accident_value",
                                    "title": "Yo'l-transport hodisalarini baholash",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оценка недвижимости",
                                    "value": "property_value",
                                    "title": "Mulkni baholash",
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
                        }
                    ]
                },
                "keywords": [
                    "INTELLEKT XORAZM",
                    "INTELLEKT XOREZM",
                    "intellekt xorazm",
                    "интеллект хоразм",
                    "хоразм интеллект",
                    "хорезм интеллект",
                    "штеуддуле",
                    "intellekt-xorazm",
                    "INTELEKT XORAZM"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "645cdf008367719e00a44969",
                "paycom_id": "645cd9eb2cb83937a753f434",
                "name": "TAXI BRO",
                "organization": "ООО «\"INTRO MIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/161c0eaa04b0bb8dc3a0bf7d35871028e0709e0f.png",
                "date": 1683808000784,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "TAXY BRO ",
                    "TAXI BRO",
                    "BRO TAXI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64637c0d8367719e00a45127",
                "paycom_id": "6462110a059f8cd9c4276a08",
                "name": "KARVON TAXI",
                "organization": "ООО «\"TAXI SAMARQAND 01\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0a30a0e610d41b485111d9e1a29125a931173808.png",
                "date": 1684241421807,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "karvon taxi",
                    "taxi karvon",
                    "karvon taksi",
                    "taksi karvon",
                    "карвон такси",
                    "такси карвон",
                    "лфкмщт ефчш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a543e55b17f8b641a8e30f",
                "paycom_id": "64a3f1e143c6c1de2db483a3",
                "name": "Smart Parking",
                "organization": "ООО «ООО \"ANDIJAN DIGITAL CITY TEXNOLOGIK PARKI DIREKTSIYASI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/17331a4d9d1ce439a04b20ea4950f5d3d62be97c.png",
                "date": 1688552421423,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Key",
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
                    "Smart Parking",
                    "смарт паркинг",
                    "ыьфке зфклштп",
                    "cvfhn gfhrbyu"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64edec8a7565023871197f87",
                "paycom_id": "64edd12d5d03046d6406c516",
                "name": "EVOLUTION-MOTORS",
                "organization": "ООО «\"EVOLUTION-MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b4d2cee6aef3f205e681939991e2cc920feef90.png",
                "date": 1693314186400,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Kontrakt kodi",
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
                    "evolution motors",
                    "эволюшн моторс",
                    "умщдгешщт ьщещкы"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65004bdb4dd2443fbfdfc4c8",
                "paycom_id": "64fc8e58922055c58129b412",
                "name": "TAXI MINUTKA",
                "organization": "ООО «\"WEDRIVE EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/39bf25b834b941c5882635d5edb9fb6dd84e6c91.png",
                "date": 1694518235194,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "taxi minutka",
                    "такси минутка",
                    "ефчш ьгтшелф"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6502a3f64dd2443fbfdfc8f6",
                "paycom_id": "64f71c06c9498cfa6a9baa29",
                "name": "ЯTAXI",
                "organization": "ООО «\"MUNTAZIR ELECTIRONICS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ae681830c51762da4223af17b0e66ed5c4c887cf.png",
                "date": 1694671862462,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "яtaxi",
                    "yataxi",
                    "ятакси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ab60d5240a8ca4dff0fb2",
                "paycom_id": "6502d80068fcf988a7c2437e",
                "name": "LEGENDA",
                "organization": "ООО «\"ANYWHERE \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0439569b3c91f12c5a4d1239a5c067b537296ad2.png",
                "date": 1695200781589,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqami",
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
                    "legenda",
                    "легенда",
                    "ligenda",
                    "дупутвф"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ad5ca5240a8ca4dff1081",
                "paycom_id": "65096b1b085fbf404c97f57b",
                "name": "АВТО БОЗОР",
                "organization": "ООО «\"ANDIJON AVTOMOBIL VA EXTIYOT QISMLARI BOZORI 2019\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9fd6c3402354661bf54b93058db09eb6538659f3.png",
                "date": 1695208906995,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Key",
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
                    "ANDIJON AVTOMOBIL VA EXTIYOT QISMLARI BOZORI",
                    "ANDIJON MOSHINABOZOR",
                    "ANDIJON MOSHINA BOZOR",
                    "АВТО БОЗОР",
                    "андижон авто бозор",
                    "автобозор"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ad63f5240a8ca4dff1088",
                "paycom_id": "6508175d2e002e2aabe7ac4c",
                "name": "MDB",
                "organization": "АО «ANDIJON SHAXAR MARKAZIY DEXQON BOZORI AJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cec4f7e737a35738e25eaf6ef2032bb321df6f7f.png",
                "date": 1695209023671,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Key",
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
                    "Andijon markaziy dehqon bozori",
                    "markaziy dehqon bozori",
                    "dehqon bozori",
                    "dexqon bozori"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "651e53cf5a8224b99c9a3354",
                "paycom_id": "6501a36168fcf988a7c22f15",
                "name": "BRAND TAXI",
                "organization": "ООО «\"GULIZAR PAY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/876578a837506da8ef56e18cb0bc7d3d0f25dc02.png",
                "date": 1696486351426,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "BRAND TAXI",
                    "бренд такси",
                    "BRAND TAKSI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "653a3590eb6ccae6f4e20522",
                "paycom_id": "653a33e7388fec2e4593441b",
                "name": "Drivers Village",
                "organization": "ООО «\"DRIVER`S VILLAGE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2f4ed87daff278c7141e366f9918dac186793b24.png",
                "date": 1698313616485,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Telefon raqami",
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Прочие запчасти, детали и комплектующие для легковых и грузовых автомобилей",
                                    "value": "1",
                                    "title": "Прочие запчасти, детали и комплектующие для легковых и грузовых автомобилей",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Синтетическое моторное масло",
                                    "value": "2",
                                    "title": "Синтетическое моторное масло",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Масло трансмиссионное",
                                    "value": "3",
                                    "title": "Масло трансмиссионное",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Антифризы (всех видов)",
                                    "value": "4",
                                    "title": "Антифризы (всех видов)",
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
                        }
                    ]
                },
                "keywords": [
                    "driver's village",
                    "drivers village",
                    "драйверс вииладж",
                    "вкшмукы мшддфпу"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6548dd3fcbc305212221143b",
                "paycom_id": "6540e435388fec2e4593b4a2",
                "name": "BEK YANDEX",
                "organization": "ООО «\"FERGANA MAX-UP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b06297ffcd1e664ad85b08213a9a8a38ad9e2db.png",
                "date": 1699274047519,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy",
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
                    "BEK YANDEX",
                    "BEK YANDEX taxi",
                    "YANDEX BEK"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "657aef567aff6eaacc087916",
                "paycom_id": "657aed141fbd780a670967a6",
                "name": "HUMO  AIR",
                "organization": "ООО «\"HUMO  AIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3161d12981f5a812b0b2979716b5b7d5f92b3caf.png",
                "date": 1702555478771,
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
                            "name": "region",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Mintaqa",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Международный аэропорт Ташкент им. И. Каримова",
                                    "value": "11",
                                    "title": "I. Karimov nomidagi Toshkent xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Самарканд",
                                    "value": "12",
                                    "title": "Samarqand xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Андижан",
                                    "value": "13",
                                    "title": "Andijon xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Бухара",
                                    "value": "14",
                                    "title": "Buxoro xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Ургенч",
                                    "value": "15",
                                    "title": "Urganch xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Термез",
                                    "value": "16",
                                    "title": "Termiz xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Наманган",
                                    "value": "17",
                                    "title": "Namangan xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Нукус",
                                    "value": "18",
                                    "title": "Nukus xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Навои",
                                    "value": "19",
                                    "title": "Navoiy xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Фергана",
                                    "value": "20",
                                    "title": "Farg'ona xalqaro aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Карши",
                                    "value": "21",
                                    "title": "Qarshi xalqaro aeroporti",
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh",
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
                            "name": "ticket_code",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Chipta kodi",
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "За быстрое обслуживание",
                                    "value": "aa",
                                    "title": "Tezkor xizmat uchun",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За перевес багажа",
                                    "value": "bb",
                                    "title": "Bagaj ustunligi uchun",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За билет по местным направлениям",
                                    "value": "cc",
                                    "title": "Mahalliy yo'nalishlarga chipta uchun",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За билет по международным направлениям",
                                    "value": "dd",
                                    "title": "Xalqaro yo'nalishlarga chipta uchun",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Перевоз багажа и почты",
                                    "value": "ee",
                                    "title": "Bagaj va pochta tashish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За превышение габаритов",
                                    "value": "ff",
                                    "title": "Ortiqcha o'lchamlar uchun",
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
                        }
                    ]
                },
                "keywords": [
                    "HUMO AIR",
                    "хумо эйр",
                    "хумо аир",
                    "ргьщ фшк",
                    "[evj 'qh",
                    "[evj fbh"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65817309d857dfafe0e967a2",
                "paycom_id": "656e11671d1a6055be7cd8bf",
                "name": "ALLO TAXI",
                "organization": "ООО «\"NEW-COMFORT-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/065aa24f7c376147d539a60b4101d2b3a0fb4f70.png",
                "date": 1702982409724,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Balance ID",
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
                    "ALLO TAXI",
                    "ФДДЩ ЕФЧШ",
                    "алло такси",
                    "fkkj nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6597ecf04de4489c5e27badd",
                "paycom_id": "6597e35e5c8188fb6e91ea74",
                "name": "DIYDOR TAXI",
                "organization": "ООО «MCHJ DIYDOR -TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cf4f578a746d558f71774bf6da8ddb514452f6d2.png",
                "date": 1704455408046,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi pozivnoy",
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
                    "DIYDOR-TAXI",
                    "DIYDOR TAXI",
                    "DIYDOR TAKSI",
                    "дийдор такси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65ae581b04cafcf110dca642",
                "paycom_id": "65a4e682b5de32ae3f2d81e3",
                "name": "MOVEE",
                "organization": "ООО «\"MOVEE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/be03716268c1d848e823564433be235ffdc1c3cb.png",
                "date": 1705924635307,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИД водителя",
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
                    "movee",
                    "movi",
                    "muvee",
                    "muvi",
                    "муви"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b3b3c0a701df8cdcd39f69",
                "paycom_id": "65b3b2e13c319dec9d88e3e4",
                "name": "Avtomaktab DM",
                "organization": "ООО «\"MARG'ILON AVTOMAKTAB DM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c50768f8fceb3b8f940a0857a5ab1729e6f41a55.png",
                "date": 1706275776785,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "group",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Gruppa",
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
                    "Avtomaktab DM",
                    "MARG'ILON AVTOMAKTAB DM",
                    "DM"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f29986de9f2783922f4483",
                "paycom_id": "65e56d50de9e0abfa2a8c208",
                "name": "BESH TAXI",
                "organization": "ООО «\"BESH TECHNOLOGIES\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/77fcf3ddff47b1d815971b31b1c528d5ae36a99b.png",
                "date": 1710397830151,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "BESH TAXI",
                    "BESH TAksi",
                    "beshtaxi",
                    "beshtaksi",
                    "5 taxi",
                    "беш такси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6603e87d12d57e0dca11ef0c",
                "paycom_id": "6603e84a5b347a44404c674e",
                "name": "Sixt",
                "organization": "СП ООО «\"AVTOBUS RENT\" MCHJ QK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/de04be994931d53f78c89a35fe4d9b2b7d30006f.png",
                "date": 1711532157495,
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
                            "name": "order",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Buyurtnoma raqami",
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
                    "Sixt ",
                    "AVTOBUS RENT",
                    "сихт"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6620bc1be08b752620c614c2",
                "paycom_id": "6614cdfc9aeef890be5091e4",
                "name": "MAX TAXI",
                "organization": "ООО «\"ETALON TRANS LOGISTICS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ed19f296a1b95f267da6d5b7d9a03e30d370cf08.png",
                "date": 1713421339061,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 4000000000,
                        "min": 100,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy raqam",
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
                    "max taxi",
                    "макс такси",
                    "ьфч ефчш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6630eaed95c639065d71b79a",
                "paycom_id": "6630eaa72eb76ec81b69e8bb",
                "name": "AGRO SERVIS PLYUS",
                "organization": "ООО «\"AGRO SERVIS PLYUS GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47fb29166d2440abb9aee36a1b36dc056aac5809.png",
                "date": 1714481901285,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.Sh.",
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami",
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
                            "name": "pass",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID yoki pasport raqami",
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
                    "AGRO SERVIS PLYUS ",
                    "AGRO SERVIS",
                    "AGROSERVIS"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6631f7c08d52ed7c18248f70",
                "paycom_id": "6631f6272eb76ec81b69f7ca",
                "name": "PLATINUM TAXI",
                "organization": "ООО «\"CONSTANTLY BUSINESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e805c3b21a96fc37cce789d00a78218d479a9852.png",
                "date": 1714550720935,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver callsign",
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
                    "platinum taxi",
                    "platinum taksi",
                    "платинум такси",
                    "platinium taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "66338d07db7c028962a03b9b",
                "paycom_id": "66338cd82eb76ec81b6a1be9",
                "name": "TONGGI PARVOZ",
                "organization": "ООО «\"TONGGI PARVOZ\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/04763745ec2479e860333b586dbaa98587e9705d.png",
                "date": 1714654471077,
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
                            "name": "call_sign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchining pozivnoy raqami",
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
                    "TONGGI PARVOZ",
                    "ЕЩТППШ ЗФКМЩЯ",
                    "тонгги парвоз",
                    "njyuub gfhdjp"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6639d9bfdb7c028962a04504",
                "paycom_id": "6639d9092eb76ec81b6a7f6a",
                "name": "TASHMEDIATRANS",
                "organization": "ООО «\"TASHMEDIATRANS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6cc39f420ce0bac619fa954eb5ecf488b264d468.png",
                "date": 1715067327892,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pozivnoy nomer",
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
                    "TASHMEDIATRANS",
                    "ЕФЫРЬУВШФЕКФТЫ",
                    "ташмедиатранс",
                    "nfivtlbfnhfyc",
                    "tmt",
                    "тмт"
                ],
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



export const transportru = 
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "5e280fb8ba8ac3e976c4bead",
                "paycom_id": "5e26d62cee1d825e7c022cf7",
                "name": "ATTO",
                "organization": "ООО «AVTOMATLASHTIRILGAN TRANSPORT TO’LOV TIZIMI OPERATORI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a4d5cad3ad9d8f0c6dbde0cdbb23166bce83a88b.png",
                "date": 1579683768716,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "card_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер транспортной карты",
                            "type": "text",
                            "validation": "^[0-9]{16}$",
                            "prefix": null,
                            "require": null,
                            "scan": "CARD_NUMBER",
                            "error": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "karta",
                    "transport",
                    "карта",
                    "транспорт",
                    "автобус",
                    "метро",
                    "metro",
                    "avtobus",
                    "card",
                    "atto",
                    "атто",
                    "fnnj",
                    "феещ",
                    "cart",
                    "проездной ато",
                    "Транспортная карта",
                    "Transport kartasi"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.015471856045132853,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "59f9cae72081d7311ce4a619",
                "paycom_id": "59e88cf05edcd7253218424f",
                "name": "MyTaxi",
                "organization": "ООО «My Taxi Ops»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/my-taxi2.png",
                "date": 1509542614699,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "ID водителя",
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
                    "MyTaxi",
                    "My Taxi",
                    "майтакси",
                    "ьнефчш",
                    "ми такси",
                    "My Taxi Ops"
                ],
                "weight": 0.0033675839804441572,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60bf1851b8d597ed134dbdc9",
                "paycom_id": "60b886740d44ad636479e40c",
                "name": "YOTO",
                "organization": "ООО «YOTO CORP»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/db4c52a3f4ccd996380482edac7090c93d46bd1c.png",
                "date": 1623136337736,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 500000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "yoto",
                    "yoto corp",
                    "ёто",
                    "yoto",
                    "нщещ"
                ],
                "weight": 0.002791975912823422,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ce3e63db8cf8b180c5fc2b2",
                "paycom_id": "61e860fe82e271b9d3c22a4a",
                "name": "UZ TAXI",
                "organization": "ООО «UZ TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76db370a8e043c0e9fd4e5528ffef3c14f114c32.png",
                "date": 1558438722896,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 200000,
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
                                "output": true
                            },
                            "replace": "[ -]",
                            "placeholder": "",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "uzdriver",
                    "UZ TAXI",
                    "уз такси",
                    "uz taksi",
                    "уздрайвер",
                    "уз драйвер",
                    "taxi",
                    "такси"
                ],
                "weight": 0.0018043239644616592,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fad24488b38a19f0b399b34",
                "paycom_id": "60eed13b4be7164be6d92141",
                "name": "UNIVERSAL TAXI",
                "organization": "ООО «OOO Namangan Taksi Servis»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/22e337c48b2690781c22f3a2b571c32e6613ca4a.png",
                "date": 1605182536184,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "универсал",
                    "такси",
                    "водителям",
                    "taxi UNIVERSAL",
                    "универсал такси"
                ],
                "weight": 0.0009877563954798212,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62d54ea80721155acbfdb50b",
                "paycom_id": "62d5334639c675be34e24da1",
                "name": "PARQOUR",
                "organization": "ООО «\"PARQOUR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cf16ee9cbbc913e96dc808eb42d62091e26782ce.png",
                "date": 1658146472880,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false,
                        "require": "tariff"
                    },
                    "account": [
                        {
                            "name": "parking",
                            "title": "Парковка",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "values": [
                                {
                                    "name": "Сардоба",
                                    "value": "62d7a85239c675be34e2ae7f",
                                    "title": "Сардоба",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Metropol park",
                                    "value": "62e0fef739c675be34e45c68",
                                    "title": "Metropol park",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Sahovat bozor Navoi",
                                    "value": "6461dc622cb83937a7544920",
                                    "title": "Sahovat bozor Navoi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Platform biznes markazi",
                                    "value": "64d9f8efa8a1f5ec97d1c356",
                                    "title": "БЦ Platform",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Интегро в Ташкенте",
                                    "value": "652529581dbb2b13f1736866",
                                    "title": "Интегро в Ташкенте",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер машины",
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
                            "name": "tariff",
                            "type": "dynamic-select",
                            "requires": [
                                "parking",
                                "account"
                            ],
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "title": "Тариф",
                            "placeholder": "",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "parkour",
                    "паркур",
                    "парковка"
                ],
                "additional_info": true,
                "weight": 0.0007044958113050009,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "66507f0ab23b231bab8eef7a",
                "paycom_id": "65e813383c319dec9d8d3992",
                "name": "JET",
                "organization": "ООО «WINNER ELECTRIC VEHICLE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/53f8f13d7907dfdb6030215951df467aa383096a.png",
                "date": 1716551434205,
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
                            "name": "phoneNumber",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "jet",
                    "l;tn",
                    "джет",
                    "l;tn"
                ],
                "weight": 0.000617909150434453,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6086a07cb8d597ed134d97d8",
                "paycom_id": "6086989d7bb924422cdc6ce2",
                "name": "MAXIMUM INCOM",
                "organization": "ООО «ООО \"MAXIMUM INCOM\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ffd268168308870b5a1daecc4366d454e8d1f4d7.png",
                "date": 1619435644574,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "maximum incom",
                    "rohat qulay taksi",
                    "qulay taksi",
                    "taxi",
                    "рохат такси",
                    "INCOM",
                    "ШТСЩЬ"
                ],
                "weight": 0.0005827104716487176,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61f1491397451069bafadbac",
                "paycom_id": "61f14832d4531dde9ea95925",
                "name": "GRAND DOSTAVKA",
                "organization": "ООО «GLOBAL STAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f5197c2068e0a81c331171c10296bcc6777973bf.png",
                "date": 1643202835936,
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
                            "name": "number_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID Номера",
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
                    "grand dostavka",
                    "гранд доставка",
                    "пкфтв вщыефмлф"
                ],
                "weight": 0.0004297998908109828,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65968bd64de4489c5e27b712",
                "paycom_id": "6596482d5c8188fb6e91c756",
                "name": "TAXI OK",
                "organization": "ООО «\"TAXI 01\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/167612c8320724f43366b23b673ca7aa88850813.png",
                "date": 1704365014101,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "taxi ok",
                    "такси ок",
                    "ефчш щл"
                ],
                "weight": 0.0003042544549045912,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f6228e343ac7e3a95983",
                "paycom_id": "62f4f08ca12ad7a48f4a861f",
                "name": "Real Taxi Plus",
                "organization": "ООО «ALI GRAND WAY SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9ba5171f7de72cdceac52d60ac23830c91bd7a04.png",
                "date": 1660220962339,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Real driver",
                    "Куфд вкшмук",
                    "реал драйвер",
                    "реал драйвер"
                ],
                "myhome": true,
                "weight": 0.0003000765701822487,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "660502db12d57e0dca11f1dc",
                "paycom_id": "6605024f5b347a44404c79dd",
                "name": "TAXI SULTAN",
                "organization": "ООО «\"TAXI-SULTAN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/408c26b546d60d34fe082c533f95bacdf07cc713.png",
                "date": 1711604443281,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "901234567",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "park_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ташкент",
                                    "value": "1",
                                    "title": "Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарканд",
                                    "value": "2",
                                    "title": "Самарканд",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухара",
                                    "value": "3",
                                    "title": "Бухара",
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
                        }
                    ]
                },
                "keywords": [
                    "Taxi sultan",
                    "taksi sultan",
                    "такси султан",
                    "taxisultan",
                    "sultan taxi",
                    "sultantaxi",
                    "sultan taksi"
                ],
                "weight": 0.00025579099212541843,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62da91192cfc087774bba5e5",
                "paycom_id": "60dc21442bb66530d56bb481",
                "name": "Orient taxi - Водитель",
                "organization": "ООО «ООО \"ORIENT TAXI SYSTEM\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a400339a78b1a60d0bf727d6dc418ca859beb0c4.png",
                "date": 1658491161182,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "Orient Taxi",
                    "Щкшуте Ефчш",
                    "ориент такси",
                    "jhbtyn nfrcb"
                ],
                "weight": 0.0002138032506658765,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60d9999e0a40376aa994a34b",
                "paycom_id": "60d998e92bb66530d56b7f80",
                "name": "CAR WASH",
                "organization": "ООО «\"AVTORITET CAR WASH\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/198f956222b5f112e0b5d04ce13f1f875c9c928c.png",
                "date": 1624873374308,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер автомобиля",
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филиал",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Kadysheva",
                                    "value": "Kadysheva",
                                    "title": "Кадышева",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Tarakkiet",
                                    "value": "Tarakkiet",
                                    "title": "Тараккиёт",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Nurafshon",
                                    "value": "Nurafshon",
                                    "title": "Нурафшон",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Northern",
                                    "value": "Northern",
                                    "title": "Северный",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Lunacharsky",
                                    "value": "Lunacharsky",
                                    "title": "Центр Луначарский",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чигатай",
                                    "value": "Chigatay",
                                    "title": "Чигатай",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган",
                                    "value": "namangan",
                                    "title": "Наманган",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Депо",
                                    "value": "depo",
                                    "title": "Депо",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Юнусабад",
                                    "value": "yunus",
                                    "title": "Юнусабад",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мироншох",
                                    "value": "mironshox",
                                    "title": "Мироншох",
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
                        }
                    ]
                },
                "keywords": [
                    "car wash",
                    "мойка автомобиля машины",
                    "кар ваш",
                    "AVTORITET"
                ],
                "weight": 0.00020231406767943466,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "652e7d884c0c6f03e2a70c10",
                "paycom_id": "65293180f67194aa76c65100",
                "name": "Mana Mustang N 1",
                "organization": "ООО «\"HUMOYUN MUSTANG TAXI PARK\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f38e3d9f556a25712ac3353b3f141a58364c552d.png",
                "date": 1697545608694,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИД Водителя",
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
                    "MANA TAXI",
                    "MANA TAksi",
                    "мана такси"
                ],
                "weight": 0.0001909293318110514,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5db9873b60753c412ac3b7e4",
                "paycom_id": "5db959227a1066cc7fe97b5b",
                "name": "777 TAXI",
                "organization": "ООО «777 TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ffebaf8aedbe67d5245602ddb821858c57f3cb5d.png",
                "date": 1572439867123,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Driver_ID",
                            "placeholder": "",
                            "title": "ID водителя",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "такси",
                    "777",
                    "777 taxi",
                    "taxi",
                    "taksi",
                    "taksi 777"
                ],
                "weight": 0.00018497584608171335,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6189f910d0b8d9eb96e41dc5",
                "paycom_id": "6189f83d64198587b894c9fc",
                "name": "GRAND TAXI",
                "organization": "ООО «GLOBAL STAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a423e616c0e3f6a915076b56ecf717089c8c6987.png",
                "date": 1636432144535,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "taxi",
                    "tahi",
                    "такси",
                    "гранд",
                    "grand",
                    "nfrcb",
                    "uhfyl",
                    "перевоз",
                    "авто",
                    "пкфтв ефчш"
                ],
                "weight": 0.00018299135083860068,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6426d9926a689d2b4b959bea",
                "paycom_id": "6426d684fc0dc40f8260df01",
                "name": "GTA TAXI",
                "organization": "ООО «\"TAQVO 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/34c71c7ba743f3790ff912f9db5987ea3d4fe5cd.png",
                "date": 1680267666964,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "gta taxi",
                    "TAQVO 777",
                    "gta taksi",
                    "taksi gta",
                    "taxi gta",
                    "такси гта",
                    "пеф ефчш"
                ],
                "weight": 0.00015291058083773481,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f4258e343ac7e3a95953",
                "paycom_id": "62f4f039a12ad7a48f4a860c",
                "name": "Smart taxi",
                "organization": "ООО «Smart way trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aa3792468c78c4ac00ef8be96afdae20ecb834fa.png",
                "date": 1660220453211,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Smart taxi",
                    "Ыьфке ефчш",
                    "смарт такси",
                    "cvfhn nfrcb"
                ],
                "myhome": true,
                "weight": 0.00014988161441403653,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659b8a654de4489c5e27bcd3",
                "paycom_id": "6597f1cf581cb23f75f171a5",
                "name": "CARDIN ZARAFSHON",
                "organization": "ООО «\"SAFARON LINE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2da4daebd1e75edc952059c46fbd30a5776482b9.png",
                "date": 1704692325504,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
                            "type": "text",
                            "validation": "^[0-9]{0,9}$",
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
                    "CARDIN ZARAFSHON",
                    "KARDIN ZARAFSHON",
                    "кардин зарафшон",
                    "taxi cardin zarafshon"
                ],
                "weight": 0.00014988161441403653,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fcbc8e343ac7e3a95a19",
                "paycom_id": "62f4f1bfa12ad7a48f4a8662",
                "name": "Start taxi",
                "organization": "ООО «Start taxi plus»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/66cdba15c3bf1fcb8348cf8d2f820e84fb9197e3.png",
                "date": 1660222652624,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Start taxi",
                    "Ыефке ефчш",
                    "старт такси",
                    "cnfhn nfrcb"
                ],
                "myhome": true,
                "weight": 0.00014424147003887417,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62ce99aecb6e753eb77b1953",
                "paycom_id": "62c3f479b2a26248fca89edf",
                "name": "Yapartner ",
                "organization": "ООО «ООО \"LEVELPAY\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f45cf7500b108ccc40cbe4fc7384883b64963e8f.png",
                "date": 1657706926842,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone",
                            "placeholder": "Введите полный номер с кодом",
                            "replace": "[ -]",
                            "title": "Телефон",
                            "type": "text",
                            "validation": null,
                            "require": null,
                            "error": null,
                            "prefix": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "Нфзфкетук",
                    "япартнер",
                    "Ya partner"
                ],
                "weight": 0.0001422569747957615,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "660fa46090823bcdf98bf294",
                "paycom_id": "660e3f8c8dd95c4de5e1a852",
                "name": "Bekjaan taxi",
                "organization": "ООО «\"BEKJAAN ALOQA SIYSTEM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/281abffc2e8de4675367f8e4183e98788ad8b28b.png",
                "date": 1712301152452,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "Bekjaan taxi",
                    "Bekjan taxi",
                    "Bekjaan taksi",
                    "бекжан такси"
                ],
                "weight": 0.0001331700755246666,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5cd505543dd3183058ae7093",
                "paycom_id": "60939abb5d157d44f1e302ae",
                "name": "GM Uzbekistan",
                "organization": "АО UzAuto Motors",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5cd505543dd3183058ae7093.png",
                "date": 1557480218652,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 50000000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Оплата за автомобиль",
                                    "value": "01",
                                    "title": "Оплата за автомобиль по ПИНФЛ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за автомобиль по договорам до 1 июля 2021 года",
                                    "value": "02",
                                    "title": "Оплата за автомобиль по ИНН",
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
                            "name": "pinfl",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ПИНФЛ покупателя",
                            "type": "text",
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "ПИНФЛ содержит 14 цифр и не должен начинаться с нуля",
                            "optional": true,
                            "prefix": null,
                            "visible": {
                                "require": "payment_type",
                                "value": "^01$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН покупателя",
                            "type": "text",
                            "validation": "^\\d{9}$",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^02$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_n",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": "^\\d-\\d{3}-\\d{4}-((\\d{5}[a-zA-Z]{2})|(\\d{7}))$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "contract_d",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата договора",
                            "type": "text",
                            "validation": "^\\d{2}\\.\\d{2}\\.\\d{4}$",
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
                    "avto",
                    "auto",
                    "credit",
                    "gmuz",
                    "uzavto",
                    "uzauto",
                    "авто",
                    "автосаноат",
                    "гмуз",
                    "узавто",
                    "kredit",
                    "кредит",
                    "avtokredit",
                    "avtocredit",
                    "autocredit",
                    "car",
                    "motors",
                    "моторс",
                    "vjnjhc",
                    "ьщещкы",
                    "uvep",
                    "пьгя",
                    "GM Uzbekistan",
                    "GMUzbekistan",
                    "ГМУзбекистан",
                    "Uz avto",
                    "uz auto",
                    "UzAuto Motors",
                    "гяфмещ",
                    "epfdnj"
                ],
                "additional_info": true,
                "weight": 0.00010872944989896308,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64de1a1d2208ca5249eef0e0",
                "paycom_id": "64de0c84d213de58efc511ee",
                "name": "RICH TAXI",
                "organization": "ООО «ООО \"RICH TAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/63862157065863d0f8938070c91f2ee8068faa75.png",
                "date": 1692277277947,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "rich taxi",
                    "rich taksi",
                    "рич такси",
                    "taxi rich",
                    "taksi rich"
                ],
                "weight": 0.00010580493059332334,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62736e4574c0eaf7a054e918",
                "paycom_id": "62736c7ef4b7573acb3ddaa7",
                "name": "Zoom Logistic",
                "organization": "ООО «STOR FAMILJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3cb827be44307c6c06443a17ba205ab94ab50ed4.png",
                "date": 1651732037980,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "Zoom Taxi",
                    "Зум Такси",
                    "Ящщь Ефчш",
                    "Pev Nfrcb",
                    "Zoom Logistic"
                ],
                "weight": 0.0001050738007669134,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f76a8e343ac7e3a959c4",
                "paycom_id": "62f4f0d9a12ad7a48f4a8630",
                "name": "BRAVO TAXI",
                "organization": "ООО «Cabman»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/df4fd60e8ab9ebe03f8f9a832800c450396ef433.png",
                "date": 1660221290261,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "CABMAN",
                    "СФИЬФТ",
                    "кабман",
                    "rf,vfy"
                ],
                "myhome": true,
                "weight": 0.00010047812757233668,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6433a4d2edabbd6b24e6df80",
                "paycom_id": "642d5316227b71e871934063",
                "name": "BUXORO TAXI",
                "organization": "ООО «\"ATOSH TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c6627884cfec014ae5da278a1230e8cbd4f9e83b.png",
                "date": 1681106130731,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[0-9]{3,10}$",
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
                    "buxoro taxi",
                    "taksi buxoro",
                    "taxi buxoro",
                    "такси бухоро",
                    "бухоро такси",
                    "игчщкщ ефчш"
                ],
                "weight": 0.00009598690149581852,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61c16e255098a0cc1ad453de",
                "paycom_id": "61c08112204c85a50a899b4d",
                "name": "CITY TAXI ",
                "organization": "ООО «\"HEYSOLUTION\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6a38a343cf6e317c24a6b18b1ea0e94a45bee55c.png",
                "date": 1640066597665,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "CITY TAXI",
                    "сититакси",
                    "сити такси",
                    "CITYTAXI"
                ],
                "weight": 0.00009066009847483185,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "646ef4aed46ad0b8e075a4cf",
                "paycom_id": "646c9fbb2302bceec65e7baa",
                "name": "TAXI UNIQUE",
                "organization": "ООО «MILLENNIUM GLOBAL TREYDING MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/63e5889fdce6356be239d72f4c49044c8d6c69fb.png",
                "date": 1684993198677,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "TAXI UNIQUE ",
                    "ЕФЧШ ГТШЙГУ ",
                    "такси юник",
                    "nfrcb .ybr"
                ],
                "weight": 0.00008230432903014688,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659f98cfdd5445e8fefd8dec",
                "paycom_id": "659f97b05c8188fb6e927e3e",
                "name": "TULPAR TAXI",
                "organization": "ООО «\"TULPAR XXX\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4a7494ca1d5158584671c730816c510c00256d20.png",
                "date": 1704958159063,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "998",
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
                    "TULPAR taxi",
                    "taxi tulpar",
                    "tulpar taksi",
                    "taksi tulpar",
                    "тулпар"
                ],
                "weight": 0.00007666418465498454,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5cb430263715d318dc943d29",
                "paycom_id": "5cb429ae12b024d116516417",
                "name": "PRO TAXI",
                "organization": "ООО «Two Winners Group»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/pro_taxi.png",
                "date": 1555312281555,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "ID водителя",
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
                    "такси",
                    "про такси",
                    "транспорт",
                    "taxi",
                    "PRO TAXI"
                ],
                "weight": 0.000071546275870115,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0f6a86a26af9b0b1d5a12",
                "paycom_id": "65b0f5de3c319dec9d889c6b",
                "name": "\"ZETA PETROL\" MCHJ",
                "organization": "ООО «\"ZETA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706096296515,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "ZETA PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.00005128353496675396,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63186617e5b34221aeba1fe0",
                "paycom_id": "6315e60edfcda2d1a53f72b0",
                "name": "Taxi 1053",
                "organization": "ООО «\"TAXI LEADER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/eefac1100aa812b4504a876dc76385a7c961532b.png",
                "date": 1662543383006,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "taxi 1053",
                    "ефчш 1053",
                    "такси 1053",
                    "nfrcb 1053"
                ],
                "weight": 0.00004888125125140703,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "629dd034aa40a686d47ce9c2",
                "paycom_id": "629dcf743cfcbb1628b3dee9",
                "name": "MOBILE TAXI",
                "organization": "ООО «ООО \"MOBILE TAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/39a442ec63b923ac6b3242ab07cbcf569e78a501.png",
                "date": 1654509620360,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "mobile taxi",
                    "мобайл такси",
                    "такси",
                    "TAXI",
                    "ьщишду ефчш",
                    "vj,fqk nfrcb"
                ],
                "weight": 0.000043867789584596055,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63f35a366a689d2b4b955592",
                "paycom_id": "63f0a339711fdb85d8880649",
                "name": "PROFI TAXI - Yandex Go",
                "organization": "ООО «PREMIUM NEW TAXI SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/809b7bfd229343cf5e1b7365633ec17731645d2a.png",
                "date": 1676892726100,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "PROFI TAXI - Yandex Go",
                    "ЗКЩАШ ЕФЧШ - Нфтвуч Пщ",
                    "Профи такси - яндекс го",
                    "Ghjab nfrcb - zyltrc uj"
                ],
                "weight": 0.00004376334246653749,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61d8331920e4769f447b2419",
                "paycom_id": "61d831bc94e58c782a45f7ca",
                "name": "FRESH GLOBUS",
                "organization": "ООО «ООО \"KATARSIS\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/06e63927d9817d1b089c1b9547943ec4100e25cc.png",
                "date": 1641558809958,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "FRESH GLOBUS",
                    "GLOBUS",
                    "транспорт"
                ],
                "weight": 0.00004230108281371762,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64abab165b17f8b641a8e9d1",
                "paycom_id": "64aba8ffe4e564c982849a0d",
                "name": "SUPER GOOD OIL",
                "organization": "ООО «OOO \"SUPER GOOD OIL»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/17f140ad83f09e2da4d2aba9ff68cf1010013ba4.png",
                "date": 1688972054152,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ -80",
                                    "value": "ai80",
                                    "title": "АИ -80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ - 92",
                                    "value": "ai92",
                                    "title": "АИ - 92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ - 95",
                                    "value": "ai95",
                                    "title": "АИ - 95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Dizel",
                                    "value": "dizelfuel",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "SUPER GOOD OIL",
                    "good oil",
                    "super gud oil",
                    "gud oil",
                    "супер гуд оил",
                    "ыгзук пщщв щшд",
                    "пщщв щшд"
                ],
                "weight": 0.00004062992892478063,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64352175edabbd6b24e6e2e3",
                "paycom_id": "6435034f5a04ae2eb622c118",
                "name": "MD TAXI",
                "organization": "ООО «\"MANSUR SHAX\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5cebb558c84279e103ab28c59edaec9f4354f65f.png",
                "date": 1681203573665,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "taxi md",
                    "md taxi",
                    "mdtaxi",
                    "такси мд",
                    "мд такси",
                    "ьв ефчш",
                    "taksi md"
                ],
                "weight": 0.0000390632221539022,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64004c746a689d2b4b956c4d",
                "paycom_id": "63fdee778fcd96f893b6cf17",
                "name": "Novza Taxi",
                "organization": "ООО «\"01 POYTAXT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/79394485c0fb7338af8db56e706e02d3cea43613.png",
                "date": 1677741172964,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "novza taxi",
                    "новза такси",
                    "такси новза",
                    "taksi novza",
                    "тщмяф ефчш"
                ],
                "weight": 0.000038436539445550827,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "642e6813edabbd6b24e6db15",
                "paycom_id": "642e67c369ec50f00a60030c",
                "name": "Full Oil",
                "organization": "ООО «ООО \"FULLOIL\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b892dcb583afbcc1c79fff9a6447a67e9ce14f1.png",
                "date": 1680762899230,
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
                            "name": "fuel",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Топливо",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ -80",
                                    "value": "80",
                                    "title": "АИ -80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ -92",
                                    "value": "92",
                                    "title": "АИ -92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Dizel",
                                    "value": "dizel",
                                    "title": "Dizel",
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
                        }
                    ]
                },
                "keywords": [
                    "Full Oil",
                    "Oil",
                    "FULLOIL "
                ],
                "weight": 0.00003739206826496521,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a4ce6e91578e6d2d800dcc",
                "paycom_id": "65a4ce2dc9a68d35404e9638",
                "name": "Davr TAXI",
                "organization": "ООО «\"MUBINA REVIVEL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8a0c8fa23172aa8bc44ab008d585059609fa2393.png",
                "date": 1705299566149,
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
                            "name": "id_driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "Davr TAXI",
                    "Давр такси",
                    "Davron taxi"
                ],
                "weight": 0.00003739206826496521,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65aa1069f1b913a488b0ed9a",
                "paycom_id": "65a7ac3a727f520807e927f7",
                "name": "Alif Taxi",
                "organization": "ООО «\"ALLONE DRIVER\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/db6dfd318cb40c9e46ec8c3fbef4a45bafcde866.png",
                "date": 1705644137278,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "Alif Taxi",
                    "алиф такси",
                    "aliff taxi",
                    "alif taksi"
                ],
                "weight": 0.00003707872691078952,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "639874e2ceaba24113c3896f",
                "paycom_id": "639866dd0c4c67ea060422ec",
                "name": "DELFIN TAXI",
                "organization": "ООО «\"SHAXRAM SHOXJAHON 2022\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f65207e1a9bede72a805d12ed183a0f1d9f59b4f.png",
                "date": 1670935778156,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "DELFIN TAXI",
                    "ВУДАШТ ЕФЧШ",
                    "Дельфин такси",
                    "Ltkmaby nfrcb"
                ],
                "weight": 0.000035616467257969654,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fb0f8e343ac7e3a95a03",
                "paycom_id": "62f4f167a12ad7a48f4a8644",
                "name": "Free Taxi",
                "organization": "ООО «Smart group truck»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8e51b970e3ea06499e14da1b446abe7a0e659f53.png",
                "date": 1660222223090,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Free Taxi",
                    "Акуу Ефчш",
                    "фпи такси",
                    "agb nfrcb"
                ],
                "myhome": true,
                "weight": 0.00003488533743155972,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4fe3d8e343ac7e3a95a2b",
                "paycom_id": "62f4f240a12ad7a48f4a8687",
                "name": "TAXI OSON",
                "organization": "ООО «TAXI OSON MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/99dfebbb26f7355c21859a1300444ca452e9ea43.png",
                "date": 1660223037519,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "TAXI OSON",
                    "ЕФЧШ ЩЫЩТ",
                    "такси осон",
                    "nfrcb jcjy"
                ],
                "myhome": true,
                "weight": 0.00003133413541756861,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a2d22a5b17f8b641a8df6f",
                "paycom_id": "64a1425894aff0d52dbdd5d9",
                "name": "ONIX TAXI",
                "organization": "ООО «\"BENEFITS AND GOALS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b7dfa97fb3a0392b21cffc2532871e182cc53bb.png",
                "date": 1688392234399,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "onix taxi",
                    "oniks taksi",
                    "оник такси",
                    "taxi oniks",
                    "taxi onix"
                ],
                "weight": 0.00002924519305639737,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f5021f8e343ac7e3a95a54",
                "paycom_id": "62f4f290a12ad7a48f4a86a1",
                "name": "Xon Taxi",
                "organization": "ООО «\"LATIF TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ada5e95bcc77c96de351a7642e9702b37e638c51.png",
                "date": 1660224031713,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Xon Taxi",
                    "Чщт Ефчш",
                    "[jy nfrcb",
                    "хон такси"
                ],
                "myhome": true,
                "weight": 0.00002914074593833881,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5efdbe31343eb86f54d3448d",
                "paycom_id": "5efdbd2e469ba6fe197a9e74",
                "name": "YaMotors",
                "organization": "ООО «OMA MOTORS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/850564bbac5cf5a5558e9e36ce111881b06dbc55.png",
                "date": 1593687601706,
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
                            "name": "Drivers_call_sign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                            "name": "Phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "перегон",
                    "доставка",
                    "такси",
                    "oma motors",
                    "YaMotors"
                ],
                "weight": 0.00002757403916746038,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659bd1aa4de4489c5e27bf62",
                "paycom_id": "6597f13de75f9e9e68034451",
                "name": "CARDIN XATIRCHI",
                "organization": "ООО «\"CARDINGO\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/596b844daf9bec9ce9881cb662303672678ba600.png",
                "date": 1704710570363,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
                            "type": "text",
                            "validation": "^[0-9]{0,9}$",
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
                    "CARDIN XATIRCHI",
                    "cardin xatirchi",
                    "kardin xatirchi",
                    "кардин хатирчи"
                ],
                "weight": 0.00002663401510493332,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6556f8ac2810c5501703709e",
                "paycom_id": "6555ed20ae6f794a7c7c2fd6",
                "name": "AVIA TAXI",
                "organization": "ООО «\"NOVAIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/547c086dbd9fb42c4eb5b9222e178e9a67b93477.png",
                "date": 1700198572228,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "AVIA TAXI ",
                    "АВИА ТАКСИ",
                    "такси авиа ",
                    "TAXI  AVIA "
                ],
                "weight": 0.000026425120868816195,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63bf989d885f2bda14e730e2",
                "paycom_id": "63be7626d3af34dee9995d14",
                "name": "AS TAXI",
                "organization": "ООО «\"AS-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/071fd066114fc80b977ef214d2e503367e2a7d5b.png",
                "date": 1673500829685,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "ФЫ Ефчш",
                    "As Taxi",
                    "АС Такси"
                ],
                "weight": 0.00002569399104240626,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e6bd6a26af9b0b1d595a",
                "paycom_id": "65b0e6143c319dec9d8899e7",
                "name": "\"PETROL DELTA\"",
                "organization": "ООО «\"PETROL DELTA\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706092221952,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "PETROL DELTA",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000025485096806289138,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "661e176de08b752620c60c67",
                "paycom_id": "661e1441067bde847beaba67",
                "name": "GOLD TAXI",
                "organization": "ООО «MCHJ PILOT SERVER»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/29f3c4a5ddbb55f531ab994ee2ef35610acd0735.png",
                "date": 1713248109860,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
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
                    "Gold Taxi",
                    "goldtaxi",
                    "gold taksi",
                    "голд такси",
                    "goldtaksi"
                ],
                "weight": 0.000024545072743762077,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64b9038f5b17f8b641a905ee",
                "paycom_id": "64b90342e4e564c98285ba3a",
                "name": "LINE-TAXI 77",
                "organization": "ООО «\"LINE-TAXI 77\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d728cb5bdbc1be5386769e25d2e48d0fb247c53f.png",
                "date": 1689846671402,
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
                            "name": "poziv",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "LINE-TAXI 77",
                    "LINE TAXI 77",
                    "line taksi 77"
                ],
                "weight": 0.00002360504868123502,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f04c5b88f9930638b5c9f1",
                "paycom_id": "65f04ab187d10089440447ad",
                "name": "TAXI 1415",
                "organization": "ЧП «O‘ROQOVA ZEBO»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aee324cb5dc2a0da7cd067fde72a8b9d6dffed2f.png",
                "date": 1710247003210,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
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
                    "TAXI 1415",
                    "taxi1415",
                    "taksi 1415",
                    "taksi1415",
                    "такси1415",
                    "такси 1415"
                ],
                "weight": 0.000022247236146473712,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e23b6a26af9b0b1d58e3",
                "paycom_id": "65b0e1b73c319dec9d88994e",
                "name": "\"TRANSFER PETROL\" MCHJ",
                "organization": "ООО «\"TRANSFER PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091067365,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "TRANSFER PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.00002214278902841515,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0ebdd6a26af9b0b1d597e",
                "paycom_id": "65b0eb6f3c319dec9d889ac7",
                "name": "\"GAMA PETROL\" MCHJ",
                "organization": "ООО «\"GAMA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706093533269,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "GAMA PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.000021933894792298028,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659b8bd04de4489c5e27bd07",
                "paycom_id": "6597f0896789a5d9654594a2",
                "name": "CARDIN UCHQUDUQ",
                "organization": "ООО «\"TAXI CARDIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dad3dae15f32c343fade7a4946b55985bcb6ffee.png",
                "date": 1704692688959,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
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
                    "CARDIN UCHQUDUQ",
                    "kARDIN UCHQUDUQ",
                    "kardin uchquduk",
                    "cardin uchkuduk",
                    "UCHQUDUQ cardin",
                    "taxi cardin uchquduq"
                ],
                "weight": 0.000020158293785302474,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63982068ceaba24113c387a1",
                "paycom_id": "63975a6f0c4c67ea060407a8",
                "name": "YENGIL TAXI",
                "organization": "ООО «\"YENGIL AVTO TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a2a101f792497fee65d511163068a8848b765939.png",
                "date": 1670914152386,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "YENGIL TAXI",
                    "НУТПШД ЕФЧШ",
                    "ЕНГИЛ ТАХИ",
                    "ЕНГИЛ ТАКСИ"
                ],
                "weight": 0.000020053846667243913,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6639d9bfdb7c028962a04504",
                "paycom_id": "6639d9092eb76ec81b6a7f6a",
                "name": "TASHMEDIATRANS",
                "organization": "ООО «\"TASHMEDIATRANS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6cc39f420ce0bac619fa954eb5ecf488b264d468.png",
                "date": 1715067327892,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "TASHMEDIATRANS",
                    "ЕФЫРЬУВШФЕКФТЫ",
                    "ташмедиатранс",
                    "nfivtlbfnhfyc",
                    "tmt",
                    "тмт"
                ],
                "weight": 0.000019844952431126786,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a10c0291578e6d2d800a69",
                "paycom_id": "65a10bcbc9a68d35404e4482",
                "name": "Smart Control Technology",
                "organization": "ООО «\"SMART CONTROL TECHNOLOGY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a5abb3028dd6bcd281b83b438c3280c41c1f1d4f.png",
                "date": 1705053186495,
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
                            "name": "data_content",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН/ПИНФЛ",
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
                    "Smart Control Technology",
                    "Смарт контрол технологи",
                    "Смарт котроль технологий"
                ],
                "weight": 0.000019218269722775413,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648c4af1f328b7550bba0482",
                "paycom_id": "648c4a01ad7a6692b68e24f2",
                "name": "SMS TAXI",
                "organization": "ООО «\"YENGIL AVTO TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/35dfb49e9f7e7bed04181efc54b132346d856ac3.png",
                "date": 1686915825251,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "SMS taxi",
                    "ЫЬЫ ефчш",
                    "смс такси",
                    "cvc nfrcb"
                ],
                "weight": 0.000018696034132482605,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "609a177eb8d597ed134da44f",
                "paycom_id": "6098b9a651d5f0862e0d2230",
                "name": "ZERO TAXI PLUS",
                "organization": "ООО «ООО \"ZERO TAXI PLUS\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f078c683d7631d482a29f242d407e47461ff0af1.png",
                "date": 1620711294128,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "zero taxi plus",
                    "taxi plus",
                    "зеро такси",
                    "pthj nfrcb",
                    "яукщ ефлыш",
                    "ЕФЧШ ЗДГЫ"
                ],
                "weight": 0.00001786045718801411,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648050f7c34b8a5ddef9ab57",
                "paycom_id": "64802aa4bdb73dc1caa9a00a",
                "name": "UZUN TAXI",
                "organization": "ООО «\"MIR-COMFORT N1\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/894639f0c82d4e4dd87e9feb903156034bc6927d.png",
                "date": 1686130935156,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "UZUM TAXI",
                    "Узум такси",
                    "гягь ефчш",
                    "epev nfrcb"
                ],
                "weight": 0.000017651562951896983,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f2326c671506667ac65dbd",
                "paycom_id": "62e92c2a39c675be34e5bccf",
                "name": "Tezkor Taxi",
                "organization": "ООО «\"TIME-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cf0a63d69e93143001c8af75f9317e99af257740.png",
                "date": 1660039788997,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 50000000,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Tezkor Taxi",
                    "Еуялщк Ефчш",
                    "тезкор такси",
                    "ntprjh nfrcb"
                ],
                "weight": 0.000017338221597721298,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64351009edabbd6b24e6e2bd",
                "paycom_id": "6434a660e1c7455cbbf62731",
                "name": "LION SHER",
                "organization": "ООО «\"SHER BEST AVTO \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c71a31fc47d1dd97c8c0a08c86783cceef6a6da4.png",
                "date": 1681199113088,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "SHER BEST AVTO",
                    "lion sher",
                    "taxi lion",
                    "taksi sher",
                    "такси шер",
                    "лион шер",
                    "дшщт ырук"
                ],
                "weight": 0.00001545817347266718,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62f4f9ae8e343ac7e3a959e0",
                "paycom_id": "62f4f118a12ad7a48f4a863c",
                "name": "SHOH TAXI",
                "organization": "ООО «Shohruh»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/361216aa8aac5665d4ed5a75345a5fc6f77d679e.png",
                "date": 1660221870283,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "Shoh Taxi",
                    "Ырщр Ефчш",
                    "шох таски",
                    "ij[ nfcrb"
                ],
                "myhome": true,
                "weight": 0.000014100360937905874,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "624433495bc3e35a0e922337",
                "paycom_id": "624432d5257faf2854fd2c0e",
                "name": "CHILONZOR AVTO-PARKING",
                "organization": "ООО «\"CHILONZOR AVTO-PARKING\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dec05f8ef32010808afc8ef3e2b3d572b58bac08.png",
                "date": 1648636745022,
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
                            "name": "account",
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
                        },
                        {
                            "content": "text",
                            "name": "adres",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Чилонзор №1 мавзе",
                                    "value": "chil1",
                                    "title": "Чилонзор №1 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 2 мавзе",
                                    "value": "chil2",
                                    "title": "Чилонзор № 2 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 3 мавзе",
                                    "value": "chil3",
                                    "title": "Чилонзор № 3 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 4 мавзе",
                                    "value": "chil4",
                                    "title": "Чилонзор № 4 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор №5 мавзе",
                                    "value": "chil5",
                                    "title": "Чилонзор №5 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 6 мавзе",
                                    "value": "chil6",
                                    "title": "Чилонзор № 6 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 7 мавзе",
                                    "value": "chil7",
                                    "title": "Чилонзор № 7 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 8 мавзе",
                                    "value": "chil8",
                                    "title": "Чилонзор № 8 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 9 мавзе",
                                    "value": "chil9",
                                    "title": "Чилонзор № 9 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 10 мавзе",
                                    "value": "chil10",
                                    "title": "Чилонзор № 10 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор №16 мавзе",
                                    "value": "chil16",
                                    "title": "Чилонзор №16 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 17 мавзе",
                                    "value": "chil17",
                                    "title": "Чилонзор № 17 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 18 мавзе",
                                    "value": "chil18",
                                    "title": "Чилонзор № 18 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 19 мавзе",
                                    "value": "chil19",
                                    "title": "Чилонзор № 19 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 20 мавзе",
                                    "value": "chil20",
                                    "title": "Чилонзор № 20 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор № 20А мавзе",
                                    "value": "chil20a",
                                    "title": "Чилонзор № 20А мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор  Ўзбек фильм мавзе",
                                    "value": "filmchil",
                                    "title": "Чилонзор  Ўзбек фильм мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Қозиробод мавзе",
                                    "value": "chilkoz",
                                    "title": "Чилонзор Қозиробод мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Қизил Шарқ мавзе",
                                    "value": "chilshark",
                                    "title": "Чилонзор Қизил Шарқ мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Гулистон мавзе",
                                    "value": "chilgul",
                                    "title": "Чилонзор Гулистон мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Алгоритм мавзе",
                                    "value": "chilalgo",
                                    "title": "Чилонзор Алгоритм мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Мевазор мавзе",
                                    "value": "chilmeva",
                                    "title": "Чилонзор Мевазор мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Лутфий мавзе",
                                    "value": "chillutf",
                                    "title": "Чилонзор Лутфий мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Бунёдкор кўчаси",
                                    "value": "chilbunyod",
                                    "title": "Чилонзор Бунёдкор кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Муқимий кўчаси",
                                    "value": "chilmuk",
                                    "title": "Чилонзор Муқимий кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор И-24 мавзе",
                                    "value": "chili24",
                                    "title": "Чилонзор И-24 мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Наққошлик мавзе",
                                    "value": "chilnak",
                                    "title": "Чилонзор Наққошлик мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Беш ёғоч мавзе",
                                    "value": "chilbesho",
                                    "title": "Чилонзор Беш ёғоч мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Туроб Тўла кўчаси",
                                    "value": "chilturob",
                                    "title": "Чилонзор Туроб Тўла кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Бўрижар кўчаси",
                                    "value": "chilbur",
                                    "title": "Чилонзор Бўрижар кўчаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 1А  Алгоритм",
                                    "value": "avto1",
                                    "title": "Автостоянка № 1А  Алгоритм",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 2А  Алгоритм",
                                    "value": "avto2",
                                    "title": "Автостоянка № 2А  Алгоритм",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 7Н  Наққошлик",
                                    "value": "avto7",
                                    "title": "Автостоянка № 7Н  Наққошлик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 8  5-мавзе",
                                    "value": "avto8",
                                    "title": "Автостоянка № 8  5-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 12Г  Гулистон",
                                    "value": "avto12",
                                    "title": "Автостоянка № 12Г  Гулистон",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 75  10-мавзе",
                                    "value": "avto75",
                                    "title": "Автостоянка № 75  10-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Автостоянка № 230  16-мавзе",
                                    "value": "avto230",
                                    "title": "Автостоянка № 230  16-мавзе",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор Ц мавзе",
                                    "value": "chil_C_mavze",
                                    "title": "Чилонзор Ц мавзе",
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
                            "name": "autobox",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер автобокса",
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
                    "CHILONZOR AVTO-PARKING",
                    "парковка",
                    "сршдщтящк фмещ зфклштп"
                ],
                "weight": 0.000013995913819847313,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e8031388f9930638b5ba54",
                "paycom_id": "65e8025f3c319dec9d8d369e",
                "name": "DRIVER PRO",
                "organization": "ООО «\"DRIVER PRO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c2599e8944275fd36b0a1eafd920fca096ff6afc.png",
                "date": 1709703955533,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "DRIVER PRO",
                    "draiver pro",
                    "driverpro",
                    "pro driver",
                    "драйвер про"
                ],
                "weight": 0.000012742548403144569,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "640eb9706a689d2b4b958110",
                "paycom_id": "640eb54d8298b09e6a7e68d1",
                "name": "ADMIRAL TAXI",
                "organization": "ООО «\"PREMIUM ADMIRAL \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f827edba525c8dd3cdb5cc2f946f378ed592ae5f.png",
                "date": 1678686576892,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "Admiral Taxi",
                    "taxi admiral",
                    "адмирал такси",
                    "фвьшкфд ефчш",
                    "taksi admiral"
                ],
                "weight": 0.000012220312812851758,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f431de12d57e0dca11d4bc",
                "paycom_id": "65f2f1b487d1008944048a5f",
                "name": "TTB",
                "organization": "ООО «\"TEMIR TULPOR BUXORO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/42a1b658d9149730e9df90c982300688b6ca3480.png",
                "date": 1710502366199,
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
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Телефон водителя  (9* ***  ** **)",
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
                    "TTB (TEZKOR TAXI BUXORO)",
                    "TTB (Tezkor taxi baraka)",
                    "temir TULPOR BUXORO"
                ],
                "weight": 0.000011906971458676073,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64c217d2914d940008fe5f8d",
                "paycom_id": "64c216cec708e50621ebe98d",
                "name": "Best Oil Nurafshon",
                "organization": "ООО «\"BEST OIL NURAFSHON\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ba685a27d4cea09ea3ac0e8a071fc695af353ba1.png",
                "date": 1690441682640,
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
                            "name": "oil_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "4",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "best oil nurafshon",
                    "oil nurafshon",
                    "иуые щшд тгкфаырщт",
                    "бэст оил нурафшон"
                ],
                "weight": 0.000011384735868383262,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0ede06a26af9b0b1d59a1",
                "paycom_id": "65b0ec9b3c319dec9d889af0",
                "name": "\"ALFA PETROL\" MCHJ",
                "organization": "ООО «\"ALFA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706094048646,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "ALFA PETROL",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000010653606041973327,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6576f3717aff6eaacc086b28",
                "paycom_id": "6576e25e43057b5376de6df9",
                "name": "ANZO TAXI",
                "organization": "ООО «\"AN-ZO GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7202d6a06ae01b8e1df23f969bf20891b2d29ee1.png",
                "date": 1702294385832,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "ANZO TAXI",
                    "ФТЯЩ ЕФЧШ",
                    "анзо такси",
                    "fypj nfrcb"
                ],
                "weight": 0.00001023581756973908,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6439517c3b2ea5dd250e5415",
                "paycom_id": "64394dfe5a04ae2eb6231df6",
                "name": "BARON TAXI",
                "organization": "ООО «\"BARON-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f44f093e7dc6491a05fa35d6a26ae719227c08c2.png",
                "date": 1681478012097,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "baron taxi",
                    "baron taksi",
                    "taksi baron",
                    "taxi baron",
                    "такси барон",
                    "барон такси",
                    "Барон",
                    "Baron",
                    "Ба",
                    "Ba"
                ],
                "weight": 0.000010026923333621956,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fae7f0b8b38a19f0b399c11",
                "paycom_id": "5fae402ee938edd0061771ef",
                "name": "Town Taxi",
                "organization": "ООО «\"TOWN-TAXI\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8ca401d48a8d3d8dc30525b290ebe44449b08dcc.png",
                "date": 1605271307899,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "town taxi",
                    "такси",
                    "такса",
                    "таун такси",
                    "тоун такси",
                    "Ещцт Ефчш",
                    "nfey nfrcb",
                    "taxi"
                ],
                "weight": 0.000009191346389153459,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6627a6fee90d731d6a283a58",
                "paycom_id": "662798062eb76ec81b694af7",
                "name": " CHAQMOQ TEZKOR",
                "organization": "ООО «\"CHAQMOQ-TEZKOR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/64088c18695a56997987028928e8652b7641cfb8.png",
                "date": 1713874686023,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
                            "type": "text",
                            "validation": "^[0-9]{9,9}$",
                            "prefix": null,
                            "require": null,
                            "length": 9,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "park_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ташкент",
                                    "value": "1",
                                    "title": "Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Нукус",
                                    "value": "2",
                                    "title": "Нукус",
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
                        }
                    ]
                },
                "keywords": [
                    "CHAQMOQ TEZKOR",
                    "CHAkMOQ TEZKOR",
                    "CHAQMOQ taxi",
                    "чакмок такси"
                ],
                "weight": 0.000008564663680802088,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0d22d6a26af9b0b1d57f7",
                "paycom_id": "65b0d1af3c319dec9d889726",
                "name": "\"RICH NEFT\" MCHJ",
                "organization": "ООО «\"RICH NEFT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706086957926,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "RICH NEFT",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.000008460216562743524,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "648fec56f328b7550bba0540",
                "paycom_id": "648fe7a1e76c7c81b6b1ae82",
                "name": "X GO TAXI",
                "organization": "ООО «\"X-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/79bcd5dd775bd2185984d6dc743ec87455564938.png",
                "date": 1687153750276,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "X GO TAXI",
                    "Ч ПЩ ЕФЧШ",
                    "х го такси",
                    "[ uj nfrcb",
                    "xgo"
                ],
                "weight": 0.000008042428090509276,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64c212d2914d940008fe5f5f",
                "paycom_id": "64c2116ac708e50621ebe8e5",
                "name": "Super Good Oil Avangart",
                "organization": "ООО «\"SUPER GOOD OIL AVANGART\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ba685a27d4cea09ea3ac0e8a071fc695af353ba1.png",
                "date": 1690440402501,
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
                            "name": "oil_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "4",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "super good oil avangart",
                    "oil avangart",
                    "ыгзук пщщв щшд фмфтпфке",
                    "супер гуд оил авангард"
                ],
                "weight": 0.00000772908673633359,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "662ba6fde90d731d6a2844a9",
                "paycom_id": "662ba6702eb76ec81b699ad3",
                "name": "DUBAI TAXI",
                "organization": "ООО «\"TAXI  CAR TRADE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/04c7afeb140acbbc3abc11fc2dfcb6e498e6f677.png",
                "date": 1714136829453,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                    "DUBAI TAXI",
                    "DUBAI TAKSI",
                    "dubay taxi",
                    "дубай такси",
                    "TAXI CAR TRADE"
                ],
                "weight": 0.000007311298264099343,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e3a86a26af9b0b1d5917",
                "paycom_id": "65b0e3233c319dec9d889984",
                "name": "Petrol Shipment",
                "organization": "ООО «\"PETROL SHIPMENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091432771,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "PETROL SHIPMENT",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000006893509791865095,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61e901b087325e773d7715fc",
                "paycom_id": "61e9014282e271b9d3c2341b",
                "name": "EXIM TRANS LOGISTICS",
                "organization": "ООО «MCHJ VED CONSULTANT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6efd0c2e6393053d9145d78f34484d7c1c74abc2.png",
                "date": 1642660272763,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                    "EXIM TRANS",
                    "экзам транс ",
                    "EXIMTRANS"
                ],
                "weight": 0.00000668461555574797,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "646cb846d46ad0b8e075a10a",
                "paycom_id": "646cb70d2cb83937a7552289",
                "name": "KESH TAXI",
                "organization": "ООО «\"ABULAZIZ-BIZNES-TRADE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b19e4f5019fe4e81ab378f5ed6aa65f10429723a.png",
                "date": 1684846662535,
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
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "purpose",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип оплаты",
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
                    "kesh taxi",
                    "kesh taksi",
                    "cash taxi",
                    "кеш такси",
                    "kesh taxi",
                    "taxi kesh"
                ],
                "weight": 0.000006266827083513722,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b10c6d6a26af9b0b1d5aa5",
                "paycom_id": "65b0f9793c319dec9d889d1b",
                "name": "Car24",
                "organization": "ООО «\"GOLD MAX MAGUS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0ec1d5d345093d98878495cdfab16e2a67fce118.png",
                "date": 1706101869321,
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
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "car.24",
                    "GOLD MAX MAGUS",
                    "car"
                ],
                "weight": 0.000006057932847396598,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64df1d3a2208ca5249eef1e7",
                "paycom_id": "64df096040e7b5db63108d9e",
                "name": "ALO PRESTIJ SERVIS",
                "organization": "ООО «\"ALO PRESTIJ SERVIS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/f3447e713ce68d67e9bb1874981828df981cca81.png",
                "date": 1692343610073,
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
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "ALO PRESTIJ SERVIS",
                    "a'lo taxi",
                    "taxi a'lo",
                    "alo taxi",
                    "alo taksi"
                ],
                "weight": 0.000005849038611279474,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6597e1134de4489c5e27ba4e",
                "paycom_id": "659799225c8188fb6e91e0e4",
                "name": "Cheap Taxi",
                "organization": "ООО «\"CHEAP TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2382533ef080db35b209147858f994047bdccbb7.png",
                "date": 1704452371275,
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
                            "name": "ID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "CHEAP TAXI",
                    "CHEEP TAXI",
                    "chip taxi",
                    "cheap taksi",
                    "cheep taksi",
                    "chip taksi",
                    "чип такси"
                ],
                "weight": 0.000005744591493220912,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e8141e88f9930638b5bb0a",
                "paycom_id": "65e813283c319dec9d8d398e",
                "name": "Taxi Allo",
                "organization": "ООО «\"GOODWILL TRIPS LOGISTICS\" Mas'ulitati Cheklangan Jamiyat»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9d861a2648188415442bf4219189262e0f96358c.png",
                "date": 1709708318216,
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
                            "name": "vodid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "A'lo Taxi",
                    "Allo Taxi ",
                    "GOODWILL TRIPS LOGISTICS"
                ],
                "weight": 0.000005744591493220912,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64db601871e0baa108e0c906",
                "paycom_id": "64db5d180b643eeb1574de51",
                "name": "Fincom Rent",
                "organization": "ООО «\"FINCOM RENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d17d8bbfd0d9ccb5cea01b355d1558cc8bf9a342.png",
                "date": 1692098584195,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "gov_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер",
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
                    "Chery rent",
                    "чери рент",
                    "срукн куте",
                    "fincom rent"
                ],
                "weight": 0.000005326803020986664,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b20dd01a8f7b82592d251d",
                "paycom_id": "65b20d573c319dec9d88afd7",
                "name": "OIL LEADER",
                "organization": "ООО «\"OIL LEADER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/83635deb3216715d2ca1875649448afdae9c38d2.png",
                "date": 1706167760420,
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
                            "name": "fuel",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Бензин",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "disel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "oil leader",
                    "оил лидер ",
                    "щшвд дуфвук"
                ],
                "weight": 0.000005326803020986664,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e237c19a8b36c4d03c541f",
                "paycom_id": "62e2371639c675be34e492a2",
                "name": "YANGIHAYOT AVTOTURARGOH",
                "organization": "ООО «\"YANGIHAYOT AVTOTURARGOH\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/fc028eecd181d389879572824713b680b6c35034.png",
                "date": 1658992577765,
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
                        },
                        {
                            "content": "text",
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес",
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
                            "name": "state_vehicle_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер транспортного средства",
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
                            "name": "order_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер ордера",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "YANGIHAYOT AVTOTURARGOH",
                    "Янгихаёт Автотураргох",
                    "Нфтпшрфнще Фмещегкфкпщр"
                ],
                "weight": 0.000004177884722342481,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63061af5e5b34221aeb9ba8a",
                "paycom_id": "630618897066d254af79ab91",
                "name": "iTaxi.uz",
                "organization": "ООО «SMART-FUTURE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b0e4de09f7e0f15a4b7357d4f9c21c33aecde1a2.png",
                "date": 1661344501136,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "SMART-FUTURE",
                    "смарт футуре",
                    "такси"
                ],
                "weight": 0.000003968990486225357,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0dfa86a26af9b0b1d589c",
                "paycom_id": "65afb7423c319dec9d8885a1",
                "name": "\"BEST PETROL\" MCHJ",
                "organization": "ООО «\"BEST PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706090408636,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "BEST PETROL",
                    "топливо",
                    "заправка"
                ],
                "weight": 0.0000037600962501082334,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0f20b6a26af9b0b1d59ec",
                "paycom_id": "65b0f1163c319dec9d889bbf",
                "name": "\"GAZ NEFT - AVTO BENZIN\" MCHJ",
                "organization": "ООО «\"GAZ NEFT - AVTO BENZIN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706095115444,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "GAZ NEFT - AVTO BENZIN",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.0000036556491320496714,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64ca382c601456d371c9f45d",
                "paycom_id": "64ca375bc5a0995831759482",
                "name": "Fly taxi",
                "organization": "ООО «\"FARSAN TRIUMF\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5b06490eca9627bb28fc7ad1b3873646dc887fdb.png",
                "date": 1690974252216,
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
                            "name": "id_driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "FARSAN TRIUMF",
                    "FARSAN",
                    "фарсан",
                    "Fly taxi"
                ],
                "weight": 0.0000035512020139911094,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6601172e12d57e0dca11e5a8",
                "paycom_id": "65f96c655b347a44404ba560",
                "name": "ALFA TAXI",
                "organization": "ООО «\"GRAND ONE WAY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5a8bfdb41dcb6614b7c84558814bd7a9be9f87af.png",
                "date": 1711347502583,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "Alfa taxi",
                    "Alfa taksi",
                    "альфа такси",
                    "алфа такси",
                    "alfataxi"
                ],
                "weight": 0.0000035512020139911094,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e4ea6a26af9b0b1d5935",
                "paycom_id": "65b0e4773c319dec9d8899af",
                "name": "\"TETA PETROL\" MCHJ",
                "organization": "ООО «\"TETA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706091754586,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "TETA PETROL",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.000003237860659815423,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61a0e7733605ed2b7405c0ac",
                "paycom_id": "61a0e706bede17c4c1b7438a",
                "name": "EXIM TRANS TAXI ",
                "organization": "ООО «MCHJ VED CONSULTANT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b6a38b9fc16e02a9aca9527a25c7f9ced46ad1a.png",
                "date": 1637934963112,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                    "VED CONSULTANT",
                    "вэд консультант",
                    "вед консультант",
                    "МУВ СЩТЫГДЕФТЕ",
                    "dtl rjycekmnfyn",
                    "учшь екфты"
                ],
                "weight": 0.000003028966423698299,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65094a1bb67d0fc8b73a5f5d",
                "paycom_id": "65055ce02e002e2aabe783fa",
                "name": "571 TAXI",
                "organization": "ООО «\"EKSPRESS TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7f86ec00905b9f57c05a24ebc61fdf8da7dbbadb.png",
                "date": 1695107611442,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^[0-9]{9}$",
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
                    "571 taxi",
                    "571 taksi",
                    "taxi 571"
                ],
                "weight": 0.000002924519305639737,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625660fcd88dabe401b53196",
                "paycom_id": "62565ff18a3ae29b7063986c",
                "name": "UBER DOSTAVKA",
                "organization": "ООО «\"INTRO MIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a94712e86cc05b6398c85c86c27a882b1dedaa5f.png",
                "date": 1649828092241,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "UBER DOSTAVKA",
                    "Убер Доставка",
                    "Гиук Вщыефмлф"
                ],
                "weight": 0.000002820072187581175,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65bb4b59163b6c10823ca0bc",
                "paycom_id": "65b8f4103c319dec9d893e7b",
                "name": "Original Taxi",
                "organization": "ООО «\"BUXORO ORIGINAL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/252b1a8408ae519df67d03fab614ca72565969b7.png",
                "date": 1706773337628,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "ORIGINAL TAXI",
                    "original taksi",
                    "оригинал такси",
                    "щкшпштфд ефчш"
                ],
                "weight": 0.000002820072187581175,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63a04973ceaba24113c38fe2",
                "paycom_id": "63a0493e4b7facfd06c39d86",
                "name": "TAKSI 855",
                "organization": "ООО «\"TAKSI 855\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2cc66cf5e5eb8c43a1ac538a1efad6aae784ed7b.png",
                "date": 1671448947629,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя ( Позывной )",
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
                    "TAKSI",
                    "такси 855",
                    "855"
                ],
                "weight": 0.000002715625069522613,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e5a17b88f9930638b5b452",
                "paycom_id": "65e5a08a3c319dec9d8d03ee",
                "name": "AVTO TAQSIT UDM",
                "organization": "ООО «\"AVTO TAQSIT UDM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6d52834b7c432174c72492f6bf1f087b31a60c2b.png",
                "date": 1709547899635,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "usmoniy taxi",
                    "усмоний такси",
                    "гыьщтшн ефчш"
                ],
                "weight": 0.000002506730833405489,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f4460b12d57e0dca11d57e",
                "paycom_id": "65f445d987d100894404b1f4",
                "name": "DOOSAN",
                "organization": "ООО «\"DOOSAN\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e591b7742a99783e922a601411fdb9a6e8fb7f7a.png",
                "date": 1710507531191,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "DOOSAN",
                    "ВЩЩЫФТ",
                    "дусан",
                    "lecfy"
                ],
                "weight": 0.0000020889423611712407,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6631f7c08d52ed7c18248f70",
                "paycom_id": "6631f6272eb76ec81b69f7ca",
                "name": "PLATINUM TAXI",
                "organization": "ООО «\"CONSTANTLY BUSINESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e805c3b21a96fc37cce789d00a78218d479a9852.png",
                "date": 1714550720935,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                    "platinum taxi",
                    "platinum taksi",
                    "платинум такси",
                    "platinium taxi"
                ],
                "weight": 0.0000020889423611712407,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61fd0e66b0159dc2d9e448c5",
                "paycom_id": "61fd0c2bcb53f72644f2aaad",
                "name": "MY IMG",
                "organization": "ООО «\"MY IMG\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/675a164c88916c04dbc73f038aa0f516e708093a.png",
                "date": 1643974246195,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Логин",
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
                    "MY IMG",
                    "img",
                    "ьн шьп"
                ],
                "weight": 0.0000018800481250541167,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a7afff5b17f8b641a8e6a9",
                "paycom_id": "64a7afab5dad647a181813b9",
                "name": "ACTIVE Taxi",
                "organization": "ООО «\"XB ACTIVE COMMUNITY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/91a1b3dd07d2d1a9d0c2d3639b2b58fb30ac0400.png",
                "date": 1688711167904,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "ACTIVE Taxi",
                    "ФСЕШМУ Ефчш",
                    "актив такси",
                    "frnbd nfrcb"
                ],
                "weight": 0.0000017756010069955547,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659bce114de4489c5e27bf3f",
                "paycom_id": "6597ad2644d39e2572d9d8ea",
                "name": "CARDIN TAXI",
                "organization": "ООО «\"CARDIN\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9011d97047e676d934829578df3b6b39c726d07c.png",
                "date": 1704709649551,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона (9 цифр)",
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
                    "CARDIN TAXI",
                    "KARDIN TAXI",
                    "CARDIN TAksiI",
                    "cardin taxi"
                ],
                "weight": 0.0000016711538889369925,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e96bbdd5445e8fefd8c07",
                "paycom_id": "659e96815c8188fb6e926fa9",
                "name": "HYPEROIL",
                "organization": "ООО «\"SB BINOKOR UYLARI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b64377f554ca8a4904dd61d4301224887ece284.png",
                "date": 1704892091859,
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
                            "name": "oil_brand",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Марка бензина",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "1",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "2",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "3",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-100",
                                    "value": "4",
                                    "title": "АИ-100",
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
                        }
                    ]
                },
                "keywords": [
                    "SB BINOKOR UYLARI",
                    "Сб бинокор уйлари",
                    "СБ СТРОИТЕЛИ ДОМА",
                    "HYPEROIL"
                ],
                "weight": 0.0000016711538889369925,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6385aadf912b0e828a2bf7c8",
                "paycom_id": "6385a95c4050a4f68534a2dd",
                "name": "ActiveCargo",
                "organization": "ООО «YUMA BEST SOFT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/307b373fad9167e546360e67098193b2607ae0cf.png",
                "date": 1669704415565,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "ActiveCargo",
                    "АктивКарго",
                    "ФсешмуСфкпщ",
                    "FrnbdRfhuj"
                ],
                "weight": 0.0000015667067708784305,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65afa1216a26af9b0b1d5450",
                "paycom_id": "65af9ffd3c319dec9d8881e7",
                "name": "\"FORMULA PETROL\"",
                "organization": "ООО «\"FORMULA PETROL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706008865314,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "FORMULA PETROL",
                    "заправка",
                    "бензин"
                ],
                "weight": 0.0000015667067708784305,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa8ca012d57e0dca11e161",
                "paycom_id": "65fa8b785b347a44404bbaae",
                "name": "KOTTA BOLA TAXI",
                "organization": "ООО «\"KOTTA BOLA TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/dc4de2db068433ca8afcc8a472dfdf236d6c000b.png",
                "date": 1710918816939,
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Способ оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "KOTTA BOLA TAXI",
                                    "value": "1",
                                    "title": "KOTTA BOLA TAXI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "KOTTA BOLA DASTAFKA",
                                    "value": "2",
                                    "title": "KOTTA BOLA DASTAFKA",
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "KOTTA BOLA TAXI",
                    "KOTA BOLA TAXI",
                    "KOTTA BOlLA TAXI",
                    "kotta bola taksi",
                    "taxi kotta bola",
                    "kottabola",
                    "котта бола такси",
                    "katta bola taxi"
                ],
                "weight": 0.0000015667067708784305,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64b76f145b17f8b641a90117",
                "paycom_id": "64abd407277265fa82e0e569",
                "name": "GLOW STAR XIVA MCHJ",
                "organization": "ООО «MCHJ \"GLOW STAR XIVA\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/832dc7f24cf3f87595c17006cde1fe8e36122509.png",
                "date": 1689743124380,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "GLOW STAR XIVA MCHJ",
                    "ООО \"ГЛОУ СТАР XIVA\"",
                    "GLOW STAR XIVA LLC",
                    "GLOW STAR XIVA",
                    "СВЕТЯЩАЯСЯ ЗВЕЗДА XIVA"
                ],
                "weight": 0.0000014622596528198685,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "661e47bfe08b752620c60e2b",
                "paycom_id": "661e4727067bde847beac123",
                "name": "Fincom Rent Саида Барака",
                "organization": "ООО «\"FINCOM RENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/eea238168ba85fa52ae14861b6286b8b97cd235a.png",
                "date": 1713260479410,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "gov_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер",
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
                    "Fincom Rent Саида Барака",
                    "Fincom Rent Саид Барака",
                    "Finkom Rent Саида Барака",
                    "финком рент саид барака",
                    "саид барака fincom rent",
                    "fincomrent Саида Барака"
                ],
                "weight": 0.0000012533654167027445,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b0e0b26a26af9b0b1d58bd",
                "paycom_id": "65b0e0823c319dec9d889914",
                "name": "\"OIL START\" MCHJ",
                "organization": "ООО «\"OIL START\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47b978f3efb405b3b9e169f6f5f6f640c3cb65b5.png",
                "date": 1706090674264,
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
                            "name": "fuel_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип топлива",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "АИ-80",
                                    "value": "ai80",
                                    "title": "АИ-80",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-92",
                                    "value": "ai92",
                                    "title": "АИ-92",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "АИ-95",
                                    "value": "ai95",
                                    "title": "АИ-95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Дизельное топливо",
                                    "value": "dizel",
                                    "title": "Дизельное топливо",
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
                        }
                    ]
                },
                "keywords": [
                    "OIL START",
                    "заправка",
                    "топливо"
                ],
                "weight": 0.0000011489182986441823,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f28a27de9f2783922f43b5",
                "paycom_id": "65798c0d1fbd780a67093e2e",
                "name": "NUR TAXI",
                "organization": "ООО «\"XON AVTO TRANS 700\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a3832d649be252e027a839365b21216766632964.png",
                "date": 1710393895807,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "NUR TAXI",
                    "nur taksi",
                    "nurtaxi",
                    "nurtaksi",
                    "нур такси",
                    "нуртакси",
                    "тгк ефчш"
                ],
                "weight": 0.0000010444711805856203,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa7f8012d57e0dca11e0e1",
                "paycom_id": "65c31b19a10775d0a7ff05e4",
                "name": "MASTER-ZAR",
                "organization": "ООО «\"MASTER-ZAR\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3add3aaab9ddba1cf8edbcb1ae370b7fa9a2e5a3.png",
                "date": 1710915456376,
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "master zar",
                    "baraka taxi",
                    "мастер зар",
                    "ьфыеук яфк"
                ],
                "weight": 0.0000010444711805856203,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f996989ea62ccfa6119d037",
                "paycom_id": "5f996897740f35d3638ae54a",
                "name": "HYUNDAI AUTO ASIA",
                "organization": "ООО «HYUNDAI AUTO ASIA»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76bb0242d044504b324bbc10690d4dc0a148c787.png",
                "date": 1603889545456,
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
                            "name": "Contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "Date_of_agreement",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата заключения договора",
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
                            "title": "Ф.И.О",
                            "type": "text",
                            "validation": "^[a-zA-z'\\\\-]+( [a-zA-z'\\\\-]+){1,3}$",
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
                    "хёндай",
                    "автосалон",
                    "машина",
                    "hyundai",
                    "РНГТВФШ",
                    "HYUNDAI AUTO ASIA"
                ],
                "weight": 9.400240625270584e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64db695571e0baa108e0c935",
                "paycom_id": "64d4ebfad2d6248f97c1e53b",
                "name": "AKA TAXI-DRIVER",
                "organization": "ООО «\"AKA TAXI-DRIVER\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/683049db3e7cfd7d054fd58bd4d9815e6609380b.png",
                "date": 1692100949179,
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
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Идентификатор кошелька",
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
                    "aka taxi",
                    "ака такси",
                    "флф ефчш"
                ],
                "weight": 7.311298264099343e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "641310296a689d2b4b9589f1",
                "paycom_id": "64130bd321c354c60e296b1b",
                "name": "ELITE MOTORS HAYDOVCHI",
                "organization": "ООО «\"ELITE GAS MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/afe334b95daae18cce7ced386c435dd3ebf8e30e.png",
                "date": 1678970921283,
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
                            "name": "driver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "elite gas motors",
                    "elite motors haydovchi",
                    "elite haydovchi",
                    "элит моторс хайдовчи",
                    "удшеу ьщещкы"
                ],
                "weight": 6.266827083513723e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65fa81f912d57e0dca11e0f8",
                "paycom_id": "65fa816a5b347a44404bb948",
                "name": "SOOSAN",
                "organization": "ООО «\"SOOSAN HEAVY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c418d22329740593ee3244f9048192cbe3fe0d7b.png",
                "date": 1710916089774,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": []
                },
                "keywords": [
                    "SOOSAN ",
                    "SOOSAN HEAVY",
                    "сусан"
                ],
                "weight": 6.266827083513723e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ee36a0a343eb86f54d33cfe",
                "paycom_id": "5ee3653ec2a2e8e1604a7d6a",
                "name": "Premium taxi",
                "organization": "ООО «Premium new taxi servis»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/60444667be005f9679464a3eb6ed0c1830364dc3.png",
                "date": 1591962122436,
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
                            "name": "State_number_car",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер автомобиля",
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
                    "такси",
                    "перегон",
                    "доставка"
                ],
                "weight": 5.222355902928102e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62677e455f4122709934ff62",
                "paycom_id": "62677d6f8fa454efd5adde17",
                "name": "FERGANA CITY TAXI",
                "organization": "ООО «\"FERGHANA CITY TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/93d4e559919739bf98acda03b1b4f4dd27a3d61e.png",
                "date": 1650949701726,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID Водителя",
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
                    "fergana city taxi",
                    "citytaxi",
                    "фергана такси"
                ],
                "weight": 5.222355902928102e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f044382343eb86f54d34583",
                "paycom_id": "5f044320f4e693d74a13ea99",
                "name": "Halol Taxi Andijan",
                "organization": "Drive taxi",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0c6e054a1e8b2d293ae55f833067b9c40326d73a.png",
                "date": 1594114946047,
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
                            "name": "Id_of_the_subscriber",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Идентификатор абонента",
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
                    "доставка",
                    "перегон",
                    "такси",
                    "машина",
                    "Taxi Andijan",
                    "такси халол"
                ],
                "weight": 4.177884722342481e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63d7b3240f60b188c6c4610b",
                "paycom_id": "63d7ad5a45caa8355e11fe3b",
                "name": "166 EXPRESS",
                "organization": "ООО «\"166 EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7d91325b4840ab59fa91cdf85488ed1fb6245ba5.png",
                "date": 1675080484334,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер машины",
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
                    "166 EXPRESS ",
                    "1331",
                    "166"
                ],
                "weight": 4.177884722342481e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6604100612d57e0dca11f057",
                "paycom_id": "6603eaa95b347a44404c67c9",
                "name": "MustangTaxi",
                "organization": "ООО «\"OLMALIQ AVTO MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7f450692ea459fc8b06f0ba026788cbf8e8c1824.png",
                "date": 1711542278364,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИД водителя",
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
                    "мустанг такси",
                    "vecnfyu nfrcb",
                    "Mustang Taxi",
                    "Ьгыефтп Ефчш"
                ],
                "weight": 4.177884722342481e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625ea592927f281be0ff784d",
                "paycom_id": "625ea523927f281be0ff7842",
                "name": "X-Taxi",
                "organization": "ООО «\"X-taxi\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/72c812895f60417b30176c0634d21cebdfbaf0c7.png",
                "date": 1650369892411,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "X-Taxi",
                    "XTaxi",
                    "X Taxi",
                    "1311"
                ],
                "weight": 3.1334135417568613e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "637f3666bac96cb75c462326",
                "paycom_id": "636ca5172cfb25761a99e6af",
                "name": "TIRGO subscription",
                "organization": "ООО «\"TIRGO LOG\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/598e8048a0c8fe23edfd7906c6fbafed4eab3cbd.png",
                "date": 1669281382085,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1000,
                        "max": 10000000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "UserID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "TIRGO",
                    "Тирго",
                    "Ешкпщ",
                    "Nbhuj"
                ],
                "weight": 3.1334135417568613e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643d4c3a3b2ea5dd250e57bb",
                "paycom_id": "643cf92e7eb779614cabe5e1",
                "name": "THE METAN GROUP",
                "organization": "ООО «\"THE METAN GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c29f4f4366d4b179c32d99e19af5d6a7912ea5ed.png",
                "date": 1681738810100,
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
                        },
                        {
                            "content": "text",
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер машины",
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
                    "THE METAN GROUP",
                    "METAN",
                    " METAN GROUP"
                ],
                "weight": 3.1334135417568613e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6620bc1be08b752620c614c2",
                "paycom_id": "6614cdfc9aeef890be5091e4",
                "name": "MAX TAXI",
                "organization": "ООО «\"ETALON TRANS LOGISTICS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ed19f296a1b95f267da6d5b7d9a03e30d370cf08.png",
                "date": 1713421339061,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 4000000000,
                        "min": 100,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной номер",
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
                    "max taxi",
                    "макс такси",
                    "ьфч ефчш"
                ],
                "weight": 3.1334135417568613e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5edde13c343eb86f54d33ad8",
                "paycom_id": "5eb5264b6420f3660dc7f2e1",
                "name": "AMIR AVTO BAHOLASH",
                "organization": "ООО «AMIR AVTO BAHOLASH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c1d05b233374be459df4305cf6e25756f6bc7364.png",
                "date": 1591599420575,
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
                            "name": "Full_name",
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
                        },
                        {
                            "content": "text",
                            "name": "Phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "amir avto baholash",
                    "avto baholash",
                    "оценка авто",
                    "avtomobil baholash"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62a830f72abe8594b27f365d",
                "paycom_id": "62a6d4f6e7e77db81e86cbf4",
                "name": "Taxida",
                "organization": "ООО «\"SAYT INFO\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cbfa3942d6f15a39abe2416b0019f0933be44bbc.png",
                "date": 1655189751925,
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
                            "name": "user_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "Taxida",
                    "Ефчшвф",
                    "таксида",
                    "nfrcblf"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62ce9899cb6e753eb77b194c",
                "paycom_id": "62c553ef4c11d19b6709d335",
                "name": "Yapartner Курьер",
                "organization": "ООО «ООО \"LEVELPAY\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/86cb9af1d17f19df29784ceb736aa58395b2cb3c.png",
                "date": 1657706649739,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Телефон",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "998",
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
                    "Yapartner",
                    "япартнер",
                    "Нфзфкетук"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "641c28296a689d2b4b958e25",
                "paycom_id": "641c2142fed6675a2280e2c1",
                "name": "EDU EXPO",
                "organization": "ООО «EDU EXPO MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/828df2953c3e1cb239def172bed23c5b46f596c6.png",
                "date": 1679566889629,
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
                    "EDU EXPO",
                    "еду експо",
                    "EDU"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e6857dd5445e8fefd8a91",
                "paycom_id": "659e68235c8188fb6e92688f",
                "name": "MEGAVOLT",
                "organization": "ООО «\"DELIKATESI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d6de58694f16e2116a43cdc7a9f21f85e617830d.png",
                "date": 1704880215286,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Автосалон",
                                    "value": "1",
                                    "title": "Автосалон",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Центр оказания услуг",
                                    "value": "2",
                                    "title": "Центр оказания услуг",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Зарядная станция",
                                    "value": "3",
                                    "title": "Зарядная станция",
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
                        }
                    ]
                },
                "keywords": [
                    "MEGAVOLT",
                    "Мегавольт",
                    "ьупфмщде"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659e6f90dd5445e8fefd8afa",
                "paycom_id": "659e6c305c8188fb6e926938",
                "name": "MEGA AVTOTEX INNOVATION",
                "organization": "ООО «\"MEGA AVTOTEX INNOVATION\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b242763aeea083d6ff222a5b2dc66aba2f313e98.png",
                "date": 1704882064299,
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
                            "name": "coment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "комментарий",
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
                    "MEGA AVTOTEX INNOVATION",
                    "Мега автотех инноватион",
                    "МЕГА АВТОТЕКС ИННОВАЦИЯ"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e1a42088f9930638b5afbb",
                "paycom_id": "65dc59df3c319dec9d8c3953",
                "name": "TIRGO service",
                "organization": "ООО «\"ALPHAGROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6c9e213a494c8f847c5fbc5cab736f755081475c.png",
                "date": 1709286432640,
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
                            "name": "UserID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID пользователя",
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
                    "TIRGO",
                    "Тирго",
                    "Ешкпщ",
                    "Nbhuj"
                ],
                "weight": 2.0889423611712406e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "614c1976cfeca453b4a00ef6",
                "paycom_id": "614c1bfb4594962b460bc050",
                "name": "YaTaxi",
                "organization": "ООО «ООО \"RUSTAM TRANS EKSKLYUZIV\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/979f4523a3eb27850d0f5e7220e35eca7c1b5b4e.png",
                "date": 1632377206610,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "YaTaxi 1069",
                    "ятакси",
                    "yataksi",
                    "яtaksi",
                    "яtaxi",
                    "нфефчш"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6245ac2b5bc3e35a0e92296c",
                "paycom_id": "6245ab4d257faf2854fd63b0",
                "name": "NUR ASSIST",
                "organization": "ООО «\"NUR ASSIST\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a809d820d7077d7aa4b2dd8c084554c53acdbd94.png",
                "date": 1648733227659,
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
                        },
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "NUR ASSIST",
                    "nur",
                    "тгк фыышые",
                    "Нур Ассист"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6256777dd88dabe401b5340a",
                "paycom_id": "62566ed88a3ae29b70639c14",
                "name": "GBO NASIYA METAN SAVDO ",
                "organization": "ООО «MCHJ GBO NASIYA METAN SAVDO»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/83f603f3eb609b26df9c0d7de1584bcdc0210a8d.png",
                "date": 1649833853066,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О",
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
                            "name": "number_car",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер машины",
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
                            "name": "namber_telephone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "GBO NASIYA METAN SAVDO",
                    "ГБО НАСИЯ МЕТАН САВДО",
                    "ПИЩ ТФЫШНФ ЬУЕФТ ЫФМВЩ"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63359f791fe5cc9de25ea011",
                "paycom_id": "632d66e20076c5b9e24de26e",
                "name": "Elektrichka Energy",
                "organization": "ООО «\"ELEKTRICHKA\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5ba0ed8e301999e232bab3235c8358252fe845c1.png",
                "date": 1664458617967,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "elektichka",
                    "удулекшсрлф",
                    "электричка",
                    "'ktrnhbxrf"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63ef299a6a689d2b4b9551e9",
                "paycom_id": "63ecb2a572052b0744199cfe",
                "name": "UpTaxi",
                "organization": "ООО «MCHJ XOREZM BAZA»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4d028054f8ac2fb70813246f5407beb9eebfc766.png",
                "date": 1676618138729,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "uptaxi",
                    "гзефчш",
                    "аптакси",
                    "fgnfrcb"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6447777efdac8ead525c63cf",
                "paycom_id": "643e4f4f7eb779614cac01e6",
                "name": "Korzinka Parking",
                "organization": "ИП ООО «\"ANGLESEY FOOD\" MCHJ XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5ea04356512ae9989b5a89e2d8c2ace8ca2e1b81.png",
                "date": 1682405246683,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 1,
                        "round": false,
                        "require": "card"
                    },
                    "account": [
                        {
                            "name": "parking",
                            "title": "Парковка",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "values": [
                                {
                                    "name": "AZIMOVA PARKING",
                                    "value": "6470a9a42cb83937a7556c51",
                                    "title": "Корзинка — Азимова",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "TURKMENSKY PARKING",
                                    "value": "6470a9902cb83937a7556c4c",
                                    "title": "Корзинка — Туркменский",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ABAYA PARKING",
                                    "value": "6470a9802cb83937a7556c49",
                                    "title": "Корзинка — Абая",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер автомобиля",
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
                            "name": "card",
                            "type": "dynamic-select",
                            "requires": [
                                "car_number"
                            ],
                            "optional": true,
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "title": "Информация о парковке",
                            "placeholder": "",
                            "error": null,
                            "scan": null,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "парковка корзинка",
                    "RPS Korzinka",
                    "gfhrjdrf rjhpbyrf"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6495939f5b17f8b641a8d9fa",
                "paycom_id": "649592c7406523fd2dffc70d",
                "name": "Eprotocol",
                "organization": "ООО «Eprotocol service»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4fd6a5e2fd9831ba326a8364056abd231c6b9306.png",
                "date": 1687524255126,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                    "Eprotocol",
                    "епротокол",
                    "узкщещсщд"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "653a3590eb6ccae6f4e20522",
                "paycom_id": "653a33e7388fec2e4593441b",
                "name": "Drivers Village",
                "organization": "ООО «\"DRIVER`S VILLAGE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2f4ed87daff278c7141e366f9918dac186793b24.png",
                "date": 1698313616485,
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
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Прочие запчасти, детали и комплектующие для легковых и грузовых автомобилей",
                                    "value": "1",
                                    "title": "Прочие запчасти, детали и комплектующие для легковых и грузовых автомобилей",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Синтетическое моторное масло",
                                    "value": "2",
                                    "title": "Синтетическое моторное масло",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Масло трансмиссионное",
                                    "value": "3",
                                    "title": "Масло трансмиссионное",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Антифризы (всех видов)",
                                    "value": "4",
                                    "title": "Антифризы (всех видов)",
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
                        }
                    ]
                },
                "keywords": [
                    "driver's village",
                    "drivers village",
                    "драйверс вииладж",
                    "вкшмукы мшддфпу"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "658bec884de4489c5e279d8d",
                "paycom_id": "658bec045c8188fb6e91208d",
                "name": "UZVIP Black Car Transportation",
                "organization": "ООО «\"UZVIPTRANSSERVICE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/6e40ce0463acc368e411f0d7c9f0e5a0cf262d8a.png",
                "date": 1703668872752,
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И",
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
                    "UZVIP Black Car Transportation",
                    "Black Car Transportation",
                    "Car Transportation",
                    "УЗВИП Блэк Автоперевозки",
                    "Car Transportation"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "659ced854de4489c5e27c207",
                "paycom_id": "6598fc505c8188fb6e91fc46",
                "name": "SAM AVTO RENTAL",
                "organization": "ООО «\"SAM AVTO RENTAL\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/1b1b568e0684ac0479215b35923f2c182521e56d.png",
                "date": 1704783237839,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 500000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_info",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Info",
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
                    "SAM AVTO RENTAL",
                    "sam avto",
                    "sam auto rental",
                    "аренда машин",
                    "сам авто аренда"
                ],
                "weight": 1.0444711805856203e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5be2b348c439933460989cea",
                "paycom_id": "5be2b2d2c439933460989ce8",
                "name": "Global Taksi",
                "organization": "ООО «Global Service Company»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/global-taksi.png",
                "date": 1541583673103,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "driver_id",
                            "title": "Id водителя",
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
                    "Global Taksi",
                    "глобал такси",
                    "пдщифд ефлыш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5c3c74cab20d521bf0ad6af1",
                "paycom_id": "606d93441403083e18871828",
                "name": "Taxi Real",
                "organization": "ЧП «Vodiy Darxon Trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/46c5b94b15dd6a10ec8494ca969c7a92a2bce826.png",
                "date": 1547645484730,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "user_id",
                            "title": "Лицевой счёт",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[0-9]+$",
                            "validation_error": "Ошибка в аккаунте",
                            "visible": null,
                            "placeholder": "",
                            "scan": null,
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "taxi",
                    "такси",
                    "taksi",
                    "real",
                    "реал",
                    "ефчш",
                    "куфд",
                    "nfrcb",
                    "htfk"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ef302b4343eb86f54d341a8",
                "paycom_id": "5ef301f5b18e52dd0c1afe45",
                "name": "Ali grand way servise",
                "organization": "ООО «Ali grand way servise»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b1e260069ddeb4aa096aea7f830f42a41caa1f8f.png",
                "date": 1592984244366,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер автомобиля",
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
                    "ali grand way servise",
                    "услуги такси",
                    "оплата такси",
                    "taksi to'lovi",
                    "taksi xizmati",
                    "taksi",
                    "Али Гранд Путь Сервис",
                    "taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fd0ce0758bb9fee75c0e8bf",
                "paycom_id": "5fd0cd461c849a7578de00b8",
                "name": "Т такси",
                "organization": "ООО «ООО \"APRIORI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/fe6d01b0c809186825b07a1227f5e87921f580dc.png",
                "date": 1607519751339,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "apriori",
                    "априори",
                    "транспортировка и хранение",
                    "такси",
                    "taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fd351a158bb9fee75c0e9c9",
                "paycom_id": "5fce1d661c849a7578ddccb7",
                "name": "PREMIUM AUTO",
                "organization": "ООО «PREMIUM AUTO MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4957dd81fbfc1491fb63ab3e9b6d217a5a2f95d0.png",
                "date": 1607684513203,
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
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "pay_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
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
                    "premium auto",
                    "премиум авто",
                    "автомобили и запчасти"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60a349dab8d597ed134da70d",
                "paycom_id": "60a348b27852bd0ebce1ad27",
                "name": "АЛЛО ТАКСИ",
                "organization": "ООО «\"FERGANA AUTO TRANS LIKE\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/26c0bdaf4bb203bdf000908d6f78c6eff421b3eb.png",
                "date": 1621314010965,
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
                            "name": "Full_name",
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
                        },
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "такси",
                    "перевоз",
                    "перегон",
                    "машина",
                    "вызов",
                    "taksi",
                    "FERGANA AUTO TRANS LIKE",
                    "allo taksi"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60cc77bbb8d597ed134dc67b",
                "paycom_id": "60700164e928245e531c4b9d",
                "name": "ASIA TAXI",
                "organization": "ООО «ООО \"TEZTAXI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8f6548524b61392e2a5b0759c52f5f434daea314.png",
                "date": 1624012731839,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "tez driver",
                    "teztaxi",
                    "еуя вкшмук",
                    "тез драйвер",
                    "ntp lhfqdth",
                    "такси",
                    "taxi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60d57a560a40376aa994a23e",
                "paycom_id": "60d568e12bb66530d56b3414",
                "name": "IN RENT",
                "organization": "ООО «IN RENT»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/990fc10b147d8394dfcc802967d0434784b13852.png",
                "date": 1624603222097,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "name",
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
                        },
                        {
                            "content": "text",
                            "name": "Contract",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата договора",
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
                    "Прокат автомобилей",
                    "Avtomobil ijarasi",
                    "аренда",
                    "arenda",
                    "IN RENT",
                    "ин рент",
                    "ШТ КУТЕ",
                    "by htyn"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60e42efb16527be45e019cb0",
                "paycom_id": "60e42dcc3cde2522635f7fd6",
                "name": "TOP ASSIST ",
                "organization": "АО «TOP ASSIST»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/38c407ee13b39c57910fbe41132f01edc655727d.png",
                "date": 1625566971180,
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
                        },
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "TOP ASSIST",
                    "ещз фыышые",
                    "топ ассист",
                    "njg fccbcn"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "610a35bf12950f485b3b1562",
                "paycom_id": "60f5167ba556a9f9a27e64eb",
                "name": "UZAVTOVOKZAL",
                "organization": "ГУП «UZAVTOVOKZAL SERVIS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/994500ed8fd4d44c231e1c94092c4e94c8959549.png",
                "date": 1628059071015,
                "terminal": {
                    "type": "link",
                    "endpoint": "https://avtoticket.uz/",
                    "link_type": "external"
                },
                "keywords": [
                    "UZAVTOVOKZAL",
                    "узавтовокзал",
                    "гяфмещмщлящд",
                    "vokzal",
                    "вокзал"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f169798343eb86f54d349bd",
                "paycom_id": "5e7c77381274dcf3623c332d",
                "name": "TAXI EXPRESS",
                "organization": "ООО «OSKAR TAXI EXPRESS»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/e517b1181b3207ed72f8e85c7ee27808fe16a6a8.png",
                "date": 1595316120446,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "такси экспресс",
                    "транспорт",
                    "taxi express",
                    "transport",
                    "ЕФЧШ УЧЗКУЫЫ"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60339b7484bdb89f3c128452",
                "paycom_id": "60339ae0a10b214d8d11fe9c",
                "name": "HAMROZ",
                "organization": "ООО «\"A-TAXIST\" MChJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/7610f4e7b63ca1b1b22da34d3d7d690260b133b9.png",
                "date": 1613994868987,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Провайдер",
                                    "value": "1",
                                    "title": "Провайдер",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Пользователь",
                                    "value": "2",
                                    "title": "Пользователь",
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
                        }
                    ]
                },
                "keywords": [
                    "хамроз",
                    "такси",
                    "hamroz",
                    "taksi"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "606eaf35b8d597ed134d86f0",
                "paycom_id": "606db7851403083e18871d61",
                "name": "SMART Logistics",
                "organization": "ООО «AVTO YUK SHINOMONTAJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/df490544cdaf452b4703313d0c12cbedf9e59999.png",
                "date": 1617866549980,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер ЛОТА",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9\\-]{8,8}$",
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
                    "smart logistics",
                    "смарт логистик",
                    "логистика",
                    "ыьфке дщпшыешсы"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "607fc550b8d597ed134d9220",
                "paycom_id": "607fc4845cefd1b5a2508e41",
                "name": "GMC",
                "organization": "ООО «GENERAL MONITORING COMPANY»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/8dcef03a5f9b1620a56c5543ea6e91cb13923d00.png",
                "date": 1618986320536,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Логин",
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
                    "gmc",
                    "general monitoring company",
                    "генерал мониторинг",
                    "мониторинг компанй",
                    "MONITORING COMPANY"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6151a846cfeca453b4a01184",
                "paycom_id": "6151a7c83c73a4edffcdd87c",
                "name": "MB-AUTO ",
                "organization": "ЧП «XAYDAROV SARVAR»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4bc823b6234fd6ee1feaa309382ffb65c24991ff.png",
                "date": 1632741446159,
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
                            "name": "name",
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
                        },
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип автозапчасти",
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
                    "MB-AUTO",
                    "MB AUTO",
                    "ьи фгещ",
                    "MB AVTO",
                    "мб ауто",
                    "мб авто"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61badec55098a0cc1ad43e35",
                "paycom_id": "61bade2b204c85a50a88bf6e",
                "name": "XORAZMAVTOTEXXIZMAT",
                "organization": "ООО «ООО \"XORAZMAVTOTEXXIZMAT\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/44a55c6595ba37aafca6ce105e9bbdf148a8a428.png",
                "date": 1639636677599,
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
                            "name": "name",
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
                        },
                        {
                            "content": "text",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Счёт справка",
                                    "value": "Hisob_malumotnoma",
                                    "title": "Счёт справка",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Другие оплаты",
                                    "value": "Boshqa_tolovlar",
                                    "title": "Другие оплаты",
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
                        }
                    ]
                },
                "keywords": [
                    "XORAZM AVTO TEX XIZMAT",
                    "ЧЩКФЯЬ ФМЕЩ ЕУЧ ЧШЯЬФЕ",
                    "хоразм авто тех хизмат",
                    "[jhfpv fdnj nt[ [bpvfn",
                    "харезм тех услуги",
                    "avtotexxizmat xorazm"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "625fa1e0d88dabe401b55198",
                "paycom_id": "625f8efc3b252ec2c453793d",
                "name": "YUKSAK TAYANCH",
                "organization": "ООО «MCHJ YUKSAK TAYANCH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/78b11d3fcced7cd25e5ba74705937e1dbce1bd4c.png",
                "date": 1650434528938,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID Водителя",
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
                    "high support",
                    "yuksak tayanch",
                    "TAYANCH"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62de86de2cfc087774bbbeae",
                "paycom_id": "62d50e9cff4570e51ef3bb0e",
                "name": "Royal Driver",
                "organization": "ООО «\"YOU CLOUD\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/b97ae42b204fb953dfb732225ac1678a97fee7df.png",
                "date": 1658750686613,
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
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                    "Royal Driver",
                    "Кщнфд Вкшмук",
                    "роял драйвер",
                    "hjzk lhfqdth"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e925033a23b719dc986853",
                "paycom_id": "62e924b039c675be34e5badc",
                "name": "CONGRESS-HALL BUS",
                "organization": "ООО «\"CONGRESS-HALL BUS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0d26e592db925924ac287f169f00a2d80ecfc04a.png",
                "date": 1659446531297,
                "terminal": {
                    "type": "link",
                    "endpoint": "https://congresshall.itoffer.uz",
                    "link_type": "external"
                },
                "keywords": [
                    "congress hall bus",
                    "сщтпкуыы рудд игы",
                    "конгресс",
                    "алл комфорт",
                    "allcomfort"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "631ef8c1475ca6fbf57d11c0",
                "paycom_id": "631ed9c7d160a6d6294b3a5f",
                "name": "MASTER DOSTAVKA ",
                "organization": "ООО «Smart way trans»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/a7359cff3f030df69db78b298966c4461fc91f3e.png",
                "date": 1662974145469,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "MASTER DOSTAVKA",
                    "ЬФЫЕУК ВЩЫЕФМЛФ",
                    "мастер доставка",
                    "vfcnth ljcnfdrf"
                ],
                "myhome": true,
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "631ef911475ca6fbf57d11c8",
                "paycom_id": "631eda11d160a6d6294b3a79",
                "name": "REAL DOSTAVKA",
                "organization": "ООО «ALI GRAND WAY SERVICE»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4d7862623b655e68a3a580107b2168a6e3c99b4a.png",
                "date": 1662974225772,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "length": 9,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "REAL DOSTAVKA",
                    "КУФД ВЩЫЕФМЛФ",
                    "реал доставка",
                    "htfk ljcnfdrf"
                ],
                "myhome": true,
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "632044d3475ca6fbf57d2022",
                "paycom_id": "63203a8cf16104bde41dd563",
                "name": "Pitak24",
                "organization": "ООО «\"GOLD PYRAMIDS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c94f9076c1c2e94580843b0f9699522015ba0c27.png",
                "date": 1663059155702,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 300000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "user_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счёт",
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
                    "Pitak24",
                    "GOLD PYRAMIDS",
                    "голд пирамидс",
                    "питак24"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6346adad1fe5cc9de25ec549",
                "paycom_id": "6319d74cd160a6d6294a936d",
                "name": "Mana Taxi",
                "organization": "ООО «\"THE BEST IT ONE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4017be32c3a6fa52ee3d6ada49f13a7b3bc0d613.png",
                "date": 1665576365272,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 20000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "Mana Taxi",
                    "Ьфтф Ефчш",
                    "мана такси",
                    "vfyf nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "638de873ceaba24113c380ba",
                "paycom_id": "6389a7f4aeeb8dd185fca662",
                "name": "ALADDIN TAXI",
                "organization": "ООО «ООО \"ALADDIN ONLINE\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/d35a0ecbd174627bcb271457c283976379405b9e.png",
                "date": 1670244467937,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "ALADDIN TAXI",
                    "ФДФВВШТ ЕФЧШ",
                    "аладдин такси",
                    "fkfllby nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63982ef4ceaba24113c387c8",
                "paycom_id": "6393319f0c4c67ea06038cf3",
                "name": "CARAVAN TAXI",
                "organization": "ООО «MCHJ CARAVAN TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3c01d7640af3ee79a9f30fc6dd7fab1f101c76a6.png",
                "date": 1670917876013,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "rfhfdfy nfrcb",
                    "сфкфмфт ефчш",
                    "caravan taxi",
                    "караван такси",
                    "караван"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6399c92cceaba24113c38be9",
                "paycom_id": "6390c6270c4c67ea06034e7f",
                "name": "A'LO BARAKA TAKSI",
                "organization": "ООО «\"A'LO BARAKA TAKSI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/deca5202f69c0629eba402bc80d12bc17e9170bf.png",
                "date": 1671022892303,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной счет",
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
                    "A'LO BARAKA TAKSI",
                    "ФэДЩ ИФКФЛФ ЕФЛЫШ",
                    "АЛО БАРАКА ТАКСИ",
                    "FKJ <FHFRF NFRCB"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63a93d3dab7cf72a0316e11d",
                "paycom_id": "63a93c4c3a3886fdf06c9286",
                "name": "DIYOR TAXI",
                "organization": "ООО «\"PULOTXONOV INVEST\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/821b40603e371bd0928e7838e2120140ef766d5a.png",
                "date": 1672035645816,
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
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "DIYOR TAXI",
                    "дийор такси",
                    "ВШНЩК ЕФЧШ"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63ca72679d9e2612eb6e7e67",
                "paycom_id": "63ca306ace3c82119b047c1d",
                "name": "DRIVE TAXI ",
                "organization": "ООО «\"GTA DRIVE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/aa7f5f511a0636308e30b799d46e1d6c4cd5e496.png",
                "date": 1674211943917,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "GTA DRIVE",
                    "DRIVE TAXI",
                    "такси",
                    "DRIVE TAXI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63d0c7149d9e2612eb6e8894",
                "paycom_id": "63d0c6d945caa8355e10a6dc",
                "name": "BOTLEND EXPRESS",
                "organization": "ООО «\"BOTLEND EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/10a37cd4f6e9dfe5c14441d70f1b98244f8f03d5.png",
                "date": 1674626836152,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "contract_date",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата договора",
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
                    "BOTLEND EXPRESS",
                    "ИЩЕДУТВ УЧЗКУЫЫ",
                    "ботленд экспресс",
                    ",jnktyl 'rcghtcc"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64107c246a689d2b4b9585d7",
                "paycom_id": "640ed6148298b09e6a7e6d96",
                "name": "Buyuk Yol",
                "organization": "ЧП «ALIKULOV ABDULLOH»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0ccf20b7b05332088ea2e2cab104d971226e59d2.png",
                "date": 1678801956686,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balance_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "Buyuk yo'l",
                    "ALIKULOV ABDULLOH",
                    "buyuk yo'l taxi",
                    "игнгл нщд"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "642d536dedabbd6b24e6d9bf",
                "paycom_id": "642d529943cc102e6d51b7e6",
                "name": "ATOSH TRANS 777",
                "organization": "ООО «\"ATOSH TRANS 777\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0915eef23bc1340e5ff3b1f094b244c7e34b8963.png",
                "date": 1680692077133,
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
                            "name": "car_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер автомобиля",
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
                    "atosh trans 777",
                    "777 atosh",
                    "атош транс 777",
                    "фещыр екфты 777",
                    "щещыр",
                    "otosh"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643937e4850676df804b2846",
                "paycom_id": "6437b6f841d21297c117dd7b",
                "name": "IMKON TAXI",
                "organization": "ООО «\"IMKON-LINE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9f11a1575f3d73ba4d4776cda96f3b0a08cab6e8.png",
                "date": 1681471460230,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "imkon taxi",
                    "taxi imkon",
                    "imkon taksi",
                    "imkontaxi",
                    "имкон такси",
                    "такси имкон"
                ],
                "weight": 0,
                "maintenance": "Поставщик временно не доступен, проводятся технические работы",
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643e42e43b2ea5dd250e585e",
                "paycom_id": "643e3ffd7eb779614cabfff6",
                "name": "INTELEKT XORAZM",
                "organization": "ООО «\"INTELLEKT XORAZM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/66c5a9f2d9c4b2ea6c339709dd2aecdc67a4092f.png",
                "date": 1681801956919,
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
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Оценка автотранспортных средств",
                                    "value": "vehicle_value",
                                    "title": "Оценка автотранспортных средств",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оценка дорожно-транспортных происшествий",
                                    "value": "accident_value",
                                    "title": "Оценка дорожно-транспортных происшествий",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оценка недвижимости",
                                    "value": "property_value",
                                    "title": "Оценка недвижимости",
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
                        }
                    ]
                },
                "keywords": [
                    "INTELLEKT XORAZM",
                    "INTELLEKT XOREZM",
                    "intellekt xorazm",
                    "интеллект хоразм",
                    "хоразм интеллект",
                    "хорезм интеллект",
                    "штеуддуле",
                    "intellekt-xorazm",
                    "INTELEKT XORAZM"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "645cdf008367719e00a44969",
                "paycom_id": "645cd9eb2cb83937a753f434",
                "name": "TAXI BRO",
                "organization": "ООО «\"INTRO MIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/161c0eaa04b0bb8dc3a0bf7d35871028e0709e0f.png",
                "date": 1683808000784,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "TAXY BRO ",
                    "TAXI BRO",
                    "BRO TAXI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64637c0d8367719e00a45127",
                "paycom_id": "6462110a059f8cd9c4276a08",
                "name": "KARVON TAXI",
                "organization": "ООО «\"TAXI SAMARQAND 01\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0a30a0e610d41b485111d9e1a29125a931173808.png",
                "date": 1684241421807,
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
                            "name": "callsign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "karvon taxi",
                    "taxi karvon",
                    "karvon taksi",
                    "taksi karvon",
                    "карвон такси",
                    "такси карвон",
                    "лфкмщт ефчш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64a543e55b17f8b641a8e30f",
                "paycom_id": "64a3f1e143c6c1de2db483a3",
                "name": "Smart Parking",
                "organization": "ООО «ООО \"ANDIJAN DIGITAL CITY TEXNOLOGIK PARKI DIREKTSIYASI\"»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/17331a4d9d1ce439a04b20ea4950f5d3d62be97c.png",
                "date": 1688552421423,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 1000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ключ",
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
                    "Smart Parking",
                    "смарт паркинг",
                    "ыьфке зфклштп",
                    "cvfhn gfhrbyu"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64bf7bb45b17f8b641a90f64",
                "paycom_id": "64bf79f1e4e564c982863658",
                "name": "SOFIYA LUCKY",
                "organization": "ООО «\"SOFIYA LUCKY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/537e96e4ccb08da3a5d4af1c855ffbe7d6e14aab.png",
                "date": 1690270644271,
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
                            "name": "name",
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
                        },
                        {
                            "content": "text",
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
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
                    "SOFIYA LUCKY",
                    "ЫЩАШНФ ДГСЛН",
                    "София лаки",
                    "Cjabz kfrb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64edec8a7565023871197f87",
                "paycom_id": "64edd12d5d03046d6406c516",
                "name": "EVOLUTION-MOTORS",
                "organization": "ООО «\"EVOLUTION-MOTORS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/4b4d2cee6aef3f205e681939991e2cc920feef90.png",
                "date": 1693314186400,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Код контракта",
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
                    "evolution motors",
                    "эволюшн моторс",
                    "умщдгешщт ьщещкы"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65004bdb4dd2443fbfdfc4c8",
                "paycom_id": "64fc8e58922055c58129b412",
                "name": "TAXI MINUTKA",
                "organization": "ООО «\"WEDRIVE EXPRESS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/39bf25b834b941c5882635d5edb9fb6dd84e6c91.png",
                "date": 1694518235194,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]+$",
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
                    "taxi minutka",
                    "такси минутка",
                    "ефчш ьгтшелф"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6502a3f64dd2443fbfdfc8f6",
                "paycom_id": "64f71c06c9498cfa6a9baa29",
                "name": "ЯTAXI",
                "organization": "ООО «\"MUNTAZIR ELECTIRONICS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ae681830c51762da4223af17b0e66ed5c4c887cf.png",
                "date": 1694671862462,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "яtaxi",
                    "yataxi",
                    "ятакси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ab60d5240a8ca4dff0fb2",
                "paycom_id": "6502d80068fcf988a7c2437e",
                "name": "LEGENDA",
                "organization": "ООО «\"ANYWHERE \" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/0439569b3c91f12c5a4d1239a5c067b537296ad2.png",
                "date": 1695200781589,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "legenda",
                    "легенда",
                    "ligenda",
                    "дупутвф"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ad5ca5240a8ca4dff1081",
                "paycom_id": "65096b1b085fbf404c97f57b",
                "name": "АВТО БОЗОР",
                "organization": "ООО «\"ANDIJON AVTOMOBIL VA EXTIYOT QISMLARI BOZORI 2019\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/9fd6c3402354661bf54b93058db09eb6538659f3.png",
                "date": 1695208906995,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Key",
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
                    "ANDIJON AVTOMOBIL VA EXTIYOT QISMLARI BOZORI",
                    "ANDIJON MOSHINABOZOR",
                    "ANDIJON MOSHINA BOZOR",
                    "АВТО БОЗОР",
                    "андижон авто бозор",
                    "автобозор"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "650ad63f5240a8ca4dff1088",
                "paycom_id": "6508175d2e002e2aabe7ac4c",
                "name": "MDB",
                "organization": "АО «ANDIJON SHAXAR MARKAZIY DEXQON BOZORI AJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cec4f7e737a35738e25eaf6ef2032bb321df6f7f.png",
                "date": 1695209023671,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 10000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Key",
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
                    "Andijon markaziy dehqon bozori",
                    "markaziy dehqon bozori",
                    "dehqon bozori",
                    "dexqon bozori"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "651e53cf5a8224b99c9a3354",
                "paycom_id": "6501a36168fcf988a7c22f15",
                "name": "BRAND TAXI",
                "organization": "ООО «\"GULIZAR PAY\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/876578a837506da8ef56e18cb0bc7d3d0f25dc02.png",
                "date": 1696486351426,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "BRAND TAXI",
                    "бренд такси",
                    "BRAND TAKSI"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6548dd3fcbc305212221143b",
                "paycom_id": "6540e435388fec2e4593b4a2",
                "name": "BEK YANDEX",
                "organization": "ООО «\"FERGANA MAX-UP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/2b06297ffcd1e664ad85b08213a9a8a38ad9e2db.png",
                "date": 1699274047519,
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
                            "name": "pozivnoy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной",
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
                    "BEK YANDEX",
                    "BEK YANDEX taxi",
                    "YANDEX BEK"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "657aef567aff6eaacc087916",
                "paycom_id": "657aed141fbd780a670967a6",
                "name": "HUMO  AIR",
                "organization": "ООО «\"HUMO  AIR\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/3161d12981f5a812b0b2979716b5b7d5f92b3caf.png",
                "date": 1702555478771,
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
                            "name": "region",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Международный аэропорт Ташкент им. И. Каримова",
                                    "value": "11",
                                    "title": "Международный аэропорт Ташкент им. И. Каримова",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Самарканд",
                                    "value": "12",
                                    "title": "Международный аэропорт Самарканд",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Андижан",
                                    "value": "13",
                                    "title": "Международный аэропорт Андижан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Бухара",
                                    "value": "14",
                                    "title": "Международный аэропорт Бухара",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Ургенч",
                                    "value": "15",
                                    "title": "Международный аэропорт Ургенч",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Термез",
                                    "value": "16",
                                    "title": "Международный аэропорт Термез",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Наманган",
                                    "value": "17",
                                    "title": "Международный аэропорт Наманган",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Нукус",
                                    "value": "18",
                                    "title": "Международный аэропорт Нукус",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Навои",
                                    "value": "19",
                                    "title": "Международный аэропорт Навои",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Фергана",
                                    "value": "20",
                                    "title": "Международный аэропорт Фергана",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Международный аэропорт Карши",
                                    "value": "21",
                                    "title": "Международный аэропорт Карши",
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
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О",
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
                            "name": "ticket_code",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Код билета",
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "За быстрое обслуживание",
                                    "value": "aa",
                                    "title": "За быстрое обслуживание",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За перевес багажа",
                                    "value": "bb",
                                    "title": "За перевес багажа",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За билет по местным направлениям",
                                    "value": "cc",
                                    "title": "За билет по местным направлениям",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За билет по международным направлениям",
                                    "value": "dd",
                                    "title": "За билет по международным направлениям",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Перевоз багажа и почты",
                                    "value": "ee",
                                    "title": "Перевоз багажа и почты",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "За превышение габаритов",
                                    "value": "ff",
                                    "title": "За превышение габаритов",
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
                        }
                    ]
                },
                "keywords": [
                    "HUMO AIR",
                    "хумо эйр",
                    "хумо аир",
                    "ргьщ фшк",
                    "[evj 'qh",
                    "[evj fbh"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65817309d857dfafe0e967a2",
                "paycom_id": "656e11671d1a6055be7cd8bf",
                "name": "ALLO TAXI",
                "organization": "ООО «\"NEW-COMFORT-TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/065aa24f7c376147d539a60b4101d2b3a0fb4f70.png",
                "date": 1702982409724,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Balance ID",
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
                    "ALLO TAXI",
                    "ФДДЩ ЕФЧШ",
                    "алло такси",
                    "fkkj nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6597ecf04de4489c5e27badd",
                "paycom_id": "6597e35e5c8188fb6e91ea74",
                "name": "DIYDOR TAXI",
                "organization": "ООО «MCHJ DIYDOR -TAXI»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/cf4f578a746d558f71774bf6da8ddb514452f6d2.png",
                "date": 1704455408046,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "DIYDOR-TAXI",
                    "DIYDOR TAXI",
                    "DIYDOR TAKSI",
                    "дийдор такси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65a4f74691578e6d2d800ec1",
                "paycom_id": "65a4e1abc9a68d35404e9a07",
                "name": "Tires Shop",
                "organization": "ООО «\"YANGI-ZAMON G R O U P\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/40a521a49a3a3f4b850455e16650ba622f8c10fa.png",
                "date": 1705310022851,
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
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                    "Tires Shop",
                    "тирес шоп",
                    "ешкуы ырщз"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65ae581b04cafcf110dca642",
                "paycom_id": "65a4e682b5de32ae3f2d81e3",
                "name": "MOVEE",
                "organization": "ООО «\"MOVEE\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/be03716268c1d848e823564433be235ffdc1c3cb.png",
                "date": 1705924635307,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 100000,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Haydovchi ID si",
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
                    "movee",
                    "movi",
                    "muvee",
                    "muvi",
                    "муви"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b3b3c0a701df8cdcd39f69",
                "paycom_id": "65b3b2e13c319dec9d88e3e4",
                "name": "Avtomaktab DM",
                "organization": "ООО «\"MARG'ILON AVTOMAKTAB DM\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/c50768f8fceb3b8f940a0857a5ab1729e6f41a55.png",
                "date": 1706275776785,
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
                        },
                        {
                            "content": "text",
                            "name": "group",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Группа",
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
                    "Avtomaktab DM",
                    "MARG'ILON AVTOMAKTAB DM",
                    "DM"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f29986de9f2783922f4483",
                "paycom_id": "65e56d50de9e0abfa2a8c208",
                "name": "BESH TAXI",
                "organization": "ООО «\"BESH TECHNOLOGIES\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/77fcf3ddff47b1d815971b31b1c528d5ae36a99b.png",
                "date": 1710397830151,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID",
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
                    "BESH TAXI",
                    "BESH TAksi",
                    "beshtaxi",
                    "beshtaksi",
                    "5 taxi",
                    "беш такси"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65f2dbc0de9f2783922f4672",
                "paycom_id": "65f2ca4fea95cfb944cc2a98",
                "name": "Cardin Go Driver",
                "organization": "ООО «\"CARDIN\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5f53eb7da08fdd036c36366d3784f6240dad22a6.png",
                "date": 1710414784562,
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
                            "name": "balanceUuid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Driver ID",
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
                    "Cardin Go Driver",
                    "Kardin Go Driver",
                    "Cardin Go Drayver",
                    "кардин го драйвер"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6603e87d12d57e0dca11ef0c",
                "paycom_id": "6603e84a5b347a44404c674e",
                "name": "Sixt",
                "organization": "СП ООО «\"AVTOBUS RENT\" MCHJ QK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/de04be994931d53f78c89a35fe4d9b2b7d30006f.png",
                "date": 1711532157495,
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
                            "name": "order",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер заказа",
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
                    "Sixt ",
                    "AVTOBUS RENT",
                    "сихт"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "662f7b28e90d731d6a2847d6",
                "paycom_id": "662f7abf2eb76ec81b69cc42",
                "name": "TRAKTORBOR.UZ",
                "organization": "ООО «\"PLANETA SERVIS\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/76bd21ceb1aad68a9be423544dd9bae70de22bd1.png",
                "date": 1714387752646,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "pass",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID или номер паспорта",
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
                    "TRAKTORBOR.UZ",
                    "TRAKTORBOR",
                    "\"PLANETA SERVIS\" MCHJ "
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6630eaed95c639065d71b79a",
                "paycom_id": "6630eaa72eb76ec81b69e8bb",
                "name": "AGRO SERVIS PLYUS",
                "organization": "ООО «\"AGRO SERVIS PLYUS GROUP\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/47fb29166d2440abb9aee36a1b36dc056aac5809.png",
                "date": 1714481901285,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "pass",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID или номер паспорта",
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
                    "AGRO SERVIS PLYUS ",
                    "AGRO SERVIS",
                    "AGROSERVIS"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "664da50184b65d4307e14006",
                "paycom_id": "664b4bfaf3e6aebd6e820c9e",
                "name": "YOKO  TAXI",
                "organization": "СП «\"RIHLAT SAED\" XK»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/93c4f14cea6913568634565d74dd0c2093b878ba.png",
                "date": 1716364545436,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "YOKO TAXI",
                    "НЩЛЩ ЕФЧШ",
                    "йоко такси",
                    "qjrj nfrcb"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "664f0beab23b231bab8ee9a4",
                "paycom_id": "664d7e7070ee2ef365a81aa2",
                "name": "TONGGI PARVOZ",
                "organization": "ООО «\"TONGGI PARVOZ\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/ee2a1f8e4d38b23e196c66027cc760105ad6e932.png",
                "date": 1716456426374,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ID водителя",
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
                    "TONGGI PARVOZ",
                    "ЕЩТППШ ЗФКМЩЯ",
                    "тонгги парвоз",
                    "njyuub gfhdjp"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6659c233b23b231bab8f0415",
                "paycom_id": "6659c204c9eaed482ffb6d0d",
                "name": "FINCOM RENT",
                "organization": "ООО «\"FINCOM RENT\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/5308b3f7381737332a90da6f1bc561af20acdf8c.png",
                "date": 1717158451036,
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
                        },
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
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
                            "name": "gov_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Государственный номер",
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
                    "fincom rent",
                    "финком рент",
                    "аштсщь куте"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "665dd269a94b7372011ee33a",
                "paycom_id": "665dd1e2506c1cb0b521f4ca",
                "name": "YAYPAN GO TAXI",
                "organization": "ООО «\"YAYPAN GO TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/519edd165d267dac567df0aa64941917b0748e6a.png",
                "date": 1717424745104,
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
                            "name": "driver_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                    "expert taxi",
                    "эксперт такси",
                    "учзуке ефчш"
                ],
                "weight": 0,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "66606487629617b3f17c27c2",
                "paycom_id": "66606421506c1cb0b52232cc",
                "name": "555 Taxi",
                "organization": "ООО «\"LEADER TAXI\" MCHJ»",
                "active": true,
                "type": 325,
                "logo": "https://cdn.payme.uz/merchants/25b1eee57f536c5667e91c215a315adf2e3708bc.png",
                "date": 1717593223796,
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
                            "name": "sign",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Позывной водителя",
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
                            "name": "phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
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
                            "name": "name",
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
                    "555 Taxi",
                    "555 Ефчш",
                    "555 такси",
                    "555 nfrcb"
                ],
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