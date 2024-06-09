export const services = 
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "64b68b3f5b17f8b641a900a9",
                "paycom_id": "64b67e58e4e564c98285882b",
                "name": "MENING UYIM ",
                "organization": "ГУП «O`ZBEKISTON RESPUBLIKA UY-JOY KOMMUNAL XIZMAT KO`RSATISH VAZIRLIGI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1f555f6c046401b444639ff98156b197a3669423.png",
                "date": 1689684799546,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "type": "text",
                            "content": "number",
                            "name": "account",
                            "title": "Лицевой счет",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "description": "122121",
                            "error": null,
                            "placeholder": "",
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "MENING UYIM",
                    "менинг уйим",
                    "ьутштп гншь",
                    "меннинг уйим",
                    "menning uyim",
                    "мой дом"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0028126499428545583,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e8bfb13a23b719dc9866f2",
                "paycom_id": "62e8be3d39c675be34e59a53",
                "name": "Hududgazta'minot услуги",
                "organization": "АО «Hududgazta'minot»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/fd3f48b737400ac495b2a3af5f66dd15896c895b.png",
                "date": 1659420593609,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000,
                        "round": true
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Инвойс",
                            "content": "number",
                            "type": "text",
                            "replace": null,
                            "main": true,
                            "validation": null,
                            "error": null,
                            "placeholder": "",
                            "prefix": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "газ",
                    "узтрансгаз",
                    "hududgaztaminot",
                    "gaz"
                ],
                "additional_info": true,
                "weight": 0.0007832102102984166,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                },
                "info": {
                    "text": "Данная касса используется только для оплаты инвойсов. Будьте внимательны при вводе данных и суммы платежа. Отмена оплаты по данному поставщику не поддерживается"
                }
            },
            {
                "_id": "615ee94188800c96dd77f8bd",
                "paycom_id": "615ee7aeec6600f0ae0e7004",
                "name": "Алмалык Иссиклик Манбаи",
                "organization": "ООО «Алмалык Иссиклик Манбаи»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9f96afcf22d743e6ac30827c3d02cd66cc328baa.png",
                "date": 1633610049570,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "pay_type",
                            "title": "Тип оплаты",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "За горячую воду",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "За отопление",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "04",
                                    "title": "За пеню",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "number",
                            "length": 10,
                            "name": "abonent_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
                            "type": "text",
                            "validation": "^(1255)\\d{6}$",
                            "validation_error": "Неверный лицевой счет",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "Алмалык Иссиклик Манбаи",
                    "olmaliq issiq manabiy",
                    "горячая вода",
                    "issiq suv",
                    "Тэплоэнергия Алмалык",
                    "Теплоснабжения",
                    "Теплоснабжение",
                    "Issiqlik ta'minoti",
                    "Heating supply"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0002703604859657007,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6579a32b7aff6eaacc0875e6",
                "paycom_id": "6579a2251fbd780a670944b4",
                "name": "SUV O`LCHAGICH XIZMATI",
                "organization": "АО «\"SUVO`LCHAGICHXIZMATI\" AJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f6d900bf317f591005e49d18bf4b2150cb85f9e1.png",
                "date": 1702470443223,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "г.Ташкент",
                                    "value": "01",
                                    "title": "г.Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская Область",
                                    "value": "02",
                                    "title": "Ташкентская Область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухарская область",
                                    "value": "03",
                                    "title": "Бухарская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самаркандская область",
                                    "value": "04",
                                    "title": "Самаркандская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Жиззахская область",
                                    "value": "05",
                                    "title": "Жиззахская область",
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
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Гос поверка водомера",
                                    "value": "gos_vodonomer_chek",
                                    "title": "Гос поверка водомера",
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
                            "name": "contract_number_01",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "01",
                                "output": false
                            },
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^01$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_number_02",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "02",
                                "output": false
                            },
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^02$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_number_03",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "03",
                                "output": false
                            },
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^03$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_number_04",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "04",
                                "output": false
                            },
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^04$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract_number_05",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "05",
                                "output": false
                            },
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^05$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "licevoy_schet",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевое счет",
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
                    "SUV O`LCHAGICH XIZMATI",
                    "SUV OLCHAGICH XIZMATI",
                    "SU O`LCHAGICH XIZMATI",
                    "Проверка водомера",
                    "водомер",
                    "сув олчагич",
                    "SUV uLCHAGICH"
                ],
                "weight": 0.00014686364475401654,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62b989b1cb6e753eb77abe39",
                "paycom_id": "62b9890fb2a26248fca70fbf",
                "name": "STROY MASTER DOMOFON TASHKENT",
                "organization": "ООО «STROY MASTER DOMOFON TASHKENT»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/10b241bc28aa21c5ff4017b10320469942631e56.png",
                "date": 1656326577423,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "number",
                            "name": "personal_account",
                            "placeholder": "7 цифр",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
                            "type": "text",
                            "validation": "^\\d{7}$",
                            "length": 7,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "client_address",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес клиента",
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
                            "content": "phone",
                            "name": "number_telephone",
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
                    "домофон",
                    "строй инвест",
                    "stroy invest",
                    "ыекщн штмуые"
                ],
                "myhome": true,
                "weight": 0.00011139114781023491,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5acdbeac423cde320cb8f2f3",
                "paycom_id": "5acdbd7a423cde320cb8f2ed",
                "name": "ЦИФРАЛ",
                "organization": "ООО «COMZA CYFRAL SERVICE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cyfral.png",
                "date": 1523433123623,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "contract_id",
                            "title": "Номер лицевого счета",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "placeholder": "",
                            "replace": null,
                            "validation": "^\\d{6}$",
                            "validation_error": "Неверный номер лицевого счета",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "домофон",
                    "domofon",
                    "ЦИФРАЛ",
                    "CIFRAL",
                    "wbahfk"
                ],
                "myhome": true,
                "weight": 0.00009675170462708693,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65433a28cbc3052122210a7a",
                "paycom_id": "64c0b3fde4e564c982864b7d",
                "name": "ISSIQLIK MANBAI DAVLAT UNITAR KORXONASI NAVOIY VILOYATI ",
                "organization": "ГУП «\"ISSIQLIK MANBAI\" DUK»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c4e599b9c3a106cddefffcdfbff36cbc3bff5131.png",
                "date": 1698904616361,
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
                                    "name": "Навои",
                                    "value": "1",
                                    "title": "Навои",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Зарафшан",
                                    "value": "2",
                                    "title": "Зарафшан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Учкудук",
                                    "value": "3",
                                    "title": "Учкудук",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Конимех",
                                    "value": "4",
                                    "title": "Конимех",
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
                            "name": "personal_account_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет абонента",
                            "type": "text",
                            "validation": "^[0-9]+$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "service_type_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Тип услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Отопление",
                                    "value": "1",
                                    "title": "Отопление",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мусор",
                                    "value": "2",
                                    "title": "Мусор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Холодная вода",
                                    "value": "3",
                                    "title": "Холодная вода",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Холодная вода канализация",
                                    "value": "4",
                                    "title": "Холодная вода канализация",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода",
                                    "value": "5",
                                    "title": "Горячая вода",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода канализация",
                                    "value": "6",
                                    "title": "Горячая вода канализация",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Техническое обеспечение домов-ТОД",
                                    "value": "7",
                                    "title": "Техническое обеспечение домов-ТОД",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Пеня",
                                    "value": "8",
                                    "title": "Пеня",
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
                    "ISSIQLIK MANBAI DAVLAT UNITAR KORXONASI NAVOIY VILOYATI",
                    "иссиклик манбаи давлат унитар корхонаси навоий вилояти",
                    "шыышйдшл ьфтифш вфмдфе гтшефк лщкчщтфыш тфмщшн мшдщнфеш",
                    "bccbrkbr vfy,fb lfdkfn eybnfh rjh[jyfcb yfdjbq viloyati"
                ],
                "myhome": true,
                "weight": 0.00003697397829589937,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64be14ab5b17f8b641a90c05",
                "paycom_id": "64abb216e4e564c982849cd6",
                "name": "KOMMUNAL SERVISE NAVOI",
                "organization": "ООО «\"KOMMUNAL SERVISE NAVOI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/234b1290b10dd9d72ade162f835b270f3dc4f620.png",
                "date": 1690178731660,
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
                    "Elektr energiya montaj",
                    "KOMMUNAL SERVISE NAVOI",
                    "Elektr energiya montaj NAVOI"
                ],
                "weight": 0.000035566339528288986,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5eb8ee8efdd5106671b63d40",
                "paycom_id": "5eb8ee0a6420f3660dc837ed",
                "name": "ISSIQLIK MANBAI",
                "organization": "ГУП «ISSIQLIK MANBAI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d97f83e85607e3a68be94d00cc929e12cc6441c5.png",
                "date": 1589177998402,
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
                            "name": "Street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "issiqlik manbai",
                    "исссик манбай",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 0.000023179118373317624,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643e87d43b2ea5dd250e599d",
                "paycom_id": "643d3d927eb779614cabef2c",
                "name": "BUXORO VILOYATI ISSIQLIK MANBAI",
                "organization": "ГУП «\"BUXORO VILOYATI ISSIQLIK MANBAI\" DUK»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ab1ece1b21e58bd25abe39bd5e5dc244137a209e.png",
                "date": 1681819604477,
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
                            "name": "id_abonent",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Код абонента",
                            "type": "text",
                            "validation": "^[0-9]{12,13}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Способ оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Issiq suv",
                                    "value": "1",
                                    "title": "Issiq suv",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Issiqlik energiyasi",
                                    "value": "2",
                                    "title": "Issiqlik energiyasi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Qo'noq (penya)",
                                    "value": "3",
                                    "title": "Qo'noq (penya)",
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
                    "BUXORO VILOYATI ISSIQLIK MANBAI",
                    "отопление водоснабжение",
                    "BUXORO ISSIQLIK MANBAI",
                    "бухоро иссиклик манбаи",
                    "бухара иссиклик",
                    "buxara issiqlik manbai"
                ],
                "myhome": true,
                "weight": 0.000019425414993023274,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64537c975a26a8829b865dcb",
                "paycom_id": "64537bcc2cb83937a753488a",
                "name": "MMG",
                "organization": "ООО «\"MMG FACILITY MANAGEMENT GROUP\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c0d116406e3294391bf406ae9a22b77cf5599d4b.png",
                "date": 1683192983258,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "name": "receiver",
                            "title": "Филиал:",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "11",
                                    "title": "ЖК Mirabad avenu, D блок",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "22",
                                    "title": "ЖК ASSALOM SOHIL- 2",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "33",
                                    "title": "ЖК QUSHBEGI - 2",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "44",
                                    "title": "ЖК ASSALOM SOHIL- 3",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "55",
                                    "title": "ЖК ASSALOM XAVO",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "66",
                                    "title": "ЖК GREENWICH - КОМФОРТ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "77",
                                    "title": "ЖК Mirabad avenu, C блок",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "type",
                            "title": "Оплата за:",
                            "require": "receiver",
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "a1",
                                    "title": "За услуги по содержанию и управления обшего имущества",
                                    "filter": "11",
                                    "description": null
                                },
                                {
                                    "value": "a1",
                                    "title": "За услуги по содержанию и управления обшего имущества",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "value": "a1",
                                    "title": "За услуги по содержанию и управления обшего имущества",
                                    "filter": "55",
                                    "description": null
                                },
                                {
                                    "value": "a1",
                                    "title": "За услуги по содержанию и управления обшего имущества",
                                    "filter": "66",
                                    "description": null
                                },
                                {
                                    "value": "a1",
                                    "title": "За услуги по содержанию и управления обшего имущества",
                                    "filter": "77",
                                    "description": null
                                },
                                {
                                    "value": "a2",
                                    "title": "Обязательный взнос членов товарищества",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "value": "a2",
                                    "title": "Обязательный взнос членов товарищества",
                                    "filter": "44",
                                    "description": null
                                },
                                {
                                    "value": "a3",
                                    "title": "Отопление",
                                    "filter": "11",
                                    "description": null
                                },
                                {
                                    "value": "a3",
                                    "title": "Отопление",
                                    "filter": "77",
                                    "description": null
                                },
                                {
                                    "value": "a4",
                                    "title": "ГВС",
                                    "filter": "11",
                                    "description": null
                                },
                                {
                                    "value": "a4",
                                    "title": "ГВС",
                                    "filter": "77",
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "address",
                            "title": "Номер дома",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "error": null,
                            "placeholder": "",
                            "validation": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "flat",
                            "title": "Номер квартиры",
                            "content": "text",
                            "type": "text",
                            "main": true,
                            "prefix": null,
                            "replace": null,
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
                    "ььп",
                    "mmg",
                    "ммг",
                    "vvu"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.000013794859922581744,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64897f76c34b8a5ddef9b7a5",
                "paycom_id": "64897e1733013ca481df4da1",
                "name": "GAZ ISHI LOYIHA",
                "organization": "ООО «\"KOMMUNAL SERVISE NAVOI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8ca384abad690deab1df4dbdf56b471549b8a0e1.png",
                "date": 1686732662217,
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
                    "KOMMUNAL SERVISE NAVOI",
                    "KOMUNAL SERVISE NAVOI",
                    "GAZ ISHI LOYIHA"
                ],
                "weight": 0.000013607174753567027,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65576bc92810c5501703748d",
                "paycom_id": "6557689a7b087db98179b04e",
                "name": "U-TOWER",
                "organization": "ООО «\"NRG SERVICE FOR ALL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b46059b23e6e9888c78d63cf436786dd1e3d9344.png",
                "date": 1700228041394,
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
                            "title": "ФИО (Собственника)",
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
                            "name": "type_service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Взносы за жилые квартиры",
                                    "value": "1",
                                    "title": "Взносы за жилые квартиры",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за коммерческие помещения",
                                    "value": "2",
                                    "title": "Взносы за коммерческие помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за кладовые помещения",
                                    "value": "3",
                                    "title": "Взносы за кладовые помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы на содержание подземного паркинга",
                                    "value": "4",
                                    "title": "Взносы на содержание подземного паркинга",
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
                            "name": "block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер блока",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН",
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
                    "U-TOWER",
                    "у-товер",
                    "у башня"
                ],
                "weight": 0.000010041156542287392,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61e90bd487325e773d771630",
                "paycom_id": "61e90ab582e271b9d3c236b1",
                "name": "NRG",
                "organization": "NRG Service",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/840a57e733d16d11b301e30d4fc1f07533a05571.png",
                "date": 1642662868961,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филиал",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "NRG Oybek",
                                    "value": "NrgOybek",
                                    "title": "NRG Oybek",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "NRG Mirzo Ulug’bek",
                                    "value": "NrgMirzo",
                                    "title": "NRG Mirzo Ulug’bek",
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
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Назначение оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Квартира",
                                    "value": "1",
                                    "title": "Квартира",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Коммерческое помещение",
                                    "value": "2",
                                    "title": "Коммерческое помещение",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Кладовая",
                                    "value": "3",
                                    "title": "Кладовая",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Паркинг (подземный)",
                                    "value": "4",
                                    "title": "Паркинг (подземный)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Паркинг(надземный)",
                                    "value": "5",
                                    "title": "Паркинг (наземный)",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^1$"
                            },
                            "error": null,
                            "prefix": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "parking_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер места машины",
                            "type": "text",
                            "validation": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^4$"
                            },
                            "error": null,
                            "prefix": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "pantry_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер кладовой",
                            "type": "text",
                            "validation": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^3$"
                            },
                            "error": null,
                            "prefix": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contract",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора",
                            "type": "text",
                            "validation": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^2$"
                            },
                            "error": null,
                            "prefix": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер блока",
                            "type": "select",
                            "validation": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^1|2|3$"
                            },
                            "values": [
                                {
                                    "name": "1",
                                    "value": "01",
                                    "title": "1",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "1",
                                    "value": "01",
                                    "title": "1",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "2",
                                    "value": "2",
                                    "title": "2",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "2",
                                    "value": "2",
                                    "title": "2",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "3",
                                    "value": "03",
                                    "title": "3",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "3",
                                    "value": "03",
                                    "title": "3",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "4",
                                    "value": "04",
                                    "title": "4",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "4",
                                    "value": "04",
                                    "title": "4",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "5",
                                    "value": "05",
                                    "title": "5",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "5",
                                    "value": "05",
                                    "title": "5",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "6",
                                    "value": "06",
                                    "title": "6",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "6",
                                    "value": "06",
                                    "title": "6",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "7",
                                    "value": "07",
                                    "title": "7",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "7",
                                    "value": "07",
                                    "title": "7",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "8",
                                    "value": "08",
                                    "title": "8",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "9",
                                    "value": "09",
                                    "title": "9",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "10",
                                    "value": "010",
                                    "title": "10",
                                    "filter": "NrgOybek",
                                    "description": null
                                },
                                {
                                    "name": "11",
                                    "value": "011",
                                    "title": "11",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "12",
                                    "value": "012",
                                    "title": "12",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "13",
                                    "value": "013",
                                    "title": "13",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "14",
                                    "value": "014",
                                    "title": "14",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "08",
                                    "value": "008",
                                    "title": "8",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "09",
                                    "value": "009",
                                    "title": "9",
                                    "filter": "NrgMirzo",
                                    "description": null
                                },
                                {
                                    "name": "010",
                                    "value": "0010",
                                    "title": "10",
                                    "filter": "NrgMirzo",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "receiver",
                            "error": null,
                            "scan": null
                        }
                    ]
                },
                "keywords": [
                    "NRG",
                    "Energy",
                    "нрг",
                    "энерджи",
                    "NRG service"
                ],
                "myhome": true,
                "weight": 0.000008915045528199087,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f8548ac2af15d604f4c5c3e",
                "paycom_id": "5f8543297ed72bd343ca0a66",
                "name": "DOMOFON CENTRE",
                "organization": "ООО «ООО \"DOMOFON CENTRE \"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9e62e33ad7c4c04c16fa207eed56391368e7226a.png",
                "date": 1602570412360,
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
                            "name": "Personal_account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
                            "type": "text",
                            "validation": "^[0-9]{6}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "Phone_number",
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
                        },
                        {
                            "content": "text",
                            "name": "Address",
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
                        }
                    ]
                },
                "keywords": [
                    "камуналка",
                    "домофон",
                    "звонок",
                    "DOMOFON CENTRE",
                    "вщьщащт сутеку"
                ],
                "myhome": true,
                "weight": 0.000007976619683125498,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5e1319a5ba8ac3e976c4b870",
                "paycom_id": "5e13162ee6ae84d13e36cf2b",
                "name": "Kommunal profi",
                "organization": "ООО «ТЧСЖ Kommunal profi»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4e2f351e9e52e32402fdd0b6e9f1bbb0cb7d2536.png",
                "date": 1578310053470,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "оплата коммунальных",
                    "оплата коммунальных услуг",
                    "kommunal to'lash",
                    "kommunal tolov",
                    "коммунальные услуги"
                ],
                "myhome": true,
                "weight": 0.000007413564176081346,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "64c8afb5601456d371c9f0a1",
                "paycom_id": "64c8af71d1fda60b5733b021",
                "name": "GOLDEN FAMILY HOUSE SERVICE ",
                "organization": "ООО «ООО «GOLDEN FAMILY HOUSE SERYICE»»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/a522b224326f277906190768647c7640e991cce5.png",
                "date": 1690873781836,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филиал",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "ЖК GREENWICH 3-4",
                                    "value": "GREENWICH",
                                    "title": "ЖК GREENWICH 3-4",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ЖК FAMILY GARDEN",
                                    "value": "FAMILY",
                                    "title": "ЖК FAMILY GARDEN",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ЖК ASSALOM SOHIL",
                                    "value": "ASSALOM",
                                    "title": "ЖК ASSALOM SOHIL",
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Назначение оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Мансарда",
                                    "value": "Attic",
                                    "title": "Мансарда",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Квартира",
                                    "value": "Apartment",
                                    "title": "Квартира",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Паркинг",
                                    "value": "Parking",
                                    "title": "Паркинг",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^GREENWICH|FAMILY$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "29/3",
                                    "value": "1",
                                    "title": "29/3",
                                    "filter": "GREENWICH",
                                    "description": null
                                },
                                {
                                    "name": "29/4",
                                    "value": "2",
                                    "title": "29/4",
                                    "filter": "GREENWICH",
                                    "description": null
                                },
                                {
                                    "name": "14/А",
                                    "value": "3",
                                    "title": "14/А",
                                    "filter": "FAMILY",
                                    "description": null
                                },
                                {
                                    "name": "14/Б",
                                    "value": "4",
                                    "title": "14/Б",
                                    "filter": "FAMILY",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "receiver",
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^FAMILY|GREENWICH$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": null,
                            "require": null,
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "house_number",
                                "value": "^1|2|3|4$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "Square",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Площадь",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "payment",
                                "value": "^Apartment$"
                            },
                            "error": null,
                            "scan": null
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
                            "visible": {
                                "require": "receiver",
                                "value": "^GREENWICH|FAMILY|ASSALOM$"
                            },
                            "error": null,
                            "scan": null,
                            "optional": false
                        },
                        {
                            "content": "text",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^[0-9]+$",
                            "prefix": null,
                            "require": null,
                            "visible": {
                                "require": "receiver",
                                "value": "^GREENWICH|FAMILY|ASSALOM$"
                            },
                            "error": null,
                            "scan": null,
                            "optional": false
                        },
                        {
                            "content": "text",
                            "name": "order_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер парковочной зоны",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "payment",
                                "value": "^Parking$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "details",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Детали",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "payment",
                                "value": "^Attic|Apartment|Parking$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "contribution",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "contribution",
                                    "value": "contributiontrue",
                                    "title": "Обязательный взнос членов товарищества",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "receiver",
                                "value": "^ASSALOM$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "house_text",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "text",
                            "validation": null,
                            "require": null,
                            "optional": true,
                            "prefix": null,
                            "visible": {
                                "require": "receiver",
                                "value": "^ASSALOM$"
                            },
                            "error": null,
                            "scan": null
                        }
                    ]
                },
                "keywords": [
                    "Greenwich Bizness 3-4",
                    "Greenwich",
                    "Greenwich Bizness",
                    "GOLDEN FAMILY HOUSE SERVICE",
                    "ЗОЛОТОЙ СЕМЕЙНЫЙ ДОМ СЕРВИС",
                    "OLTIN OILAVIY UY XIZMATI"
                ],
                "weight": 0.000006662823500022475,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6368cbda7ec4232611a314e7",
                "paycom_id": "6358edeccef7c50fdbe04a70",
                "name": "\"YASHNOBOD SHIRKAT XIZMAT\"",
                "organization": "ООО «\"YASHNOBOD SHIRKAT XIZMAT\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1c2bc7321be748ec8523cb052fe21dc35fa987e0.png",
                "date": 1667812314148,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за период",
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
                    "YASHNOBOD SHIRKAT XIZMAT",
                    "yashnobod shirkat xizmat",
                    "Yashnobod shirkat xizmat",
                    "Яшнобод ширкат",
                    "НФЫРТЩИЩВ ЫРШШКЛФЕ"
                ],
                "weight": 0.000006005925408470963,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "631ecd32475ca6fbf57d0c57",
                "paycom_id": "631ecc7bd160a6d6294b364d",
                "name": "YANGI HAYOT UCHTEPA ",
                "organization": "ООО «\"YANGI HAYOT UCHTEPA 22\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/615bd47dc4dd9fd0c1c35f947d452282c636e04b.png",
                "date": 1662962994040,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "quarter",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Квартала",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "22 Квартал",
                                    "value": "1",
                                    "title": "22 Квартал",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "26 Квартал",
                                    "value": "2",
                                    "title": "26 Квартал",
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
                    "YANGI HAYOT UCHTEPA",
                    "Янги Хаёт Учтепа",
                    "Нфтпш Рфнще Гсреузф"
                ],
                "weight": 0.000005818240239456246,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f59dbe5e7f5222b2d77f143",
                "paycom_id": "5f59d8de1d8bbeb111fc506e",
                "name": "SERGELI-CHOSHTEPA PROFESSIONAL BOSHQARUV KOMPANIYASI",
                "organization": "ООО «ООО \"SERGELI-CHOSHTEPA PROFESSIONAL BOSHQARUV KOMPANIYASI\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bfe889706c8bed5b88d687733118269d0b9602a0.png",
                "date": 1599724517441,
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
                            "name": "Adresse",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "мусор",
                    "вода",
                    "газ",
                    "SERGELI-CHOSHTEPA PROFESSIONAL BOSHQARUV KOMPANIYASI",
                    "SERGELI-CHOSHTEPA",
                    "PROFESSIONAL BOSHQARUV KOMPANIYASI",
                    "СЕРГЕЛИ-ЧОШТЕППИНСКАЯ ПРОФЕССИОНАЛЬНАЯ УПРАВЛЯЮЩАЯ КОМПАНИЯ"
                ],
                "myhome": true,
                "weight": 0.000005161342147904734,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fd064b358bb9fee75c0e864",
                "paycom_id": "5fd062571c849a7578ddefad",
                "name": "SHAMS NURI KOMMUNAL",
                "organization": "ТЧСЖ «\"SHAMS NURI KOMMUNAL\" XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/64b95d5660b8cd5c031fca470b4f109ee479702a.png",
                "date": 1607492787196,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "appartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_details",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Детали платежа",
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
                    "shams nuri kommunal",
                    "шамс нури комунал",
                    "xujmsh",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 0.000005161342147904734,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65cf364ba37b40d4f6f5427f",
                "paycom_id": "65cf35ce3c319dec9d8b3541",
                "name": "NRG Mirzo Ulugbek ",
                "organization": "ООО «\"NRG SERVICE FOR ALL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d39560587b16f3fc15c73b44427da44eb240823a.png",
                "date": 1708078667345,
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
                            "name": "full",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О. (Собственника)",
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
                            "name": "vznos",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "взносы за жилые квартиры",
                                    "value": "1",
                                    "title": "взносы за жилые квартиры",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "взносы за коммерческие помещения",
                                    "value": "2",
                                    "title": "взносы за коммерческие помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "взносы за кладовые помещения",
                                    "value": "3",
                                    "title": "взносы за кладовые помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "взносы на содержание подземного паркинга",
                                    "value": "4",
                                    "title": "взносы на содержание подземного паркинга",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "взносы на содержание надземного паркинга",
                                    "value": "5",
                                    "title": "взносы на содержание надземного паркинга",
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
                            "name": "bloc",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер блока",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "vznos",
                                "value": "^1|2|3$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "vznos",
                                "value": "^1$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "commercial_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер коммерческого помещения",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "vznos",
                                "value": "^2$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "storage_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер кладового помещения",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "vznos",
                                "value": "^3$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "parking_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер парковочного места",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "optional": true,
                            "visible": {
                                "require": "vznos",
                                "value": "^4|5$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "text",
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН",
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
                    "NRG Mirzo Ulugbek ",
                    "OOO NRG SERVICE FOR ALL",
                    "NRG"
                ],
                "weight": 0.000005161342147904734,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e3cafa3a23b719dc985e3a",
                "paycom_id": "62e3c7dc39c675be34e4ea59",
                "name": "EXCELLENT SERVICES FROM NIGORA",
                "organization": "ООО «\"EXCELLENT SERVICES FROM NIGORA\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1ee7e49f2831bc90c21a670abfa75bcfb5a323c2.png",
                "date": 1659095802689,
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
                            "title": "Лицевой счет",
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
                            "name": "receiver_home",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "дом № 65",
                                    "value": "home_65",
                                    "title": "дом № 65",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом №31",
                                    "value": "home_31",
                                    "title": "дом №31",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 3",
                                    "value": "home_3",
                                    "title": "дом № 3",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 11",
                                    "value": "home_11",
                                    "title": "дом № 11",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 10",
                                    "value": "home_10",
                                    "title": "дом № 10",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 42",
                                    "value": "home_42",
                                    "title": "дом № 42",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 42б",
                                    "value": "home_42b",
                                    "title": "дом № 42б",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 30",
                                    "value": "home_30",
                                    "title": "дом № 30",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 9",
                                    "value": "home_9",
                                    "title": "дом № 9",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "дом № 29",
                                    "value": "home_29",
                                    "title": "дом № 29",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Парковка 65",
                                    "value": "1a_65",
                                    "title": "Парковка 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 65",
                                    "value": "2a_65",
                                    "title": "Отопление 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 65",
                                    "value": "3a_65",
                                    "title": "Квартплата 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 65",
                                    "value": "4a_65",
                                    "title": "Оказание услуг 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 65",
                                    "value": "5a_65",
                                    "title": "Техническое обслуживание лифтов 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 65",
                                    "value": "6a_65",
                                    "title": "Горячая вода 65",
                                    "filter": "home_65",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 31",
                                    "value": "1a_31",
                                    "title": "Парковка 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 31",
                                    "value": "2a_31",
                                    "title": "Отопление 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 31",
                                    "value": "3a_31",
                                    "title": "Квартплата 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 31",
                                    "value": "4a_31",
                                    "title": "Оказание услуг 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 31",
                                    "value": "5a_31",
                                    "title": "Техническое обслуживание лифтов 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 31",
                                    "value": "6a_31",
                                    "title": "Горячая вода 31",
                                    "filter": "home_31",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 3",
                                    "value": "1a_3",
                                    "title": "Парковка 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 3",
                                    "value": "2a_3",
                                    "title": "Отопление 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 3",
                                    "value": "3a_3",
                                    "title": "Квартплата 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 3",
                                    "value": "4a_3",
                                    "title": "Оказание услуг 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 3",
                                    "value": "5a_3",
                                    "title": "Техническое обслуживание лифтов 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 3",
                                    "value": "6a_3",
                                    "title": "Горячая вода 3",
                                    "filter": "home_3",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 11",
                                    "value": "1a_11",
                                    "title": "Парковка 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 11",
                                    "value": "2a_11",
                                    "title": "Отопление 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 11",
                                    "value": "3a_11",
                                    "title": "Квартплата 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услу 11",
                                    "value": "4a_11",
                                    "title": "Оказание услу 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 11",
                                    "value": "5a_11",
                                    "title": "Техническое обслуживание лифтов 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 11",
                                    "value": "6a_11",
                                    "title": "Горячая вода 11",
                                    "filter": "home_11",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 10",
                                    "value": "1a_10",
                                    "title": "Парковка 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 10",
                                    "value": "2a_10",
                                    "title": "Отопление 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 10",
                                    "value": "3a_10",
                                    "title": "Квартплата 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 10",
                                    "value": "4a_10",
                                    "title": "Оказание услуг 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 10",
                                    "value": "5a_10",
                                    "title": "Техническое обслуживание лифтов 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 10",
                                    "value": "6a_10",
                                    "title": "Горячая вода 10",
                                    "filter": "home_10",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 42",
                                    "value": "1a_42",
                                    "title": "Парковка 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 42",
                                    "value": "2a_42",
                                    "title": "Отопление 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 42",
                                    "value": "3a_42",
                                    "title": "Квартплата 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 42",
                                    "value": "4a_42",
                                    "title": "Оказание услуг 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 42",
                                    "value": "5a_42",
                                    "title": "Техническое обслуживание лифтов 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 42",
                                    "value": "6a_42",
                                    "title": "Горячая вода 42",
                                    "filter": "home_42",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 42б",
                                    "value": "1a_42b",
                                    "title": "Парковка 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 42б",
                                    "value": "2a_42b",
                                    "title": "Отопление 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 42б",
                                    "value": "3a_42b",
                                    "title": "Квартплата 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 42б",
                                    "value": "4a_42b",
                                    "title": "Оказание услуг 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 42б",
                                    "value": "5a_42b",
                                    "title": "Техническое обслуживание лифтов 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 42б",
                                    "value": "6a_42b",
                                    "title": "Горячая вода 42б",
                                    "filter": "home_42b",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 30",
                                    "value": "1a_30",
                                    "title": "Парковка 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 30",
                                    "value": "2a_30",
                                    "title": "Отопление 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 30",
                                    "value": "3a_30",
                                    "title": "Квартплата 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 30",
                                    "value": "4a_30",
                                    "title": "Оказание услуг 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 30",
                                    "value": "5a_30",
                                    "title": "Техническое обслуживание лифтов 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 30",
                                    "value": "6a_30",
                                    "title": "Горячая вода 30",
                                    "filter": "home_30",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 9",
                                    "value": "1a_9",
                                    "title": "Парковка 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 9",
                                    "value": "2a_9",
                                    "title": "Отопление 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 9",
                                    "value": "3a_9",
                                    "title": "Квартплата 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 9",
                                    "value": "4a_9",
                                    "title": "Оказание услуг 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 9",
                                    "value": "5a_9",
                                    "title": "Техническое обслуживание лифтов 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 9",
                                    "value": "6a_9",
                                    "title": "Горячая вода 9",
                                    "filter": "home_9",
                                    "description": null
                                },
                                {
                                    "name": "Парковка 29",
                                    "value": "1a_29",
                                    "title": "Парковка 29",
                                    "filter": "home_29",
                                    "description": null
                                },
                                {
                                    "name": "Отопление 29",
                                    "value": "2a_29",
                                    "title": "Отопление 29",
                                    "filter": "home_29",
                                    "description": null
                                },
                                {
                                    "name": "Квартплата 29",
                                    "value": "3a_29",
                                    "title": "Квартплата 29",
                                    "filter": "home_29",
                                    "description": null
                                },
                                {
                                    "name": "Оказание услуг 29",
                                    "value": "4a_29",
                                    "title": "Оказание услуг 29",
                                    "filter": "home_29",
                                    "description": null
                                },
                                {
                                    "name": "Техническое обслуживание лифтов 29",
                                    "value": "5a_29",
                                    "title": "Техническое обслуживание лифтов 29",
                                    "filter": "home_29",
                                    "description": null
                                },
                                {
                                    "name": "Горячая вода 29",
                                    "value": "6a_29",
                                    "title": "Горячая вода 29",
                                    "filter": "home_29",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "receiver_home",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "zor xizmatlar",
                    "services from nigora",
                    "ыукмшсуы акщь тшпщкф"
                ],
                "weight": 0.000005067499563397376,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "602cbec784bdb89f3c128140",
                "paycom_id": "602cbc890ca76b555c86f7cf",
                "name": "GREEN TOWN KOMMUNAL",
                "organization": "ТЧСЖ «``GREEN TOWN KOMMUNAL``ХУЖМШ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d553c52a28624ab401c2d97f917f48b3f3b77061.png",
                "date": 1613545159117,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "basement_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер подвала",
                            "optional": true,
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "green town kommunal",
                    "kommunal",
                    "коммунал",
                    "грин",
                    "greentown"
                ],
                "myhome": true,
                "weight": 0.000004879814394382658,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "619e2ffb70bd8d7793b773e6",
                "paycom_id": "619e2f8cbede17c4c1b6fb99",
                "name": "OLTINTEPA KOMMUNAL",
                "organization": "ТЧСЖ «OLTINTEPA KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cdfbe0ee7886bb22b2df70ec02815636bec872a0.png",
                "date": 1637756923018,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "comment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Комментарий",
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
                    "OLTINTEPA KOMMUNAL",
                    "ЩДЕШТЕУЗФ ЛЩЬЬГТФД",
                    "олтинтепа коммунал",
                    "jknbyntgf rjvveyfk",
                    "коммунальные услуги",
                    "Kommunal xizmatlar"
                ],
                "weight": 0.000004222916302831147,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "653f814774b04dc1cef668be",
                "paycom_id": "652888096e7e3c38770abf74",
                "name": "DOMOFON CITY",
                "organization": "ООО «\"DOMOFON CITY\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/fc5f25a8c8e610e8ca4814bab73c9d6eb5ea950d.png",
                "date": 1698660679982,
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
                            "name": "ls",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
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
                    "DOMOFON CITY",
                    "DOMOPHON CITY",
                    "DOMOFON CITI",
                    "DOMOFON siti",
                    "damafon city"
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
                "_id": "5e9ec93dfdd5106671b635d6",
                "paycom_id": "5e9eba5803f443e24b1b9eb7",
                "name": "KOMMUNAL TALAZI",
                "organization": "ООО «ТЧСЖ  KOMMUNAL TALAZI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/332a54fc54a9b913aff48fd93c314891c84cad10.png",
                "date": 1587464509899,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тчсж",
                    "комуналка",
                    "коммунал талази"
                ],
                "myhome": true,
                "weight": 0.0000039413885493090696,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6200cd28b0159dc2d9e44e7c",
                "paycom_id": "6200cc18cb53f72644f31414",
                "name": "STAR JEMMS PBK",
                "organization": "ООО «ООО \"STAR JEMMS PBK\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/a28fb055fffb9e69b798a63352d2a0177bbbba3a.png",
                "date": 1644219688860,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "STAR JEMMS PBK",
                    "стар джеммс пбк",
                    "коммуналка",
                    "ком услуги",
                    "ТЧСЖ"
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
                "_id": "5f917bb2ea62ccfa6119ccc6",
                "paycom_id": "5f917b1a740f35d3638a72cb",
                "name": "ООО RAHNAMO SERVIS (вывоз мусора)",
                "organization": "ООО «ООО \"RAHNAMO SERVIS\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cb58739aebe32f955ae7dc3a637ab33117627793.png",
                "date": 1603369906489,
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
                            "name": "Full_Name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О. / Наименование организации",
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
                            "name": "Period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                            "optional": true,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "камуналка",
                    "uy",
                    "вода",
                    "газ",
                    "электричество",
                    "мусор",
                    "RAHNAMO SERVIS"
                ],
                "myhome": true,
                "weight": 0.0000036598607957869936,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62b5ac5c6aea0205290c6ade",
                "paycom_id": "62b5abbed77151ebb4e11e0a",
                "name": "PARKENT-AVENUE",
                "organization": "ООО «ООО \"PARKENT-AVENUE\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8d986a8ba095153eabc3e702b7b7717f4d8e2048.png",
                "date": 1656073308888,
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
                        },
                        {
                            "content": "text",
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "PARKENT-AVENUE",
                    "gfhrtyn adty.",
                    "паркен авеню",
                    "PARKENT AVENUE"
                ],
                "weight": 0.0000035660182112796347,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65672aac157e836acba058e0",
                "paycom_id": "6567290194dc4293bdd3fce5",
                "name": "Botirma-17 kommunal elit MCHJ",
                "organization": "ООО «\"BOTIRMA-17 KOMMUNAL ELIT\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/aff95e005515e03256b50b19b100b7bed31967f0.png",
                "date": 1701259948717,
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
                            "name": "city",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Город",
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
                            "title": "Наименование коммунальной услуги",
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
                    "BOTIRMA-17 KOMMUNAL ELIT MCHJ",
                    "ботирма-17 коммунал элит мчж",
                    "ищешкьф-17 лщььгтфд удше ьсро",
                    ",jnbhvf-17 rjvveyfk 'kbn vx;"
                ],
                "weight": 0.0000035660182112796347,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61e698f287325e773d77139e",
                "paycom_id": "61e6983f82e271b9d3c1e13d",
                "name": "COMMUNAL ORZU SERVIS",
                "organization": "ТЧСЖ «COMMUNAL ORZU SERVICE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/45859046b1fdcdfc04a1e8b53fbe383444d0b147.png",
                "date": 1642502386813,
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
                            "name": "purpose",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Цель оплаты",
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
                            "title": "Номер квартиры",
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
                    "COMMUNAL ORZU SERVIS",
                    "СЩЬЬГТФД ЩКЯГ ЫУКМШЫ",
                    "коммунал орзу сервис",
                    "rjvveyfk jhpe cthdbc"
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
                "_id": "5ffed69284bdb89f3c126cb4",
                "paycom_id": "5ffec8aaafa27ac7e75ca6a9",
                "name": "ТСЖ “ЖЕМЧУГ-77”",
                "organization": "ТЧСЖ «ХАВО ХИЗМАТЧИ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d60be23ff3602238cc1acc9b86d0d22716864317.png",
                "date": 1610536594905,
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
                            "name": "adress_apartments",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес № дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "№ квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "хаво хизматчи",
                    "havo xizmatchi",
                    "воздух",
                    "коммунальные услуги",
                    "ком услуги"
                ],
                "myhome": true,
                "weight": 0.0000031906478732501995,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63c8eb619d9e2612eb6e7b37",
                "paycom_id": "63c8e48453a6022696bee019",
                "name": "PARKENT VILLAGE KOMMUNAL ",
                "organization": "ТЧСЖ «PARKENT VILLAGE KOMMUNAL XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cd07f478c1e711accbb5b4edcd874f749308dd4b.png",
                "date": 1674111841634,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "PARKENT VILLAGE KOMMUNAL",
                    "Паркент Вилайдж Коммунал",
                    "Зфклуте Мшддфпу Лщььгтфд"
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
                "_id": "5e04b2fbba8ac3e976c4b73d",
                "paycom_id": "5e04b21be6ae84d13e367eb1",
                "name": "JARKUDUK KOMMUNAL SERVIS",
                "organization": "ООО «ТСЧЖ JARKUDUK KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b107a92cbb79b703ab770a28760b5127ce300640.png",
                "date": 1577366267043,
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Number_agreement",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер договора аренды гаража",
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
                    "коммунальные услуги",
                    "тчсж",
                    "jarkuduk",
                    "коммуналка",
                    "тчсж jarkuduk",
                    "JARKUDUK KOMMUNAL SERVIS",
                    "тсж"
                ],
                "myhome": true,
                "weight": 0.000002815277535220764,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62b1cf822abe8594b27f59dd",
                "paycom_id": "62b1ccaf5859b1815bc6b9be",
                "name": "FOR THE POPULATION",
                "organization": "ООО «\"FOR THE POPULATION\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9a91d29e3c70db2a33fcb93c813abb832cc571c8.png",
                "date": 1655820162998,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "for the population",
                    "ащк еру зщзгдфешщт",
                    "population",
                    "зщзгдфешщт",
                    "комуналка"
                ],
                "myhome": true,
                "weight": 0.0000027214349507134053,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6389d420c3eb8963fee31fde",
                "paycom_id": "6389cc83cd83141d86fa4025",
                "name": "UYUT KOMFORT KOMMUNAL",
                "organization": "ООО «\"UYUT KOMFORT KOMMUNAL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5126d69efeeb97f3d1faa48fb2c5aed7eae6ce43.png",
                "date": 1669977120688,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "total_area",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Общая площадь квартиры",
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
                    "UYUT KOMFORT KOMMUNAL",
                    "uyut komfort kommunal",
                    "Uyut komfort kommunal",
                    "УЮТ КОМФОРТ КОММУНАЛ",
                    "уют комфорт коммунал",
                    "Уют комфорт коммунал"
                ],
                "weight": 0.0000027214349507134053,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62b581e06aea0205290c6729",
                "paycom_id": "62b2ee55c8ef216da25fb4d9",
                "name": "DARHON SHIRKAT",
                "organization": "ТЧСЖ «\"DARHON SHIRKAT\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/25232f556fe7e9a998a2f6fecbb09a2d3f56896d.png",
                "date": 1656062432209,
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
                            "name": "street_akkurgan",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица - Аккурган",
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
                        },
                        {
                            "content": "text",
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "darhon shirkat",
                    "вфкрщт ыршклфе",
                    "дархон",
                    "lfh[jy"
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
                "_id": "60efc80c12950f485b3b03ea",
                "paycom_id": "60efc7014be7164be6d9334c",
                "name": "NAVNIHOL KOMMUNAL",
                "organization": "ООО «NAVNIHOL KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/94dd54f67262f82383a564fa8792d7a99443d47d.png",
                "date": 1626327052742,
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "NAVNIHOL KOMMUNAL",
                    "навинохол коммунал",
                    "коммунальные услуги",
                    "ком услуги"
                ],
                "weight": 0.000002533749781698688,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6114c9c112950f485b3b1a98",
                "paycom_id": "6114ac4b754e932e68fd998f",
                "name": "GREEN CITY",
                "organization": "ТЧСЖ «\"IZUMRUDNIY\" XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e4ce62679e7d7825d0857270555a7d8f418aa989.png",
                "date": 1628752321331,
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
                            "name": "Uy",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Kvartira",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "GREEN CITY",
                    "пкуут сшен",
                    "грин сити"
                ],
                "weight": 0.000002533749781698688,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "639b0677ceaba24113c38d6b",
                "paycom_id": "6347ca473eaf684310f20571",
                "name": "INTELLECT ENGINEERING",
                "organization": "ООО «INTELLECT ENGINEERING SAMARQAND»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/59f1d7e0ee857284a36f9cc3a4e48e77f4610e7e.png",
                "date": 1671104119807,
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
                            "name": "account_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
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
                    "INTELLECT ENGINEERING",
                    "интелект инжениринг",
                    "INTELLECT ENGINEERING SAMARQAND"
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
                "_id": "5df781412239436141525eff",
                "paycom_id": "5df780277e2d6cf23ec1a9e1",
                "name": "OQIBAT BIRINCHI KOMMUNAL",
                "organization": "ООО «ТСЧЖ OQIBAT BIRINCHI KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/fcb817c0de8fefb859421e89c7abaa4c703d64d3.png",
                "date": 1576501569454,
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
                            "name": "Home",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Flat",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "коммуналка",
                    "kommunal",
                    "utility",
                    "oqibat",
                    "окибат коммуналка",
                    "OQIBAT BIRINCHI KOMMUNAL"
                ],
                "myhome": true,
                "weight": 0.00000234606461268397,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f2cf522226cb81a0dbc0b27",
                "paycom_id": "5f22c254669fbc8013a9f2eb",
                "name": "Lotus Kommunalchi",
                "organization": "ХТ «ТЧСЖ \"Lotus Kommunalchi\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1f1423325b879b28429172ecaa8e15c6e0134717.png",
                "date": 1596781858938,
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
                            "name": "Flat_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "камуналка",
                    "газ",
                    "мусор",
                    "вода",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 0.00000234606461268397,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f59dbe9e7f5222b2d77f144",
                "paycom_id": "5f59d8a21d8bbeb111fc5065",
                "name": "MARJONA COMFORT",
                "organization": "ООО «MARJONA COMFORT»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7c16a0b077becd7943fa99c75b7fcaa09bbf74f0.png",
                "date": 1599724521419,
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
                            "name": "Adresse",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "газ",
                    "вода",
                    "мусор",
                    "MARJONA COMFORT",
                    "MARJONA",
                    "марджона комфорт",
                    "vfhl;jyf rjvajhn",
                    "ЬФКОЩТФ СЩЬАЩКЕ"
                ],
                "myhome": true,
                "weight": 0.00000234606461268397,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "645363075a26a8829b865d3e",
                "paycom_id": "645355fe6d12387a828c36d9",
                "name": "Ko'kcha Qo'rg'oni",
                "organization": "ТЧСЖ «\"KO`KCHA QO`RG`ONI\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f7aee5f739adba0b58d9c82c1ed4fe88f75cb463.png",
                "date": 1683186439590,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "service_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Взносы за жилые квартиры",
                                    "value": "1",
                                    "title": "Взносы за жилые квартиры",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взнос за лифт",
                                    "value": "2",
                                    "title": "Взнос за лифт",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за подвальные  помещение",
                                    "value": "3",
                                    "title": "Взносы за подвальные  помещение",
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
                    "Ko'kcha Qo'rg'oni",
                    "kokcha qorgon",
                    "kukcha qorgon",
                    "кукча кургон"
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
                "_id": "5e18676dba8ac3e976c4bb42",
                "paycom_id": "5e18638be6ae84d13e36f920",
                "name": "АROMA KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ АROMA KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/540762221426fc1c6e37801ed60dc41f7b039aef.png",
                "date": 1578657645679,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "aroma",
                    "communal",
                    "servis",
                    "оплата за коммуналку",
                    "арома"
                ],
                "myhome": true,
                "weight": 0.0000022522220281766115,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ee35a41343eb86f54d33ce3",
                "paycom_id": "5ee359cbc2a2e8e1604a7bda",
                "name": "GULSHAN  CHAROG'ON  SERVIS",
                "organization": "ООО «GULSHAN  CHAROG'ON  SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/a4b3c992dd32133ab94743dcfd70b4ce78df8471.png",
                "date": 1591958081489,
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
                            "title": "Ф.И.О. владельца квартиры",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                        },
                        {
                            "content": "text",
                            "name": "Notes",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Примечания:",
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
                    "комуналка",
                    "вода",
                    "газ",
                    "свет",
                    "мусор"
                ],
                "myhome": true,
                "weight": 0.0000022522220281766115,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ea1694bfdd5106671b636aa",
                "paycom_id": "5e9d30941716bc650137b92a",
                "name": "ТСЧЖ NILUFAR LYUKS SERVIS",
                "organization": "ООО «ТСЧЖ NILUFAR LYUKS SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e506e928d605ff59c3b4e9b4f3a070a085bc2913.png",
                "date": 1587636555928,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты ",
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
                    "тчсж",
                    "kommunal to lovlar",
                    "kommunal +to lovlar",
                    "оплата коммунальных",
                    "коммунальные"
                ],
                "myhome": true,
                "weight": 0.0000021583794436692526,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62c6a2c7cb6e753eb77b1042",
                "paycom_id": "62c691774c11d19b670a0251",
                "name": "SMSM",
                "organization": "ООО «\"STANDARTLASHTIRISH METROLOGIYA VA SERTIFIKATLASHTIRISH MARKAZI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5c11ac6b3347a437eb54f0d41aaee7d23db57e39.png",
                "date": 1657184967953,
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
                            "title": "Плательщик",
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
                            "name": "contract",
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
                    "SMSM",
                    "ЫЬЫЬ",
                    "standartlashtirish metrologiya",
                    "метрология"
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
                "_id": "5e56468e7cdad02b21e77c1f",
                "paycom_id": "5e56387caf9572847bcb230c",
                "name": "BOYHO'ROZ KOMMUNALCHI",
                "organization": "ООО «ТЧСЖ BOYHO'ROZ KOMMUNALCHI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c2cf05115f0fc32e87398398cffd303ea633f43a.png",
                "date": 1582712462680,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "kommunal to'lovlar",
                    "kommunal to'lov",
                    "оплата за коммунальные услуги",
                    "оплата коммунальных услуг"
                ],
                "myhome": true,
                "weight": 0.0000020645368591618937,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "656f0d62d461590d278edb7d",
                "paycom_id": "656ed373426e85bd8dd81ca9",
                "name": "VATANPARVAR BOSHQARUV MCHJ",
                "organization": "ООО «\"VATANPARVAR BOSHQARUV\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7adedda2b564300cb966d18909a96b31adefeaea.png",
                "date": 1701776738608,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "VATANPARVAR BOSHQARUV",
                    "VATANPARVAR BOSHQARUV MCHJ",
                    "ООО «ВАТАНПАРВАР МЕНЕДЖМЕНТ»",
                    "VATANPARVAR MANAGEMENT LLC"
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
                "_id": "608fc0ebb8d597ed134d9dfa",
                "paycom_id": "608fc04251d5f0862e0c6089",
                "name": "YANGIHAYOT ",
                "organization": "ООО «YANGIHAYOT PBK AA»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/14db3ccef26c709016cf2d0b4319056c8f0b7e10.png",
                "date": 1620033771645,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "yangihayot",
                    "янгихаёт",
                    "янгихает",
                    "управляющая компания",
                    "тчсж",
                    "нфтпшрфнще",
                    "zyub[ftn"
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
                "_id": "634e547b1fe5cc9de25eeee1",
                "paycom_id": "634e5419cef7c50fdbdef3d7",
                "name": "LEDER GRUOP 15",
                "organization": "ООО «\"LEDER GRUOP 15\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7e88a49d42ae6d0f117d9e9d24644dbc9bfb81bc.png",
                "date": 1666077819476,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "LEDER GRUOP 15",
                    "LEDERGRUOP15",
                    "лидер груп"
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
                "_id": "5e1c1a37ba8ac3e976c4bb5e",
                "paycom_id": "5e15e0d9e6ae84d13e36e60d",
                "name": "MIROBOD BIRDAMLIK",
                "organization": "ООО «ТЧСЖ MIROBOD BIRDAMLIK»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ecc352102fd4dceff181867054b4ae1d3514ee56.png",
                "date": 1578900023446,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "MIROBOD BIRDAMLIK",
                    "миробод бирдамлик",
                    "Коммунальные услуги",
                    "Kommunal xizmatlar"
                ],
                "myhome": true,
                "weight": 0.000001876851690147176,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5eba984afdd5106671b63e04",
                "paycom_id": "5eba97df6420f3660dc863a7",
                "name": "TUYGUN KOMMUNALCHI",
                "organization": "ООО «ТЧСЖ TUYGUN KOMMUNALCHI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/a19e31e626d89140e13786e94a011cfea85138ae.png",
                "date": 1589286986722,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Period_of_time",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период времени",
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
                    "тсчж",
                    "тчсж",
                    "комуналка",
                    "туйгун"
                ],
                "myhome": true,
                "weight": 0.000001876851690147176,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60b5fdf2b8d597ed134db73f",
                "paycom_id": "60b4ea967852bd0ebce300e2",
                "name": "ELEGANT LYUKS KOMMUNALCHI",
                "organization": "ТЧСЖ «ELEGANT LYUKS KOMMUNALCHI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/15cb46632aba1b4cdd532912870326790703eeb6.png",
                "date": 1622539762128,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Цель оплаты",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "elegant lyuks kommunalchi",
                    "элегант люкс",
                    "комунал",
                    "тчсж",
                    "комуналчи"
                ],
                "weight": 0.000001876851690147176,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "624aec8f5bc3e35a0e9231b9",
                "paycom_id": "624aeb76d33186ab74112600",
                "name": "SARAKUL BARAKA",
                "organization": "ООО «SARAKUL BARAKA MCHJ BOH KOMP»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bc26408e68f32767f2c7ac014ffa1028fef0d68b.png",
                "date": 1649077391569,
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
                            "name": "purpose",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Цель оплаты",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "SARAKUL BARAKA",
                    "kommunal",
                    "ыфкфлгд ифкфлф",
                    "Саракул Барака"
                ],
                "weight": 0.000001876851690147176,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f4369463813f7df2e071af1",
                "paycom_id": "5f3e3db041c04555482e2a43",
                "name": "ТЧСЖ Qashqar Birodar Kommunal servis",
                "organization": "ООО «ТЧСЖ Qashqar Birodar Kommunal servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dd9641056cc72ed7df006f22d97eb3b67283d860.png",
                "date": 1598253382381,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ком",
                    "услуги",
                    "qashqar",
                    "тсж",
                    "тчсж"
                ],
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
                "_id": "622b3e6b8ea3ca870dc520b9",
                "paycom_id": "622b3e1dd1e7c39136c967c1",
                "name": "LABZAK KOMMUNAL SERVIS ",
                "organization": "ТЧСЖ «LABZAK KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/3430203ed0b71f61be3246d4b7fa43f6545d04de.png",
                "date": 1647001195236,
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
                            "name": "home_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "labzak kommunal servis",
                    "лабзак коммунал сервис",
                    "дфияфл лщььгтфд ыукмшы"
                ],
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
                "_id": "634fa61a1fe5cc9de25f0114",
                "paycom_id": "634fa578cef7c50fdbdf36c3",
                "name": "EXCELLENT HOUSE PRO",
                "organization": "ООО «\"EXCELLENT HOUSE PRO\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9d80094fc075c1835ff4ea221250e9bde46ffa16.png",
                "date": 1666164250425,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Улица Мирабад дом № 6",
                                    "value": "Mirabad_6",
                                    "title": "Улица Мирабад дом № 6",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Мирабад дом № 18",
                                    "value": "Mirabad_18",
                                    "title": "Улица Мирабад дом № 18",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Мирабад дом № 20",
                                    "value": "Mirabad_20",
                                    "title": "Улица Мирабад дом № 20",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Сарабустон дом № 17",
                                    "value": "Sarabuston_17",
                                    "title": "Улица Сарабустон дом № 17",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Сарабустон дом № ЗБ",
                                    "value": "Sarabuston_3b",
                                    "title": "Улица Сарабустон дом № ЗБ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Сарабустон дом № За корпус 1",
                                    "value": "Sarabuston_3a_1",
                                    "title": "Улица Сарабустон дом № За корпус 1",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Улица Сарабустон дом № За корпус 2",
                                    "value": "Sarabuston_3a_2",
                                    "title": "Улица Сарабустон дом № За корпус 2",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                                    "name": "Парковка",
                                    "value": "Parking_space",
                                    "title": "Парковка",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Oтопление",
                                    "value": "Heating",
                                    "title": "Oтопление",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Oказание услуг",
                                    "value": "Provision_of_services",
                                    "title": "Oказание услуг",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Kвартплата",
                                    "value": "Rent",
                                    "title": "Kвартплата",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Tех.обслуживание лифтов",
                                    "value": "Maintenance_of_elevators",
                                    "title": "Tех.обслуживание лифтов",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "EXCELLENT HOUSE PRO",
                    "excellent house pro",
                    "house",
                    "экселлент хаус"
                ],
                "weight": 0.0000016891665211324584,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f6062499a5c8b6a7158c40c",
                "paycom_id": "5f5b78351d8bbeb111fc723b",
                "name": "AL FIRDAVSIY IKKINCHI KOMMUNAL",
                "organization": "ТЧСЖ «AL FIRDAVSIY IKKINCHI KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bf62cba730e221324952872c789c2701f959537a.png",
                "date": 1600152137263,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "appartments",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Квартира",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "al firdavsiy ikkinchi kommunal",
                    "аль фирдавсий иккинчи комунал",
                    "тчсж",
                    "жэк",
                    "фд ашквфмышн шллштсрш лщььгтфд"
                ],
                "myhome": true,
                "weight": 0.0000015014813521177408,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61447394cfeca453b4a0089e",
                "paycom_id": "61446f6c2cda62ef2bd91b6d",
                "name": "NASH NOVIY DOM",
                "organization": "ООО «MCHJ NASH NOVIY DOM»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2a594442e9bfe3bace12a6185bedfb14b0261421.png",
                "date": 1631875988621,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
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
                    "NASH NOVIY DOM",
                    "тфыр тщмшн вщь",
                    "наш новый дом",
                    "yfi yjdsq ljv",
                    "новый дом",
                    "yangi uy"
                ],
                "weight": 0.000001407638767610382,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61dd792920e4769f447b342f",
                "paycom_id": "61dd789694e58c782a469348",
                "name": "AL-FIRDAVSIY BIRINCHI KOMMUNA",
                "organization": "ТЧСЖ «AL-FIRDAVSIY BIRINCHI KOMMUNAL UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2cabc6b13906ddc9c3dd17a5741055549da25984.png",
                "date": 1641904425824,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "AL FIRDAVSIY BIRINCHI KOMMUNAL",
                    "ФД-АШКВФМЫШН ИШКШТСРШ ЛЩЬЬГТФД",
                    "ал фирдавсий биринчи коммунал",
                    "fk abhlfdcbq ,bhbyxb rjvveyfk"
                ],
                "weight": 0.000001407638767610382,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6172922f88800c96dd7807f8",
                "paycom_id": "61726d99e07835ed4c75b8b8",
                "name": "ZAMONAVIY GO’ZAL SAROY",
                "organization": "ООО «ООО \"ZAMONAVIY GO`ZAL SAROY\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/53d5609c6356c77f77d0b4189524065bb6b214e7.png",
                "date": 1634898479329,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                            "name": "Address",
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
                        }
                    ]
                },
                "keywords": [
                    "камуналка",
                    "газ",
                    "свет",
                    "вода",
                    "гозал",
                    "гузаль",
                    "сарой",
                    "замонавий",
                    "GO’ZAL",
                    "SAROY",
                    "GOZAL"
                ],
                "weight": 0.0000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60a6276ab8d597ed134daaaf",
                "paycom_id": "60a6250e7852bd0ebce1ea5a",
                "name": "ASLAN GLOBAL KOMMUNAL",
                "organization": "ООО «ООО \"ASLAN GLOBAL KOMMUNAL\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cb6c88db62f1265f0b928cb6972d2276a81d9557.png",
                "date": 1621501802464,
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
                            "name": "home_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улиц",
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
                            "name": "apartments",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома и квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за период",
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
                    "aslan global kommuna",
                    "аслан глобал комунал",
                    "тчсж",
                    "тсж",
                    "фыдфт пдщифд лщььгтф"
                ],
                "weight": 0.0000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6329735c75feb1ed5f229508",
                "paycom_id": "6329725af8b15ea8112b6396",
                "name": "SOZVEZDIE SATURNA",
                "organization": "ООО «\"SOZVEZDIE SATURNA\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bb0b726165b3aec7a619784e534c5519f5f02337.png",
                "date": 1663660892664,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "SOZVEZDIE SATURNA",
                    "sozvezdiesaturna",
                    "созвездие сатурна"
                ],
                "weight": 0.0000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63529aa71fe5cc9de25f1ae2",
                "paycom_id": "635299f0cef7c50fdbdfb422",
                "name": "Новомосковская ",
                "organization": "ООО «Novomoskovskaya Kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4850022ecdd43a8e07e1f17fd5d3caf8ebe32cb1.png",
                "date": 1666357927519,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                                    "name": "Отопление",
                                    "value": "heating",
                                    "title": "Отопление",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ком. услуги",
                                    "value": "com_services",
                                    "title": "Ком. услуги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ГВС",
                                    "value": "gvs",
                                    "title": "ГВС",
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
                    "Novomoskovskaya Kommunal ",
                    "Новомосковская",
                    "коммунал "
                ],
                "weight": 0.0000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63e3562c5a05f76fd5a6c0e9",
                "paycom_id": "63e355e6ed01190def7d24b3",
                "name": "MINOR GRAND KAPITAL",
                "organization": "ООО «\"MINOR GRAND KAPITAL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ef56ca4e79154192751d1c733db24f464adfed8b.png",
                "date": 1675843116341,
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
                        }
                    ]
                },
                "keywords": [
                    "MINOR GRAND KAPITAL",
                    "Минор Гранд Капитал",
                    "Ьштщк Пкфтв Лфзшефд",
                    "Vbyjh Uhfyl Rfgbnfk",
                    "коммунальные услуги"
                ],
                "weight": 0.0000013137961831030234,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5eea14d3343eb86f54d33edb",
                "paycom_id": "5eea12734ecf0d571ed7f455",
                "name": "ТЧСЖ Турон Хумо Коммуналчи",
                "organization": "ННО «ТЧСЖ Турон Хумо Коммуналчи»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/22f5203fcf05ecfa0fb9b85a3917ec10f3d669d2.png",
                "date": 1592399059935,
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
                            "name": "Full_name",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "flat_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тчсж турон хумо коммуналчи",
                    "tchsj turon xumo kommunalchi",
                    "kommunal xizmatlar",
                    "коммунальные услуги"
                ],
                "myhome": true,
                "weight": 0.0000012199535985956645,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63a45980ceaba24113c3950a",
                "paycom_id": "63a458d53a3886fdf06bdaa2",
                "name": "OQ SAROY RESIDENCE",
                "organization": "ООО «OQSAROY RESIDENTS MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/87d4d5c1c638777c7b1d7945d36396aab35ffaaa.png",
                "date": 1671715200018,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "OQ SAROY RESIDENCE",
                    "oq saroy residence",
                    "Oq saroy residence",
                    "ОК САРОЙ",
                    "ок сарой"
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
                "_id": "5f7eb9822af15d604f4c59d2",
                "paycom_id": "5f7c6d7b4e196c50465b4d64",
                "name": "PARVOZ-QALDIRG'OCH-KOMMUNAL",
                "organization": "ТЧСЖ «PARVOZ-QALDIRG'OCH-KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/0d61a0fcc980158673f0a86fc68467f33f1aa713.png",
                "date": 1602140546369,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 1000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "FULL_NAME",
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
                            "name": "ADDRESS",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "АДРЕС",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "тчсж",
                    "parvoz qaldirgoch komunal tolovi",
                    "parvoz-qaldirg'och-kommunal",
                    "парвоз"
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
                "_id": "5fc9dea158bb9fee75c0e751",
                "paycom_id": "5fbcdaa1f8caf1c00e7eb324",
                "name": "NAVRO’Z  BARAKA LYUKS",
                "organization": "ТЧСЖ «NAVRO`Z BARAKA LYUKS UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/427fd33efcc4c9dfd79fe8f97eae2f4a64ffc181.png",
                "date": 1607065249389,
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
                            "name": "Period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "navro’z baraka lyuks",
                    "навруз барака люкс",
                    "navroz",
                    "ТЧСЖ",
                    "ТСЖ",
                    "коммуналка"
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
                "_id": "62f0b9165a4746e92b37a3e2",
                "paycom_id": "62f0b8bb39c675be34e6effd",
                "name": "OLIY SIFAT",
                "organization": "ООО «\"OLIY SIFAT\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5f6a0f5ebfa0700baf49604d045e7353a20abff8.png",
                "date": 1659943190505,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "OLIY SIFAT",
                    "oliysifat",
                    "олий сифат",
                    "щдшн ышафе"
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
                "_id": "5f294501226cb81a0dbc0a12",
                "paycom_id": "608908d70670cb7d044bf203",
                "name": "JANNATMAKOM KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ JANNATMAKOM KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cd8ded78d226baa68e688af983c32e9e375c9fb9.png",
                "date": 1596540161168,
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
                            "name": "address",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "пр.Каландар, дом. № 24",
                                    "value": "1",
                                    "title": "пр.Каландар, дом. № 24",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "тчсж ",
                    "jannatmakom kommunal servis",
                    "коммунальные услуги",
                    "kommunal xizmatlar"
                ],
                "myhome": true,
                "weight": 0.0000010322684295809468,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "607fca4db8d597ed134d923b",
                "paycom_id": "607eaf065cefd1b5a2507e97",
                "name": "Kommunalliq issiliq orayi",
                "organization": "ГУП «KOMMUNALLIQ ISSILIQ ORAYI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f111f532b7d7f85001400f82faac88348d1d3fed.png",
                "date": 1618987597495,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                    "kommunalliq issiliq orayi",
                    "коммуналлик иссик орай",
                    "коммунальные услуги",
                    "ком услуги",
                    "тсж",
                    "тчсж",
                    "issiliq orayi"
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
                "_id": "62bc53d5cb6e753eb77ae66a",
                "paycom_id": "62bc4f23b2a26248fca79877",
                "name": "IBN SINO AVENUE",
                "organization": "ТЧСЖ «\"IBN SINO AVENUE\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/da619cdeae04fd57b15e3eb90256e152ca22c9d3.png",
                "date": 1656509397874,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "ibn sino avenue",
                    "шит ыштщ фмутгу",
                    "ибн сино авеню",
                    "комунальные"
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
                "_id": "6331a9988c5b3960fce5f39e",
                "paycom_id": "6331a881018065c9dfa8346d",
                "name": "\"A'LO ZIYO SERVIS\"",
                "organization": "ТЧСЖ «A'LO ZIYO SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c5e0e31db51cee49ed61994b720b2d0bacb33c08.png",
                "date": 1664199064813,
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
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "Адрес Ю.Абад 19/8/",
                                "output": true
                            },
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
                        },
                        {
                            "content": "phone",
                            "name": "phone_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": null,
                            "lenght": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": true
                            },
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Январь",
                                    "value": "january",
                                    "title": "Январь",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Февраль",
                                    "value": "february",
                                    "title": "Февраль",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Март",
                                    "value": "march",
                                    "title": "Март",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Апрель",
                                    "value": "april",
                                    "title": "Апрель",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Май",
                                    "value": "may",
                                    "title": "Май",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Июнь",
                                    "value": "june",
                                    "title": "Июнь",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Июль",
                                    "value": "july",
                                    "title": "Июль",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Август",
                                    "value": "august",
                                    "title": "Август",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сентябрь",
                                    "value": "september",
                                    "title": "Сентябрь",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Октябрь",
                                    "value": "october",
                                    "title": "Октябрь",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ноябрь",
                                    "value": "november",
                                    "title": "Ноябрь",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Декабрь",
                                    "value": "december",
                                    "title": "Декабрь",
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
                            "name": "LS",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Лицевой счет",
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
                    "A'LO ZIYO SERVIS",
                    "Ало Зиё Сервис",
                    "Фдщ Яшнщ Ыукмшы",
                    "Фэдщ Яшнщ Ыукмшы"
                ],
                "myhome": true,
                "weight": 0.0000010322684295809468,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6602a8c212d57e0dca11ec71",
                "paycom_id": "65e1f272a10775d0a701a0ae",
                "name": "BUXOROENERGORESURS",
                "organization": "АО «Buxoro energo resurs»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dc903dabb5be88b3d2255fcd8c7da93c54be653c.png",
                "date": 1711450306205,
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
                            "name": "id_abonent",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Код абонента",
                            "type": "text",
                            "validation": "^[0-9]{12,13}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Способ оплаты",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Issiq suv",
                                    "value": "1",
                                    "title": "Issiq suv",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Issiqlik energiyasi",
                                    "value": "2",
                                    "title": "Issiqlik energiyasi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ustama (penya)",
                                    "value": "3",
                                    "title": "Ustama (penya)",
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
                    "Buxoroenergoresurs",
                    "Buxoro energoresurs",
                    "buhoro energoresurs",
                    "бухоро энергоресурс"
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
                "_id": "62308be813f200ec5daea8fd",
                "paycom_id": "62308b19248e627a6a4be66e",
                "name": "19TH AVENUE",
                "organization": "ТЧСЖ «XUJMSH 19TH AVENUE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dedb119ca3d87a89505dd84e21b0d199e0ae06d9.png",
                "date": 1647348712228,
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
                            "content": "number",
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "19 AVENUE",
                    "19 ФМУТГУ",
                    "19 авеню",
                    "19 fdty."
                ],
                "weight": 9.38425845073588e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6040925d2d127859d8d42f4d",
                "paycom_id": "603f528632b9d27ba076f77f",
                "name": "AXIL-INSONLAR-KOMMUNAL ",
                "organization": "ТЧСЖ «AXIL-INSONLAR-KOMMUNAL UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8c160ef408fdbf8be5e281e3b6236ea897c89e1f.png",
                "date": 1614844509403,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "axil-insonlar-kommunal",
                    "kommunal",
                    "kommunal",
                    "axil",
                    "axil",
                    "ахилинсонлар",
                    "ахил инсонлар",
                    "INSONLAR KOMMUNAL",
                    "axil insonlar kommunal"
                ],
                "myhome": true,
                "weight": 8.445832605662292e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "615c220488800c96dd77f597",
                "paycom_id": "615c20ee6ffb40fb4dba31fe",
                "name": "Kammunal Qurilish ta'mir servis",
                "organization": "ООО «Kammunal Qurilish ta'mir servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/69b095fda784d2882b65d6767fe74b99caad3a33.png",
                "date": 1633427972156,
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
                            "title": "Лицевой счет",
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
                    "Qurilish ta'mir servis",
                    "тчсж",
                    "тсж",
                    "Лфььгтфд Йгкшдшыр ефэьшк ыукмшы",
                    "Услуги по ремонту коммунальных сооружений"
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
                "_id": "64c244c2601456d371c9ea31",
                "paycom_id": "64c24462c708e50621ebef40",
                "name": "ANHOR HOUSE",
                "organization": "ТЧСЖ «\"ANHOR UYLARI\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8d4622c89c1ca165b32e9c1349c70088cbb6f7b7.png",
                "date": 1690453186628,
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
                            "name": "street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ANHOR HOUSE",
                    "анхор хаус",
                    "дом анхор ",
                    "ANHOR  Uy"
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
                "_id": "5c514df5394125022cc587f0",
                "paycom_id": "5c514cae394125022cc587ef",
                "name": "HOME SERVICE",
                "organization": "ТЧСЖ «HOME SERVICE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/home-service.png",
                "date": 1548832194263,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 10000000000
                    },
                    "account": [
                        {
                            "name": "receiver",
                            "title": "Филиал",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "1",
                                    "title": "FELICITA`",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "3",
                                    "title": "AMIR TIMUR",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "4",
                                    "title": "DOSTLAR",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "5",
                                    "title": "CAMBRIDGE RECIDENCE",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "6",
                                    "title": "GREEN CITY",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "7",
                                    "title": "GULSAROY",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "8",
                                    "title": "CENTRAL",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "address",
                            "title": "Номер дома и номер квартиры",
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
                    "HOME SERVICE",
                    "ТЧСЖ",
                    "коммуналка"
                ],
                "myhome": true,
                "weight": 7.507406760588704e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "616faf3b88800c96dd7804a9",
                "paycom_id": "616eace5675c08aadea2b81a",
                "name": "ASALOBOD-SERVIS",
                "organization": "ТЧСЖ «OLTIN-VODIY-KOMMUNAL XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cca7368bdb2a9d11e511c53703b058e13678e29f.png",
                "date": 1634709307625,
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
                        }
                    ]
                },
                "keywords": [
                    "тсж",
                    "тчсж",
                    "OLTIN VODIY KOMMUNAL XUJMSH",
                    "Щдешт Мщвшн Лщььгтфд",
                    "олтин водий коммунал",
                    "ASALOBOD-SERVIS",
                    "ASALOBOD SERVIS",
                    "асалобод"
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
                "_id": "61cc5fd8ae93b09ee03d16b9",
                "paycom_id": "61cc5950294a641eee21ed96",
                "name": "YANGI OLTINTEPA",
                "organization": "ТЧСЖ «YANGI OLTINTEPA XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d7aa0c2694a6eb848fe84eef9dcbe55f45f594ef.png",
                "date": 1640783832109,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филиал",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Yangi Oltintepa",
                                    "value": "oltintepa",
                                    "title": "Yangi Oltintepa",
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Обязательный взнос членов товарищества",
                                    "value": "vznos",
                                    "title": "Обязательный взнос членов товарищества",
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "янги",
                    "олтинтепа",
                    "yangi",
                    "oltintepa",
                    "zyub",
                    "jknbyntgf",
                    "нфтпш",
                    "щдештеузф"
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
                "_id": "6243029a5bc3e35a0e922085",
                "paycom_id": "623c6ef3bd1c329a32de86fe",
                "name": "TOSHKENT-SANTEXKOMMUNXIZMAT",
                "organization": "ТЧСЖ «\"TOSHKENT-SANTEXKOMMUNXIZMAT\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/200afe434a4cccc823893092df042225f0b5714d.png",
                "date": 1648558746526,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ул. Сайрам",
                                    "value": "sayram",
                                    "title": "Ул. Сайрам",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Каландар",
                                    "value": "kalandar",
                                    "title": "Ул. Каландар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Каландар тор",
                                    "value": "kalandar_tor",
                                    "title": "Ул. Каландар тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Мирзо Улугбек",
                                    "value": "mirzo",
                                    "title": "Ул. Мирзо Улугбек",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Ясси",
                                    "value": "yassi",
                                    "title": "Ул. Ясси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Сухайл",
                                    "value": "suxayl",
                                    "title": "Ул. Сухайл",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Сайрам 1 тор",
                                    "value": "sayram1",
                                    "title": "Ул. Сайрам 1 тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Сайрам 2 тор",
                                    "value": "sayram2",
                                    "title": "Ул. Сайрам 2 тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Сайрам 3 тор",
                                    "value": "sayram3",
                                    "title": "Ул. Сайрам 3 тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Сайрам 4 тор",
                                    "value": "sayram4",
                                    "title": "Ул. Сайрам 4 тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "массив Буз-1",
                                    "value": "buz1",
                                    "title": "массив Буз-1",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Зиелилар",
                                    "value": "ziyolilar",
                                    "title": "Ул. Зиелилар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Муминова",
                                    "value": "muminov",
                                    "title": "Ул. Муминова",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Олимлар",
                                    "value": "olimlar",
                                    "title": "Ул. Олимлар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул. Буюк Ипак Йули",
                                    "value": "buyuk",
                                    "title": "Ул. Буюк Ипак Йули",
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
                    "Santexkommunxizmat",
                    "сантехкоммунхизмат",
                    "Santexkommun xizmat",
                    "сантехкоммун хизмат",
                    "Ыфтечлщььгтчшяьфе",
                    "cfynt[rjvvey[bpvfn"
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
                "_id": "637ddf13bac96cb75c45dcb4",
                "paycom_id": "637ddebd4050a4f68533b51b",
                "name": "OQQO'RG'ON SERVIS",
                "organization": "ООО «\"OQQO'RG'ON SERVIS\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c3b9c10ae6d407c347d07f7aa6bd67a11444ec3d.png",
                "date": 1669193491469,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "content": "phone",
                            "name": "number_phone",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер телефона",
                            "type": "text",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
                            },
                            "validation": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "OQQORGON SERVIS",
                    "oqqorgon servis",
                    "Oqqorgon servis",
                    "оккургон сервис",
                    "ОККУРГОН СЕРВИС"
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
                "_id": "65576a2c2810c55017037477",
                "paycom_id": "6557697a7b087db98179b07d",
                "name": "NRG PARK",
                "organization": "ООО «\"NRG SERVICE FOR ALL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2ab30c322c9fbeeb8ed929065db71d933aed146a.png",
                "date": 1700227628693,
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
                            "title": "ФИО (Собственника)",
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
                            "name": "type_service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Взносы за жилые квартиры",
                                    "value": "1",
                                    "title": "Взносы за жилые квартиры",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за коммерческие помещения",
                                    "value": "2",
                                    "title": "Взносы за коммерческие помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за кладовые помещения",
                                    "value": "3",
                                    "title": "Взносы за кладовые помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы на содержание подземного паркинга",
                                    "value": "4",
                                    "title": "Взносы на содержание подземного паркинга",
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
                            "name": "block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер блока",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН",
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
                    "NRG PARK",
                    "нрг парк",
                    "нрг park"
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
                "_id": "5f7ebb272af15d604f4c59da",
                "paycom_id": "5f7c6c914e196c50465b4d33",
                "name": "SHODLIK XIZMATI",
                "organization": "ТЧСЖ «SHODLIK XIZMATI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/61ab5aec0c8b32c7cd02d7aef414a1d4429628f1.png",
                "date": 1602140967583,
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
                            "name": "FULL_NAME",
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
                            "name": "ADDRESS",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "АДРЕС",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "тчсж",
                    "shodlik xizmati",
                    "шодлик хизмати"
                ],
                "myhome": true,
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fb7874f8b38a19f0b399ef4",
                "paycom_id": "5fa982c6e938edd0061724a0",
                "name": "Mironshox komfort servis (вывоз мусора)",
                "organization": "ООО «ООО \"MIRONSHOX KOMFORT SERVIS\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7669b10f94773ebbd763ad9ab834f17beeb5fd32.png",
                "date": 1605863247373,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 50000000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О. / Наименование организации",
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
                            "name": "Period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "мусор",
                    "вывоз",
                    "камуналка",
                    "вывоз мусора",
                    "Мироншох комфорт сервис",
                    "Mironshox komfort servis"
                ],
                "myhome": true,
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fead72858bb9fee75c0f12e",
                "paycom_id": "5fe06d25118a69db729865d5",
                "name": "MUFARRAH SERVICE",
                "organization": "ТЧСЖ «MUFARRAH SERVICE ХУЖМШ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f0516f7fa51a1dddd18108147359c432d7471a85.png",
                "date": 1609226024021,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "тчсж",
                    "тсчж",
                    "вода",
                    "мусор",
                    "MUFARRAH SERVICE"
                ],
                "myhome": true,
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "605b2f8909f72b00dba00a60",
                "paycom_id": "605b2f0173214c962bae7454",
                "name": "KUYOSH NURI KOMMUNAL ",
                "organization": "ТЧСЖ «ТЧСЖ \"KUYOSH NURI KOMMUNAL\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/10b5110bb2468d80378dfb158dc284384d131e09.png",
                "date": 1616588681493,
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
                            "name": "Address_house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "kuyosh nuri kommunal",
                    "куёш нури коммунал",
                    "ком услуги"
                ],
                "myhome": true,
                "weight": 6.568980915515117e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "615a92fe88800c96dd77f48f",
                "paycom_id": "615a91e4f7ce27386941d0d2",
                "name": "LAZURIT PLUS",
                "organization": "ТЧСЖ «LAZURIT PLUS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e25e7ffd069ad3547b571efec7dafface8dc20a3.png",
                "date": 1633325822625,
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
                        },
                        {
                            "content": "text",
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "LAZURIT PLUS XUJMSH",
                    "дфягкше здгы",
                    "лазурит плюс",
                    "kfpehbn gk.c",
                    "лазурит плус"
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
                "_id": "64b13c6b5b17f8b641a8fa56",
                "paycom_id": "64abbd33e4e564c982849eea",
                "name": "KOMMUNAL SERVISE NAVOI",
                "organization": "ООО «\"KOMMUNAL SERVISE NAVOI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2a6f3f285819af3ac4ef788e4073008ddba42ab7.png",
                "date": 1689336939516,
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
                    "KOMMUNAL SERVISE NAVOI",
                    "KOMUNAL SERVISE NAVOI",
                    "KOMMUNAL SERVIS NAVOI",
                    "KOMUNAL SERVIS NAVOI"
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
                "_id": "65d2e2d8a37b40d4f6f544eb",
                "paycom_id": "65d2e2933c319dec9d8b706b",
                "name": "RESPECT",
                "organization": "ООО «\"RESPECT\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/3a43a7299dd280d968b4607ae94a530042032fa7.png",
                "date": 1708319448056,
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
                    "RESPECT",
                    "RESPEkT",
                    "респект",
                    "rispekt",
                    "rispect",
                    "куызусе"
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
                "_id": "5e9959d8fdd5106671b63467",
                "paycom_id": "5e99562459ac589f52b1cb14",
                "name": "Taqiyatas issiliq tarmaqlari",
                "organization": "ООО «Taqiyatas issiliq tarmaqlari»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c9aca08baf21407fa14110130440ba2301e2d24b.png",
                "date": 1587108312933,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер кваритры",
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
                    "оплата коммунальных онлайн",
                    "kommunal to'lovlar onlayn",
                    "оплата коммунальных",
                    "kommunal to'lovlar",
                    "kommunal to'lovlar internet",
                    "taqiyatas issiliq tarmaqlari"
                ],
                "myhome": true,
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fbcd64c8b38a19f0b39a045",
                "paycom_id": "5fbb4a51f8caf1c00e7e9393",
                "name": "SHAXRISABS KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «SHAXRISABS KOMMUNAL SERVIS UJM»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8bad5c38ef3ccdc09a5f442543dccdb39a115331.png",
                "date": 1606211148068,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "shaxrisabs",
                    "kommunal servis",
                    "коммунальные услуги",
                    "ком услуги",
                    "КОММУНАЛЬНАЯ СЛУЖБА SHAXRISABS",
                    "тсж",
                    "тчсж",
                    "коммуналка"
                ],
                "myhome": true,
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "605b36c009f72b00dba00a6a",
                "paycom_id": "605b364c73214c962bae757e",
                "name": "ATIRGUL-KOMMUNAL ",
                "organization": "ТЧСЖ «ATIRGUL-KOMMUNAL ШИРКАТ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7d7270c7a00fa0d1375a3ae1234cc036670fdd8e.png",
                "date": 1616590528957,
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
                            "name": "address",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "kommunal xizmatlar",
                    "коммунальные услуги",
                    "атиргул",
                    "atirgul"
                ],
                "myhome": true,
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "605d9f6f09f72b00dba00b80",
                "paycom_id": "60759459d485de3cbb7e2412",
                "name": "OQQO'RG'ON BIRINCHI KOMMUNAL",
                "organization": "ТЧСЖ «OQQO'RG'ON BIRINCHI KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e30d7613093b493756a0cbfb2149d0abaff8cd22.png",
                "date": 1616748399162,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "дом",
                    "квартира",
                    "камуналка",
                    "hause",
                    "home"
                ],
                "myhome": true,
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6155a52088800c96dd77f3a2",
                "paycom_id": "6155a3fa161e70ea14dcf445",
                "name": "GUNCHA SERVIS KOMMUNAL",
                "organization": "ТЧСЖ «GUNCHA SERVIS KOMMUNAL XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ad6c70835b34b5d2ca1ebb19a58b0e712d03e12c.png",
                "date": 1633002784738,
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
                            "name": "Street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "GUNCHA SERVIS KOMMUNAL",
                    "GUNCHA KOMMUNAL",
                    "пгтсрф ыукмшы лщььгтфд",
                    "гунча сервис коммунал",
                    "гунча коммунал",
                    "ueyxf cthdbc rjvveyfk"
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
                "_id": "620637f4effdccf2091d2747",
                "paycom_id": "620636e142aad8f69b546da9",
                "name": "SAID AKBAR KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «\"SAID AKBAR KOMMUNAL SERVIS\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/72091c3d461049f396d1cef6fe230a8537bcca6a.png",
                "date": 1644574708983,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "SAID AKBAR KOMMUNAL SERVIS",
                    "коммунальные платежи",
                    "kommunal"
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
                "_id": "5e54ff467cdad02b21e77b53",
                "paycom_id": "5e4cd14eaf9572847bcadb18",
                "name": "ТЧСЖ",
                "organization": "ННО «HAUSMEISTER SERVICE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e0a8a219c4bf787eadcba9d198283a687681f0b7.png",
                "date": 1582628678584,
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
                            "name": "home",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "hausmeister service",
                    "оплата за комунальные услуги",
                    "хаусмейстер сервис"
                ],
                "myhome": true,
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62a9c3832abe8594b27f41ba",
                "paycom_id": "62a9bd97c5c5a513f84a697a",
                "name": "YONGINNI OLDINI OLISH MFYBXFOOX",
                "organization": "ООО «\"YONGINNI OLDINI OLISH MFYBXFOOX\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/def909a048a585a562a0f8d91ebe20d43753c10d.png",
                "date": 1655292803914,
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
                            "name": "city",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Город",
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
                            "name": "district",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Район",
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
                            "name": "home_address",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Домашний адрес",
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
                    "yong'in",
                    "yongin",
                    "йонгин",
                    "ёнгин",
                    "енгин",
                    "нщтпшт"
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
                "_id": "63a3fcc3ceaba24113c393cb",
                "paycom_id": "63a3fc584b7facfd06c41c44",
                "name": "DUDBURON XIZMAT",
                "organization": "ООО «\"DUDBURON XIZMATI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/38dc7fb4d78f6a296b2c128279b90593acb40039.png",
                "date": 1671691459211,
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
                        }
                    ]
                },
                "keywords": [
                    "DUDBURON XIZMAT",
                    "Дудбурон Хизмат",
                    "Вгвигкщт чшяьфе"
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
                "_id": "65e0888d88f9930638b5ae18",
                "paycom_id": "65e087ce3c319dec9d8c9fbf",
                "name": "DUDBURON VA MURIKON SERVICE",
                "organization": "ООО «\"DUDBURON VA MURIKON SERVICE\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bf1c9f8b766906c5b3659882ea0ae05786a70802.png",
                "date": 1709213837167,
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
                            "title": "Район",
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
                            "name": "uy_raqam",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес дома",
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
                    "DUDBURON VA MURIKON SERVICE",
                    "DUDBURON VA MURIKON SERVIS",
                    "duburon va murikon",
                    "murikon service"
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
                "_id": "5f3e3d215d4618190d83df5f",
                "paycom_id": "5f3e3ca641c04555482e2a1d",
                "name": "ТСЧЖ \"BOBUR ELITE\"",
                "organization": "ННО «ТСЧЖ \"BOBUR ELITE\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f8b82c389db09304acef020168b853a2a963dd9d.png",
                "date": 1597914401245,
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
                            "name": "Address",
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
                            "name": "Date_of_payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата оплаты",
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
                    "камуналка",
                    "мусор",
                    "газ",
                    "вода",
                    "БОБУР ЭЛИТА"
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
                "_id": "5f7ff84d2af15d604f4c5a4d",
                "paycom_id": "5f7eabfd7ed72bd343c99e13",
                "name": "USTA KOMMUNAL",
                "organization": "ТЧСЖ «USTA KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7ab0cb6d1d548bc75a38cfc75717629b5c7c9477.png",
                "date": 1602222157413,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 1000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                            "name": "address",
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
                        }
                    ]
                },
                "keywords": [
                    "ком услуги",
                    "коммунальные ",
                    "usta kommunal",
                    "уста коммунал"
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
                "_id": "611527f612950f485b3b1b03",
                "paycom_id": "6115270d754e932e68fdb0ab",
                "name": "UYUTNIY UGOLOK ",
                "organization": "ТЧСЖ «UYUTNIY UGOLOK»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ddf330cbfdd6932dc8d1dd69740220c18ff6b10f.png",
                "date": 1628776438519,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "UYUTNIY UGOLOK",
                    "уютный уголок",
                    "гнгетшн гпщдщл"
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
                "_id": "61698d0288800c96dd77ffc1",
                "paycom_id": "61698caea934af095c7ff149",
                "name": "O'LKASHUNOSLIK",
                "organization": "ТЧСЖ «\"O`LKASHUNOSLIK\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b3860b864d561080900f5951478df85aaa5b449d.png",
                "date": 1634307330285,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "O'LKASHUNOSLIK",
                    "олкашонослик",
                    "тсж",
                    "ком услуги",
                    "ТЧСЖ",
                    "OLKASHUNOSLIK",
                    "ЩДЛФЫРГТЩЫДШЛ",
                    "щдлфыргтщыдшл"
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
                "_id": "6245b12f5bc3e35a0e922983",
                "paycom_id": "6245b0df257faf2854fd64d7",
                "name": "OUR HOME",
                "organization": "ТЧСЖ «\"OUR HOME\" XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6987b75203889f5cd39be8f7d02adaef836a396a.png",
                "date": 1648734511969,
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
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Саидкаримова К.А  1/2 кв  282.49",
                                    "value": "said",
                                    "title": "Саидкаримова К.А  1/2 кв  282.49",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Умаров Г. Г 3 кв  146,62",
                                    "value": "umar",
                                    "title": "Умаров Г. Г 3 кв  146,62",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Махмудова И.С   4/5 кв  301,47",
                                    "value": "max",
                                    "title": "Махмудова И.С   4/5 кв  301,47",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Абдураззакова С. А  6 кв  157,18",
                                    "value": "abd",
                                    "title": "Абдураззакова С. А  6 кв  157,18",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ахмедов М.С 7/8 кв  301,34",
                                    "value": "axm",
                                    "title": "Ахмедов М.С 7/8 кв  301,34",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Миршарапова Д.А   9/12 кв 434,3",
                                    "value": "mir",
                                    "title": "Миршарапова Д.А   9/12 кв 434,3",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хусейнова Ф.М 10 кв 183.2",
                                    "value": "xus",
                                    "title": "Хусейнова Ф.М 10 кв 183.2",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Махмудов М.К  11 кв 125,56",
                                    "value": "maxm",
                                    "title": "Махмудов М.К  11 кв 125,56",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Миракова Ш.Г  13 кв 153,21",
                                    "value": "mirak",
                                    "title": "Миракова Ш.Г  13 кв 153,21",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ахмедова Д.А  14 кв 155,52",
                                    "value": "axmed",
                                    "title": "Ахмедова Д.А  14 кв 155,52",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мамуров Ш 15 кв 162,1",
                                    "value": "maur",
                                    "title": "Мамуров Ш 15 кв 162,1",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Казакбаева Н.А  16 кв 162,1",
                                    "value": "kaz",
                                    "title": "Казакбаева Н.А  16 кв 162,1",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мамуров А.У 17/18 кв  312,57",
                                    "value": "mamurov",
                                    "title": "Мамуров А.У 17/18 кв  312,57",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ахмедов М.У 19/21 кв  307,02",
                                    "value": "axmedov",
                                    "title": "Ахмедов М.У 19/21 кв  307,02",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ахмедов С.С 20/22 кв  302,77",
                                    "value": "axmc",
                                    "title": "Ахмедов С.С 20/22 кв  302,77",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Латипов А.И 23 кв 150.64",
                                    "value": "latip",
                                    "title": "Латипов А.И 23 кв 150.64",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Султонова М.Ш 25 кв 195,01",
                                    "value": "sult",
                                    "title": "Султонова М.Ш 25 кв 195,01",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ражабов Ш. Т  26 кв 147,49",
                                    "value": "radj",
                                    "title": "Ражабов Ш. Т  26 кв 147,49",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Гиязиддинова Б.У  27 кв 125,56",
                                    "value": "giya",
                                    "title": "Гиязиддинова Б.У  27 кв 125,56",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Мухсинов А.Ш  28 кв 180,29",
                                    "value": "muxs",
                                    "title": "Мухсинов А.Ш  28 кв 180,29",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Гулямова Г.И  29/32 кв  290,47",
                                    "value": "gulam",
                                    "title": "Гулямова Г.И  29/32 кв  290,47",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Миршарипов У  30/33 кв  221,06",
                                    "value": "mirsh",
                                    "title": "Миршарипов У  30/33 кв  221,06",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ким Виктория В  31 кв 177,65",
                                    "value": "kim",
                                    "title": "Ким Виктория В  31 кв 177,65",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бабаев А.А  34 кв 183,89",
                                    "value": "babaev",
                                    "title": "Бабаев А.А  34 кв 183,89",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "our home",
                    "оур хоум",
                    "щгк рщьу",
                    "наш дом"
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
                "_id": "62c6e2e9cb6e753eb77b13aa",
                "paycom_id": "62c6e24c4a4106a6369d4c5d",
                "name": "NOVZA KOMMUNAL",
                "organization": "ООО «Novza Communal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2b471993e847777ad95a68943238dcd52e01e6d4.png",
                "date": 1657201385737,
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
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "NOVZA KOMMUNAL",
                    "ТЩМЯФ ЛЩЬЬГТФД",
                    "новза коммунал",
                    "yjdpf rjvveyfk"
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
                "_id": "6375c904b5324b62acb2c114",
                "paycom_id": "6374e21f4050a4f685323f81",
                "name": "YONG`INDAN TEXNIK KORIK",
                "organization": "ООО «\"YONG`INDAN TEXNIK KORIK\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/04354076c89d9e1b76862a011c4f68162035b599.png",
                "date": 1668663556607,
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
                            "name": "city",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Город",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Город Ташкент",
                                    "value": "tashkent_city",
                                    "title": "Город Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "tashkent_region",
                                    "title": "Ташкентская область",
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
                            "name": "district",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
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
                            "name": "home_address",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Домашний адрес",
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
                            "title": "Номер контракта",
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
                    "YONGINDAN TEXNIK KORIK",
                    "yongindan texnik korik",
                    "Yongindan texnik korik",
                    "Нщтпштпфт еучтшл",
                    "нщтпштпфт еучтшл"
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
                "_id": "5ea29baafdd5106671b63710",
                "paycom_id": "5ea297ee82f1d22d6f308a9c",
                "name": "ТЧСЖ Mutolib Kommunal",
                "organization": "ООО «ТЧСЖ Mutolib Kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/11bb3f67ee6b2a5f16af740421cac490f36aaaeb.png",
                "date": 1587714986166,
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
                            "name": "Array",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Массив (микрорайон)",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "комуналка",
                    "тсчж",
                    "тчсж",
                    "kommunal",
                    "мутолиб",
                    "mutolib kommunal",
                    "mutolib"
                ],
                "myhome": true,
                "weight": 3.753703380294352e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61aef5ef928187311ef8ccaa",
                "paycom_id": "61aef555f6071daf8dada4a0",
                "name": "SAID PLYUS KOMMUNAL SERVIS ",
                "organization": "ТЧСЖ «SAID PLYUS KOMMUNAL SERVIS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/a96a58c0f9b32445848cebff3e3ccbee9c12c11d.png",
                "date": 1638856175451,
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
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "SAID PLYUS KOMMUNAL SERVIS",
                    "ЫФШВ ЗДНГЫ ЛЩЬЬГТФД ЫУКМШЫ",
                    "саид плюс коммунал сервис",
                    "cfbl gk.c rjvveyfk cthdbc",
                    "коммунальные услуги",
                    "Kommunal xizmatlar",
                    "тсж",
                    "тчсж"
                ],
                "weight": 3.753703380294352e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62e779f83a23b719dc9861ae",
                "paycom_id": "62e7785e39c675be34e565c3",
                "name": "BELARIK",
                "organization": "ТЧСЖ «\"BELARIK\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b15c37f4493192b3ff94b961ea37e8a77929a266.png",
                "date": 1659337208293,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "BELARIK",
                    "беларик",
                    "коммунальные услуги",
                    "тсж",
                    "иудфкшй"
                ],
                "weight": 3.753703380294352e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "645e231a8367719e00a44bd2",
                "paycom_id": "645e20f82cb83937a7541454",
                "name": "Sag'bon Farobiy",
                "organization": "ТЧСЖ «SAG'BON-FAROBIY XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/30a2c8f463cfbe15afe9cc966a2a06956bad36e2.png",
                "date": 1683890970296,
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
                            "name": "date",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дата",
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
                            "name": "flat",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Дом, квартира",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                            "name": "square",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Площадь",
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
                    "Sagbon Farobiy",
                    "Ыфпищт Афкщишн",
                    "сагбон фароби",
                    "cfu,jy afhj,b"
                ],
                "weight": 3.753703380294352e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ed7652e343eb86f54d3391c",
                "paycom_id": "5ed7527313438abc3892dc75",
                "name": "SAVA SERVIS",
                "organization": "ООО «SAVA SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bd702a6102d5353d406db64a03e4e1054c91988b.png",
                "date": 1591174446720,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "сава сервис",
                    "sava servis",
                    "коммунальные услуги",
                    "kommunal xizmatlar"
                ],
                "myhome": true,
                "weight": 2.8152775352207644e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60d490660a40376aa994a201",
                "paycom_id": "60d34476189ef49d9fa497ba",
                "name": "KO'RKAM UYLAR",
                "organization": "ТЧСЖ «\"KO`RKAM UYLAR\" XUSUSIY UY-JOY MULKDORLARI SHIRKATI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/79ffced2ed04e57ccdcd432f30b4d99285727334.png",
                "date": 1624543334820,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "коммунальные услуги",
                    "kommunal xizmatlar",
                    "ko'rkam uylar",
                    "коркам уйлар",
                    "korkam uylar",
                    "тсж",
                    "тчсж"
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
                "_id": "6256c579d88dabe401b5356c",
                "paycom_id": "6256c52a3b252ec2c4526169",
                "name": "GOLD HILL KOMMUNAL",
                "organization": "ООО «Gold Hill Kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/12ae7494d8806148570bf66e7613b9063167144c.png",
                "date": 1649853817723,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "GOLD HILL KOMMUNAL",
                    "Голд Хилл Коммунал",
                    "Пщдв Ршдд Лщььгтфд"
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
                "_id": "62d802bb2cfc087774bb9361",
                "paycom_id": "62d8027939c675be34e2c4ca",
                "name": "DILKUSHO BIRINCHI",
                "organization": "ТЧСЖ «\"DILKUSHO BIRINCHI\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2017e2aaf9e3f9e74fb10a8b20376d588661ed35.png",
                "date": 1658323643634,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "DILKUSHO BIRINCHI",
                    "Дилкушо Биринчи",
                    "Вшдлгыр Ишкштсрш"
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
                "_id": "63db9e1a455076b55e911181",
                "paycom_id": "63db9d879a607425ce94f312",
                "name": "ERMAKOVUSC",
                "organization": "ООО «\"ERMAKOVUSC\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/38531fcd9547cbadad7300acf1f4559caf97d485.png",
                "date": 1675337242519,
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
                            "name": "login",
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
                    "ERMAKOVUSC",
                    "УКЬФЛЩМГЫС",
                    "ермаковуск",
                    "thvfrjdecr"
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
                "_id": "642439516a689d2b4b959715",
                "paycom_id": "642437f8fc0dc40f826098e6",
                "name": "ASALCHI-DARXON",
                "organization": "ТЧСЖ «ASALCHI-DARXON XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c7d6e46c56dc111ffe1597f74e9b5caeb0942ffa.png",
                "date": 1680095569147,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ASALCHI-DARXON",
                    "ASALCHI",
                    "асалчи",
                    "ASALCHI DARXON"
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
                "_id": "646b751b1e3d2de8de5bc9e2",
                "paycom_id": "646b6a002cb83937a7550b00",
                "name": "MY HELPER",
                "organization": "ООО «ООО \"MY HELPER\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e6c1ea4be6f5cf8598e686a51b6d2ea5f722ffe5.png",
                "date": 1684763931948,
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
                            "name": "payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги:",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Аренда Подвала",
                                    "value": "1",
                                    "title": "Аренда Подвала",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Прочие услуги",
                                    "value": "2",
                                    "title": "Прочие услуги",
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
                            "name": "detailsp",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Детали платежа:",
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
                    "MY HELPER",
                    "май хелпер",
                    "ООО \"MY HELPER"
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
                "_id": "64759b0bc34b8a5ddef9988d",
                "paycom_id": "64759ac62cb83937a755b864",
                "name": "KISLOROD ",
                "organization": "ООО «MURAD BUILDINGS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4ec58d76d0682a89a139cc472039cfa5babe62bd.png",
                "date": 1685429003999,
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
                            "name": "block",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Блок",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "a",
                                    "value": "1",
                                    "title": "a",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "b",
                                    "value": "2",
                                    "title": "b",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "KISLOROD",
                    "кислород",
                    "ьгкфв игшдвштпы"
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
                "_id": "64be047a5b17f8b641a90b94",
                "paycom_id": "64be03f5e4e564c982860efb",
                "name": "TOSHKENT SHAXAR DUDBORONCHILAR XIZMATI",
                "organization": "ООО «\"TOXIRJON GERPI TA'MIR BIZNES\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/56bcec43f544bc7702dc311e0aec1a3112531dc5.png",
                "date": 1690174586477,
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
                            "name": "region",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Регион",
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
                            "name": "home_adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес дома",
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
                    "TOSHKENT SHAXAR DUDBORONCHILAR XIZMATI",
                    "DUDBORONCHILAR",
                    "TOXIRJON GERPI TA'MIR BIZNES",
                    "TOSHKENT SHAHAR DUDBORONCHILAR"
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
                "_id": "65dc416ab62990a4d27a6a8f",
                "paycom_id": "65dc40d13c319dec9d8c354e",
                "name": "\"CHIRCHIQ ZABARJA KOMMUNAL SERVIS\" XUJMSH",
                "organization": "ООО «\"CHIRCHIQ ZABARJA KOMMUNAL SERVIS\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6e466138e4c00d04871f0d591c0ebe751a026f21.png",
                "date": 1708933482836,
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
                            "name": "address",
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
                            "name": "house_num",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apt_num",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "chirchiq zabarja kommunal servis",
                    "xbhxbr pf,fh;f rjvveyfk cthdbc",
                    "чирчик забаржа коммунал сервис",
                    "сршксршй яфифкоф лщььгтфд ыукмшсу"
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
                "_id": "5cd0095309f2bd1adc4dad95",
                "paycom_id": "5ccfe0a41722d50474387e73",
                "name": "Dream House",
                "organization": "ООО «Yunusota uy kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dream-house.png",
                "date": 1557137162517,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "name",
                            "title": "Ф.И.О.",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[a-zA-zа-яА-ЯёЁ'\\-]+( [a-zA-zа-яА-ЯёЁ'\\-]+){1,3}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "number",
                            "title": "Номер дома и квартиры",
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
                    "коммуналка",
                    "дрим хаус",
                    "оплата за коммуналку",
                    "Dream House",
                    "тчсж",
                    "Yunusota uy kommunal"
                ],
                "myhome": true,
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5e9ecffefdd5106671b635de",
                "paycom_id": "5e9ecf8b03f443e24b1ba26c",
                "name": "ТЧСЖ ALP JAMOL KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ ALP JAMOL KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f5c9795c59cd8eb27e92bd668a61e7b4f9221154.png",
                "date": 1587466238493,
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
                            "name": "Address",
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
                        }
                    ]
                },
                "keywords": [
                    "тчсж",
                    "жамол сервис",
                    "комуналка"
                ],
                "myhome": true,
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f51db075099c11c41f367de",
                "paycom_id": "5f50eae61d8bbeb111fbb3e8",
                "name": "ТЧСЖ \"STELLA KOMMUNAL\"",
                "organization": "ННО «ТЧСЖ \"STELLA KOMMUNAL\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6a8062846ed0def086bc4d084e94f001e989215b.png",
                "date": 1599200007052,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "mont",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "stella kommunal",
                    "стелла",
                    "коммунальные услуги",
                    "ком услуги",
                    "ТЧСЖ \"STELLA KOMMUNAL\"",
                    "STELLA KOMMUNAL",
                    "STELLA",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fa38c158b38a19f0b3996e6",
                "paycom_id": "5f6348750358bfd7352f44f4",
                "name": "BILIMDON KOMMUNALCHI",
                "organization": "ТЧСЖ «BILIMDON KOMMUNALCHI SHIRKATI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/acdbfda3b421a76fc5339d5b5a4bb1ed1c7b3a7f.png",
                "date": 1604553749532,
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
                            "name": "Full_name",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "билимдон коммуналчи",
                    "коммунальные услуги",
                    "bilimdon kommunalchi",
                    "kommunal xizmatlar",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fc9e21958bb9fee75c0e759",
                "paycom_id": "5fbcec75c3cb77307f2f41b3",
                "name": "АНХОР СОХИЛ  СЕРВИС",
                "organization": "ТЧСЖ «АНХОР СОХИЛ  СЕРВИС»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d83756ab95f1989e4ee1a7016ed5ea0fd95bbcb2.png",
                "date": 1607066137207,
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
                            "name": "Period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "анхор сохил сервис",
                    "anhor sohil",
                    "тчсж",
                    "тсж",
                    "коммуналка"
                ],
                "myhome": true,
                "weight": 1.876851690147176e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "608b9ec9b8d597ed134d9c66",
                "paycom_id": "608b9e0c0670cb7d044c2107",
                "name": "LOCHIN KOMMUNAL TA`MIR",
                "organization": "ТЧСЖ «LOCHIN KOMMUNAL TA`MIR ШИРКАТИ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/ba7f5b3d8241c299a84fe9c36f45395a13dd7490.png",
                "date": 1619762889509,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома и адрес",
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
                            "title": "Номер квартиры",
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
                    "kamunal",
                    "камуналка",
                    "газ",
                    "вода",
                    "квартира",
                    "дом",
                    "комуналка",
                    "лочин комунал",
                    "тсж",
                    "тчсж"
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
                "_id": "619f74db3605ed2b7405bdd0",
                "paycom_id": "619f743cbede17c4c1b71cb3",
                "name": "TOZA KOMMUNALCHI",
                "organization": "ТЧСЖ «TOZA KLOMMUNALCHI XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e62e3a1241c0784c0782d0182aee68c111624eed.png",
                "date": 1637840091251,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "1 ойлик",
                                    "value": "onemonth",
                                    "title": "1 ойлик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "3 ойлик",
                                    "value": "threemonth",
                                    "title": "3 ойлик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "6 ойлик",
                                    "value": "sixmonth",
                                    "title": "6 ойлик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "12 ойлик",
                                    "value": "twelvemonth",
                                    "title": "12 ойлик",
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
                    "тоза коммунальчи",
                    "тсж",
                    "тчсж"
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
                "_id": "620b9524effdccf2091d3134",
                "paycom_id": "620b947b0f3adcb27ce87e4a",
                "name": "SHINAM XONADON",
                "organization": "ООО «\"SHINAM XONADON SERVIZ\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/afb8a0b9098956c850077750a60cec05ef94b4b6.png",
                "date": 1644926244717,
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
                            "name": "home",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "shinam xonadon",
                    "шинам хаус",
                    "shinam xonadon serviz"
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
                "_id": "64364556edabbd6b24e6e48d",
                "paycom_id": "6436417a8ee89704b522b31a",
                "name": "Sir-Must",
                "organization": "ООО «\"MAQSAD VA ISLOH\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/094f5e3d15e7d76df7f46fe5f2d9e6b97d60bd6a.png",
                "date": 1681278294554,
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Взносы за жилые квартиры",
                                    "value": "contributions",
                                    "title": "Взносы за жилые квартиры",
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
                            "name": "cottage_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер коттеджа",
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
                    "MAQSAD VA ISLOH",
                    "maqsad",
                    "isloh",
                    "komunal",
                    "комунал",
                    "максад ва ислох",
                    "ьфйыфв мф шыдщр",
                    "sir must",
                    "сир муст",
                    "sir-must"
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
                "_id": "644bbcaa5a26a8829b8650cc",
                "paycom_id": "644bb55e6fd382828be26e25",
                "name": "KA-FAYZ",
                "organization": "ТЧСЖ «\"KA-FAYZ\" JB»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9669b707e2b7ee0033b238a72ffa54e5983c3405.png",
                "date": 1682685098375,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ka fayz",
                    "kafayz",
                    "ka-fayz",
                    "ка файз",
                    "лф-афня"
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
                "_id": "64d6308971e0baa108e0c3ff",
                "paycom_id": "64d62fbaa8a1f5ec97d17e7b",
                "name": "Yong'indan saqlash nazoratchilari",
                "organization": "ООО «\"YONG`INDAN SAQLASH NAZORATCHILARI\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2a42f2c1363481f2d494788374de43423b3aafe9.png",
                "date": 1691758729345,
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
                            "name": "town",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Город",
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
                            "name": "rayon",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Район",
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
                            "name": "homeadress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Домашний адрес",
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
                    "YONG`INDAN SAQLASH NAZORATCHILARI",
                    "YONGINDAN SAQLASH NAZORATCHILARI",
                    "YONG`IN SAQLASH NAZORATCHILARI"
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
                "_id": "65cc6b14a37b40d4f6f53879",
                "paycom_id": "65cc6ac43c319dec9d8aedcb",
                "name": "OQIBAT MARKAZ-1",
                "organization": "ТЧСЖ «\"OQIBAT MARKAZ-1\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b635da10542a042463eb6e64a58b6dc73d104758.png",
                "date": 1707895572844,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "OQIBAT MARKAZ-1",
                    "OQIBAT",
                    "коммуналка "
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
                "_id": "5bff91d494b8d32c605b9419",
                "paycom_id": "5bff90d294b8d32c605b9417",
                "name": "Responsible Care",
                "organization": "ООО «Responsible Care»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/responsible-care.png",
                "date": 1543475663845,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "personal_account",
                            "title": "Лицевой счёт",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[0-9]{5,15}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "address",
                            "title": "Адрес",
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
                    "куызщтышиду сфку",
                    "респонсабл кэир",
                    "респонсибле каре"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d8868a960753c412ac3ae55",
                "paycom_id": "5d8868066e4b7d657344f592",
                "name": "ТСЧЖ ЕТАКЧИ КОММУНАЛ ПЛЮС",
                "organization": "ООО «ТЧСЖ ЕТАКЧИ КОММУНАЛ ПЛЮС»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2cc344d29a1f5ebee74e7d8883dd8da1505f94e7.png",
                "date": 1569220777498,
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
                            "name": "house",
                            "placeholder": "",
                            "title": "Номер дома",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "flat",
                            "placeholder": "",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "Full_name",
                            "placeholder": "",
                            "title": "Ф.И.О.",
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
                    "kommunal",
                    "коммуналка",
                    "тсчж",
                    "ЕТАКЧИ КОММУНАЛ",
                    "etakchi kommunal"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5dd641107cec93e81bbb9f46",
                "paycom_id": "5dce51d5859125662514bc7b",
                "name": "ТЧСЖ АРЕНА ПЛЮС",
                "organization": "ООО «ТЧСЖ АРЕНА ПЛЮС»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/21bbdc6ea9cb7094b9edc66aac469ed3eed58cee.png",
                "date": 1574322448739,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "flat",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тчсж",
                    "арена",
                    "плюс",
                    "ТЧСЖ АРЕНА ПЛЮС",
                    "коммуналка",
                    "kommunal"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5eea165b343eb86f54d33edd",
                "paycom_id": "5eea136f4ecf0d571ed7f485",
                "name": "ТЧСЖ Турон Коммунал Лидер",
                "organization": "ННО «ТЧСЖ Турон Коммунал Лидер»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/3c1880e6d8eecead7f24de280e0f98849121c763.png",
                "date": 1592399451279,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "flat_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "турон коммунал лидер",
                    "тчсж",
                    "турон коммунал лидер",
                    "turon komunal lider"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f296508226cb81a0dbc0a2a",
                "paycom_id": "5f2906b6669fbc8013aa5f2e",
                "name": "Юлдуз коммунал сервис",
                "organization": "ООО «ТЧСЖ \"Юлдуз коммунал сервис\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/177959e13d7a7d83f35334a552ffc6f599c5ca16.png",
                "date": 1596548360685,
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
                            "title": "Номер дома и кв",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "газ",
                    "камуналка",
                    "камуналка",
                    "мусор"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f2a5331226cb81a0dbc0a60",
                "paycom_id": "5f2a5155c8cb4c256f9aaf25",
                "name": "ТЧСЖ \"Шерик-Сервис\"",
                "organization": "ООО «Sherik servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/481231158fd03b6ce8e8ef9030813c3e72da7615.png",
                "date": 1596609329703,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "камуналка",
                    "газ",
                    "вода",
                    "мусор",
                    "свет"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fa281a98b38a19f0b3996a1",
                "paycom_id": "5f634a520358bfd7352f452d",
                "name": "ТЧСЖ  «АЪЛО КОММУНАЛЧИ СЕРВИС»",
                "organization": "ТЧСЖ «A`LO KOMMUNALCHI SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4991e24228eb523775532caffb216a55cf71d695.png",
                "date": 1604485545628,
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
                            "name": "Full_name",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ало коммуналчи сервис",
                    "alo kommunalchi servis",
                    "kommunal xizmatlari",
                    "коммунальные услуги",
                    "тсж",
                    "тчсж",
                    "kommunal"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "601d1af684bdb89f3c127c14",
                "paycom_id": "601be8f9c16ad418fad821f2",
                "name": "MUZA KOMFORT",
                "organization": "ТЧСЖ «\"MUZA-KOMFORT\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cc798d4bd6bd90f05da4020c32faebb727bd11ff.png",
                "date": 1612520182186,
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
                            "name": "Street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
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
                            "name": "Number_house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Number_of_flat",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "muza komfort",
                    "муза комфорт",
                    "муса",
                    "муза",
                    "ьгяф лщьащке"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6038ffa0fde4bab75277dd19",
                "paycom_id": "6038ff22b359be6e83b46da8",
                "name": "PARKENT OBOD-GROUP",
                "organization": "ООО «ООО \"PARKENT OBOD-GROUP\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/72f2aedab0141318ac4b694a6ca4f6805be37774.png",
                "date": 1614348192875,
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
                        },
                        {
                            "content": "text",
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
                            "type": "select",
                            "values": [
                                {
                                    "name": "ул.Мухаммад-Юсуф",
                                    "value": "1",
                                    "title": "ул.Мухаммад-Юсуф",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Промышленная/Буз 1 тор",
                                    "value": "2",
                                    "title": "ул.Промышленная/Буз 1 тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Мирзо-Улугбек",
                                    "value": "3",
                                    "title": "ул.Мирзо-Улугбек",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Бузбозор",
                                    "value": "4",
                                    "title": "ул.Бузбозор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Олмачи",
                                    "value": "5",
                                    "title": "ул.Олмачи",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Демократическая / Бузбозор тор",
                                    "value": "6",
                                    "title": "ул.Демократическая / Бузбозор тор",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Бий",
                                    "value": "7",
                                    "title": "ул.Бий",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ул.Буз бозор 7",
                                    "value": "8",
                                    "title": "ул.Буз бозор 7",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ул.Паркент",
                                    "value": "9",
                                    "title": "Ул.Паркент",
                                    "filter": null,
                                    "description": null
                                }
                            ],
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "select",
                            "values": [
                                {
                                    "name": "№ 41",
                                    "value": "01",
                                    "title": "№ 41",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 42",
                                    "value": "02",
                                    "title": "№ 42",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 42А",
                                    "value": "03",
                                    "title": "№ 42А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 43",
                                    "value": "04",
                                    "title": "№ 43",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 43А",
                                    "value": "05",
                                    "title": "№ 43А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 44",
                                    "value": "06",
                                    "title": "№ 44",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 44А",
                                    "value": "07",
                                    "title": "№ 44А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 45",
                                    "value": "08",
                                    "title": "№ 45",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 45А",
                                    "value": "09",
                                    "title": "№ 45А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 46",
                                    "value": "010",
                                    "title": "№ 46",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 46А",
                                    "value": "011",
                                    "title": "№ 46А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 47",
                                    "value": "012",
                                    "title": "№ 47",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 48",
                                    "value": "013",
                                    "title": "№ 48",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 48А",
                                    "value": "014",
                                    "title": "№ 48А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 49",
                                    "value": "015",
                                    "title": "№ 49",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 50",
                                    "value": "016",
                                    "title": "№ 50",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 50А",
                                    "value": "017",
                                    "title": "№ 50А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 51",
                                    "value": "018",
                                    "title": "№ 51",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 57",
                                    "value": "019",
                                    "title": "№ 57",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 57А",
                                    "value": "020",
                                    "title": "№ 57А",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 57Б",
                                    "value": "021",
                                    "title": "№ 57Б",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 57В",
                                    "value": "022",
                                    "title": "№ 57В",
                                    "filter": "1",
                                    "description": null
                                },
                                {
                                    "name": "№ 1",
                                    "value": "023",
                                    "title": "№ 1",
                                    "filter": "2",
                                    "description": null
                                },
                                {
                                    "name": "№ 3",
                                    "value": "024",
                                    "title": "№ 3",
                                    "filter": "2",
                                    "description": null
                                },
                                {
                                    "name": "№ 5",
                                    "value": "025",
                                    "title": "№ 5",
                                    "filter": "2",
                                    "description": null
                                },
                                {
                                    "name": "№ 9",
                                    "value": "026",
                                    "title": "№ 9",
                                    "filter": "2",
                                    "description": null
                                },
                                {
                                    "name": "№ 11",
                                    "value": "027",
                                    "title": "№ 11",
                                    "filter": "2",
                                    "description": null
                                },
                                {
                                    "name": "№ 34",
                                    "value": "028",
                                    "title": "№ 34",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 36",
                                    "value": "029",
                                    "title": "№ 36",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 40",
                                    "value": "030",
                                    "title": "№ 40",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 42",
                                    "value": "031",
                                    "title": "№ 42",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 43",
                                    "value": "032",
                                    "title": "№ 43",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 44",
                                    "value": "033",
                                    "title": "№ 44",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 45",
                                    "value": "034",
                                    "title": "№ 45",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 45А",
                                    "value": "035",
                                    "title": "№ 45А",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 45Б",
                                    "value": "036",
                                    "title": "№ 45Б",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 45В",
                                    "value": "037",
                                    "title": "№ 45В",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 46",
                                    "value": "038",
                                    "title": "№ 46",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 48",
                                    "value": "039",
                                    "title": "№ 48",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 49",
                                    "value": "040",
                                    "title": "№ 49",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 50",
                                    "value": "041",
                                    "title": "№ 50",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 51",
                                    "value": "042",
                                    "title": "№ 51",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 52",
                                    "value": "043",
                                    "title": "№ 52",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 53",
                                    "value": "044",
                                    "title": "№ 53",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 54",
                                    "value": "045",
                                    "title": "№ 54",
                                    "filter": "3",
                                    "description": null
                                },
                                {
                                    "name": "№ 8",
                                    "value": "046",
                                    "title": "№ 8",
                                    "filter": "4",
                                    "description": null
                                },
                                {
                                    "name": "№ 10",
                                    "value": "047",
                                    "title": "№ 10",
                                    "filter": "4",
                                    "description": null
                                },
                                {
                                    "name": "№ 12",
                                    "value": "048",
                                    "title": "№ 12",
                                    "filter": "4",
                                    "description": null
                                },
                                {
                                    "name": "№ 14",
                                    "value": "049",
                                    "title": "№ 14",
                                    "filter": "4",
                                    "description": null
                                },
                                {
                                    "name": "№ 10А",
                                    "value": "050",
                                    "title": "№ 10А",
                                    "filter": "5",
                                    "description": null
                                },
                                {
                                    "name": "№ 26",
                                    "value": "051",
                                    "title": "№ 26",
                                    "filter": "5",
                                    "description": null
                                },
                                {
                                    "name": "№ 15",
                                    "value": "052",
                                    "title": "№ 15",
                                    "filter": "6",
                                    "description": null
                                },
                                {
                                    "name": "№ 42А",
                                    "value": "053",
                                    "title": "№ 42А",
                                    "filter": "7",
                                    "description": null
                                },
                                {
                                    "name": "№ 50",
                                    "value": "054",
                                    "title": "№ 50",
                                    "filter": "7",
                                    "description": null
                                },
                                {
                                    "name": "№ 36.",
                                    "value": "055",
                                    "title": "№ 36",
                                    "filter": "8",
                                    "description": null
                                },
                                {
                                    "name": "№21",
                                    "value": "057",
                                    "title": "№21",
                                    "filter": "9",
                                    "description": null
                                },
                                {
                                    "name": "№ 203",
                                    "value": "058",
                                    "title": "№ 203",
                                    "filter": "9",
                                    "description": null
                                },
                                {
                                    "name": "№ 241",
                                    "value": "059",
                                    "title": "№ 241",
                                    "filter": "9",
                                    "description": null
                                },
                                {
                                    "name": "№ 243",
                                    "value": "060",
                                    "title": "№ 243",
                                    "filter": "9",
                                    "description": null
                                },
                                {
                                    "name": "№22",
                                    "value": "056",
                                    "title": "№22",
                                    "filter": "9",
                                    "description": null
                                },
                                {
                                    "name": "№199",
                                    "value": "061",
                                    "title": "№199",
                                    "filter": "9",
                                    "description": null
                                }
                            ],
                            "validation": null,
                            "prefix": null,
                            "require": "street",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "parkent obod-group",
                    "parkent obod group",
                    "паркент обод груп",
                    "паркент абад груп"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60422d962d127859d8d43068",
                "paycom_id": "60421b13305a844d6212a0c0",
                "name": "NILUFAR KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «NILUFAR KOMMUNAL SERVIS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6291bc491a651f5f61bcb95e5dd21abad053a462.png",
                "date": 1614949782466,
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
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и № квартала",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "тчсж тсчж",
                    "камуналка",
                    "квартира дом",
                    "KOMMUNAL SERVIS",
                    "нилюфар коммунал сервис"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60619dc609f72b00dba00cbe",
                "paycom_id": "60619cd973214c962baee331",
                "name": "MODERN COMMUNAL GROUP",
                "organization": "ТЧСЖ «MODERN COMMUNAL GROUP»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1db9d8150cd3d800e60b6e0f6be6fd73bea2c3cf.png",
                "date": 1617010118626,
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Billing_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Расчетный период",
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
                    "камуналка",
                    "дом",
                    "модерн коммунал груп",
                    "кварплата",
                    "мадерн",
                    "MADERN",
                    "комунальные услуги",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "607fc53db8d597ed134d921e",
                "paycom_id": "607fc2b35cefd1b5a2508ddb",
                "name": "\"PINK-SUNRISE\" 8-ДОМ",
                "organization": "ТЧСЖ «PINK-SUNRISE UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e1bbd3dfa704f017940123200d37ff2805d30a0c.png",
                "date": 1618986301001,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "камуналка",
                    "электроэнергия",
                    "газ",
                    "свет",
                    "мусор",
                    "вода",
                    "отопление",
                    "ТЧСЖ",
                    "тсж"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60a73b21b8d597ed134dab6a",
                "paycom_id": "60a652177852bd0ebce1f191",
                "name": "UCHTEPA KELAJAK SERVIS",
                "organization": "ТЧСЖ «UCHTEPA KELAJAK SERVIS XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b1cd770359af024a5692ad3032ebb04ad0c3cbdd.png",
                "date": 1621572385363,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "камуналка",
                    "kamunal",
                    "дом",
                    "квартира",
                    "кварплата",
                    "жильё",
                    "uy",
                    "xona"
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
                "_id": "60ffe06d12950f485b3b0f6f",
                "paycom_id": "60f95f177247f75328260357",
                "name": "ANTIQA VIP SERVIS",
                "organization": "ТЧСЖ «ANTIQA VIP SERVIS  XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d5dbe148fb96d9d64cf03892c9a31639107dcb90.png",
                "date": 1627381869137,
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
                            "name": "account",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за период",
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
                    "камуналка",
                    "антика",
                    "вип",
                    "сервис",
                    "тсж",
                    "тчсж",
                    "ANTIQA VIP SERVIS"
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
                "_id": "61b73fc0352acb4f0eed32cf",
                "paycom_id": "61b73888204c85a50a884489",
                "name": "BOG'I BO'STON KOMMUNAL SERVIS ",
                "organization": "ТЧСЖ «BOG'I BO'STON KOMMUNAL SERVIS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/0be52a43f9f07625551bdb964e2cb5dc0880e7c2.png",
                "date": 1639399360788,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "BOG'I BO'STON KOMMUNAL SERVIS",
                    "KOMMUNAL",
                    "коммуналка",
                    "тсж",
                    "тчсж"
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
                "_id": "61c31d725098a0cc1ad46172",
                "paycom_id": "61c31cbf69d939457396ea85",
                "name": "ПАХТАЗОР ИШОНЧ КОММУНАЛ",
                "organization": "ООО «\"PAXTAZOR ISHONCH KOMMUNAL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/11499028f9e1bedd6bcc179a1e6a4784735de0ce.png",
                "date": 1640177010739,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тчсж",
                    "тсж",
                    "pahtazor ishonch kommunal"
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
                "_id": "5f43670b3813f7df2e071ae3",
                "paycom_id": "5f3ce6aa41c04555482e0e86",
                "name": "ХАЛК ХИЗМАТИДА",
                "organization": "ТЧСЖ «ХАЛК ХИЗМАТИДА»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dcaf698af0c5826e6107f749d5d6d90837ae30c9.png",
                "date": 1598252811666,
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
                            "name": "Address",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "prefix": {
                                "type": "static",
                                "value": "+998",
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
                    "ком услуги",
                    "коммунальные услуги",
                    "kommunal xizmatlar",
                    "халк хизматида",
                    "НА СЛУЖБЕ НАРОДА",
                    "тсж",
                    "тчсж"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f48e7265099c11c41f36567",
                "paycom_id": "5f48e6501d8bbeb111fb2b02",
                "name": "Фердавс сервис коммунал",
                "organization": "ООО «Firdavs servis kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/fdd8f7d0f9d10c6a48ed86d7c676b6e0b128bff6.png",
                "date": 1598613286081,
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
                            "name": "number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома и квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "услуги",
                    "комму",
                    "фердавс",
                    "ferdavs",
                    "Athlfdc cthdbc rjvveyfk"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fae29218b38a19f0b399b9c",
                "paycom_id": "5facd83fe938edd006175670",
                "name": "ISTIQBOL AVENUE",
                "organization": "ТЧСЖ «ISTIQBOL AVENUE XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c47d70f1d49342ed0f2682c2d18f18ceeb28a004.png",
                "date": 1605249313369,
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
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "house",
                            "placeholder": "",
                            "title": "Номер дома",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "number",
                            "name": "apartment",
                            "placeholder": "",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": "^([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-2]{1,2})$",
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "area",
                            "title": "Общая площадь квартиры",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "152.68",
                                    "title": "152.68",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "154.56",
                                    "title": "154.56",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "115.17",
                                    "title": "115.17",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "181.52",
                                    "title": "181.52",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "93.76",
                                    "title": "93.76",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "170.82",
                                    "title": "170.82",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "176.06",
                                    "title": "176.06",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "98.21",
                                    "title": "98.21",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "98.90",
                                    "title": "98.90",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "101.06",
                                    "title": "101.06",
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
                    "istiqbol",
                    "истыкбол",
                    "avenue",
                    "тсж",
                    "тчсж",
                    "коммуналка"
                ],
                "myhome": true,
                "weight": 9.38425845073588e-8,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6104093b12950f485b3b11fa",
                "paycom_id": "60f50b841eea9c5f6d8fe10f",
                "name": "Термиз темир йул сув таъминоти",
                "organization": "ООО «Термиз темир йул сув таъминоти»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1145bab1e2216531ecdb01f99dd69e820501b50f.png",
                "date": 1627654459591,
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
                            "title": "Лицевой счет",
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
                    "Термиз темир йул сув таъминоти",
                    "Termiz temir yol suv taminoti",
                    "Коммунальные услуги",
                    "Kommunal xizmatlar",
                    "железная дорога"
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
                "_id": "64afa7255b17f8b641a8f5e5",
                "paycom_id": "64afa641e4e564c98284f36b",
                "name": "SERGEY KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ»SERGEY KOMMUNAL SERVIS”»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d3f97f3bdecb16b46935bbe499c5b9f0d7412f5a.png",
                "date": 1689233189497,
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
                            "title": "Адрес дом/кв",
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
                    "SERGEY KOMMUNAL SERVIS",
                    "СЕРГЕЙ КОММУНАЛЬНАЯ СЛУЖБА",
                    "SERGEY KOMUNAL XIZMAT"
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
                "_id": "65570cf62810c55017037129",
                "paycom_id": "65570cc65a1dc3947c8c924c",
                "name": "OOO NRG SERVICE FOR ALL",
                "organization": "ООО «\"NRG SERVICE FOR ALL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/964f830351d4b1a72b3165e1f4b930b418941325.png",
                "date": 1700203766874,
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
                            "title": "ФИО (Собственника)",
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
                            "name": "type_service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Вид услуги",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Взносы за жилые квартиры",
                                    "value": "1",
                                    "title": "Взносы за жилые квартиры",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за коммерческие помещения",
                                    "value": "2",
                                    "title": "Взносы за коммерческие помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы за кладовые помещения",
                                    "value": "3",
                                    "title": "Взносы за кладовые помещения",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Взносы на содержание подземного паркинга",
                                    "value": "4",
                                    "title": "Взносы на содержание подземного паркинга",
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
                            "name": "block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер блока",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН",
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
                    "NRG Hayot",
                    "NRG",
                    "НРГ хает",
                    "NRG хает"
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
                "_id": "658184d0d857dfafe0e9682a",
                "paycom_id": "658184a95c8188fb6e9052c7",
                "name": "\"CHINOR PBK\" MCHJ",
                "organization": "ООО «\"CHINOR PBK\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/543748a472dba4d558fe1db589d5a845693a418c.png",
                "date": 1702986960716,
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
                            "name": "city_order",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Город",
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
                            "name": "name_commercial",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "название ком.услуги",
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
                            "name": "personal_account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "личный счет",
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
                    "CHINOR PBK",
                    "чинор рбк",
                    "чинор рвк"
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
                "_id": "65cdf333a37b40d4f6f53f3e",
                "paycom_id": "65cdf2e43c319dec9d8b17da",
                "name": "SAMARALI BOSHQARUV TIZIMI",
                "organization": "ТЧСЖ «\"SAMARALI BOSHQARUV TIZIMI\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cb18626658f1edebcdf2d614acc89bdd0ae0f007.png",
                "date": 1707995955358,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "Samarali Boshqaruv Tizimi ",
                    "ТЧСЖ «\"SAMARALI BOSHQARUV TIZIMI\" UJMSH»",
                    "ТЧСЖ "
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
                "_id": "5dcce95de84c43916115bdc9",
                "paycom_id": "5da9aa407a1066cc7fe92f69",
                "name": "ТЧСЖ ХАМЖИХАТ МЕХНАТ",
                "organization": "ООО «ТЧСЖ ХАМЖИХАТ МЕХНАТ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/3651daf5bb5bdb344391dab5e690fe842aa73a10.png",
                "date": 1573710173305,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Flat_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                        }
                    ]
                },
                "keywords": [
                    "коммуналка",
                    "тчсж",
                    "kommunal",
                    "ТЧСЖ ХАМЖИХАТ МЕХНАТ"
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
                "_id": "5df75c902239436141525e4e",
                "paycom_id": "5df75bab7e2d6cf23ec1a712",
                "name": "Arnasoy Kommunalchi ",
                "organization": "ООО «ТЧСЖ  Arnasoy Kommunalchi»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/390eec81f2249b2ee95d40a3163fabd1234ea409.png",
                "date": 1576492176521,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "оплата коммунальных",
                    "оплата коммунальных услуг",
                    "коммунальные услуги",
                    "kommunal to'lovlar",
                    "kommunal xizmatlar",
                    "Arnasoy Kommunalchi",
                    "Arnasoy"
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
                "_id": "5df75ffb2239436141525e55",
                "paycom_id": "5df75f1c7e2d6cf23ec1a753",
                "name": "Arnasoy Service ",
                "organization": "ООО «ТЧСЖ Arnasoy Service»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/81f0a64e765712090217a31d004769b330601a50.png",
                "date": 1576493051435,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "комуналка",
                    "komunal",
                    "comunal",
                    "арнасой",
                    "arnasoy сервис",
                    "Arnasoy"
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
                "_id": "5e4e256bd31e40c606351ec5",
                "paycom_id": "62d7ac0939c675be34e2af7b",
                "name": "SAROY INVEST KOMMUNAL",
                "organization": "ООО «ТЧСЖ SAROY ALGORITM KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/56ea27514da085a9c1cf4b0d644dc1656aa87302.png",
                "date": 1582179691906,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                    "коммунальные услуги",
                    "saroy",
                    "algoritm",
                    "kommunal"
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
                "_id": "5e9eaaf4fdd5106671b635b4",
                "paycom_id": "5e9ea5f903f443e24b1b9b76",
                "name": "ТЧСЖ BARNO-YANGI ZAMON",
                "organization": "ООО «ТЧСЖ BARNO-YANGI ZAMON»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/755084106876032fca2fd81a9061646cb7285d99.png",
                "date": 1587456756655,
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
                            "name": "address",
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
                        }
                    ]
                },
                "keywords": [
                    "kommunal to'lovlar onlayn",
                    "kommunal to'lov onlayn",
                    "оплата тчсж",
                    "kommunal to'lov",
                    "оплата коммунальных",
                    "оплата коммуналки"
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
                "_id": "5e9ec837fdd5106671b635d2",
                "paycom_id": "6076c998e928245e531cc3ee",
                "name": "ТЧСЖ КАТТА ЧАРХ КАМОЛОН",
                "organization": "ООО «ТСЖ КАТТА ЧАРХ КАМОЛОН»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/871ced3c5edc1c77700eaf29624f3415a3ced290.png",
                "date": 1587464247269,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
                        "min": 1000,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "коммунальные",
                    "kommunal",
                    "katta",
                    "катта",
                    "камолон"
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
                "_id": "5e9eccf4fdd5106671b635dc",
                "paycom_id": "5e9ecc3b03f443e24b1ba1ee",
                "name": "ТЧСЖ DAVID KOMMUNALCHI SERVIS",
                "organization": "ООО «ТЧСЖ DAVID KOMMUNALCHI SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/59f63911eb8f2915e7327498e5bc7d09e955cdf0.png",
                "date": 1587465460029,
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
                            "name": "Address",
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
                        }
                    ]
                },
                "keywords": [
                    "тчсж",
                    "комуналка",
                    "давид сервис"
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
                "_id": "5ea2c881fdd5106671b63748",
                "paycom_id": "5ea2c80182f1d22d6f30932a",
                "name": "ТЧСЖ ZAFAR ALI",
                "organization": "ООО «ТЧСЖ ZAFAR ALI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bc49a5cf7d1a11ca37a802b082200b0312d0bc65.png",
                "date": 1587726465794,
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
                            "name": "address",
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
                        }
                    ]
                },
                "keywords": [
                    "тчсж",
                    "zafar ali",
                    "комунальные услуги",
                    "комуналка"
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
                "_id": "5eb2a784fdd5106671b63bc1",
                "paycom_id": "5eb2a74764ed91d52c8d921f",
                "name": "ELMUROD KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ ELMUROD KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/cadff4c7eb30e53f7d546828f61ae9c02f88d278.png",
                "date": 1588766596887,
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
                            "name": "home_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "ap_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "коммунальные",
                    "ком услуги",
                    "elmurod",
                    "eks"
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
                "_id": "5eba9484fdd5106671b63dfd",
                "paycom_id": "5eb4f5d86420f3660dc7ea6a",
                "name": "Omad Kommunalchi Plyus",
                "organization": "ООО «ТЧСЖ Omad Kommunalchi Plyus»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5de32c151042c6c6265aac068c9fddfd270ce84d.png",
                "date": 1589286020312,
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
                            "name": "house_nuber",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "5 А",
                                    "value": "1",
                                    "title": "5 А",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "1",
                                    "value": "1",
                                    "title": "1",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "2",
                                    "value": "2",
                                    "title": "2",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "3",
                                    "value": "3",
                                    "title": "3",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "4",
                                    "value": "4",
                                    "title": "4",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "5",
                                    "value": "5",
                                    "title": "5",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "6",
                                    "value": "6",
                                    "title": "6",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "7",
                                    "value": "7",
                                    "title": "7",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "8",
                                    "value": "8",
                                    "title": "8",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "9",
                                    "value": "9",
                                    "title": "9",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "10",
                                    "value": "10",
                                    "title": "10",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "11",
                                    "value": "11",
                                    "title": "11",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "12",
                                    "value": "12",
                                    "title": "12",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "13",
                                    "value": "13",
                                    "title": "13",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "14",
                                    "value": "14",
                                    "title": "14",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "15",
                                    "value": "15",
                                    "title": "15",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "16",
                                    "value": "16",
                                    "title": "16",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "17",
                                    "value": "17",
                                    "title": "17",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "18",
                                    "value": "18",
                                    "title": "18",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "19",
                                    "value": "19",
                                    "title": "19",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "20",
                                    "value": "20",
                                    "title": "20",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "21",
                                    "value": "21",
                                    "title": "21",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "22",
                                    "value": "22",
                                    "title": "22",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "23",
                                    "value": "23",
                                    "title": "23",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "24",
                                    "value": "24",
                                    "title": "24",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "25",
                                    "value": "25",
                                    "title": "25",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "26",
                                    "value": "26",
                                    "title": "26",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "27",
                                    "value": "27",
                                    "title": "27",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "28",
                                    "value": "28",
                                    "title": "28",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "29",
                                    "value": "29",
                                    "title": "29",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "30",
                                    "value": "30",
                                    "title": "30",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "31",
                                    "value": "31",
                                    "title": "31",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "32",
                                    "value": "32",
                                    "title": "32",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "33",
                                    "value": "33",
                                    "title": "33",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "34",
                                    "value": "34",
                                    "title": "34",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "35",
                                    "value": "35",
                                    "title": "35",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "36",
                                    "value": "36",
                                    "title": "36",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "37",
                                    "value": "37",
                                    "title": "37",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "38",
                                    "value": "38",
                                    "title": "38",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "kommunal xizmatlar uchun to'lov",
                    "kommunal xizmatlar to'lov",
                    "omad kommunalchi plyus",
                    "omad",
                    "omad kommunalchi"
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
                "_id": "5ef45a33343eb86f54d34261",
                "paycom_id": "5ef45999b18e52dd0c1b162a",
                "name": "FAYZ SERVIS KOMMUNAL",
                "organization": "ООО «ТЧСЖ FAYZ SERVIS KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/96986c4d8d36f358e2a76c2e8bf72824d52df201.png",
                "date": 1593072179900,
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
                            "name": "Street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "газ",
                    "вода",
                    "электричество",
                    "мусор",
                    "камуналка",
                    "тсж",
                    "тчсж"
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
                "_id": "5f180c41343eb86f54d34a32",
                "paycom_id": "5f180bda55be89451f46c4ac",
                "name": "ТЧСЖ Sputnik Uyut Servis",
                "organization": "ООО «ТЧСЖ Sputnik Uyut Servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2795bb2fe8ba02340acc371964cde9a3183c8bd4.png",
                "date": 1595411521660,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "газ",
                    "мусор",
                    "свет",
                    "вода",
                    "тсж"
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
                "_id": "5f290cf6226cb81a0dbc09db",
                "paycom_id": "5f290c7937c4fb19003ffd0e",
                "name": "ТЧСЖ Туркистон уйим",
                "organization": "ТЧСЖ  Туркистон уйим",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f83a3783fd62ce60ed8540ece0a51258086ded97.png",
                "date": 1596525814793,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Филиал:",
                            "type": "select",
                            "values": [
                                {
                                    "name": "ТЧСЖ «Туркистон уйим»",
                                    "value": "01",
                                    "title": "ТЧСЖ «Туркистон уйим»",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ТЧСЖ «Туркистон уйим» Мирабад 6",
                                    "value": "02",
                                    "title": "ТЧСЖ «Туркистон уйим» Мирабад 6",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "validation": null,
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
                        },
                        {
                            "content": "text",
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома и кв",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "коммунальные",
                    "komunal",
                    "тчсж"
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
                "_id": "5f2964d0226cb81a0dbc0a28",
                "paycom_id": "5f2906ea669fbc8013aa5f37",
                "name": "Эммануил сервис люкс",
                "organization": "ООО «ТЧСЖ \"Эммануил сервис люкс\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/556488353bde9bb23bf6e96a80f8293215f4db2a.png",
                "date": 1596548304287,
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
                            "title": "ФИО",
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
                            "placeholder": "Adress",
                            "replace": "[ -]",
                            "title": "Номер дома и кв",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "газ",
                    "камуналка",
                    "вода",
                    "мусор"
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
                "_id": "5f2a626c226cb81a0dbc0a7e",
                "paycom_id": "61de9ec832a2c524185119d5",
                "name": "FAYZ MAKON SERVIS",
                "organization": "ТЧСЖ «FAYZ MAKON SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1d83f781e62ee03e1abe10402ab797d8808e7cfe.png",
                "date": 1596613228575,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "fayz makon servis",
                    "тчсж",
                    "ком услуги",
                    "коммунальные услуги",
                    "фаиз макон сервис"
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
                "_id": "5f2d4270226cb81a0dbc0b6a",
                "paycom_id": "5f29063b669fbc8013aa5f10",
                "name": "Джаз коммунал люкс",
                "organization": "ООО «ТЧСЖ \"Джаз коммунал люкс\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5cb4b5ec6a10ad5b1c853b95dccb3a2a085e42a8.png",
                "date": 1596801648619,
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
                            "title": "Номер дома и кв",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "камуналка",
                    "вода",
                    "мусор",
                    "тсж",
                    "тчсж"
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
                "_id": "5f3b9d26e3e90a894c5738e1",
                "paycom_id": "5f3b9cac41c04555482df5b7",
                "name": "ТЧСЖ INTIZOR TORTINCHI KAMMUNAL",
                "organization": "ООО «ТЧСЖ INTIZOR TORTINCHI KAMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/658899f9d65d596cba74df84c77a8195c59ed3cf.png",
                "date": 1597742374199,
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
                            "name": "array",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Масив",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тчсж",
                    "initizor tortinch kamunal",
                    "интизор тортынчи комунал",
                    "ТЧСЖ ИНТИЗОР ЧЕТВЕРТОЕ ОБЩЕСТВО"
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
                "_id": "5f3f6ce35d4618190d83e020",
                "paycom_id": "5f3f6c6a41c04555482e3e50",
                "name": "QORA-SU-KOMMUNAL",
                "organization": "ООО «ТЧСЖ QORA-SU KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e1d640c89003852856b320dfd905a7ca66a65c33.png",
                "date": 1597992163791,
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
                            "name": "array",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Массив",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "qora-su-kommunal",
                    "кора су комунал",
                    "тсж",
                    "тчсж",
                    "QORA SU KOMMUNAL",
                    "ЙЩКФ ЫГ ЛЩЬЬГТФД"
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
                "_id": "5f48a9df5099c11c41f364b3",
                "paycom_id": "5f48a9651d8bbeb111fb222f",
                "name": "Госпитальный сервис коммунал",
                "organization": "ООО «Gospitalniy servis kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2402280cddca6b924e76516560c43e07244eee74.png",
                "date": 1598597599744,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "госпитальный сервис коммунал",
                    "gospitalniy servis",
                    "kommunal",
                    "коммунальные услуги",
                    "Hospital service communal"
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
                "_id": "5f48aa5d5099c11c41f364b9",
                "paycom_id": "5f48a9df1d8bbeb111fb224c",
                "name": "Бригантина коммунал сервис",
                "organization": "ООО «Brigantina kommunal»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/366e2bc3093b7c151d6bea8e91a7e047c28f802d.png",
                "date": 1598597725898,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "aparnment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "бригантина коммунал сервис",
                    "brigantina kommunal",
                    "тчсж",
                    "Brigantine communal service"
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
                "_id": "5f48de655099c11c41f36538",
                "paycom_id": "5f48ddf71d8bbeb111fb29f1",
                "name": "Эксилим коммунал сервис",
                "organization": "ООО «Exilim kommunal servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5dfe2290c0c65415f1392cff182b6f5170a70d1d.png",
                "date": 1598611045004,
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
                            "name": "number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома и квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "ком услуги",
                    "комм",
                    "kommu",
                    "komu",
                    "'rcbkbv",
                    "эксилим",
                    "eksilim",
                    "тсж",
                    "тчсж"
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
                "_id": "5f6353f4f16460813551c277",
                "paycom_id": "5f61e63e3b4d6b155d730212",
                "name": "DO STLIK SARI UCH",
                "organization": "ТЧСЖ «DO STLIK SARI UCH UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/210e109a1a5552e81adb736e6b681cab2e362ab6.png",
                "date": 1600345076578,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "вода",
                    "газ",
                    "мусор",
                    "DO STLIK SARI UCH",
                    "DO STLIK SARI",
                    "тсж",
                    "тчсж"
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
                "_id": "5f8819f72af15d604f4c5d86",
                "paycom_id": "5f85956b0735b3601780b271",
                "name": "ALNAIR",
                "organization": "ТЧСЖ «\"ALNAIR\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b6084e1e9b9c9b2101191f4c7cbfc6c11e5c1772.png",
                "date": 1602755063336,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "alnair",
                    "алнаир",
                    "тчсж",
                    "alnair\" xujmsh",
                    "фдтфшк",
                    "тчсж alnair"
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
                "_id": "5fae813e8b38a19f0b399c19",
                "paycom_id": "5fae20b1e938edd006176dd2",
                "name": "GULZOR KOMMUNAL",
                "organization": "ТЧСЖ «GULZOR DARXON KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/89cacb28e6c224b9262b8cee158c9a8ed4c58cd9.png",
                "date": 1605271870002,
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
                            "name": "FULL_NAME",
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
                            "name": "HOME_NUMBER",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "НОМЕР ДОМА",
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
                            "name": "FLAT_NUMBER",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "НОМЕР КВАРТИРЫ",
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
                    "камуналка",
                    "свет",
                    "электроэнергия",
                    "газ",
                    "вода",
                    "тсж",
                    "тчсж",
                    "ПГДЯЩК ЛЩЬЬГТФД",
                    "kommunal"
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
                "_id": "6013f2b184bdb89f3c12779d",
                "paycom_id": "6013f1765a08a5dda944581e",
                "name": "YULIAN KOMMUNAL ",
                "organization": "ТЧСЖ «YULIAN KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/68dbcd56a81ecfa9ee15f0644918839495dcf1e8.png",
                "date": 1611920049027,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "appart",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "комм услуги",
                    "услуги",
                    "хизмат",
                    "xizmat",
                    "yulian",
                    "юлиан",
                    "тсж",
                    "тчсж"
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
                "_id": "6038f555fde4bab75277dcf0",
                "paycom_id": "6038f49fef2e572de933a17c",
                "name": "QORASUV OBOD GROUP",
                "organization": "ООО «ООО \"QOROSUV OBOD GROUP\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/62ef4ad90290b93e3a47b7e595a95b7cee664b37.png",
                "date": 1614345557460,
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
                            "title": "Ф,И.О.",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "qorasuv obod group",
                    "obod",
                    "komunal"
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
                "_id": "604090092d127859d8d42f40",
                "paycom_id": "603f3d1032b9d27ba076f3d4",
                "name": "RAYXON-KOMMUNAL",
                "organization": "ТЧСЖ «RAYXON-KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/3e55445d4a8b0707f3f4bf0b4456ce31b18df60b.png",
                "date": 1614843913910,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 10000000000,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "rayxon-kommunal",
                    "rayxonkommunal",
                    "rayxon",
                    "райхон",
                    "коммунал",
                    "kommunal",
                    "rayxon kommunal",
                    "rayxonkommunal",
                    "кфнчщт лщььгтфд"
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
                "_id": "60422c042d127859d8d4305c",
                "paycom_id": "6042295a305a844d6212a338",
                "name": "OBODLIK-KOMMUNALCHI",
                "organization": "ТЧСЖ «OBODLIK-KOMMUNALCHI XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/216c4e4105f9cc3cd97e75e7f33c84d39e13e286.png",
                "date": 1614949380578,
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
                            "name": "Address_block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер квартала",
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "obodlik-kommunalchi",
                    "obodlik kommunalchi",
                    "ободлик коммуналчи",
                    "ком услуги",
                    "щищвдшл лщььгтфдсрш",
                    "XUJMSh"
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
                "_id": "60422e442d127859d8d4306c",
                "paycom_id": "6042298d305a844d6212a33f",
                "name": "BETTA-KOMMUNALCHI SERVIS",
                "organization": "ТЧСЖ «BETTA-KOMMUNALCHI SERVIS XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/43e76b961c299bd61c9f0f076de9db4e5113fb70.png",
                "date": 1614949956534,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Address_block_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер квартала",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "камуналка",
                    "дом квартира",
                    "тчсж",
                    "бета",
                    "бетта",
                    "BETA",
                    "сервис",
                    "KOMMUNALCHI SERVIS"
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
                "_id": "60af9728b8d597ed134db2d7",
                "paycom_id": "60a646837852bd0ebce1ef47",
                "name": "DILKUSHO-UCHINCHI",
                "organization": "ТЧСЖ «DILKUSHO-UCHINCHI UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6418a7f1caef174e3288a143f5838ab9452a4191.png",
                "date": 1622120232335,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Оплата за период",
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
                    "dilkusho-uchinchi",
                    "дилькушо учинчи",
                    "тсж",
                    "тчсж",
                    "комунальные услуги",
                    "вшдлгырщ гсрштсрш",
                    "lbkmreij exbyxb"
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
                "_id": "60b8d48fb8d597ed134dba1b",
                "paycom_id": "60b5df637852bd0ebce30f65",
                "name": "THE MERIDIAN SERVICE",
                "organization": "ТЧСЖ «THE MERIDIAN SERVICE»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b143bfff59dbb2bad859721c71cef7511c0d505b.png",
                "date": 1622725775472,
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
                            "name": "Full_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ]+$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "меридиан сервис",
                    "коммунальные услуги",
                    "the meridian service",
                    "kommunal xizmatlar",
                    "meridian service"
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
                "_id": "60b9ca4bb8d597ed134dba8c",
                "paycom_id": "60b8c7240d44ad636479f11d",
                "name": "FINEKS SERVIS LYUKS KOMMUNAL",
                "organization": "ТЧСЖ «FINEKS SERVIS LYUKS KOMMUNAL UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8b63fc0e8a7f986b35a57c12087af51b638d17f9.png",
                "date": 1622788683224,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ\\s]+$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "content": "phone",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                    "тсж",
                    "fineks servis lyuks kommunal",
                    "финекс мервис коммунал",
                    "финекс мервис комунал",
                    "тчсж"
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
                "_id": "60ba0a5db8d597ed134dbb07",
                "paycom_id": "60b8d5c60d44ad636479f401",
                "name": "KENZOKI KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «KENZOKI KOMMUNAL SERVIS UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/50031650ff442c85e8e2685f71a56542af460633.png",
                "date": 1622805085527,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                    "кензоки коммунал сервис",
                    "коммунальные услуги",
                    "kenzoki kommunal servis",
                    "kommunal xizmatlar",
                    "rtypjrb rjvveyfk cthdbc",
                    "лутящлш лщььгтфд ыукмшы"
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
                "_id": "60ba0cdab8d597ed134dbb11",
                "paycom_id": "60b8d6d30d44ad636479f422",
                "name": "GO'ZAL IFTIHOR LYUKS SERVIS",
                "organization": "ТЧСЖ «GO'ZAL IFTIHOR LYUKS SERVIS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/37c87fbb4d9278af74dfb0435f3510cdec981f64.png",
                "date": 1622805722141,
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартипы",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                    "коммунальные услуги",
                    "гозал ифтихор люкс сервис",
                    "kommunal xizmatlar",
                    "gozal iftihor lyuks servis",
                    "пщяфд шаешрщк днглы ыукмшы",
                    "ujpfk banb[jh k.rc cthdbc"
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
                "_id": "60c362f7b8d597ed134dc1bf",
                "paycom_id": "60c3626c0d44ad63647ae290",
                "name": "IDEAL KOMMUNAL ",
                "organization": "ТЧСЖ «IDEAL KOMMUNAL  XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/0aa2072e35780a21612edd031caed1227217f00e.png",
                "date": 1623417591884,
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
                            "name": "adress",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер дома",
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
                            "name": "apartments",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "IDEAL KOMMUNAL",
                    "идеал коммунал",
                    "Коммунальные услуги",
                    "Kommunal xizmatlar"
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
                "_id": "60c74e0ab8d597ed134dc30a",
                "paycom_id": "60c3574d0d44ad63647ae0e7",
                "name": "TURON FAYZ KOMMUNAL",
                "organization": "ТЧСЖ «TURON FAYZ KOMMUNAL  XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c7c6b30a9db6183fbeb628216bc2822fa6eade6d.png",
                "date": 1623674378371,
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
                            "name": "address_housenumber",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Адрес и номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "TURON FAYZ KOMMUNAL",
                    "ТУРОН ФАЙЗ КОММУНАЛ",
                    "Коммунальные услуги",
                    "Kommunal xizmatlar"
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
                "_id": "60deac5316527be45e019ad3",
                "paycom_id": "60ddbc246508de80a7a058f3",
                "name": "CENTER IDEAL HOUSE",
                "organization": "ТЧСЖ «\"CENTER IDEAL HOUSE\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/b294adccd2130f67c4f2e5d34b068276baea0c1b.png",
                "date": 1625205843528,
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
                            "name": "Apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "CENTER IDEAL HOUSE",
                    "IDEAL HOUSE",
                    "сутеук швуфд рщгыу",
                    "центер идеал хаус"
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
                "_id": "61517396cfeca453b4a01145",
                "paycom_id": "614d6e4ead4fd8bbc30d0234",
                "name": "ALISHER NAVOIY IKKINCHI KOMMUNALCHI",
                "organization": "ТЧСЖ «ALISHER NAVOIY IKKINCHI KOMMUNALCHI XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/07e8ba5a01d2fd7c62ee75e4dec2d3215d4d3433.png",
                "date": 1632727958829,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "Apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "Payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "ALISHER NAVOIY IKKINCHI KOMMUNALCHI",
                    "фдшырук тфмщшн шллштсрш лщььгтфд",
                    "алишер навоий иккинчи коммунал"
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
                "_id": "615e9dd688800c96dd77f7df",
                "paycom_id": "615e935a7252cc4407d15b98",
                "name": "FAYZLI UY",
                "organization": "ООО «FAYZLI UY»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/56d7c57e58968a305a4639a1c3213f9ff3908a2d.png",
                "date": 1633590742449,
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
                            "name": "login",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер лицевого счета",
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
                    "fayzli",
                    "uy",
                    "файзли уй",
                    "FayzliUy"
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
                "_id": "6167e31f88800c96dd77fd3e",
                "paycom_id": "6167d64d6e71f7f8df53373c",
                "name": "YUZRABOT OBOT SERVIS",
                "organization": "ТЧСЖ «\"YUZRABOT OBOD SERVIS\" XUJMSh»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/193f21b1ad2c9ba80d27e64af7566c9d2d1ad74f.png",
                "date": 1634198303506,
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
                            "name": "House_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                            "name": "Month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "коммуналка",
                    "камуналка",
                    "юзработ",
                    "обот",
                    "сервис",
                    "тсж",
                    "тчсж"
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
                "_id": "6168221288800c96dd77fdfa",
                "paycom_id": "61681f5c6e71f7f8df534625",
                "name": "YALANG'OCH BIRINCH-KOMMUNAL",
                "organization": "ТЧСЖ «YALANG'OCH BIRINCH-KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/275a9e2141bfc9a3ed37ddaab5722aa69d41728a.png",
                "date": 1634214418627,
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
                            "name": "street_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Название улицы",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "коммуналка",
                    "YALANG'OCH BIRINCH-KOMMUNAL",
                    "оплата за коммунальные услуги",
                    "ялангоч",
                    "биринчи",
                    "yalangoch",
                    "YALANGOCH BIRINCH KOMMUNAL",
                    "НФДФТПЩСР ИШКШТСР ЛЩЬЬГТФД",
                    "YALANGOCH BIRINCH KOMMUNAL"
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
                "_id": "6168362288800c96dd77fe2b",
                "paycom_id": "6167daa56e71f7f8df533868",
                "name": "KAPITAL KOMFORT",
                "organization": "ООО «\"KAPITAL KOMFORT KOMMUNAL\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9434aa252fbf950cb78c9da8b871b1e9035babf4.png",
                "date": 1634219554692,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "тчсж",
                    "камуналка",
                    "дом",
                    "KOMMUNAL",
                    "капитал",
                    "комфорт",
                    "тсж",
                    "квартира",
                    "ЛФЗШЕФД ЛЩЬАЩКЕ",
                    "капитал комфорт"
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
                "_id": "619c9675bf10e032bf0ee8fa",
                "paycom_id": "619c95eb328ba73ec0fb1906",
                "name": "OLTIN TEPA KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «OLTIN TEPA KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4796aa5f0d58ba6c706ebabdcec22302b6f16542.png",
                "date": 1637652085142,
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
                            "title": "Номер телефона",
                            "type": "text",
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "prefix": {
                                "type": "static",
                                "value": "+998",
                                "output": false
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "37 Дом",
                                    "value": "37_house",
                                    "title": "37 Дом",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "38 Дом",
                                    "value": "38_house",
                                    "title": "38 Дом",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "OLTIN TEPA KOMMUNAL SERVIS",
                    "олтин тепа коммунал сервис",
                    "ЩДЕШТ ЕУЗФ ЛЩЬЬГТФД ЫУКМШЫ",
                    "jknby ntgf rjvveyfk cthdbc"
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
                "_id": "619f7b073605ed2b7405be39",
                "paycom_id": "619f7784bede17c4c1b71d5a",
                "name": "TOZA KOMMUNALCHI IKKI",
                "organization": "ТЧСЖ «TOZA KOMMUNALCHI IKKI XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/58522d8c4f6e4e8a91054ce0d645e3752e5f4dde.png",
                "date": 1637841671048,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "1 ойлик",
                                    "value": "onemonth",
                                    "title": "1 месяц",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "3 ойлик",
                                    "value": "threemonth",
                                    "title": "3 месяца",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "6 ойлик",
                                    "value": "sixmonth",
                                    "title": "6 месяцев",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "12 ойлик",
                                    "value": "twelvemonth",
                                    "title": "12 месяцев",
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
                    "чистый коммунальный два",
                    "kommunalchi ikki",
                    "тсж",
                    "тчсж"
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
                "_id": "619f832c3605ed2b7405be75",
                "paycom_id": "619f82f0bede17c4c1b71f43",
                "name": "OZODA UNIVERSAL KOMMUNALCHI",
                "organization": "ТЧСЖ «OZODA UNIVERSAL KOMMUNALCHI XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2be70fd20dc59a16621833b149a6a899d203b6b3.png",
                "date": 1637843756416,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "1 ойлик",
                                    "value": "onemonth",
                                    "title": "1 месяц",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "3 ойлик",
                                    "value": "threemonth",
                                    "title": "3 месяца",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "6 ойлик",
                                    "value": "sixmonth",
                                    "title": "6 месяцев",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "12 ойлик",
                                    "value": "twelvemonth",
                                    "title": "12 месяцев",
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
                    "озода универсальное коммунальное общество",
                    "тсж",
                    "тчсж"
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
                "_id": "61aeef02928187311ef8cc78",
                "paycom_id": "61aeec53f6071daf8dada30b",
                "name": "SIRENA KOMMUNAL ",
                "organization": "ТЧСЖ «SIRENA KOMUNAL XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8b0dd73ec5bbe7ddc68244b079a65495878135ff.png",
                "date": 1638854402328,
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
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "SIRENA KOMMUNAL",
                    "сирена коммунал",
                    "ЫШКУТФ ЛЩЬЬГТФД",
                    "cbhtyf rjvveyfk",
                    "коммунальные услуги",
                    "Kommunal xizmatlar",
                    "тсж",
                    "тчсж"
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
                "_id": "61aef15f928187311ef8cc8d",
                "paycom_id": "61aef0b6f6071daf8dada3c9",
                "name": "Nur Dostlik Kommunal",
                "organization": "ТЧСЖ «NUR-DOSDTLIK-KOMMUNAL UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/68de818c423c407fe49c944099fb089344090fdf.png",
                "date": 1638855007906,
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
                            "name": "street",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Улица",
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "Nur Dostlik Kommunal",
                    "Тгк Вщэыедшл Лщььгтфд",
                    "нур достлик коммунал",
                    "yeh ljcnkbr rjvveyfk",
                    "коммунальные услуги",
                    "Kommunal xizmatlar",
                    "Dostlik Kommunal"
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
                "_id": "61bc35095098a0cc1ad443c6",
                "paycom_id": "61bc34be204c85a50a88e8b9",
                "name": "YANGI ZAMON-QORASUV",
                "organization": "ООО «\"YANGI ZAMON-QORASUV\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/dda64e12eb8db06af54b96b41f540e47854ac966.png",
                "date": 1639724297324,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                    "kommunal",
                    "YANGI ZAMON-QORASUV",
                    "коммуналка",
                    "yangi zamon qorasuv",
                    "zamon qorasuv"
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
                "_id": "61c072a55098a0cc1ad44f48",
                "paycom_id": "61c07200204c85a50a899668",
                "name": "SHOHONA-SERVIS XIZMATI",
                "organization": "ООО «MCHJ SHOHONA-SERVIS XIZMAT»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/f7516a0bdaf520a0a8b6d13de300c84ab6ed2a81.png",
                "date": 1640002213033,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                    "SHOHONA-SERVIS XIZMATI",
                    "kommunal",
                    "коммуналка"
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
                "_id": "61c324d05098a0cc1ad462b4",
                "paycom_id": "61c3249869d939457396ec5b",
                "name": "Муборак Улкан Иншоат Бошкарув Сервис Компанияси",
                "organization": "ООО «ООО \"MUBORAK ULKAN INSHOOT BOSHQARUV SERVICE KOMPANIYASI\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/310e7253b0a43c6062b173f2936089886b9595f6.png",
                "date": 1640178896806,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartments",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "muborak ulkan inshoot boshqaruv service kompaniyasi",
                    "тсж",
                    "тчсж"
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
                "_id": "61f231e397451069bafadd94",
                "paycom_id": "61f2319dd4531dde9ea96c7f",
                "name": "BOG`ISHAMOL SEHRI SERVIS LYUKS",
                "organization": "ТЧСЖ «BOG`ISHAMOL SEHRI SERVIS LYUKS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/89549ae9d87c7498f0b716fe7e74ed427f8a5190.png",
                "date": 1643262435894,
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
                            "name": "home",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "BOGISHAMOL SEHRI SERVIS LYUKS",
                    "SERVIS LYUKS",
                    "тсж"
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
                "_id": "61fb8403b0159dc2d9e43bc4",
                "paycom_id": "61fb83a4fd67d1d0d77d6110",
                "name": "Garden Communal",
                "organization": "ООО «GARDEN COMMUNAL  XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d3188dc1f807033ed72a5a214a340326f9e29d99.png",
                "date": 1643873283172,
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период",
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
                    "Пфквут Сщььгтфд",
                    "гарден коммунал",
                    "ufhlty rjvveyfk"
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
                "_id": "61fbaa8ab0159dc2d9e43df8",
                "paycom_id": "61fbaa29fd67d1d0d77d6872",
                "name": "YANGI AXIL JAMOA BOSHQARUV KOMPANIYASI",
                "organization": "ООО «ООО \"YANGI AXIL JAMOA BOSHQARUV KOMPANIYASI\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/33ddea2cd18bc4d49689768efe9ff8b9fb7bdb93.png",
                "date": 1643883146975,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "коммунальные платежи",
                    "YANGI AXIL JAMOA BOSHQARUV KOMPANIYASI",
                    "kommunal"
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
                "_id": "622b54bd8ea3ca870dc5214e",
                "paycom_id": "622b5238d1e7c39136c96c32",
                "name": "BARAKA OBOD KOMMUNAL SERVIS",
                "organization": "ТЧСЖ «BARAKA OBOD KOMMUNAL SERVIS XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/d1377c42b0edabd39d791b18160c9cd688f4afeb.png",
                "date": 1647006909902,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "month",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Месяц",
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
                    "BARAKA OBOD KOMMUNAL SERVIS",
                    "барака обод коммунал сервис",
                    "KOMMUNAL xizmat"
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
                "_id": "5b1e6498423cde0ff0965a7b",
                "paycom_id": "5b1e6262423cde0ff0965a73",
                "name": "GLFVISA",
                "organization": "Единый визовый центр",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/good-luck-flight.png",
                "date": 1528718472918,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "customer_name",
                            "title": "Ф.И.О.",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[a-zA-zа-яА-ЯёЁ'\\-]+( [a-zA-zа-яА-ЯёЁ'\\-]+){1,3}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "виза",
                    "viza",
                    "GLFVISA",
                    "Единый визовый центр",
                    "good luck flight",
                    "пдамшыф"
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
                "_id": "5e9ea53bfdd5106671b635aa",
                "paycom_id": "5e9ea44c03f443e24b1b9b28",
                "name": "ТЧСЖ ROKSAN KOMMUNAL SERVIS",
                "organization": "ООО «ТЧСЖ ROKSAN KOMMUNAL SERVIS»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/7fdd85f4d6b5cb88a929faf0673b0f7a1e1865d4.png",
                "date": 1587455291984,
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
                            "name": "address",
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
                        }
                    ]
                },
                "keywords": [
                    "тчсж",
                    "коммунальные услуги",
                    "комунальные",
                    "tchsj",
                    "roksan"
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
                "_id": "5ec621f4343eb86f54d33387",
                "paycom_id": "5ebd11fd6420f3660dc895ad",
                "name": "ТЧСЖ \"BAHTLI OMAD SERVIS\"",
                "organization": "ООО «Bahtli Omad Servis»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/1b0782affd732c37f43c4597d8a35ed33922af9d.png",
                "date": 1590043124681,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "тсчж",
                    "дом у озера",
                    "коммуналка"
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
                "_id": "5fae27e38b38a19f0b399b97",
                "paycom_id": "5facd8ace938edd00617567e",
                "name": "A Qodiriy Premium Service",
                "organization": "ТЧСЖ «ТЧСЖ \"A QODIRIY PREMIUM SERVICE\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/35d4f2f7006305d3e42ff4370515483ac9fd8efa.png",
                "date": 1605248995601,
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
                            "title": "ФИО",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "house",
                            "placeholder": "",
                            "title": "Номер дома",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "number",
                            "name": "apartment",
                            "placeholder": "",
                            "title": "Номер квартиры",
                            "type": "text",
                            "validation": null,
                            "error": null,
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "area",
                            "title": "Общая площадь квартиры",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "129.35",
                                    "title": "129.35",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "129.40",
                                    "title": "129.40",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "131.14",
                                    "title": "131.14",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "131.19",
                                    "title": "131.19",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "147.95",
                                    "title": "147.95",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "164.12",
                                    "title": "164.12",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "164.16",
                                    "title": "164.16",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "176.06",
                                    "title": "176.06",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "181.68",
                                    "title": "181.68",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "187.50",
                                    "title": "187.50",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "331.22",
                                    "title": "331.22",
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
                    "utilities",
                    "premium",
                    "премиум",
                    "qodiriy premium service",
                    "Мощное обслуживание премиум-класса",
                    "тчсж",
                    "тсж",
                    "kommunal"
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
                "_id": "6077fc12b8d597ed134d8d0d",
                "paycom_id": "6075a232e928245e531cb415",
                "name": "POSBON KOMMUNALCHI",
                "organization": "ТЧСЖ «ТЧСЖ POSBON KOMMUNALCHI»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/da868870c7e892d423a6d81c1b0e89eeafbb90d3.png",
                "date": 1618476050437,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "камуналка",
                    "электричество",
                    "мусор",
                    "вода",
                    "газ",
                    "комуналка",
                    "ЗЩЫИЩТ ЛЩЬЬГТФДСРШ",
                    "тсж",
                    "тчсж"
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
                "_id": "60a75547b8d597ed134dabe6",
                "paycom_id": "60a6048c7852bd0ebce1e577",
                "name": "Green House",
                "organization": "ООО «ООО \"MEGAPOLIS BUILDING\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/292ac1079f1bb7f914ade686f7e6a7e60eb97625.png",
                "date": 1621579079136,
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
                            "name": "number",
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
                    "green house",
                    "грин хаус",
                    "megapolis building",
                    "пкуут рщгыу"
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
                "_id": "60b9d36cb8d597ed134dbab4",
                "paycom_id": "60b8bb740d44ad636479eea2",
                "name": "SAVOBLI LYUKS SERVIS",
                "organization": "ТЧСЖ «SAVOBLI LYUKS SERVIS UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/e301eed618af7a9005fdbfd92e01d178abe5eff2.png",
                "date": 1622791020620,
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ф.И.О.",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ]+$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "validation": "^(\\+?998)?[0-9]{9}$",
                            "length": 9,
                            "prefix": {
                                "type": "static",
                                "value": "+998",
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
                    "savobli lyuks servis",
                    "lyuks servis",
                    "тчсж",
                    "ком услуги",
                    "савобли люкс сервис",
                    "люкс сервис",
                    "LYUKS SERVIS"
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
                "_id": "60e58f6a16527be45e019d2f",
                "paycom_id": "60e3e889e940656857cdb247",
                "name": "Nurafshon Obod city",
                "organization": "ООО «ООО \"NURAFSHON-OBOD-CITY\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/95a56ea33519a3f6a781605bf885448cf90beb42.png",
                "date": 1625657194818,
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
                            "name": "number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                    "Nurafshon Obod city",
                    "Kommunal xizmatlar",
                    "нурафшон обод сити",
                    "Коммунальные услуги",
                    "обод сити",
                    "obod city"
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
                "_id": "61c5cac33b3439b51ae59344",
                "paycom_id": "61c5ca6fdb64a8255a3bdc68",
                "name": "НОВАЯ ЖИЗНЬ",
                "organization": "ООО «\"NOVAYA JIZN\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/61f3a125584bf8cde103fa1d9cec31573b4c64db.png",
                "date": 1640352451474,
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                    "novaya jizn",
                    "new life",
                    "yjdfz ;bpym"
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
                "_id": "625e8802d88dabe401b5501e",
                "paycom_id": "625e87bb3b252ec2c4535c98",
                "name": "KOSHONA KOMUNAL",
                "organization": "ТЧСЖ «\"KOSHONA KOMUNAL\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/08211c0bbe94de36e52addf4d247bafaf2340eeb.png",
                "date": 1650362370427,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "KOSHONA KOMUNAL",
                    "КОШОНА КОМУНАЛ",
                    "ЛЩЫРЩТФ ЛЩЬГТФД"
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
                "_id": "62e3a99f3a23b719dc985bd9",
                "paycom_id": "62e3a88139c675be34e4e1ac",
                "name": "TIKLANISH-CHIMBOY ",
                "organization": "ТЧСЖ «TIKLANISH-CHIMBOY XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/6c65fcc426823d50d3b67816bafa191f839c6356.png",
                "date": 1659087263959,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_period",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Период оплаты",
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
                    "TIKLANISH-CHIMBOY",
                    "tiklanish-chimboy",
                    "тикланиш чимбой",
                    "ешлдфтшыр"
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
                "_id": "62e3c80d3a23b719dc985de1",
                "paycom_id": "62e3c73c39c675be34e4ea2f",
                "name": "OBODLIK DAVR SARI",
                "organization": "ТЧСЖ «\"OBODLIK DAVR SARI\" UJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/c38b0ea709b42bd9d8b888153206280dfcbcc9cb.png",
                "date": 1659095053388,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "OBODLIK DAVR SARI",
                    "obodlik davr sari",
                    "ободлик давр сари",
                    "щищвдшл вфмк ыфкш"
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
                "_id": "6315dd19e5b34221aeba0b81",
                "paycom_id": "6315dadfdfcda2d1a53f6f5b",
                "name": "FOTIX DAVR SERVICE ",
                "organization": "ООО «\"FOTIX DAVR SERVICE\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/2576ad799577bfb77daf54b917157d480acfac11.png",
                "date": 1662377241009,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                            "name": "payment_details",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Детали платежа",
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
                    "FOTIX DAVR SERVICE",
                    "Фотикс Давр Сервис",
                    "Ащешч Вфмк Ыукмшсу"
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
                "_id": "632087eb19825674723e2519",
                "paycom_id": "6320877cf5172565f1566889",
                "name": "KAZAKHSTAN KOMMUNAL",
                "organization": "ТЧСЖ «KAZAKHSTAN KOMMUNAL XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/4b1d0bbd9d0f1291d414d955cd1e087c8f808753.png",
                "date": 1663076331178,
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
                            "name": "house_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "KAZAKHSTAN KOMMUNAL",
                    "казахстан коммунал",
                    "коммунал"
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
                "_id": "6332e5928c5b3960fce60346",
                "paycom_id": "6148359b2e7b62c21d02dd21",
                "name": "SAROY ALGORITM KOMMUNAL",
                "organization": "ООО «ТЧСЖ SAROY ALGORITM KOMMUNAL»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/bc8ff9b772f046b5abccccca7f088d86b44970c6.png",
                "date": 1664279954696,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "title": "Номер квартиры",
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
                    "SAROY ALGORITM KOMMUNAL",
                    "ЫФКЩН ФДПЩКШЕЬ ЛЩЬЬГТФД",
                    "сарой алгоритм коммунал",
                    "cfhjq fkujhbnv rjvveyfk"
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
                "_id": "63933ea0ceaba24113c385a7",
                "paycom_id": "63933e4e4b7facfd06c23135",
                "name": "STIMUL-NAVOIY",
                "organization": "ООО «\"STIMUL-NAVOIY\" MCHJ»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/5c440d7530fb555a90b854612699d457a02e70a5.png",
                "date": 1670594208271,
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
                            "name": "musor",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Услуга по вывозу мусора",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "ТБО( қаттий маиший чиқинди )",
                                    "value": "1",
                                    "title": "ТБО( қаттий маиший чиқинди )",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "ЖО(суюқ чиқинди)",
                                    "value": "2",
                                    "title": "ЖО(суюқ чиқинди)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "СО (қурилиш чиқиндилари)",
                                    "value": "3",
                                    "title": "СО (қурилиш чиқиндилари)",
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
                    "STIMUL-NAVOIY",
                    "вывоз мусора",
                    "стимул навои"
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
                "_id": "6634c16cdb7c028962a03de4",
                "paycom_id": "6634c0b92eb76ec81b6a2f38",
                "name": "MBCares",
                "organization": "ООО «OOO \"PREMIUM KISLOROD\"»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/9fbdfe3a40fcf0e7a1bc79360c0a62a884198661.png",
                "date": 1714733420267,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                                    "name": "Парковка наземная",
                                    "value": "1",
                                    "title": "Парковка наземная",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Кладовое помещение",
                                    "value": "2",
                                    "title": "Кладовое помещение",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Коммерческое помещение",
                                    "value": "3",
                                    "title": "Коммерческое помещение",
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
                            "name": "tin",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "ИНН",
                            "type": "text",
                            "validation": null,
                            "optional": true,
                            "prefix": null,
                            "visible": {
                                "require": "payment",
                                "value": "^3$"
                            },
                            "error": null,
                            "scan": null
                        }
                    ]
                },
                "keywords": [
                    "MBCares",
                    "ЬИСфкуы",
                    "мбкерс",
                    "v,rthc"
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
                "_id": "663dc557af9a90fc9a1538d2",
                "paycom_id": "663dc50afe41a3907df921d6",
                "name": "ZEBUZAR KOMMUNAL",
                "organization": "ТЧСЖ «\"ZEBUZAR KOMMUNAL\" XUJMSH»",
                "active": true,
                "type": 125,
                "logo": "https://cdn.payme.uz/merchants/8640c6346b2f3975e5a0cade16590ac13ea3b77d.png",
                "date": 1715324247197,
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
                            "name": "house",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер дома",
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
                            "name": "apartment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Номер квартиры",
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
                    "ZEBUZAR KOMMUNAL",
                    "ЯУИГЯФК ЛЩЬЬГТФД",
                    "зебузар коммунал",
                    "pt,epfh rjvveyfk"
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
