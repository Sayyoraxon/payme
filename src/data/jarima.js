
export const jarima = 
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "5c1245b0a13238736601234b",
                "paycom_id": "6093c6a85d157d44f1e30338",
                "name": "Оплата государственных пошлин ОВИР",
                "organization": "МВД",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/mvd_ovir.png",
                "date": 1544694888982,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "payment_type",
                            "title": "To`lov turi",
                            "content": "text",
                            "type": "select",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "Doimiy yashash joyini ro'yxatdan o'tkazish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "Ketishni ro'yxatdan o'tkazish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "03",
                                    "title": "Vaqtinchalik ro'yxatga olishni Toshkent va Toshkent viloyatida ro'yxatdan o'tkazish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "04",
                                    "title": "Boshqa hududlarda vaqtinchalik ro'yxatga olishni ro'yxatdan o'tkazish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "06",
                                    "title": "ID karta olish uchun davlat boji",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "validation_error": "Ошибка в типе пошлины",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^.{11,14}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "visible": null,
                            "placeholder": "",
                            "scan": "CODE_128",
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "mvd",
                    "мвд",
                    "пошлина",
                    "yig'im",
                    "tushum",
                    "тушум",
                    "ovir",
                    "jdbh",
                    "овир",
                    "щмшк",
                    "прописка",
                    "зкщзшылф",
                    "propiska",
                    "ghjgbcrf",
                    "id карта",
                    "id karta"
                ],
                "weight": 0.004405721657451481,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "583451328974fb1b4824b4f9",
                "paycom_id": "6229d56e75d58d6c3664d043",
                "name": "e-imzo",
                "organization": "Научно-информационный центр новых технологий",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/e-imzo.png",
                "date": 1479824088613,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 3400000
                    },
                    "account": [
                        {
                            "name": "nominal",
                            "title": "To`lov",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "21000",
                                    "title": "Jismoniy shaxs - 23800",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "30000",
                                    "title": "Yuridik shaxs va yakka tartibdagi tadbirkor-34000",
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
                            "name": "user_id",
                            "title": "STIR/PINFL",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "placeholder": "",
                            "validation": "^([0-9]{14})|([0-9]{9})$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ецп",
                    "эцп",
                    "ecp",
                    "eimzo",
                    "imzo",
                    "цифровой подпись",
                    "подпись",
                    "certificate",
                    "sertifikat",
                    "raqamli imzo",
                    "имзо",
                    "ракамли имзо"
                ],
                "weight": 0.0034385799815186413,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a9e44b044e6a65eb99f0d1d",
                "paycom_id": "609298338ad987025c606459",
                "name": "ЗАГС",
                "organization": "Оплата ЗАГС",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/zags_.png",
                "date": 1520321614720,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "To`lovchi invoys raqami",
                            "content": "text",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9]{14}$",
                            "validation_error": "Ошибка в значении инвойса",
                            "error": null,
                            "placeholder": "",
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "fxdyo",
                    "fhdyo",
                    "фхдйо",
                    "загс",
                    "zags",
                    "арвнщ"
                ],
                "weight": 0.0032286541199756796,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5bd6e614b3e6df20464112d6",
                "paycom_id": "60924b9f8ad987025c606364",
                "name": "АДМИНИСТРАТИВНЫЕ ШТРАФЫ",
                "organization": "МВД",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/mvd-shtraf_2.png",
                "date": 1540803420196,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000,
                        "magnet": true,
                        "auto_fetch": false
                    },
                    "account": [
                        {
                            "name": "payment_type",
                            "title": "To`lov turi",
                            "content": "text",
                            "type": "select",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "Ma'muriy huquqbuzarlik uchun jarima",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "Ma'muriy huquqbuzarlik tufayli etkazilgan zarar",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "validation_error": "Ошибка в типе правонарушение",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "content": "text",
                            "name": "invoice",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invoys raqami",
                            "type": "text",
                            "validation": "^([A-Z]{2}\\d{11})|(\\d{10}|\\d{14}|\\d{22})$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "mvd",
                    "мвд",
                    "штрафы",
                    "jarima",
                    "жарима",
                    "АДМИНИСТРАТИВНЫЕ ШТРАФЫ",
                    "Ma'muriy",
                    "Mamuriy",
                    "мамурий"
                ],
                "weight": 0.003151327830341616,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d3e83f1a1864f26dab4b492",
                "paycom_id": "60929cab8ad987025c606484",
                "name": "ГУБДД Оплата за тех.осмотр",
                "organization": "Главное управление безопасности дорожного движения",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/mvd-texosmotr.png",
                "date": 1564379857702,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": "CODE_128",
                            "validation": "^.{1,20}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "гаи",
                    "техосмотр",
                    "dan",
                    "yhxb",
                    "jarima",
                    "пошлина",
                    "texnik ko'rik",
                    "ko'rik",
                    "texnik",
                    "тех",
                    "осмотр",
                    "gai",
                    "gubdd"
                ],
                "weight": 0.0014147708040329414,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d1f3a44659a204299fbff21",
                "paycom_id": "6093cd6c5d157d44f1e30353",
                "name": "Судебные платежи",
                "organization": "Суды РУз",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/b1a6e1e6f75cee8dcb75e1b35865117f6767845f.png",
                "date": 1562328239753,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "order",
                            "title": "Kvitansiya raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": "CODE_128",
                            "validation": null,
                            "validation_error": "Ошибка в номере квитанции",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "суд",
                    "олий",
                    "ыгв",
                    "sud",
                    "oliy",
                    "cel",
                    "Судебные платежи"
                ],
                "weight": 0.0012813266488634772,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6368e9107ec4232611a315ab",
                "paycom_id": "6368e87c2cfb25761a995e0a",
                "name": "Пропускные пункты ГТК на Гос. границе",
                "organization": "Пропускные пункты ГТК на Гос. границе",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/4b1b1d7918e5daecbc22dd0d8c8632071f7ace8f.png",
                "date": 1667819792976,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 1500000000,
                        "require": "data"
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
                                    "name": "Оплата за пересечение границы на автомобиле физическими лицами",
                                    "value": "01",
                                    "title": "Jismoniy shaxslar tomonidan avtomobilda chegarani kesib oʼtkazish uchun toʼlovlar",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за пересечение границы на автомобиле юридическими лицами",
                                    "value": "02",
                                    "title": "Yuridik shaxslar tomonidan avtomobilda chegarani kesib oʼtkazish uchun toʼlovlar",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за пользование услугой быстрого пересечения границы на автомобиле",
                                    "value": "03",
                                    "title": "Аvtomobil bilan chegarani tezkor kesib oʼtish xizmatidan foydalanish uchun toʼlov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за пользование сервисом Fast Track быстрого пересечения границы",
                                    "value": "04",
                                    "title": "Chegarani tezkor kesib oʼtish 'Fast track' xizmatidan foydalanganlik uchun toʼlov",
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
                            "name": "invoice",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invoys",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^01|02$"
                            },
                            "scan": "CODE_128",
                            "error": null
                        },
                        {
                            "content": "number",
                            "name": "pinfl",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "PINFL",
                            "type": "text",
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "PINFL 14 ta raqamdan iborat va noldan boshlanmasligi kerak",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^01$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "number",
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "INN",
                            "type": "text",
                            "validation": "^[0-9]{9}$",
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
                            "name": "sms_code",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "SMS Kod",
                            "type": "text",
                            "validation": "^[0-9]{6}$",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^03|04$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "name": "data",
                            "type": "dynamic-select",
                            "requires": [
                                "payment_type",
                                "invoice"
                            ],
                            "visible": {
                                "require": "payment_type",
                                "value": "^01|02$"
                            },
                            "optional": true,
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "title": "To'lov summasini olish",
                            "placeholder": "",
                            "error": null,
                            "scan": null
                        },
                        {
                            "name": "data_2",
                            "type": "dynamic-select",
                            "requires": [
                                "payment_type",
                                "sms_code"
                            ],
                            "visible": {
                                "require": "payment_type",
                                "value": "^03|04$"
                            },
                            "optional": true,
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "title": "To'lov summasini olish",
                            "placeholder": "",
                            "error": null,
                            "scan": null
                        }
                    ]
                },
                "keywords": [
                    "гтк",
                    "gtk",
                    "nfvj;yz",
                    "таможня",
                    "bojxona"
                ],
                "weight": 0.0011571729095602415,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5c3d8662b20d521bf0ad6c47",
                "paycom_id": "6093971e5d157d44f1e302a6",
                "name": "E-AUKSION",
                "organization": "Мажбурий ижро бюроси ҳузуридаги \"Электрон онлайн-аукционларни ташкил этиш маркази\" ДУК",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/4337319a32825af26ca37d8e7fcdfdd86241834e.png",
                "date": 1547558480172,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
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
                                    "name": "Поплнение лицевого счета физического лица",
                                    "value": "02",
                                    "title": "Jismoniy shaxsning shaxsiy hisobini to'ldirish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Пополнение лицевого счета юридического лица",
                                    "value": "01",
                                    "title": "Yuridik shaxsning shaxsiy hisobini to'ldirish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Пополнение лицевого счета индивидуального предпринимателя",
                                    "value": "03",
                                    "title": "Yakka tartibdagi tadbirkorning shaxsiy hisobini to'ldirish",
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
                            "content": "number",
                            "name": "pinfl",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "PINFL",
                            "type": "text",
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "PINFL 14 ta raqamdan iborat va noldan boshlanmasligi kerak",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^02|03$"
                            },
                            "error": null,
                            "scan": null
                        },
                        {
                            "content": "number",
                            "name": "inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "STIR",
                            "type": "text",
                            "validation": "^\\d{9}$",
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_type",
                                "value": "^01$"
                            },
                            "error": null,
                            "scan": null
                        }
                    ]
                },
                "keywords": [
                    "mib",
                    "миб",
                    "бпи",
                    "depozit",
                    "deposit",
                    "депозит",
                    "auksion",
                    "auction",
                    "auktsion",
                    "аукцион"
                ],
                "weight": 0.001065770232250074,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60926a13ad28b36d0fcd8d13",
                "paycom_id": "61792e9d46b322089a2620d9",
                "name": "Оплата пошлин за получение загран паспорта",
                "organization": "Государственный Центр Персонализации",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/b4e0f998651e914f64e46ae15554bbfc50514915.png",
                "date": 1620208135579,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{14}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "visible": null,
                            "placeholder": "14 ta raqamni kiriting",
                            "scan": "CODE_128",
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "центр персонализации",
                    "загранпаспорт",
                    "пошлина",
                    "yig'im",
                    "tushum",
                    "тушум",
                    "ovir",
                    "jdbh",
                    "овир",
                    "щмшк",
                    "паспорт",
                    "passport",
                    "pasport",
                    "gfcgjhn",
                    "biopassport",
                    "биопаспорт",
                    "xalqaro pasport",
                    "zagran pasport",
                    "zagranpasport",
                    "international passport",
                    "ovir",
                    "загранник",
                    "заграничный паспорт",
                    "загран паспорт",
                    "загранпаспорт",
                    "pfuhfygfcgjhn"
                ],
                "weight": 0.0006549273972768572,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d68c5b13ba57f03e4de09dd",
                "paycom_id": "609529ad627706103b1e4ae5",
                "name": "Kadastr agentligi",
                "organization": "Kadastr agentligi",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/830e687eca0781ec10304fd46ea6b975bca54bd8.png",
                "date": 1567147514760,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 600000000,
                        "min": 1,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "invoice",
                            "length": 14,
                            "placeholder": "xxxxxxxxxxxxxx",
                            "title": "Invoys",
                            "type": "text",
                            "validation": "^\\d{14}$",
                            "validation_error": "Invoys 14 ta raqamdan iborat bo'lishi kerak",
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
                    "kadastr",
                    "cadaster",
                    "cadastre",
                    "rflfcnh",
                    "кадастр",
                    "сфвфыек",
                    "сфвфыеку",
                    "сфвфыеук",
                    "Агентство по кадастру",
                    "Kadastr agentligi"
                ],
                "weight": 0.0005438177772201443,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ddb65e87cec93e81bbba2bd",
                "paycom_id": "5dd268ce859125662514d308",
                "name": "UZIMEI",
                "organization": "ГУП «РЦУСТУз»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/957f235940d0565d058d41a46b33175749dad299.png",
                "date": 1574659560422,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Order",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Ариза рақами",
                            "type": "text",
                            "validation": "^[0-9]{15,15}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "imei",
                    "imei",
                    "imei"
                ],
                "additional_info": true,
                "weight": 0.0005356534723680041,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "630c6d34e5b34221aeb9d9a7",
                "paycom_id": "630c6a31acb17d657b090f8a",
                "name": "Оплата налога Юридических лиц",
                "organization": "ГУП «Оплата государственных пошлин ОВИР»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/0823ca8c155b43b1c8dc95fef4b557b06b1917c3.png",
                "date": 1661758772056,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "tax_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To`lov turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Налог за использование водными ресурсами",
                                    "value": "10",
                                    "title": "Сув ресурсларидан фойдаланганлик учун солик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Плата в фонд развития налогового органа",
                                    "value": "11",
                                    "title": "Солик органларини ривожлантириш жамгармасига тўлов",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Штраф за нарушение налогового законодательства",
                                    "value": "12",
                                    "title": "Солик конунчилигини бузганлик учун жарима",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Штраф за нарушение порядка использования НКМ и расчетных терминалов",
                                    "value": "13",
                                    "title": "НКМ ва хисоб-китоб терминалларини кўллаш тартибини бузганлик учун жарима",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Финансовая санкция за нарушение валютного регулирования",
                                    "value": "14",
                                    "title": "Валюта конунчилигини бузганлик учун молиявий санкция",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Единовременный платеж по декларации",
                                    "value": "15",
                                    "title": "Декларация бўйича бир марталик тўлов",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Плата за электронную цифровую подпись",
                                    "value": "16",
                                    "title": "Электрон ракамли имзо учун тўлов",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Уплата пени в фонд развития налогового органа",
                                    "value": "17",
                                    "title": "Солик органларини ривожлантириш жамгармасига пеня тўлови",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Налог на доходы физических лиц (ИП)",
                                    "value": "01",
                                    "title": "Жисмоний шахслардан олинадиган даромад солиги (ЯТТ)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Налог на прибыль с дивидендов",
                                    "value": "02",
                                    "title": "Дивиденддан олинадиган даромад солиги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Социальный налог, уплачиваемый ИП (фиксированный)",
                                    "value": "03",
                                    "title": "ЯТТлар томонидан тўланадиган ижтимоий солик (катъий)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Социальный налог (в процентах)",
                                    "value": "04",
                                    "title": "Ижтимоий солик (фоизда)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фиксированная ставка подоходного налога ИП",
                                    "value": "05",
                                    "title": "ЯТТ катъий ставкали даромад солиги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Налог на прибыль",
                                    "value": "06",
                                    "title": "Фойда солиги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Налог на добавленную стоимость",
                                    "value": "07",
                                    "title": "Кўшилган киймат солиги",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Налог с оборота",
                                    "value": "08",
                                    "title": "Айланмадан олинадиган солик",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Отчисления в накопительный пенсионный фонд",
                                    "value": "09",
                                    "title": "Шахсий жамгариб бориладиган пенсия фондига ажратма",
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
                            "name": "areas",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tumanlar",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Кашкадарьинская область",
                                    "value": "10",
                                    "title": "Кашкадарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навоийская область",
                                    "value": "12",
                                    "title": "Навоийская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманганская область",
                                    "value": "14",
                                    "title": "Наманганская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самаркандская область",
                                    "value": "18",
                                    "title": "Самаркандская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхандарьинская область",
                                    "value": "22",
                                    "title": "Сурхандарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сырдарьинская область",
                                    "value": "24",
                                    "title": "Сырдарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Город Ташкент",
                                    "value": "26",
                                    "title": "Город Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "27",
                                    "title": "Ташкентская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ферганская область",
                                    "value": "30",
                                    "title": "Ферганская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хорезмская область",
                                    "value": "33",
                                    "title": "Хорезмская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Республика Каракалпакистан",
                                    "value": "35",
                                    "title": "Республика Каракалпакистан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Андижанская область",
                                    "value": "03",
                                    "title": "Андижанская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухарская область",
                                    "value": "06",
                                    "title": "Бухарская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Джизакская область",
                                    "value": "08",
                                    "title": "Джизакская область",
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
                            "name": "gni",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "GNI",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "КАРШИ ШАХАР ДСИ",
                                    "value": "1001",
                                    "title": "КАРШИ ШАХАР ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ШАХРИСАБЗ ШАХАР ДСИ",
                                    "value": "1002",
                                    "title": "ШАХРИСАБЗ ШАХАР ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ГУЗОР ТУМАНИ ДСИ",
                                    "value": "1004",
                                    "title": "ГУЗОР ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ДЕХКОНОБОД ТУМАНИ ДСИ",
                                    "value": "1005",
                                    "title": "ДЕХКОНОБОД ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КАМАШИ ТУМАНИ ДСИ",
                                    "value": "1006",
                                    "title": "КАМАШИ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КАРШИ ТУМАНИ ДСИ",
                                    "value": "1007",
                                    "title": "КАРШИ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КОСОН ТУМАНИ ДСИ",
                                    "value": "1008",
                                    "title": "КОСОН ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КИТОБ ТУМАНИ ДСИ",
                                    "value": "1009",
                                    "title": "КИТОБ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "МУБОРАК ТУМАНИ ДСИ",
                                    "value": "1010",
                                    "title": "МУБОРАК ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "НИШОН ТУМАНИ ДСИ",
                                    "value": "1011",
                                    "title": "НИШОН ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КАСБИ ТУМАНИ ДСИ",
                                    "value": "1012",
                                    "title": "КАСБИ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ЧИРОКЧИ ТУМАНИ ДСИ",
                                    "value": "1014",
                                    "title": "ЧИРОКЧИ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ШАХРИСАБЗ ТУМАНИ ДСИ",
                                    "value": "1015",
                                    "title": "ШАХРИСАБЗ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "ЯККАБОГ ТУМАНИ ДСИ",
                                    "value": "1016",
                                    "title": "ЯККАБОГ ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "МИРИШКОР ТУМАНИ ДСИ",
                                    "value": "1017",
                                    "title": "МИРИШКОР ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "КУКДАЛА ТУМАНИ ДСИ",
                                    "value": "1018",
                                    "title": "КУКДАЛА ТУМАНИ ДСИ",
                                    "filter": "10",
                                    "description": null
                                },
                                {
                                    "name": "НАВОИЙ ШАХАР ДСИ",
                                    "value": "1201",
                                    "title": "НАВОИЙ ШАХАР ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "ЗАРАФШОН ШАХАР ДСИ",
                                    "value": "1202",
                                    "title": "ЗАРАФШОН ШАХАР ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "УЧКУДУК ШАХАР ДСИ",
                                    "value": "1203",
                                    "title": "УЧКУДУК ШАХАР ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "КОНИМЕХ ТУМАНИ ДСИ",
                                    "value": "1204",
                                    "title": "КОНИМЕХ ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "КИЗИЛТЕПА ТУМАНИ ДСИ",
                                    "value": "1205",
                                    "title": "КИЗИЛТЕПА ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "ТОМДИ ТУМАНИ ДСИ",
                                    "value": "1207",
                                    "title": "ТОМДИ ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "НАВБАХОР ТУМАНИ ДСИ",
                                    "value": "1208",
                                    "title": "НАВБАХОР ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "ХАТИРЧИ ТУМАНИ ДСИ",
                                    "value": "1209",
                                    "title": "ХАТИРЧИ ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "НУРОТА ТУМАНИ ДСИ",
                                    "value": "1210",
                                    "title": "НУРОТА ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "КАРМАНА ТУМАНИ ДСИ",
                                    "value": "1211",
                                    "title": "КАРМАНА ТУМАНИ ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "ГОЗГОН ШАХАР ДСИ",
                                    "value": "1213",
                                    "title": "ГОЗГОН ШАХАР ДСИ",
                                    "filter": "12",
                                    "description": null
                                },
                                {
                                    "name": "НАМАНГАН ШАХАР ДСИ",
                                    "value": "1401",
                                    "title": "НАМАНГАН ШАХАР ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "МИНГБУЛОК ТУМАНИ ДСИ",
                                    "value": "1407",
                                    "title": "МИНГБУЛОК ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "КОСОНСОЙ ТУМАНИ ДСИ",
                                    "value": "1408",
                                    "title": "КОСОНСОЙ ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "НАМАНГАН ТУМАНИ ДСИ",
                                    "value": "1409",
                                    "title": "НАМАНГАН ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "НОРИН ТУМАНИ ДСИ",
                                    "value": "1410",
                                    "title": "НОРИН ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "ПОП ТУМАНИ ДСИ",
                                    "value": "1411",
                                    "title": "ПОП ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "ТУРАКУРГОН ТУМАНИ ДСИ",
                                    "value": "1412",
                                    "title": "ТУРАКУРГОН ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "УЙЧИ ТУМАНИ ДСИ",
                                    "value": "1413",
                                    "title": "УЙЧИ ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "УЧКУРГОН ТУМАНИ ДСИ",
                                    "value": "1414",
                                    "title": "УЧКУРГОН ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "ЧОРТОК ТУМАНИ ДСИ",
                                    "value": "1415",
                                    "title": "ЧОРТОК ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "ЧУСТ ТУМАНИ ДСИ",
                                    "value": "1416",
                                    "title": "ЧУСТ ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИКУРГОН ТУМАНИ ДСИ",
                                    "value": "1417",
                                    "title": "ЯНГИКУРГОН ТУМАНИ ДСИ",
                                    "filter": "14",
                                    "description": null
                                },
                                {
                                    "name": "САМАРКАНД ШАХАР ДСИ",
                                    "value": "1801",
                                    "title": "САМАРКАНД ШАХАР ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ТАЙЛОК ТУМАНИ ДСИ",
                                    "value": "1804",
                                    "title": "ТАЙЛОК ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "КАТТАКУРГОН ШАХАР ДСИ",
                                    "value": "1806",
                                    "title": "КАТТАКУРГОН ШАХАР ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ОКДАРЁ ТУМАНИ ДСИ",
                                    "value": "1808",
                                    "title": "ОКДАРЁ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "БУЛУНГУР ТУМАНИ ДСИ",
                                    "value": "1809",
                                    "title": "БУЛУНГУР ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ЖОМБОЙ ТУМАНИ ДСИ",
                                    "value": "1811",
                                    "title": "ЖОМБОЙ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ИШТИХОН ТУМАНИ ДСИ",
                                    "value": "1812",
                                    "title": "ИШТИХОН ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "КАТТАКУРГОН ТУМАНИ ДСИ",
                                    "value": "1813",
                                    "title": "КАТТАКУРГОН ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "КУШРАБОТ ТУМАНИ ДСИ",
                                    "value": "1814",
                                    "title": "КУШРАБОТ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "НАРПАЙ ТУМАНИ ДСИ",
                                    "value": "1815",
                                    "title": "НАРПАЙ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ПАЙАРИК ТУМАНИ ДСИ",
                                    "value": "1817",
                                    "title": "ПАЙАРИК ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ПАСТДАРГОМ ТУМАНИ ДСИ",
                                    "value": "1818",
                                    "title": "ПАСТДАРГОМ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ПАХТАЧИ ТУМАНИ ДСИ",
                                    "value": "1819",
                                    "title": "ПАХТАЧИ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "САМАРКАНД ТУМАНИ ДСИ",
                                    "value": "1820",
                                    "title": "САМАРКАНД ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "НУРОБОД ТУМАНИ ДСИ",
                                    "value": "1821",
                                    "title": "НУРОБОД ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "УРГУТ ТУМАНИ ДСИ",
                                    "value": "1822",
                                    "title": "УРГУТ ТУМАНИ ДСИ",
                                    "filter": "18",
                                    "description": null
                                },
                                {
                                    "name": "ТЕРМИЗ ШАХАР ДСИ",
                                    "value": "2201",
                                    "title": "ТЕРМИЗ ШАХАР ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "АНГОР ТУМАНИ ДСИ",
                                    "value": "2203",
                                    "title": "АНГОР ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ОЛТИНСОЙ ТУМАНИ ДСИ",
                                    "value": "2204",
                                    "title": "ОЛТИНСОЙ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "БОЙСУН ТУМАНИ ДСИ",
                                    "value": "2205",
                                    "title": "БОЙСУН ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "МУЗРАБОТ ТУМАНИ ДСИ",
                                    "value": "2206",
                                    "title": "МУЗРАБОТ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ДЕНОВ ТУМАНИ ДСИ",
                                    "value": "2207",
                                    "title": "ДЕНОВ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ЖАРКУРГОН ТУМАНИ ДСИ",
                                    "value": "2208",
                                    "title": "ЖАРКУРГОН ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "КУМКУРГОН ТУМАНИ ДСИ",
                                    "value": "2209",
                                    "title": "КУМКУРГОН ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "КИЗИРИК ТУМАНИ ДСИ",
                                    "value": "2210",
                                    "title": "КИЗИРИК ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "САРИОСИЁ ТУМАНИ ДСИ",
                                    "value": "2211",
                                    "title": "САРИОСИЁ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ТЕРМИЗ ТУМАНИ ДСИ",
                                    "value": "2212",
                                    "title": "ТЕРМИЗ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ШЕРОБОД ТУМАНИ ДСИ",
                                    "value": "2213",
                                    "title": "ШЕРОБОД ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ШУРЧИ ТУМАНИ ДСИ",
                                    "value": "2214",
                                    "title": "ШУРЧИ ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "УЗУН ТУМАНИ ДСИ",
                                    "value": "2215",
                                    "title": "УЗУН ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "БАНДИХОН ТУМАНИ ДСИ",
                                    "value": "2216",
                                    "title": "БАНДИХОН ТУМАНИ ДСИ",
                                    "filter": "22",
                                    "description": null
                                },
                                {
                                    "name": "ОКОЛТИН ТУМАНИ ДСИ",
                                    "value": "2401",
                                    "title": "ОКОЛТИН ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "БОЁВУТ ТУМАНИ ДСИ",
                                    "value": "2402",
                                    "title": "БОЁВУТ ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "ГУЛИСТОН ТУМАНИ ДСИ",
                                    "value": "2403",
                                    "title": "ГУЛИСТОН ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "МИРЗАОБОД ТУМАНИ ДСИ",
                                    "value": "2405",
                                    "title": "МИРЗАОБОД ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "САЙХУНОБОД ТУМАНИ ДСИ",
                                    "value": "2406",
                                    "title": "САЙХУНОБОД ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "СИРДАРЁ ТУМАНИ ДСИ",
                                    "value": "2407",
                                    "title": "СИРДАРЁ ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "ХАВАСТ ТУМАНИ ДСИ",
                                    "value": "2408",
                                    "title": "ХАВАСТ ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "САРДОБА ТУМАНИ ДСИ",
                                    "value": "2409",
                                    "title": "САРДОБА ТУМАНИ ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "ГУЛИСТОН ШАХАР ДСИ",
                                    "value": "2410",
                                    "title": "ГУЛИСТОН ШАХАР ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "ШИРИН ШАХАР ДСИ",
                                    "value": "2412",
                                    "title": "ШИРИН ШАХАР ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИЕР ШАХАР ДСИ",
                                    "value": "2413",
                                    "title": "ЯНГИЕР ШАХАР ДСИ",
                                    "filter": "24",
                                    "description": null
                                },
                                {
                                    "name": "МИРОБОД ТУМАНИ ДСИ",
                                    "value": "2601",
                                    "title": "МИРОБОД ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "МИРЗО УЛУГБЕК ТУМ. ДСИ",
                                    "value": "2602",
                                    "title": "МИРЗО УЛУГБЕК ТУМ. ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ЮНУСОБОД ТУМАНИ ДСИ",
                                    "value": "2603",
                                    "title": "ЮНУСОБОД ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ЯККАСАРОЙ ТУМАНИ ДСИ",
                                    "value": "2604",
                                    "title": "ЯККАСАРОЙ ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ШАЙХОНТОХУР ТУМАНИ ДСИ",
                                    "value": "2605",
                                    "title": "ШАЙХОНТОХУР ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ЧИЛОНЗОР ТУМАНИ ДСИ",
                                    "value": "2606",
                                    "title": "ЧИЛОНЗОР ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "СЕРГЕЛИ ТУМАНИ ДСИ",
                                    "value": "2607",
                                    "title": "СЕРГЕЛИ ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ЯШНОБОД ТУМАНИ ДСИ",
                                    "value": "2608",
                                    "title": "ЯШНОБОД ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ОЛМАЗОР ТУМАНИ ДСИ",
                                    "value": "2609",
                                    "title": "ОЛМАЗОР ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "УЧТЕПА ТУМАНИ ДСИ",
                                    "value": "2610",
                                    "title": "УЧТЕПА ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "БЕКТЕМИР ТУМАНИ ДСИ",
                                    "value": "2611",
                                    "title": "БЕКТЕМИР ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИХАЁТ ТУМАНИ ДСИ",
                                    "value": "2612",
                                    "title": "ЯНГИХАЁТ ТУМАНИ ДСИ",
                                    "filter": "26",
                                    "description": null
                                },
                                {
                                    "name": "БЕКОБОД ТУМАНИ ДСИ",
                                    "value": "2701",
                                    "title": "БЕКОБОД ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "БУКА ТУМАНИ ДСИ",
                                    "value": "2702",
                                    "title": "БУКА ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "БУСТОНЛИК ТУМАНИ ДСИ",
                                    "value": "2703",
                                    "title": "БУСТОНЛИК ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЗАНГИОТА ТУМАНИ ДСИ",
                                    "value": "2704",
                                    "title": "ЗАНГИОТА ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЮКОРИЧИРЧИК ТУМАНИ ДСИ",
                                    "value": "2705",
                                    "title": "ЮКОРИЧИРЧИК ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "КИБРАЙ ТУМАНИ ДСИ",
                                    "value": "2706",
                                    "title": "КИБРАЙ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ОККУРГОН ТУМАНИ ДСИ",
                                    "value": "2707",
                                    "title": "ОККУРГОН ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ОХАНГАРОН ТУМАНИ ДСИ",
                                    "value": "2708",
                                    "title": "ОХАНГАРОН ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ПАРКЕНТ ТУМАНИ ДСИ",
                                    "value": "2709",
                                    "title": "ПАРКЕНТ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ПСКЕНТ ТУМАНИ ДСИ",
                                    "value": "2710",
                                    "title": "ПСКЕНТ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ТОШКЕНТ ТУМАНИ ДСИ",
                                    "value": "2711",
                                    "title": "ТОШКЕНТ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "УРТАЧИРЧИК ����УМАНИ ДСИ",
                                    "value": "2712",
                                    "title": "УРТАЧИРЧИК ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЧИНОЗ ТУМАНИ ДСИ",
                                    "value": "2713",
                                    "title": "ЧИНОЗ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "КУЙИЧИРЧИК ТУМАНИ ДСИ",
                                    "value": "2714",
                                    "title": "КУЙИЧИРЧИК ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИЙУЛ ТУМАНИ ДСИ",
                                    "value": "2715",
                                    "title": "ЯНГИЙУЛ ТУМАНИ ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "НГРЕН ШАХАР ДСИ",
                                    "value": "2716",
                                    "title": "НГРЕН ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "БЕКОБОД ШАХАР ДСИ",
                                    "value": "2717",
                                    "title": "БЕКОБОД ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ОЛМАЛИК ШАХАР ДСИ",
                                    "value": "2718",
                                    "title": "ОЛМАЛИК ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ОХАНГАРОН ШАХАР ДСИ",
                                    "value": "2719",
                                    "title": "ОХАНГАРОН ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЧИРЧИК ШАХАР ДСИ",
                                    "value": "2720",
                                    "title": "ЧИРЧИК ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИЙУЛ ШАХАР ДСИ",
                                    "value": "2722",
                                    "title": "ЯНГИЙУЛ ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "НУРАФШОН ШАХАР ДСИ",
                                    "value": "2723",
                                    "title": "НУРАФШОН ШАХАР ДСИ",
                                    "filter": "27",
                                    "description": null
                                },
                                {
                                    "name": "КУВАСОЙ ШАХАР ДСИ",
                                    "value": "3001",
                                    "title": "КУВАСОЙ ШАХАР ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "КУКОН ШАХАР ДСИ",
                                    "value": "3003",
                                    "title": "КУКОН ШАХАР ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "МАРГИЛОН ШАХАР ДСИ",
                                    "value": "3004",
                                    "title": "МАРГИЛОН ШАХАР ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ФАРГОНА ШАХАР ДСИ",
                                    "value": "3005",
                                    "title": "ФАРГОНА ШАХАР ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "БЕШАРИК ТУМАНИ ДСИ",
                                    "value": "3006",
                                    "title": "БЕШАРИК ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "БОГДОД ТУМАНИ ДСИ",
                                    "value": "3007",
                                    "title": "БОГДОД ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "БУВАЙДА ТУМАНИ ДСИ",
                                    "value": "3008",
                                    "title": "БУВАЙДА ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ДАНГАРА ТУМАНИ ДСИ",
                                    "value": "3009",
                                    "title": "ДАНГАРА ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ЁЗЁВОН ТУМАНИ ДСИ",
                                    "value": "3010",
                                    "title": "ЁЗЁВОН ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "КУВА ТУМАНИ ДСИ",
                                    "value": "3011",
                                    "title": "КУВА ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ОЛТИАРИК ТУМАНИ ДСИ",
                                    "value": "3012",
                                    "title": "ОЛТИАРИК ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "КУШТЕПА ТУМАНИ ДСИ",
                                    "value": "3013",
                                    "title": "КУШТЕПА ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "РИШТОН ТУМАНИ ДСИ",
                                    "value": "3014",
                                    "title": "РИШТОН ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "СУХ ТУМАНИ ДСИ",
                                    "value": "3015",
                                    "title": "СУХ ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ТОШЛОК ТУМАНИ ДСИ",
                                    "value": "3016",
                                    "title": "ТОШЛОК ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "УЗБЕКИСТОН ТУМАНИ ДСИ",
                                    "value": "3017",
                                    "title": "УЗБЕКИСТОН ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "УЧКУПРИК ТУМАНИ ДСИ",
                                    "value": "3018",
                                    "title": "УЧКУПРИК ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ФАРГОНА ТУМАНИ ДСИ",
                                    "value": "3019",
                                    "title": "ФАРГОНА ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "ФУРКАТ ТУМАНИ ДСИ",
                                    "value": "3020",
                                    "title": "ФУРКАТ ТУМАНИ ДСИ",
                                    "filter": "30",
                                    "description": null
                                },
                                {
                                    "name": "УРГАНЧ ШАХАР ДСИ",
                                    "value": "3301",
                                    "title": "УРГАНЧ ШАХАР ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ХИВА ШАХАР ДСИ",
                                    "value": "3302",
                                    "title": "ХИВА ШАХАР ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ПИТНАК ШАХАР ДСИ",
                                    "value": "3303",
                                    "title": "ПИТНАК ШАХАР ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "УРГАНЧ ТУМАНИ ДСИ",
                                    "value": "3304",
                                    "title": "УРГАНЧ ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ХИВА ТУМАНИ ДСИ",
                                    "value": "3305",
                                    "title": "ХИВА ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ХАЗОРАСП ТУМАНИ ДСИ",
                                    "value": "3306",
                                    "title": "ХАЗОРАСП ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ГУРЛАН ТУМАНИ ДСИ",
                                    "value": "3307",
                                    "title": "ГУРЛАН ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ШОВОТ ТУМАНИ ДСИ",
                                    "value": "3308",
                                    "title": "ШОВОТ ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИАРИК ТУМАНИ ДСИ",
                                    "value": "3309",
                                    "title": "ЯНГИАРИК ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "КУШКУПИР ТУМАНИ ДСИ",
                                    "value": "3310",
                                    "title": "КУШКУПИР ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "БОГОТ ТУМАНИ ДСИ",
                                    "value": "3311",
                                    "title": "БОГОТ ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ХОНКА ТУМАНИ ДСИ",
                                    "value": "3312",
                                    "title": "ХОНКА ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИБОЗОР ТУМАНИ ДСИ",
                                    "value": "3313",
                                    "title": "ЯНГИБОЗОР ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "ТУПРОККАЛЪА ТУМАНИ ДСИ",
                                    "value": "3314",
                                    "title": "ТУПРОККАЛЪА ТУМАНИ ДСИ",
                                    "filter": "33",
                                    "description": null
                                },
                                {
                                    "name": "НУКУС ШАХАР ДСИ",
                                    "value": "3501",
                                    "title": "НУКУС ШАХАР ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "АМУДАРЁ ТУМАНИ ДСИ",
                                    "value": "3508",
                                    "title": "АМУДАРЁ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "БЕРУНИЙ ТУМАНИ ДСИ",
                                    "value": "3509",
                                    "title": "БЕРУНИЙ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "БУЗАТОВ ТУМАНИ ДСИ",
                                    "value": "3510",
                                    "title": "БУЗАТОВ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "КЕГЕЙЛИ ТУМАНИ ДСИ",
                                    "value": "3511",
                                    "title": "КЕГЕЙЛИ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "КУНГИРОТ ТУМАНИ ДСИ",
                                    "value": "3512",
                                    "title": "КУНГИРОТ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "КОНЛИКУЛ ТУМАНИ ДСИ",
                                    "value": "3513",
                                    "title": "КОНЛИКУЛ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "МУЙНОК ТУМАНИ ДСИ",
                                    "value": "3514",
                                    "title": "МУЙНОК ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "НУКУС ТУМАНИ ДСИ",
                                    "value": "3515",
                                    "title": "НУКУС ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ТАХТАКУПИР ТУМАНИ ДСИ",
                                    "value": "3516",
                                    "title": "ТАХТАКУПИР ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ТУРТКУЛ ТУМАНИ ДСИ",
                                    "value": "3517",
                                    "title": "ТУРТКУЛ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ХУЖАЙЛИ ТУМАНИ ДСИ",
                                    "value": "3518",
                                    "title": "ХУЖАЙЛИ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ЧИМБОЙ ТУМАНИ ДСИ",
                                    "value": "3519",
                                    "title": "ЧИМБОЙ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ШУМАНАЙ ТУМАНИ ДСИ",
                                    "value": "3520",
                                    "title": "ШУМАНАЙ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ЭЛЛИККАЛА ТУМАНИ ДСИ",
                                    "value": "3521",
                                    "title": "ЭЛЛИККАЛА ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "КОРАУЗАК ТУМАНИ ДСИ",
                                    "value": "3522",
                                    "title": "КОРАУЗАК ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "ТАХИАТОШ ТУМАНИ ДСИ",
                                    "value": "3523",
                                    "title": "ТАХИАТОШ ТУМАНИ ДСИ",
                                    "filter": "35",
                                    "description": null
                                },
                                {
                                    "name": "АНДИЖОН ТУМАНИ ДСИ",
                                    "value": "0307",
                                    "title": "АНДИЖОН ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "АНДИЖОН ШАХАР ДСИ",
                                    "value": "0301",
                                    "title": "АНДИЖОН ШАХАР ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "АСАКА ТУМАНИ ДСИ",
                                    "value": "0315",
                                    "title": "АСАКА ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "БАЛИКЧИ ТУМАНИ ДСИ",
                                    "value": "0308",
                                    "title": "БАЛИКЧИ ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "БУЛОКБОШИ ТУМАНИ ДСИ",
                                    "value": "0310",
                                    "title": "БУЛОКБОШИ ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "БУСТОН ТУМАНИ ДСИ",
                                    "value": "0309",
                                    "title": "БУСТОН ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ЖАЛОЛКУДУК ТУМАНИ ДСИ",
                                    "value": "0311",
                                    "title": "ЖАЛОЛКУДУК ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ИЗБОСКАН ТУМАНИ ДСИ",
                                    "value": "0312",
                                    "title": "ИЗБОСКАН ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "КОРАСУВ ШАХАР ДСИ",
                                    "value": "0305",
                                    "title": "КОРАСУВ ШАХАР ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "КУРГОНТЕПА ТУМАНИ ДСИ",
                                    "value": "0314",
                                    "title": "КУРГОНТЕПА ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "МАРХАМАТ ТУМАНИ ДСИ",
                                    "value": "0316",
                                    "title": "МАРХАМАТ ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ОЛТИНКУЛ ТУМАНИ ДСИ",
                                    "value": "0306",
                                    "title": "ОЛТИНКУЛ ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ПАХТАОБОД ТУМАНИ ДСИ",
                                    "value": "0318",
                                    "title": "ПАХТАОБОД ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "УЛУГНОР ТУМАНИ ДСИ",
                                    "value": "0313",
                                    "title": "УЛУГНОР ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ХОНОБОД ШАХАР ДСИ",
                                    "value": "0303",
                                    "title": "ХОНОБОД ШАХАР ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ХУЖАОБОД ТУМАНИ ДСИ",
                                    "value": "0319",
                                    "title": "ХУЖАОБОД ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "ШАХРИХОН ТУМАНИ ДСИ",
                                    "value": "0317",
                                    "title": "ШАХРИХОН ТУМАНИ ДСИ",
                                    "filter": "03",
                                    "description": null
                                },
                                {
                                    "name": "БУХОРО ТУМАНИ ДСИ",
                                    "value": "0605",
                                    "title": "БУХОРО ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "БУХОРО ШАХАР ДСИ",
                                    "value": "0601",
                                    "title": "БУХОРО ШАХАР ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ВОБКЕНТ ТУМАНИ ДСИ",
                                    "value": "0606",
                                    "title": "ВОБКЕНТ ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ГИЖДУВОН ТУМАНИ ДСИ",
                                    "value": "0607",
                                    "title": "ГИЖДУВОН ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ЖОНДОР ТУМАНИ ДСИ",
                                    "value": "0608",
                                    "title": "ЖОНДОР ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "КОГОН ТУМАНИ ДСИ",
                                    "value": "0609",
                                    "title": "КОГОН ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "КОГОН ШАХАР ДСИ",
                                    "value": "0603",
                                    "title": "КОГОН ШАХАР ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "КОРАКУЛ ТУМАНИ ДСИ",
                                    "value": "0610",
                                    "title": "КОРАКУЛ ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "КОРОВУЛБОЗОР ТУМ. ДСИ",
                                    "value": "0614",
                                    "title": "КОРОВУЛБОЗОР ТУМ. ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ОЛОТ ТУМАНИ ДСИ",
                                    "value": "0604",
                                    "title": "ОЛОТ ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ПЕШКУ ТУМАНИ ДСИ",
                                    "value": "0611",
                                    "title": "ПЕШКУ ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "РОМИТАН ТУМАНИ ДСИ",
                                    "value": "0612",
                                    "title": "РОМИТАН ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "ШОФИРКОН ТУМАНИ ДСИ",
                                    "value": "0613",
                                    "title": "ШОФИРКОН ТУМАНИ ДСИ",
                                    "filter": "06",
                                    "description": null
                                },
                                {
                                    "name": "АРНАСОЙ ТУМАНИ ДСИ",
                                    "value": "0801",
                                    "title": "АРНАСОЙ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "БАХМАЛ ТУМАНИ ДСИ",
                                    "value": "0802",
                                    "title": "БАХМАЛ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ГАЛЛАОРОЛ ТУМАНИ ДСИ",
                                    "value": "0803",
                                    "title": "ГАЛЛАОРОЛ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ДУСТЛИК ТУМАНИ ДСИ",
                                    "value": "0805",
                                    "title": "ДУСТЛИК ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЖИЗЗАХ ТУМАНИ ДСИ",
                                    "value": "0804",
                                    "title": "ЖИЗЗАХ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЖИЗЗАХ ШАХАР ДСИ",
                                    "value": "0812",
                                    "title": "ЖИЗЗАХ ШАХАР ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЗАРБДОР ТУМАНИ ДСИ",
                                    "value": "0806",
                                    "title": "ЗАРБДОР ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЗАФАРОБОД ТУМАНИ ДСИ",
                                    "value": "0808",
                                    "title": "ЗАФАРОБОД ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЗОМИН ТУМАНИ ДСИ",
                                    "value": "0807",
                                    "title": "ЗОМИН ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "МИРЗАЧУЛ ТУМАНИ ДСИ",
                                    "value": "0809",
                                    "title": "МИРЗАЧУЛ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ПАХТАКОР ТУМАНИ ДСИ",
                                    "value": "0810",
                                    "title": "ПАХТАКОР ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ФОРИШ ТУМАНИ ДСИ",
                                    "value": "0811",
                                    "title": "ФОРИШ ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                },
                                {
                                    "name": "ЯНГИОБОД ТУМАНИ ДСИ",
                                    "value": "0813",
                                    "title": "ЯНГИОБОД ТУМАНИ ДСИ",
                                    "filter": "08",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "areas",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "number",
                            "name": "taxno",
                            "replace": null,
                            "title": "PINFL",
                            "type": "text",
                            "optional": true,
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "PINFL 14 ta raqamdan iborat va noldan boshlanmasligi kerak",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "налог",
                    "солик",
                    "юр лица",
                    "оплата",
                    "soliq",
                    "jismoniy",
                    "to'lov",
                    "yfkju",
                    "ыщдшй",
                    "гнк"
                ],
                "weight": 0.0005245800473961357,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5cc695da22bd225c35f53ef3",
                "paycom_id": "60939c088ad987025c60653a",
                "name": "ГТК",
                "organization": "Государственный Таможенный Комитет",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/daaf5f53034564c8c07e3a542f2479f2f8bd7a7c.png",
                "date": 1556518683986,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "gtk",
                            "title": "DBQ bo'limi",
                            "type": "select",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "Toshkent Aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "12",
                                    "title": "Toshkent shahri",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "13",
                                    "title": "Toshkent viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "03",
                                    "title": "Andijon viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "04",
                                    "title": "Buxoro viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "05",
                                    "title": "Jizzax viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "06",
                                    "title": "Qashqadaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "07",
                                    "title": "Navoiy viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "08",
                                    "title": "Namangan viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "09",
                                    "title": "Samarqand viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10",
                                    "title": "Surxondaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "11",
                                    "title": "Sirdaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "14",
                                    "title": "Farg'ona viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "15",
                                    "title": "Xorazm viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "Qoraqalpog'iston Respublikasi",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "validation": "^[0-9]{2}$",
                            "validation_error": "Ошибка в коде ГТК",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "name": "fio",
                            "title": "FISh",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "validation": null,
                            "validation_error": "Ошибка в ФИО",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "pinfl",
                            "title": "PINFL",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "optional": true,
                            "scan": null,
                            "validation": "^([1-9]{1}[0-9]{13})$",
                            "validation_error": "PINFL 14 ta raqamdan iborat va noldan boshlanmasligi kerak",
                            "error": null,
                            "placeholder": "",
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "customs",
                    "bojxona",
                    "bojhona",
                    "tamojnya",
                    "nfvj;yz",
                    "таможня",
                    "таможенная",
                    "гтк",
                    "dbq",
                    "scc",
                    "пошлина",
                    "божхона"
                ],
                "weight": 0.00038437922614214165,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f76c360c7658745c837a1ab",
                "paycom_id": "609290e88ad987025c60643b",
                "name": "Гос.инспекция по карантину растений",
                "organization": "Государственная инспекция по карантину растений при КМ РУз",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/5cf64caa3ed0b785150316bd.png",
                "date": 1601619119772,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 400000000
                    },
                    "account": [
                        {
                            "name": "payment_type",
                            "title": "To`lov turi",
                            "content": "text",
                            "type": "select",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "Karantin ruxsatnomasini ro'yxatdan o'tkazish uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "Karantin nazorati to'g'risidagi qonun chiqarilishi uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "03",
                                    "title": "Payment for the act of disinfection (fumigation)",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "04",
                                    "title": "Fitosanitariya sertifikati uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "05",
                                    "title": "Ichki fitosanitariya sertifikati uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "06",
                                    "title": "Laboratoriya tekshiruvi/ekspertizasini o'tkazish uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "07",
                                    "title": "Ro'yxatga olish guvohnomasi uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "08",
                                    "title": "Faoliyatni litsenziyalash uchun to'lov",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "validation_error": "Ошибка в типе оплаты",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "name": "agreement",
                            "title": "Ofyorta shartnoma raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{11}$",
                            "validation_error": "Ошибка в номере договора оферты",
                            "visible": null,
                            "placeholder": "",
                            "scan": "CODE_128",
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "quarantine",
                    "karantin",
                    "карантин",
                    "лфкфтешт",
                    "йгфкфтешту",
                    "rfhfynby",
                    "штрафы",
                    "jarima",
                    "жарима"
                ],
                "additional_info": true,
                "weight": 0.00027542798552909807,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "611fa63fea393e31c8944d35",
                "paycom_id": "611fa3d4ea393e31c8944d2e",
                "name": "ГТК",
                "organization": "Государственный Таможенный Комитет",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/570bc33feb13b691c7503e8b01073ff2951829db.png",
                "date": 1556518683986,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "gtk",
                            "title": "DBQ bo'limi",
                            "type": "select",
                            "values": [
                                {
                                    "value": "01",
                                    "title": "Toshkent Aeroporti",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "12",
                                    "title": "Toshkent shahri",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "13",
                                    "title": "Toshkent viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "03",
                                    "title": "Andijon viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "04",
                                    "title": "Buxoro viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "05",
                                    "title": "Jizzax viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "06",
                                    "title": "Qashqadaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "07",
                                    "title": "Navoiy viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "08",
                                    "title": "Namangan viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "09",
                                    "title": "Samarqand viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "10",
                                    "title": "Surxondaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "11",
                                    "title": "Sirdaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "14",
                                    "title": "Farg'ona viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "15",
                                    "title": "Xorazm viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "value": "02",
                                    "title": "Qoraqalpog'iston Respublikasi",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "validation": "^[0-9]{2}$",
                            "validation_error": "Ошибка в коде ГТК",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "name": "name",
                            "title": "Ismi",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "validation": null,
                            "validation_error": "Ошибка в названии",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "inn",
                            "title": "INN",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "validation": "^[0-9]{9}$",
                            "validation_error": "Ошибка в ИНН",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "customs",
                    "bojxona",
                    "bojhona",
                    "tamojnya",
                    "nfvj;yz",
                    "таможня",
                    "таможенная",
                    "гтк",
                    "dbq",
                    "scc",
                    "пошлина",
                    "божхона"
                ],
                "weight": 0.00025600257053607484,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5e8af4e9ea132f608a8fae90",
                "paycom_id": "60939cf15d157d44f1e302b8",
                "name": "Intellektual mulk",
                "organization": "ГУП «Intellektual mulk agentligi»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/95510ff08ef437dbd92f2fb7bfbe997723b8ea3f.png",
                "date": 1586165024151,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "To`lovchi invoys raqami",
                            "content": "text",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9]{14}$",
                            "validation_error": "Ошибка в значении инвойса",
                            "error": null,
                            "placeholder": "",
                            "prefix": null,
                            "replace": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ima",
                    "има",
                    "шьф",
                    "bvf",
                    "intellektual",
                    "mulk",
                    "agent",
                    "patent",
                    "интеллект",
                    "патент"
                ],
                "weight": 0.00018074081776117308,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d7762ea3ba57f5609c855fb",
                "paycom_id": "6093bd8d5d157d44f1e3030c",
                "name": "ГУБДД Тонировка",
                "organization": "Главное управление безопасности дорожного движения",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/mvd-tinting.png",
                "date": 1568105330493,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": "CODE_128",
                            "validation": "^\\d{14}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "гаи",
                    "тонировка",
                    "dan",
                    "yhxb",
                    "jarima",
                    "пошлина",
                    "tonirovka",
                    "qoraytirish",
                    "водитель",
                    "машина",
                    "мошина",
                    "mashina",
                    "moshina",
                    "xaydovchi",
                    "haydovchi",
                    "gai",
                    "gubdd"
                ],
                "weight": 0.00016525679131745887,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60ab4008c8c10554a133f7bf",
                "paycom_id": "608b99530670cb7d044c2067",
                "name": "Ўзагроинспекция",
                "organization": "ГУП «Ўзагроинспекция (г.Ташкент)»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/2b93dd6434df272309bff535b344c1a53a76f359.png",
                "date": 1621835737490,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "invoice_id",
                            "placeholder": "",
                            "replace": null,
                            "title": "Invoys ID",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "агроинспекция",
                    "agroinspekciya",
                    "государственные услуги",
                    "davlat xizmatlari",
                    "Ўpfuhjbycgtrwbz",
                    "Agroinspeksiya"
                ],
                "weight": 0.000035190969190259556,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f43be553813f7df2e071b51",
                "paycom_id": "622b169e2345ff0f4833d0af",
                "name": "Qo'riqlash xizmati",
                "organization": "ГУП «Ўзбекистон Республикаси Миллий гвардияси Тошкент шаҳар Қўриқлаш бошқармаси»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/12a9e0107e386377891c47f0df185cb45d7f049c.png",
                "date": 1598275157086,
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
                            "name": "console_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pult raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "qo'riqlash xizmati",
                    "охрана",
                    "qoriqlash",
                    "Сервис безопасности",
                    "Ўзбекистон Республикаси Миллий гвардияси"
                ],
                "weight": 0.000026182081077553106,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f9661e6ea62ccfa6119cd93",
                "paycom_id": "5f92c0bd740f35d3638a8555",
                "name": "CHEGARA VETERINARIYA NAZORATI",
                "organization": "ГУП «Davlat chegarasi va transportda davlat veterinariya nazorati boshqarmasi»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/56837da288efaed0c22e6defdf6a77063998014f.png",
                "date": 1603690982404,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "contract_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hisob-faktura raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "INN",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "STIR",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "государственный ветеринарный контроль на транспорте",
                    "ветеренарный контроль",
                    "chegara veterinariya nazorati",
                    "davlat chegarasi va transportda davlat veterinariya nazorati boshqarmasi"
                ],
                "weight": 0.000017830091056398174,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60000b2e84bdb89f3c126d58",
                "paycom_id": "6093c7fd5d157d44f1e30345",
                "name": "Оплата членских взносов Ассоциации \"Хунарманд\" РУз",
                "organization": "Оплата членских взносов Ассоциации \"Хунарманд\" РУз",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/f97cf31ef16a16af5feb76005f1f4932429e5227.png",
                "date": 1610615598841,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "invoice",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invoys",
                            "type": "text",
                            "validation": "^.{10,14}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "хунарманд",
                    "[eyfhvfyl",
                    "хунарманд",
                    "Ассоциации Хунарманд"
                ],
                "weight": 0.000014827128352162692,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60b0e0e5b8d597ed134db497",
                "paycom_id": "60b0dfa97852bd0ebce2bc32",
                "name": "MILLIY GVARDIYASI FARG'ONA",
                "organization": "ГУП «O`ZBEKISTON RESPUBLIKASI MILLIY GVARDIYASI FARG'ONA VILOYATI  QO`RIQLASH BOSHQARMASI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/64dbe360956e5bd57588067cd07ca7feebbd396e.png",
                "date": 1622204645737,
                "terminal": {
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
                            "name": "adres",
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
                    "farg'ona viloyati milliy gvardiyasi",
                    "фаргона вилояти миллий гвардияси",
                    "афкпщтф",
                    "fargona viloyati milliy gvardiyasi",
                    "afhujyf",
                    "гвардия",
                    "милий",
                    "milliy",
                    "gvardiya",
                    "пмфквшнф"
                ],
                "weight": 0.000012481063739478722,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "600141c084bdb89f3c126eb2",
                "paycom_id": "600137038c0dbba78b3722d3",
                "name": "VETERINARIYA VA CHORVACHILIKNI RIVOJLANTIRISH DAVLAT QO'MITASI",
                "organization": "ГУП «O'zbekiston Respublikasi Veterinariya va chorvachilikni rivojlantirish davlat qo'mitasi»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/e7cd70ec914d7647c02b16b7ca5fa4506ec6b271.png",
                "date": 1610695104104,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 99999999900,
                        "require": "nominal"
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "tin_payers",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lovchining raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "name": "nominal",
                            "title": "To'lov:",
                            "require": null,
                            "type": "select",
                            "prefix": null,
                            "replace": null,
                            "validation": null,
                            "placeholder": "",
                            "values": [
                                {
                                    "value": "1",
                                    "amount": 34000000,
                                    "title": "Veterinariya ruxsatnomasi narxi",
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
                    "veterinariya",
                    "dtnthbyfhbz",
                    "ветеринария",
                    "муеукштфкшнф",
                    "Ozbekiston Respublikasi Veterinariya",
                    "комитет ветеринарии",
                    "Государственный комитет ветеринарии и развития животноводства Республики Узбекистан"
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
                "_id": "60b0da44b8d597ed134db47f",
                "paycom_id": "60b0d9df7852bd0ebce2bb76",
                "name": "QORAQALPOG`ISTON MILLIY GVARDIYA",
                "organization": "ГУП «O`ZBEKISTON RESPUBLIKASI MILLIY GVARDIYASI QORAQALPOG`ISTON RESPUBLIKASI QO'RIQLASH BOSHQARMASI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/5e4942d472239cf9210a80fbac89a57e9ce19317.png",
                "date": 1622202948315,
                "terminal": {
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
                            "name": "adres",
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
                            "name": "account",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Masofadan boshqarish pulti raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "qoraqalpog`iston milliy gvardiya",
                    "каракалпакистон милий гвардия",
                    "милий гвардия",
                    "MILLIY GVARDIYA  QORAQALPOGISTON",
                    "милий гвардия каралпакистон"
                ],
                "weight": 0.000006944351253544552,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60191c2484bdb89f3c1279c4",
                "paycom_id": "6017a2575a08a5dda9448fa0",
                "name": "MILLIY GVARDIYA NAVOIY",
                "organization": "ГУП «\"O`ZBEKISTON RESPUBLIKASI MILLIY GVARDIYASI QO`RIQLASH BOSHQARMASI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/439813c4ddfd34e1e6583217491403ad39f36127.png",
                "date": 1612258340151,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "FULL_NAME",
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
                            "name": "type",
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
                    "миллий",
                    "гвардия",
                    "milliy",
                    "gvardiya",
                    "национальная гвардия навои"
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
                "_id": "60d5cb270a40376aa994a2ac",
                "paycom_id": "60afa3ec7852bd0ebce2a261",
                "name": "MILLIY GVARDIYA ANDIJON",
                "organization": "ГУП «O'zbekiston respublikasi milliy gvardiyasi Andijon viloyati qo'riqlash boshqarmasi»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/79ad7ca0448ded1469c4c0e82adfe49ea1a84836.png",
                "date": 1624623911223,
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
                            "title": "F.I.Sh",
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
                            "name": "adres",
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
                            "name": "remote_control",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pultning raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "o'zbekiston respublikasi milliy gvardiyasi",
                    "andijon viloyati qo'riqlash boshqarmasi",
                    "госуслуги и штрафы гаи",
                    "управление охраны андижанской области",
                    "национальная гвардия",
                    "гвардия"
                ],
                "weight": 0.000004504444056353223,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65dd8a4888f9930638b5a254",
                "paycom_id": "65cdda2a3c319dec9d8b13df",
                "name": "Экспертиза градостроительных документов",
                "organization": " «\"SHAHARSOZLIK HUJJATLARINI EKSPERTIZA QILISH RESPUBLIKA MARKAZI\" DM»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/c49570969b2fa1911747a13a0acb29d7faaf523d.png",
                "date": 1709017672503,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "magnet": true,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "invoice",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invoice raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "'rcgthnbpf",
                    "ekspertiza",
                    "expertiza",
                    "експертиза",
                    "экспертиза",
                    "Экспертиза градостроительных документов",
                    "Shaharsozlik hujjatlari ekspertizasi"
                ],
                "additional_info": true,
                "weight": 0.0000039413885493090696,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f97ca68ea62ccfa6119ceb8",
                "paycom_id": "5f97c9b7740f35d3638ac8dc",
                "name": " \"O'ZBEKISTON RESPUBLIKASI ADLIYA VAZIRLIGI HUZURIDAGI X.S.S",
                "organization": "ГУП « \"O'ZBEKISTON RESPUBLIKASI ADLIYA VAZIRLIGI HUZURIDAGI X.S.S»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/ce5b3f9ebaa5ab4fe736030bdf3baa8888e23ffe.png",
                "date": 1603783272410,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "name",
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
                    "адлия",
                    "экспертиза",
                    "ekspertiza",
                    "adliya"
                ],
                "weight": 0.000003472175626772276,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "614c565bcfeca453b4a00f65",
                "paycom_id": "6149dc9fe6fc5d3af2defc65",
                "name": "O'ZARXIV AGENTLIGI",
                "organization": "ГУП «O`ZBEKISTON RESPUBLIKASI \"O`ZARXIV\" AGENTLIGI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/fe2e066b4b64592e1eade3bae0832ec9f68f2a5c.png",
                "date": 1632392795842,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "city_region",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shahar/Viloyat",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Андижанская область",
                                    "value": "Andijan",
                                    "title": "Андижанская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухарская область",
                                    "value": "Bukhara",
                                    "title": "Бухарская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Джизакская область",
                                    "value": "Jizzak",
                                    "title": "Джизакская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Кашкадарьинская область",
                                    "value": "Kashkadarya",
                                    "title": "Кашкадарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навоийская область",
                                    "value": "Navoi",
                                    "title": "Навоийская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманганская область",
                                    "value": "Namangan",
                                    "title": "Наманганская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самаркандская область",
                                    "value": "Samarkand",
                                    "title": "Самаркандская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхандарьинская область",
                                    "value": "Surkhandarya",
                                    "title": "Сурхандарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сырдарьинская область",
                                    "value": "Syrdarya",
                                    "title": "Сырдарьинская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "Tashkent_region",
                                    "title": "Ташкентская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ферганская область",
                                    "value": "Fergana",
                                    "title": "Ферганская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хорезмская область",
                                    "value": "Khorezm",
                                    "title": "Хорезмская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Республика Каракалпакстан",
                                    "value": "Karakalpakstan",
                                    "title": "Республика Каракалпакстан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Город Ташкент",
                                    "value": "Tashkent",
                                    "title": "Город Ташкент",
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tuman",
                            "type": "select",
                            "validation": null,
                            "optional": true,
                            "require": "city_region",
                            "values": [
                                {
                                    "name": "Andijon viloyat davlat arxivi",
                                    "value": "andijon_viloyat",
                                    "title": "Andijon viloyat davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Asaka tuman davlat arxivi",
                                    "value": "Asaka_tuman",
                                    "title": "Asaka tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Izboskan tuman davlat arxivi",
                                    "value": "Izboskan_tuman",
                                    "title": "Izboskan tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Marhamat tuman davlat arxivi",
                                    "value": "Marhamat_tuman",
                                    "title": "Marhamat tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Oltinko‘l tuman davlat arxivi",
                                    "value": "Oltinkol_tuman",
                                    "title": "Oltinko‘l tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Shahrixon tuman davlat arxivi",
                                    "value": "Shahrixon_tuman",
                                    "title": "Shahrixon tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Qo’rgontepa tuman davlat arxivi",
                                    "value": "Qorgontepa_tuman",
                                    "title": "Qo’rgontepa tuman davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Andijon viloyat shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Andijon_viloyat_shaxsiy",
                                    "title": "Andijon viloyat shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Andijon shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Andijon_shahar_shaxsiy",
                                    "title": "Andijon shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Andijon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Andijon_tuman_shaxsiy",
                                    "title": "Andijon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Asaka tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Asaka_tuman_shaxsiy",
                                    "title": "Asaka tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Baliqchi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Baliqchi_tuman_shaxsiy",
                                    "title": "Baliqchi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Buloqboshi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Buloqboshi_tuman_shaxsiy",
                                    "title": "Buloqboshi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Bo‘ston tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Boston_tuman_shaxsiy",
                                    "title": "Bo‘ston tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Jalaquduq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Jalaquduq_tuman_shaxsiy",
                                    "title": "Jalaquduq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Izboskan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Izboskan_tuman_shaxsiy",
                                    "title": "Izboskan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Marhamat tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Marhamat_tuman_shaxsiy",
                                    "title": "Marhamat tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Oltinko‘l tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Oltinkol_tuman_shaxsiy",
                                    "title": "Oltinko‘l tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Ulug’nor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Ulugnor_tuman_shaxsiy",
                                    "title": "Ulug’nor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Paxtaobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Paxtaobod_tuman_shaxsiy",
                                    "title": "Paxtaobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Xo’jaobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Xojaobod_tuman_shaxsiy",
                                    "title": "Xo’jaobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Shahrixon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Shahrixon_tuman_shaxsiy",
                                    "title": "Shahrixon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Qo’rg’ontepa tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qorgontepa_tumani_shaxsiy",
                                    "title": "Qo’rg’ontepa tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Andijan",
                                    "description": null
                                },
                                {
                                    "name": "Jondor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Jondor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Jondor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Buxoro tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Buxoro_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Buxoro tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Peshku tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Peshku_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Peshku tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Buxoro shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Buxoro_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Buxoro shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Vobkent tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Vobkent_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Vobkent tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Romitan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Romitan_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Romitan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Olot tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Olot_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Olot tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Qorakul tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qorakul_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qorakul tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Buxoro viloyat arxiv ishi xududiy boshqarmasi",
                                    "value": "Buxoro_viloyat_arxiv_ishi_xududiy_boshqarmasi",
                                    "title": "Buxoro viloyat arxiv ishi xududiy boshqarmasi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Buxoro viloyat davlat arxivi",
                                    "value": "Buxoro_viloyat_davlat_arxivi",
                                    "title": "Buxoro viloyat davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Buxoro tuman davlat arxivi",
                                    "value": "Buxoro_tuman_davlat_arxivi",
                                    "title": "Buxoro tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Коgon shahar davlat arxivi",
                                    "value": "Kogon_shahar_davlat_arxivi",
                                    "title": "Коgon shahar davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Jondor tuman davlat arxivi",
                                    "value": "Jondor_tuman_davlat_arxivi",
                                    "title": "Jondor tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Vobkent tuman davlat arxivi",
                                    "value": "Vobkent_tuman_davlat_arxivi",
                                    "title": "Vobkent tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Olot tuman davlat arxivi",
                                    "value": "Olot_tuman_davlat_arxivi",
                                    "title": "Olot tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Gijduvon tuman davlat arxivi",
                                    "value": "Gijduvon_tuman_davlat_arxivi",
                                    "title": "Gijduvon tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Peshko` tuman davlat arxivi",
                                    "value": "Peshko_tuman_davlat_arxivi",
                                    "title": "Peshko` tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Qjrako‘l tuman davlat arxivi",
                                    "value": "Qjrakol_tuman_davlat_arxivi",
                                    "title": "Qjrako‘l tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Shofirkon tuman davlat arxivi",
                                    "value": "Shofirkon_tuman_davlat_arxivi",
                                    "title": "Shofirkon tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Qorovulbozor tuman davlat arxivi",
                                    "value": "Qorovulbozor_tuman_davlat_arxivi",
                                    "title": "Qorovulbozor tuman davlat arxivi",
                                    "filter": "Bukhara",
                                    "description": null
                                },
                                {
                                    "name": "Jizzax viloyat davlat arxivi",
                                    "value": "Jizzax_viloyat_davlat_arxivi",
                                    "title": "Jizzax viloyat davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "G‘allaorol tuman davlat arxivi",
                                    "value": "Gallaorol_tuman_davlat_arxivi",
                                    "title": "G‘allaorol tuman davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Jizzax viloyati Do‘stlik tuman Davlat arxivi",
                                    "value": "Jizzax_viloyati_Dostlik_tuman_davlat_arxivi",
                                    "title": "Jizzax viloyati Do‘stlik tuman Davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Sharof Rashidov tuman davlat arxivi",
                                    "value": "Sharof_Rashidov_tuman_davlat_arxivi",
                                    "title": "Sharof Rashidov tuman davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Zafarobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Zafarobod_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Zafarobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Jizzax shaxar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Jizzax_shaxar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Jizzax shaxar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Mirzachol tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Mirzachol_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Mirzachol tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Zomin tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Zomin_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Zomin tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Paxtakor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Paxtakor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Paxtakor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Baxmal tumani shaxsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Baxmal_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Baxmal tumani shaxsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "G'allaorol tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Gallaorol_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "G'allaorol tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Zarbdor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Zarbdor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Zarbdor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Arsanoy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Arsanoy_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Arsanoy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Sharof Rashidov tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Sharof_Rashidov_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Sharof Rashidov tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "G'uzor tuman davlat arxivi",
                                    "value": "Guzor_tuman_davlat_arxivi",
                                    "title": "G'uzor tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Koson tuman davlat arxivi",
                                    "value": "Koson_tuman_davlat_arxivi",
                                    "title": "Koson tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Muborak tuman davlat arxivi",
                                    "value": "Muborak_tuman_davlat_arxivi",
                                    "title": "Muborak tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Qarshi tuman davlat arxivi",
                                    "value": "Qarshi_tuman_davlat_arxivi",
                                    "title": "Qarshi tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Shahrisabz tuman davlat arxivi",
                                    "value": "Shahrisabz_tuman_davlat_arxivi",
                                    "title": "Shahrisabz tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Qarshi shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qarshi_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qarshi shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Qamashi shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qamashi_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qamashi shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Koson tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Koson_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Koson tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Kasbi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Kasbi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Kasbi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Nishon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Nishon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Nishon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Mirishkor tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Mirishkor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Mirishkor tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Qarshi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qarshi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qarshi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Chiroqchi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Chiroqchi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Chiroqchi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Yakkabog’ tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Yakkabog_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Yakkabog’ tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Shahrisabz shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Shahrisabz_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Shahrisabz shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Kitob tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Kitob_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Kitob tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Dehqonobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Dehqonobod_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Dehqonobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Qashqadaryo viloyat arxiv ishi hududiy boshqarmasi",
                                    "value": "Qashqadaryo_viloyat_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Qashqadaryo viloyat arxiv ishi hududiy boshqarmasi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Yakkabog` tuman davlat arxivi",
                                    "value": "Yakkabog_tuman_davlat_arxivi",
                                    "title": "Yakkabog` tuman davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Karmana tumani davlat arxivi",
                                    "value": "Karmana_tumani_davlat_arxivi",
                                    "title": "Karmana tumani davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Qiziltepa tumani davlat arxivi",
                                    "value": "Qiziltepa_tumani_davlat_arxivi",
                                    "title": "Qiziltepa tumani davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Navoiy viloyati davlat arxivi",
                                    "value": "Navoiy_viloyati_davlat_arxivi",
                                    "title": "Navoiy viloyati davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Zarafshon shahar davlat arxivi",
                                    "value": "Zarafshon_shahar_davla_arxivi",
                                    "title": "Zarafshon shahar davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Konimex tumani davlat arxivi",
                                    "value": "Konimex_tumani_davlat_arxivi",
                                    "title": "Konimex tumani davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Konimex tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Konimex_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Konimex tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Navbahor tumai shaxsiy hujjatlari davlat arxivi",
                                    "value": "Navbahor_tumai_shaxsiy_hujjatlari_davlat_arxivi",
                                    "title": "Navbahor tumai shaxsiy hujjatlari davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Nurota tumani davlat arxivi",
                                    "value": "Nurota_tumani_davlat_arxivi",
                                    "title": "Nurota tumani davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Tomdi tumani davlat arxivi",
                                    "value": "Tomdi_tumani_davlat_arxivi",
                                    "title": "Tomdi tumani davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "O’zbekiston Kinofotofono hujjatlari milliy arxivi",
                                    "value": "Ozbekiston_Kinofotofono_hujjatlari_milliy_arxivi",
                                    "title": "O’zbekiston Kinofotofono hujjatlari milliy arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Xatirchi tuman davlat arxivi",
                                    "value": "Xatirchi_tuman_davlat_arxivi",
                                    "title": "Xatirchi tuman davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Xatirchi tuman Shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Xatirchi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Xatirchi tuman Shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Navoiy viloyati arxiv ishi hududiy boshqarmasi",
                                    "value": "Navoiy_viloyati_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Navoiy viloyati arxiv ishi hududiy boshqarmasi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Navoiy shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Navoiy_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Navoiy shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Navoi",
                                    "description": null
                                },
                                {
                                    "name": "Uchqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Uchqorgon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Uchqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Chust tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Chust_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Chust tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "To'raqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Toraqorgon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "To'raqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Namangan viloyati arxiv ishi hududiy boshqarmasi",
                                    "value": "Namangan_viloyati_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Namangan viloyati arxiv ishi hududiy boshqarmasi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Kosonsoy tuman davlat arxivi",
                                    "value": "Kosonsoy_tuman_davlat_arxivi",
                                    "title": "Kosonsoy tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Mingbuloq tuman davlat arxivi",
                                    "value": "Mingbuloq_tuman_davlat_arxivi",
                                    "title": "Mingbuloq tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Norin tuman davlat arxivi",
                                    "value": "Norin_tuman_davlat_arxivi",
                                    "title": "Norin tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "To‘raqo‘rg‘on tuman davlat arxivi",
                                    "value": "Toraqorgon_tuman_davlat_arxivi",
                                    "title": "To‘raqo‘rg‘on tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Uychi tuman davlat arxivi",
                                    "value": "Uychi_tuman_davlat_arxivi",
                                    "title": "Uychi tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Uchqo‘rg‘on tuman davlat arxivi",
                                    "value": "Uchqorgon_tuman_davlat_arxivi",
                                    "title": "Uchqo‘rg‘on tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Chortoq tuman davlat arxivi",
                                    "value": "Chortoq_tuman_davlat_arxivi",
                                    "title": "Chortoq tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Chust tuman davlat arxivi",
                                    "value": "Chust_tuman_davlat_arxivi",
                                    "title": "Chust tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Yangiqo‘rg‘on tuman davlat arxivi",
                                    "value": "Yangiqorgon_tuman_davlat_arxivi",
                                    "title": "Yangiqo‘rg‘on tuman davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Namangan shaxar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Namangan_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Namangan shaxar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Pop tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Pop_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Pop tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Namangan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Namangan_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Namangan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Uychi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Uychi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Uychi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Namangan viloyat davlat arxivi",
                                    "value": "Namangan_viloyat_davlat_arxivi",
                                    "title": "Namangan viloyat davlat arxivi",
                                    "filter": "Namangan",
                                    "description": null
                                },
                                {
                                    "name": "Samarqand viloyat davlat arxivi",
                                    "value": "Samarqand_viloyat_davlat_arxivi",
                                    "title": "Samarqand viloyat davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Samarqand tuman davlat arxivi",
                                    "value": "Samarqand_tuman_davlat_arxivi",
                                    "title": "Samarqand tuman davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Kattaqo’rg’on shahar davlat arxivi",
                                    "value": "Kattaqorgon_shahar_davlat_arxivi",
                                    "title": "Kattaqo’rg’on shahar davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Pastdarg‘om tuman davlat arxivi",
                                    "value": "Pastdargom_tuman_davlat_arxivi",
                                    "title": "Pastdarg‘om tuman davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Ko‘shrabot tuman davlat arxivi",
                                    "value": "Koshrabot_tuman_davlat_arxivi",
                                    "title": "Ko‘shrabot tuman davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Bulung'ur tuman davlat arxivi",
                                    "value": "Bulungur_tuman_davlat_arxivi",
                                    "title": "Bulung'ur tuman davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Narpay tuman davlat arxivi",
                                    "value": "Narpay_tuman_davlat_arxivi",
                                    "title": "Narpay tuman davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Samarqand shahar shaxsiy tarkib hujjatlari arxivi",
                                    "value": "Samarqand_shahar_shaxsiy_tarkib_hujjatlari_arxivi",
                                    "title": "Samarqand shahar shaxsiy tarkib hujjatlari arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Pastdarg‘om tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Pastdargom_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Pastdarg‘om tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Ishtixon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Ishtixon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Ishtixon tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Bulung‘ur tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Bulungur_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Bulung‘ur tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Urgut tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Urgut_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Urgut tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Payariq tuman shahsiy tarkiv hujjatlari davlat arxivi",
                                    "value": "Payariq_tuman_shahsiy_tarkiv_hujjatlari_davlat_arxivi",
                                    "title": "Payariq tuman shahsiy tarkiv hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Paxtachi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Paxtachi_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Paxtachi tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Jomboy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Jomboy_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Jomboy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Toyloq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Toyloq_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Toyloq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Kattaqo‘rg‘on shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Kattaqorgon_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Kattaqo‘rg‘on shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Kattaqo`rg`on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Kattaqorgon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Kattaqo`rg`on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Oqdaryo tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Oqdaryo_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Oqdaryo tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Samarqand viloyat arxiv ishi hududiy boshqarmasi",
                                    "value": "Samarqand_viloyat_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Samarqand viloyat arxiv ishi hududiy boshqarmasi",
                                    "filter": "Samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Surxondaryo viloyat Arxiv ishi xududiy boshkarmasi",
                                    "value": "Surxondaryo_viloyat_arxiv_ishi_xududiy_boshkarmasi",
                                    "title": "Surxondaryo viloyat Arxiv ishi xududiy boshkarmasi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Surxondaryo viloyat davlat arxivi",
                                    "value": "Surxondaryo_viloyat_davlat_arxivi",
                                    "title": "Surxondaryo viloyat davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Angor tuman davlat arxivi",
                                    "value": "Angor_tuman_davlat_arxivi",
                                    "title": "Angor tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Boysun tuman davlat arxivi",
                                    "value": "Boysun_tuman_davlat_arxivi",
                                    "title": "Boysun tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Denov tuman davlat arxivi",
                                    "value": "Denov_tuman_davlat_arxivi",
                                    "title": "Denov tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Jarqo‘rg‘on tuman davlat arxivi",
                                    "value": "Jarqorgon_tuman_davlat_arxivi",
                                    "title": "Jarqo‘rg‘on tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Muzrabot tuman davlat arxivi",
                                    "value": "Muzrabot_tuman_davlat_arxivi",
                                    "title": "Muzrabot tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Sherobod tuman davlat arxivi",
                                    "value": "Sherobod_tuman_davlat_arxivi",
                                    "title": "Sherobod tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Sho‘rchi tuman davlat arxivi",
                                    "value": "Shorchi_tuman_davlat_arxivi",
                                    "title": "Sho‘rchi tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Sariosiyo tuman davlat arxivi",
                                    "value": "Sariosiyo_tuman_davlat_arxivi",
                                    "title": "Sariosiyo tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Uzun tuman davlat arxivi",
                                    "value": "Uzun_tuman_davlat_arxivi",
                                    "title": "Uzun tuman davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Termiz shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Termiz_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Termiz shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Qumqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qumqorgon_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qumqo‘rg‘on tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Sherobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Sherobod_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Sherobod tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Oltinsoy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Oltinsoy_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Oltinsoy tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Qiziriq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qiziriq_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qiziriq tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Angor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Angor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Angor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Termiz tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Termiz_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Termiz tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Surkhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Sirdaryo viloyat davlat arxivi",
                                    "value": "Sirdaryo_viloyat_davlat_arxivi",
                                    "title": "Sirdaryo viloyat davlat arxivi",
                                    "filter": "Syrdarya",
                                    "description": null
                                },
                                {
                                    "name": "Yangiyer shahar davlat arxivi",
                                    "value": "Yangiyer_shahar_davlat_arxivi",
                                    "title": "Yangiyer shahar davlat arxivi",
                                    "filter": "Syrdarya",
                                    "description": null
                                },
                                {
                                    "name": "Guliston tuman davlat arxivi",
                                    "value": "Guliston_tuman_davlat_arxivi",
                                    "title": "Guliston tuman davlat arxivi",
                                    "filter": "Syrdarya",
                                    "description": null
                                },
                                {
                                    "name": "Sirdaryo tuman Davlat arxivi",
                                    "value": "Sirdaryo_tuman_Davlat_arxivi",
                                    "title": "Sirdaryo tuman Davlat arxivi",
                                    "filter": "Syrdarya",
                                    "description": null
                                },
                                {
                                    "name": "Toshkent viloyati davlat arxivi",
                                    "value": "Toshkent_viloyati_davlat_arxivi",
                                    "title": "Toshkent viloyati davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Angren shahar davlat arxivi",
                                    "value": "Angren_shahar_davlat_arxivi",
                                    "title": "Angren shahar davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Bekobod shahar davlat arxivi",
                                    "value": "Bekobod_shahar_davlat_arxivi",
                                    "title": "Bekobod shahar davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Qibray tumani davlat arxivi",
                                    "value": "Qibray_tumani_davlat_arxivi",
                                    "title": "Qibray tumani davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Olmaliq shahar davlat arxivi",
                                    "value": "Olmaliq_shahar_davlat_arxivi",
                                    "title": "Olmaliq shahar davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Chirchiq shahar davlat arxivi",
                                    "value": "Chirchiq_shahar_davlat_arxivi",
                                    "title": "Chirchiq shahar davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Yangiyo`l shahar davlat arxivi",
                                    "value": "Yangiyol_shahar_davlat_arxivi",
                                    "title": "Yangiyo`l shahar davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Bo`ka tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Boka_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Bo`ka tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Bo`stonliq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Bostonliq_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Bo`stonliq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Oqqo`rg`on tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Oqqorgon_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Oqqo`rg`on tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Ohongaron tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Ohongaron_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Ohongaron tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Olmaliq shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Olmaliq_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Olmaliq shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Zangiota tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Zangiota_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Zangiota tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Qibray tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qibray_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qibray tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Quyichirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Quyichirchiq_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Quyichirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Parkent tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Parkent_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Parkent tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Piskent tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Piskent_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Piskent tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "O`rtachirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Ortachirchiq_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "O`rtachirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Chirchiq shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Chirchiq_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Chirchiq shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Chinoz tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Chinoz_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Chinoz tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Yangiyo`l tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Yangiyol_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Yangiyo`l tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Yuqorichirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Yuqorichirchiq_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Yuqorichirchiq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent_region",
                                    "description": null
                                },
                                {
                                    "name": "Farg‘ona viloyat arxiv ishi hududiy boshqarmasi",
                                    "value": "Fargona_viloyat_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Farg‘ona viloyat arxiv ishi hududiy boshqarmasi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Farg‘ona viloyat davlat arxivi",
                                    "value": "Fargona_viloyat_davlat_arxivi",
                                    "title": "Farg‘ona viloyat davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Marg‘ilon shahar davlat arxivi",
                                    "value": "Margilon_shahar_davlat_arxivi",
                                    "title": "Marg‘ilon shahar davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Qo‘qon shahar davlat arxivi",
                                    "value": "Qoqon_shahar_davlat_arxivi",
                                    "title": "Qo‘qon shahar davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Quva tuman davlat arxivi",
                                    "value": "Quva_tuman_davlat_arxivi",
                                    "title": "Quva tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Rishton tuman davlat arxivi",
                                    "value": "Rishton_tuman_davlat_arxivi",
                                    "title": "Rishton tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Yozyovon tuman davlat arxivi",
                                    "value": "Yozyovon_tuman_davlat_arxivi",
                                    "title": "Yozyovon tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Bag‘dod tuman davlat arxivi",
                                    "value": "Bagdod_tuman_davlat_arxivi",
                                    "title": "Bag‘dod tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Furqat tuman davlat arxivi",
                                    "value": "Furqat_tuman_davlat_arxivi",
                                    "title": "Furqat tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "So‘x tuman davlat arxivi",
                                    "value": "Sox_tuman_davlat_arxivi",
                                    "title": "So‘x tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Oltariq tuman davlat arxivi",
                                    "value": "Oltariq_tuman_davlat_arxivi",
                                    "title": "Oltariq tuman davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Farg‘ona shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Fargona_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Farg‘ona shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Marg‘ilon shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Margilon_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Marg‘ilon shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Quvasoy shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Quvasoy_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Quvasoy shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Farg‘ona tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Fargona_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Farg‘ona tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Qo‘shtepa tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qoshtepa_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qo‘shtepa tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Uchko‘prik tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Uchkoprik_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Uchko‘prik tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "O‘zbekiston tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Ozbekiston_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "O‘zbekiston tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Buvayda tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Buvayda_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Buvayda tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Fergana",
                                    "description": null
                                },
                                {
                                    "name": "Xorazm viloyat davlat arxivi",
                                    "value": "Xorazm_viloyat_davlat_arxivi",
                                    "title": "Xorazm viloyat davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Xiva shaxar davlat arxivi",
                                    "value": "Xiva_shaxar_davlat_arxivi",
                                    "title": "Xiva shaxar davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Xonqa tuman davlat arxivi",
                                    "value": "Xonqa_tuman_davlat_arxivi",
                                    "title": "Xonqa tuman davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Yangibozor tuman davlat arxivi",
                                    "value": "Yangibozor_tuman_davlat_arxivi",
                                    "title": "Yangibozor tuman davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Urganch tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Urganch_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Urganch tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Shovot tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Shovot_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Shovot tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Hazorasp tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Hazorasp_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Hazorasp tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Qo‘shko‘pir tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Qoshkopir_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Qo‘shko‘pir tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Xonqa tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Xonqa_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Xonqa tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Yangiariq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Yangiariq_tumani_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Yangiariq tumani shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Xiva tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Xiva_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Xiva tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Gurlan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Gurlan_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Gurlan tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Yangibozor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Yangibozor_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Yangibozor tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Urganch shahar shahsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Urganch_shahar_shahsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Urganch shahar shahsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Qoraqalpog'iston Respublikasi arxiv ishi boshqarmasi",
                                    "value": "Qoraqalpogiston_Respublikasi_arxiv_ishi_boshqarmasi",
                                    "title": "Qoraqalpog'iston Respublikasi arxiv ishi boshqarmasi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Taxtakupir tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Taxtakupir_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Taxtakupir tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Shumanay tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Shumanay_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Shumanay tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Muynak tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Muynak_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Muynak tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Nukus shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Nukus_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Nukus shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Markaziy davlat arxivi",
                                    "value": "Markaziy_davlat_arxivi",
                                    "title": "Markaziy davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Beruniy tumani davlat arxivi",
                                    "value": "Beruniy_tuman_davlat_arxivi",
                                    "title": "Beruniy tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Kegayli tumani davlat arxivi",
                                    "value": "Kegayli_tuman_davlat_arxivi",
                                    "title": "Kegayli tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Qonliko’l tumani davlat arxivi",
                                    "value": "Qonlikol_tuman_davlat_arxivi",
                                    "title": "Qonliko’l tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Qorao’zak tumani davlat arxivi",
                                    "value": "Qoraozak_tuman_davlat_arxivi",
                                    "title": "Qorao’zak tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Qo’ng’irot tumani davlat arxivi",
                                    "value": "Qongirot_tuman_davlat_arxivi",
                                    "title": "Qo’ng’irot tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "To’rtko’l tumani davlat arxivi",
                                    "value": "Tortkol_tuman_davlat_arxivi",
                                    "title": "To’rtko’l tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Хo’jayli tumani davlat arxivi",
                                    "value": "Xojayli_tuman_davlat_arxivi",
                                    "title": "Хo’jayli tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Ellikqal’a tumani davlat arxivi",
                                    "value": "Ellikqala_tuman_davlat_arxivi",
                                    "title": "Ellikqal’a tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Chimboy tumani davlat arxivi",
                                    "value": "Chimboy_tuman_davlat_arxivi",
                                    "title": "Chimboy tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Amudaryo tumani davlat arxivi",
                                    "value": "Amudaryo_tuman_davlat_arxivi",
                                    "title": "Amudaryo tumani davlat arxivi",
                                    "filter": "Karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Toshkent Shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Toshkent_shahar_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Toshkent Shahar shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Tashkent",
                                    "description": null
                                },
                                {
                                    "name": "O`ZBEKISTON MILLIY ARXIVI",
                                    "value": "OZBEKISTON_MILLIY_ARXIVI",
                                    "title": "O`ZBEKISTON MILLIY ARXIVI",
                                    "filter": "Tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Toshkent shaxar markaziy davlat arxivi",
                                    "value": "Toshkent_shaxar_markaziy_davlat_arxivi",
                                    "title": "Toshkent shaxar markaziy davlat arxivi",
                                    "filter": "Tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Toshkent shahar arxiv ishi hududiy boshqarmasi",
                                    "value": "Toshkent_shahar_arxiv_ishi_hududiy_boshqarmasi",
                                    "title": "Toshkent shahar arxiv ishi hududiy boshqarmasi",
                                    "filter": "Tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Forish tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "value": "Forish_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Forish tuman shaxsiy tarkib hujjatlari davlat arxivi",
                                    "filter": "Jizzak",
                                    "description": null
                                },
                                {
                                    "name": "Bogʻot tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "value": "Bogot_tuman_shaxsiy_tarkib_hujjatlari_davlat_arxivi",
                                    "title": "Bogʻot tuman shaxsiy tarkib xujjatlari davlat arxivi",
                                    "filter": "Khorezm",
                                    "description": null
                                },
                                {
                                    "name": "Qashqadaryo viloyat davlat arxivi",
                                    "value": "Qashqadaryo_viloyat_davlat_arxivi",
                                    "title": "Qashqadaryo viloyat davlat arxivi",
                                    "filter": "Kashkadarya",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "error": null,
                            "scan": null,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "reference_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Spravka IDsi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "fh[bd",
                    "архив",
                    "узархив",
                    "arxiv"
                ],
                "weight": 0.000002815277535220764,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f96a718ea62ccfa6119ce02",
                "paycom_id": "5f92c407740f35d3638a85c3",
                "name": "YURISTLAR MALAKASINI OSHIRISH MARKAZI",
                "organization": "АФ « \"O'ZBEKISTON RESPUBLIKASI ADLIYA VAZIRLIGI QOSHIDAGI YURIST»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/917d167309af8d368b807a2860c4d638e6865071.png",
                "date": 1603708696190,
                "terminal": {
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
                    "центр повышения квалификации юристов",
                    "повышение квалификации юристов",
                    "юристконсультант",
                    "yuristlar",
                    "юрист"
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
                "_id": "5d64baed60753c412ac3aaa6",
                "paycom_id": "5d64ae1d2031550a68e22036",
                "name": "ЎзММИ  ДУК",
                "organization": "ГУП «O'ZBEKISTON MILLIY METROLOGIYA INSTITUTI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/5a85366c4761fda8efb40d9fae5f9e15facf05e3.png",
                "date": 1566882541654,
                "terminal": {
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
                            "title": "Shartnoma raqami",
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
                            "name": "contract_date",
                            "placeholder": "",
                            "title": "Shartnoma sanasi",
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
                    "экология",
                    "метрология",
                    "metrrologia",
                    "ЎзММИ"
                ],
                "weight": 0.0000017830091056398174,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "647496e2c34b8a5ddef99790",
                "paycom_id": "647493002cb83937a755aa25",
                "name": "ИСТЕЪМОЛЧИЛАР ҲУҚУҚЛАРИ Ҳ.Қ.Ж КИБРАЙ ТУМАНИ БОЛИМИ",
                "organization": "ННО «O Z.IST.HUQ.HIM.QIL.JAM.FED.»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/061649711506cd9f89953d7bed110fb9d58fe592.png",
                "date": 1685362402153,
                "terminal": {
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
                            "name": "Date_Birth",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tug'ilgan kun",
                            "type": "text",
                            "validation": null,
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
                    "ИСТЕЪМОЛЧИЛАР ҲУҚУҚЛАРИ Ҳ.Қ.Ж НУРАФШОН ШАХАРИ БОЛИМИ",
                    "oihhqjf",
                    "ИСТЕМОЛЧИЛАР ҲУҚУҚЛАРИ",
                    "защита прав потребителей"
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
                "_id": "6343eca81fe5cc9de25ec08c",
                "paycom_id": "6343ec210c7921dcc839b8e6",
                "name": "UZSTAT",
                "organization": "ГУП «O'ZBEKISTON RESPUBLIKASI DAVLAT STATISTIKA QO'MITASI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/d3ac35f9437e8906e9ec48b9f7faa30897a9701a.png",
                "date": 1665395880067,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "statistical_data",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Statistik ma'lumotlar",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "UZSTAT",
                    "УзСтат",
                    "ГяЫефе",
                    "УзСтат"
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
                "_id": "604f33d252768101829872b5",
                "paycom_id": "604f30db48ff0dacb0c1d076",
                "name": "ЭкоПартия",
                "organization": "ННО «Тошкент шаҳар Экологик партияси»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/6dc8ce85433d540a2f75c06338fe347cd3a48925.png",
                "date": 1615803346951,
                "terminal": {
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
                            "title": "Viloyat",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Ўзбекистон Экологик партияси Марказий Кенгаши",
                                    "value": "1",
                                    "title": "Ўзбекистон Экологик партияси Марказий Кенгаши",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Қорақалпоғистон Республикаси",
                                    "value": "2",
                                    "title": "Қорақалпоғистон Республикаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Андижон вилояти",
                                    "value": "3",
                                    "title": "Андижон вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухоро вилояти",
                                    "value": "4",
                                    "title": "Бухоро вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навоий вилояти",
                                    "value": "5",
                                    "title": "Навоий вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Жиззах вилояти",
                                    "value": "6",
                                    "title": "Жиззах вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган вилояти",
                                    "value": "7",
                                    "title": "Наманган вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарқанд вилояти",
                                    "value": "8",
                                    "title": "Самарқанд вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сирдарё вилояти",
                                    "value": "9",
                                    "title": "Сирдарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхондарё вилояти",
                                    "value": "10",
                                    "title": "Сурхондарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент вилояти",
                                    "value": "11",
                                    "title": "Тошкент вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фарғона вилояти",
                                    "value": "12",
                                    "title": "Фарғона вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хоразм вилояти",
                                    "value": "13",
                                    "title": "Хоразм вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Қашқадарё вилояти",
                                    "value": "14",
                                    "title": "Қашқадарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент шаҳар",
                                    "value": "15",
                                    "title": "Тошкент шаҳар",
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
                            "name": "pasport_no",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Pasport seriyasi va raqami",
                            "type": "text",
                            "validation": null,
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
                            "title": "F.I.Sh",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "экопартия",
                    "партия",
                    "эко",
                    "ekopartiya",
                    "partiya",
                    "eko",
                    "'rjgfhnbz",
                    "улщзфкешнф",
                    "'rjgfhnbz"
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
                "_id": "626159aa5f4122709934ec3c",
                "paycom_id": "625fd6260d2f83d9851996a1",
                "name": "O'ZBEKISTON XALQ DEMOKRATIK PARTIYASI",
                "organization": "ННО «ЦЕНТР.СОВЕТ НДПУ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/aaa6f75d198ac2906284f16bb650122b61862dce.png",
                "date": 1650547114064,
                "terminal": {
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
                                    "name": "Қорақалпоғистон Республикаси",
                                    "value": "karkalpak",
                                    "title": "Қорақалпоғистон Республикаси",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Андижон вилояти",
                                    "value": "andij",
                                    "title": "Андижон вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухоро вилоятии",
                                    "value": "buhor",
                                    "title": "Бухоро вилоятии",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Жиззах вилояти",
                                    "value": "jizz",
                                    "title": "Жиззах вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навоий вилояти",
                                    "value": "navoi",
                                    "title": "Навоий вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган вилояти",
                                    "value": "naman",
                                    "title": "Наманган вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарқанд вилояти",
                                    "value": "samar",
                                    "title": "Самарқанд вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сирдарё вилояти",
                                    "value": "sird",
                                    "title": "Сирдарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхандарё вилояти",
                                    "value": "surhan",
                                    "title": "Сурхандарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент вилояти",
                                    "value": "tosh",
                                    "title": "Тошкент вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фарғона вилояти",
                                    "value": "farg",
                                    "title": "Фарғона вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хоразм вилояти",
                                    "value": "horazm",
                                    "title": "Хоразм вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Қашқадарё вилояти",
                                    "value": "kashk",
                                    "title": "Қашқадарё вилояти",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент шаҳар",
                                    "value": "toshsh",
                                    "title": "Тошкент шаҳар",
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
                            "name": "ditrict",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tuman",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Нукус шахри",
                                    "value": "nuksh",
                                    "title": "Нукус шахри",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Амударё тумани",
                                    "value": "amudtu",
                                    "title": "Амударё тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Беруний тумани",
                                    "value": "bertu",
                                    "title": "Беруний тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Қораўзак тумани",
                                    "value": "koraztu",
                                    "title": "Қораўзак тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Кегейли тумани",
                                    "value": "keygtu",
                                    "title": "Кегейли тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Қўнғирот тумани",
                                    "value": "kungtu",
                                    "title": "Қўнғирот тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Қонликўл тумани",
                                    "value": "konktu",
                                    "title": "Қонликўл тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Муйноқ тумани",
                                    "value": "muytu",
                                    "title": "Муйноқ тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Нукус тумани",
                                    "value": "nuktu",
                                    "title": "Нукус тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Тахтакўпир тумани",
                                    "value": "tahta",
                                    "title": "Тахтакўпир тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Тахиатош тумани",
                                    "value": "thiaeu",
                                    "title": "Тахиатош тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Тўрткўл тумани",
                                    "value": "turttu",
                                    "title": "Тўрткўл тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Хўжайли тумани",
                                    "value": "hujaytu",
                                    "title": "Хўжайли тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Чимбой тумани",
                                    "value": "chimtu",
                                    "title": "Чимбой тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Шуманой тумани",
                                    "value": "shumantu",
                                    "title": "Шуманой тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Элликқалъа тумани",
                                    "value": "ellitu",
                                    "title": "Элликқалъа тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Бўзотов тумани",
                                    "value": "buzototu",
                                    "title": "Бўзотов тумани",
                                    "filter": "karkalpak",
                                    "description": null
                                },
                                {
                                    "name": "Андижон шахри",
                                    "value": "andjsh",
                                    "title": "Андижон шахри",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Хонобод шахри",
                                    "value": "honotu",
                                    "title": "Хонобод шахри",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Андижон тумани",
                                    "value": "andijtu",
                                    "title": "Андижон тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Асака тумани",
                                    "value": "asakatu",
                                    "title": "Асака тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Балиқчи тумани",
                                    "value": "baliktu",
                                    "title": "Балиқчи тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Булоқбоши тумани",
                                    "value": "buloktu",
                                    "title": "Булоқбоши тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Бўз (Бўстон) тумани",
                                    "value": "buztu",
                                    "title": "Бўз (Бўстон) тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Избоскан тумани",
                                    "value": "izbosktu",
                                    "title": "Избоскан тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Жалақудуқ тумани",
                                    "value": "jaladtu",
                                    "title": "Жалақудуқ тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Мархамат тумани",
                                    "value": "marhtu",
                                    "title": "Мархамат тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Олтинкўл тумани",
                                    "value": "olttu",
                                    "title": "Олтинкўл тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Пахтаобод тумани",
                                    "value": "pahtatu",
                                    "title": "Пахтаобод тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Қўрғонтепа тумани",
                                    "value": "kurgtu",
                                    "title": "Қўрғонтепа тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Улуғнор тумани",
                                    "value": "ulugtu",
                                    "title": "Улуғнор тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Хўжаобод тумани",
                                    "value": "hujabodtu",
                                    "title": "Хўжаобод тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Шахрихон тумани",
                                    "value": "sharihtu",
                                    "title": "Шахрихон тумани",
                                    "filter": "andij",
                                    "description": null
                                },
                                {
                                    "name": "Бухоро шахри",
                                    "value": "buhshah",
                                    "title": "Бухоро шахри",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Когон шахри",
                                    "value": "kogsh",
                                    "title": "Когон шахри",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Бухоро тумани",
                                    "value": "buhtum",
                                    "title": "Бухоро тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Вобкент тумани",
                                    "value": "vobkenttu",
                                    "title": "Вобкент тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Жондор тумани",
                                    "value": "jondortu",
                                    "title": "Жондор тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Когон тумани",
                                    "value": "kogogntum",
                                    "title": "Когон тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Олот тумани",
                                    "value": "oltum",
                                    "title": "Олот тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Пешкў тумани",
                                    "value": "peshtum",
                                    "title": "Пешкў тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Ромитан тумани",
                                    "value": "romtum",
                                    "title": "Ромитан тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Шофиркон тумани",
                                    "value": "shoftum",
                                    "title": "Шофиркон тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Қоракўл  тумани",
                                    "value": "korakultuman",
                                    "title": "Қоракўл  тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Қоровулбозор тумани",
                                    "value": "korovultum",
                                    "title": "Қоровулбозор тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Ғиждувон тумани",
                                    "value": "gijduvantum",
                                    "title": "Ғиждувон тумани",
                                    "filter": "buhor",
                                    "description": null
                                },
                                {
                                    "name": "Жиззах шахри",
                                    "value": "jizzahtuma",
                                    "title": "Жиззах шахри",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Арнасой тумани",
                                    "value": "arnatum",
                                    "title": "Арнасой тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Бахмал тумани",
                                    "value": "bahmaltum",
                                    "title": "Бахмал тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Дўстлик тумани",
                                    "value": "dustliktum",
                                    "title": "Дўстлик тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Зарбдор тумани",
                                    "value": "zabdortum",
                                    "title": "Зарбдор тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Зафаробод тумани",
                                    "value": "zafarobtum",
                                    "title": "Зафаробод тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Зомин тумани",
                                    "value": "zomintum",
                                    "title": "Зомин тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Мирзачўл тумани",
                                    "value": "mizachtum",
                                    "title": "Мирзачўл тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Пахтакор тумани",
                                    "value": "pahtakortumani",
                                    "title": "Пахтакор тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Фориш тумани",
                                    "value": "forishtum",
                                    "title": "Фориш тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Ш.Рашидов тумани",
                                    "value": "shrashidtum",
                                    "title": "Ш.Рашидов тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Ғаллаорол тумани",
                                    "value": "gallartum",
                                    "title": "Ғаллаорол тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Янгиобод тумани",
                                    "value": "yangiobodtum",
                                    "title": "Янгиобод тумани",
                                    "filter": "jizz",
                                    "description": null
                                },
                                {
                                    "name": "Навоий шахри",
                                    "value": "navshar",
                                    "title": "Навоий шахри",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Зарафшон шахри",
                                    "value": "zarafshah",
                                    "title": "Зарафшон шахри",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Кармана тумани",
                                    "value": "karmantum",
                                    "title": "Кармана тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Конимех тумани",
                                    "value": "konimextum",
                                    "title": "Конимех тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Навбаҳор тумани",
                                    "value": "navbahtum",
                                    "title": "Навбаҳор тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Нурота тумани",
                                    "value": "nurotatum",
                                    "title": "Нурота тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Қизилтепа тумани",
                                    "value": "kizilteptum",
                                    "title": "Қизилтепа тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Хатирчи тумани",
                                    "value": "hatirchitum",
                                    "title": "Хатирчи тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Учқудуқ тумани",
                                    "value": "uchkuduktum",
                                    "title": "Учқудуқ тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Томди тумани",
                                    "value": "tomditum",
                                    "title": "Томди тумани",
                                    "filter": "navoi",
                                    "description": null
                                },
                                {
                                    "name": "Наманган шахри",
                                    "value": "namashah",
                                    "title": "Наманган шахри",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Косонсой тумани",
                                    "value": "kosonstum",
                                    "title": "Косонсой тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Мингбулоқ тумани",
                                    "value": "mingbultum",
                                    "title": "Мингбулоқ тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Наманган тумани",
                                    "value": "namangtuman",
                                    "title": "Наманган тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Норин тумани",
                                    "value": "norintuman",
                                    "title": "Норин тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Поп тумани",
                                    "value": "poptmanni",
                                    "title": "Поп тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Тўрақўрғон тумани",
                                    "value": "turakurtuman",
                                    "title": "Тўрақўрғон тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Уйчи тумани",
                                    "value": "uychutum",
                                    "title": "Уйчи тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Учқўрғон тумани",
                                    "value": "uchkurgtum",
                                    "title": "Учқўрғон тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Чортоқ тумани",
                                    "value": "chrtoqtuman",
                                    "title": "Чортоқ тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Чуст тумани",
                                    "value": "chusttuma",
                                    "title": "Чуст тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Янгиқўрғон тумани",
                                    "value": "yangikurtuman",
                                    "title": "Янгиқўрғон тумани",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Наманган вилояти",
                                    "value": "namanviloyat",
                                    "title": "Наманган вилояти",
                                    "filter": "naman",
                                    "description": null
                                },
                                {
                                    "name": "Булунғур тумани",
                                    "value": "bulungtuman",
                                    "title": "Булунғур тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Жомбой тумани",
                                    "value": "jombtuman",
                                    "title": "Жомбой тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Иштихон тумани",
                                    "value": "ishitihontuman",
                                    "title": "Иштихон тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Каттақўрғон шахри",
                                    "value": "kattaqurtuman",
                                    "title": "Каттақўрғон шахри",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Каттақўрғон тумани",
                                    "value": "kattatumani",
                                    "title": "Каттақўрғон тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Нарпай тумани",
                                    "value": "narptum",
                                    "title": "Нарпай тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Нуробод тумани",
                                    "value": "nurobtum",
                                    "title": "Нуробод тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Оқдарё тумани",
                                    "value": "okdaryotum",
                                    "title": "Оқдарё тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Пайариқ тумани",
                                    "value": "payariqtum",
                                    "title": "Пайариқ тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Пастдарғом тумани",
                                    "value": "pastdarmtum",
                                    "title": "Пастдарғом тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Пахтачи тумани",
                                    "value": "pahtachtum",
                                    "title": "Пахтачи тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Самарқанд шахри",
                                    "value": "samarshahr",
                                    "title": "Самарқанд шахри",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Самарқанд тумани",
                                    "value": "samartum",
                                    "title": "Самарқанд тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Тайлоқ тумани",
                                    "value": "tayloqtum",
                                    "title": "Тайлоқ тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Қўшработ тумани",
                                    "value": "tuman",
                                    "title": "Қўшработ тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Ургут тумани",
                                    "value": "urguttum",
                                    "title": "Ургут тумани",
                                    "filter": "samar",
                                    "description": null
                                },
                                {
                                    "name": "Боёвут тумани",
                                    "value": "boyovtum",
                                    "title": "Боёвут тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Гулистон шахри",
                                    "value": "gulistshah",
                                    "title": "Гулистон шахри",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Гулистон тумани",
                                    "value": "gulisttum",
                                    "title": "Гулистон тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Мирзаобод тумани",
                                    "value": "mirzaobtum",
                                    "title": "Мирзаобод тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Оқолтин тумани",
                                    "value": "oqolttum",
                                    "title": "Оқолтин тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Сайхунобод тумани",
                                    "value": "sayhutum",
                                    "title": "Сайхунобод тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Сардоба тумани",
                                    "value": "sardtum",
                                    "title": "Сардоба тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Сирдарё тумани",
                                    "value": "sirdtum",
                                    "title": "Сирдарё тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Ховос тумани",
                                    "value": "hovosttum",
                                    "title": "Ховос тумани",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Ширин шахри",
                                    "value": "shirinshahr",
                                    "title": "Ширин шахри",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Янгиер шахри",
                                    "value": "yangiershah",
                                    "title": "Янгиер шахри",
                                    "filter": "sird",
                                    "description": null
                                },
                                {
                                    "name": "Ангор тумани",
                                    "value": "angortum",
                                    "title": "Ангор тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Бойсун тумани",
                                    "value": "boysun",
                                    "title": "Бойсун тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Денов тумани",
                                    "value": "denovtum",
                                    "title": "Денов тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Жарқўрғон тумани",
                                    "value": "jakkurtuma",
                                    "title": "Жарқўрғон тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Музработ тумани",
                                    "value": "muzarabtum",
                                    "title": "Музработ тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Олтинсой тумани",
                                    "value": "oltinstum",
                                    "title": "Олтинсой тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Сариосиё тумани",
                                    "value": "sarastum",
                                    "title": "Сариосиё тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Термиз шахри",
                                    "value": "termshah",
                                    "title": "Термиз шахри",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Термиз тумани",
                                    "value": "termtum",
                                    "title": "Термиз тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Узун тумани",
                                    "value": "uzuntum",
                                    "title": "Узун тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Шеробод тумани",
                                    "value": "sherobtum",
                                    "title": "Шеробод тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Шўрчи тумани",
                                    "value": "shurchitum",
                                    "title": "Шўрчи тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Қизириқ тумани",
                                    "value": "kizizriqtum",
                                    "title": "Қизириқ тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Бандихон тумани",
                                    "value": "bandihontum",
                                    "title": "Бандихон тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Қумқўрғон тумани",
                                    "value": "kumkurgtum",
                                    "title": "Қумқўрғон тумани",
                                    "filter": "surhan",
                                    "description": null
                                },
                                {
                                    "name": "Ангрен шахри",
                                    "value": "angrshah",
                                    "title": "Ангрен шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Бекобод шахри",
                                    "value": "bekobodshah",
                                    "title": "Бекобод шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Нурафшон шахри",
                                    "value": "nuraftum",
                                    "title": "Нурафшон шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Олмалиқ шахри",
                                    "value": "olmaltum",
                                    "title": "Олмалиқ шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Оҳангарон шахри",
                                    "value": "ohangrshah",
                                    "title": "Оҳангарон шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Чирчиқ шахри",
                                    "value": "chrchiqshah",
                                    "title": "Чирчиқ шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Янгийўл шахри",
                                    "value": "yangiultum",
                                    "title": "Янгийўл шахри",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Бекобод тумани",
                                    "value": "bekobodtum",
                                    "title": "Бекобод тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Бўка тумани",
                                    "value": "bukatum",
                                    "title": "Бўка тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Бўстонлиқ тумани",
                                    "value": "bustonliktum",
                                    "title": "Бўстонлиқ тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Оҳангарон тумани",
                                    "value": "ohangortum",
                                    "title": "Оҳангарон тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Оққўрғон тумани",
                                    "value": "okkurgtum",
                                    "title": "Оққўрғон тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Паркент тумани",
                                    "value": "parkenttum",
                                    "title": "Паркент тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Пискент тумани",
                                    "value": "piskentum",
                                    "title": "Пискент тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Қибрай тумани",
                                    "value": "kibraytum",
                                    "title": "Қибрай тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Қуйи Чирчиқ тумани",
                                    "value": "kuychrchtum",
                                    "title": "Қуйи Чирчиқ тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Тошкент тумани",
                                    "value": "toshkenttuman",
                                    "title": "Тошкент тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Зангиота тумани",
                                    "value": "zangitum",
                                    "title": "Зангиота тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Ўрта Чирчиқ тумани",
                                    "value": "urtashirchtuman",
                                    "title": "Ўрта Чирчиқ тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Чиноз тумани",
                                    "value": "chinoztuman",
                                    "title": "Чиноз тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Юқори Чирчиқ тумани",
                                    "value": "yukoriychrtum",
                                    "title": "Юқори Чирчиқ тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Янгийўл тумани",
                                    "value": "yangiultuman",
                                    "title": "Янгийўл тумани",
                                    "filter": "tosh",
                                    "description": null
                                },
                                {
                                    "name": "Тошлоқ тумани",
                                    "value": "toshloqtu",
                                    "title": "Тошлоқ тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Қува тумани",
                                    "value": "kuvatum",
                                    "title": "Қува тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Бувайда тумани",
                                    "value": "buvaytum",
                                    "title": "Бувайда тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Олтиариқ тумани",
                                    "value": "oltintum",
                                    "title": "Олтиариқ тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Данғара тумани",
                                    "value": "dangrtuman",
                                    "title": "Данғара тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Марғилон шахри",
                                    "value": "margilshah",
                                    "title": "Марғилон шахри",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Қўқон шахри",
                                    "value": "kukonshah",
                                    "title": "Қўқон шахри",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Риштон тумани",
                                    "value": "rishttum",
                                    "title": "Риштон тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Фарғона тумани",
                                    "value": "fargtum",
                                    "title": "Фарғона тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Фурқат тумани",
                                    "value": "furqattum",
                                    "title": "Фурқат тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Бешариқ тумани",
                                    "value": "beshartum",
                                    "title": "Бешариқ тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Қувасой шахри",
                                    "value": "kuvasoytum",
                                    "title": "Қувасой шахри",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Фарғона шахри",
                                    "value": "fargtumani",
                                    "title": "Фарғона шахри",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Қўштепа тумани",
                                    "value": "kushtepatum",
                                    "title": "Қўштепа тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Сўх тумани",
                                    "value": "suhtuman",
                                    "title": "Сўх тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Ўзбекистон тумани",
                                    "value": "uzbtuman",
                                    "title": "Ўзбекистон тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Учкўприк тумани",
                                    "value": "uchkuprituman",
                                    "title": "Учкўприк тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Ёзёвон тумани",
                                    "value": "ezvontum",
                                    "title": "Ёзёвон тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Боғдод тумани",
                                    "value": "bogdodtum",
                                    "title": "Боғдод тумани",
                                    "filter": "farg",
                                    "description": null
                                },
                                {
                                    "name": "Урганч швхри",
                                    "value": "urganchshah",
                                    "title": "Урганч швхри",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Боғот тумани",
                                    "value": "bogottum",
                                    "title": "Боғот тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Гурлан тумани",
                                    "value": "gurlantum",
                                    "title": "Гурлан тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Қўшкўпир тумани",
                                    "value": "kushkupirtuman",
                                    "title": "Қўшкўпир тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Урганч тумани",
                                    "value": "urganchtumtum",
                                    "title": "Урганч тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Ҳазорасп тумани",
                                    "value": "hazorasptum",
                                    "title": "Ҳазорасп тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Хонқа тумани",
                                    "value": "honkatum",
                                    "title": "Хонқа тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Хива шахри",
                                    "value": "hivashah",
                                    "title": "Хива шахри",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Хива тумани",
                                    "value": "hivatum",
                                    "title": "Хива тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Шовот тумани",
                                    "value": "shovotttuman",
                                    "title": "Шовот тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Янгиариқ тумани",
                                    "value": "yangiartum",
                                    "title": "Янгиариқ тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Янгибозор тумани",
                                    "value": "yangiboztum",
                                    "title": "Янгибозор тумани",
                                    "filter": "horazm",
                                    "description": null
                                },
                                {
                                    "name": "Қарши  шахри",
                                    "value": "karshshah",
                                    "title": "Қарши  шахри",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Шаҳрисабз тумани",
                                    "value": "shahrtumani",
                                    "title": "Шаҳрисабз тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Қарши  тумани",
                                    "value": "kashtum",
                                    "title": "Қарши  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Ғузор  тумани",
                                    "value": "guzortum",
                                    "title": "Ғузор  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Деҳқонобод тумани",
                                    "value": "dehqontum",
                                    "title": "Деҳқонобод тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Қамаши тумани",
                                    "value": "kamashitum",
                                    "title": "Қамаши тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Касби  тумани",
                                    "value": "kasbitum",
                                    "title": "Касби  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Косон  тумани",
                                    "value": "kosontum",
                                    "title": "Косон  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Китоб  тумани",
                                    "value": "kitobtum",
                                    "title": "Китоб  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Муборак  тумани",
                                    "value": "muboraktum",
                                    "title": "Муборак  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Миришкор тумани",
                                    "value": "mirashkortum",
                                    "title": "Миришкор тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Нишон  тумани",
                                    "value": "nishontum",
                                    "title": "Нишон  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Чироқчи  тумани",
                                    "value": "chorokchtum",
                                    "title": "Чироқчи  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Шаҳрисабз шахри",
                                    "value": "shahrisabztum",
                                    "title": "Шаҳрисабз шахри",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Яккабоғ  тумани",
                                    "value": "yakkabogtum",
                                    "title": "Яккабоғ  тумани",
                                    "filter": "kashk",
                                    "description": null
                                },
                                {
                                    "name": "Бектемир тумани",
                                    "value": "bektimtum",
                                    "title": "Бектемир тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Миробод тумани",
                                    "value": "mirobtum",
                                    "title": "Миробод тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Мирзо Улуғбек тумани",
                                    "value": "mirzoultuman",
                                    "title": "Мирзо Улуғбек тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Олмазор тумани",
                                    "value": "olmazzortum",
                                    "title": "Олмазор тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Cергели тумани",
                                    "value": "sergtuman",
                                    "title": "Cергели тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Учтепа тумани",
                                    "value": "uchtepatum",
                                    "title": "Учтепа тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Чилонзор тумани",
                                    "value": "chilonztuman",
                                    "title": "Чилонзор тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Шайхонтохур тумани",
                                    "value": "shayhantum",
                                    "title": "Шайхонтохур тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Юнусобод тумани",
                                    "value": "yunusobtum",
                                    "title": "Юнусобод тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Яккасарой тумани",
                                    "value": "yakkasartum",
                                    "title": "Яккасарой тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Яшнобод тумани",
                                    "value": "yashnobtum",
                                    "title": "Яшнобод тумани",
                                    "filter": "toshsh",
                                    "description": null
                                },
                                {
                                    "name": "Тошкент шаҳар",
                                    "value": "toshshah",
                                    "title": "Тошкент шаҳар",
                                    "filter": "toshsh",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "region",
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
                    "ндпу",
                    "центр совет",
                    "народно-демократическая партия узбекистана",
                    "peoples democratic party of uzbekistan"
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
                "_id": "60659264b8d597ed134d8323",
                "paycom_id": "6034a109a10b214d8d120d34",
                "name": " ЎРМОН ХЎЖАЛИГИ ДАВЛАТ ҚЎМИТАСИ",
                "organization": "ГУП «\"Ўрмонтехносервис\"»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/7ed089f801c2fae4184e1f6a78d900e8fe53b044.png",
                "date": 1617269348120,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "STIR(INN)",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ўрмонтехносервис",
                    "ўрмон хўжалиги дқ ижара ариза",
                    "ўрмон хўжалиги давлат қўмитаси",
                    "o'rmon xo'jaligi",
                    "ormon xojaligi",
                    "ijara-urmon.uz",
                    "ДАВЛАТ ҚЎМИТАСИ"
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
                "_id": "62c2d7e12be0df251a10e91c",
                "paycom_id": "62c2d6aa2be0df251a10e90f",
                "name": "Pedagog kadrlar attestatsiyasi",
                "organization": "Оказание гос. услуг по аттестации педагогов",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/ad4128e31e705c1ca1d82edb030d40e814ae641b.png",
                "date": 1656936400024,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 3000000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Invoice raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^.{14}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "visible": null,
                            "placeholder": "",
                            "scan": "CODE_128",
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [],
                "weight": 5.630555070441529e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "60210bbb84bdb89f3c127cb7",
                "paycom_id": "601ce397ed9655a78ae6afa5",
                "name": "Узбекистон Республика Миллий Гвардияси Сырдарьё вилояти Куриклаш бошкармаси",
                "organization": "ООО «Узбекистон Республика Миллий Гвардияси Сырдарьё вилояти Куриклаш бошкармаси»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/78b37df578b25acaa44d68b717922657654aed61.png",
                "date": 1612778427748,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "control_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "F.I.SH",
                            "type": "text",
                            "validation": null,
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
                            "title": "To`lov maqsadi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "милий",
                    "гвардия",
                    "сырдарё",
                    "milliy",
                    "gvardiya",
                    "udfhlbz",
                    "vbkbq",
                    "ьшддшн",
                    "пмфквшнф",
                    "национальная гвардия"
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
                "_id": "660e848b90823bcdf98bf035",
                "paycom_id": "660e83e1abe7377ebe5743ef",
                "name": "O'zbekiston Respublikasi Gidrometeorologiya Xizmat agentligi(j'zgidromet)",
                "organization": "ГУП «O‘ZBEKISTON RESPUBLIKASI TABIAT RESURSLARI VAZIRLIGI HUZURIDAGI GIDROMETEOROLOGIYA XIZMATI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/44997eb6e79ad55dfa903322baaf660de67b6bd0.png",
                "date": 1712227467504,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "from",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Kimdan",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Юридическое лицо",
                                    "value": "entity",
                                    "title": "Юридическое лицо",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Физическое лицо",
                                    "value": "individual",
                                    "title": "Физическое лицо",
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
                            "title": "To'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Метео хизматлари",
                                    "value": "meteo",
                                    "title": "Метео хизматлари",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Текшириш хизматлари",
                                    "value": "tekshirish",
                                    "title": "Текшириш хизматлари",
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
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "O'zbekiston Respublikasi Gidrometeorologiya Xizmat agentligi",
                    "Gidrometeorologiya Xizmat agentligi",
                    "Gidrometeorologiya Xizmat agentligi"
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
                "_id": "62fb81f005d1eba76a630ab4",
                "paycom_id": "62fa12e6a12ad7a48f4b1ab3",
                "name": "O'ZBEKISTON \"MILLIY TIKLANISH\" DEMOKRATIK PARTIYASI",
                "organization": "ННО «MIL.TIKL.PARTIYA TOSH.KENGASHI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/1420c6528c4c54b524bfd79e53a296c464c85d08.png",
                "date": 1660649968555,
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Viloyat",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Каракалпакстан",
                                    "value": "Qoraqalpogiston",
                                    "title": "Qoraqalpog’iston Respublikasi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Андижан",
                                    "value": "Andijon",
                                    "title": "ANDIJON VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухара",
                                    "value": "Buxoro",
                                    "title": "BUXORO VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Джизак",
                                    "value": "Jizzax",
                                    "title": "JIZZAX VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навои",
                                    "value": "Navoiy",
                                    "title": "NAVOIY VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган",
                                    "value": "Namangan",
                                    "title": "NAMANGAN VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарканд",
                                    "value": "Samarqand",
                                    "title": "SAMARQAND VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сырдарья",
                                    "value": "Sirdaryo",
                                    "title": "SIRDARYO VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхандарья",
                                    "value": "Surxondaryo",
                                    "title": "SURXONDARYO VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "Toshkent_area",
                                    "title": "TOSHKENT VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фергана",
                                    "value": "Fargona",
                                    "title": "FARG'ONA VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хорезм",
                                    "value": "Xorazm",
                                    "title": "XORAZM VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Кашкадарья",
                                    "value": "Qashqadaryo",
                                    "title": "QASHQADARYO VILOYATI",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкент",
                                    "value": "Toshkent_City",
                                    "title": "TOSHKENT SHAHAR",
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
                            "title": "Tuman",
                            "type": "text",
                            "validation": null,
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
                            "name": "purpose_of_payment",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Для членских взносов",
                                    "value": "fee",
                                    "title": "A'zolik badali uchun",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Для спонсорства",
                                    "value": "sponsorship",
                                    "title": "Homiylik uchun",
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
                    "TOSHKENT MILLIY TIKLANISH",
                    "milliy tiklanish",
                    "миллий тикланиш",
                    "гос услуги",
                    "тикланиш"
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
                "_id": "66051f8012d57e0dca11f339",
                "paycom_id": "66051d045b347a44404c7d85",
                "name": "\"ADOLAT\" O`SDP",
                "organization": "ГУП «\"ADOLAT\" O`SDP»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/298f9108d20d3ffd92f117131c0521d9b7057f08.png",
                "date": 1711611776877,
                "terminal": {
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
                            "title": "Mintaqa",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Кашкадарья",
                                    "value": "4",
                                    "title": "Кашкадарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "СУрхандарья",
                                    "value": "8",
                                    "title": "СУрхандарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сырдарья",
                                    "value": "9",
                                    "title": "Сырдарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "11",
                                    "title": "Ташкентская область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фергана",
                                    "value": "12",
                                    "title": "Фергана",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хорезм",
                                    "value": "13",
                                    "title": "Хорезм",
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
                            "name": "tolov",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Uchun tolov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Членство",
                                    "value": "1",
                                    "title": "Членство",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Спонсорство",
                                    "value": "2",
                                    "title": "Спонсорство",
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
                    "Ўзбекистон Адолат СДП Қашқадарё вилояти ",
                    "ADOLAT",
                    "адолат"
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
                "_id": "60659657b8d597ed134d832d",
                "paycom_id": "60531d1c73214c962bade391",
                "name": "ЎРМОН ХЎЖАЛИГИ ДҚ ижара шартнома",
                "organization": "ГУП «ЎРМОН ХЎЖАЛИГИ ДАВЛАТ ҚЎМИТАСИ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/1294ae40317538492e4650f1746fb731e73c6ef2.png",
                "date": 1617270359040,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invois Raqam",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ijara shartnoma",
                    "договору аренды земли",
                    "ўрмон хўжалиги давлат қўмитаси",
                    "ўрмон хўжалиги дқ ижара шартнома",
                    "ijara-urmon.uz",
                    "шофкф ырфкетщьф"
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
                "_id": "65154ddc5240a8ca4dff2122",
                "paycom_id": "65154d602918d26924fd4264",
                "name": "MILLIY KINOLOGIYA MARKAZI",
                "organization": "ГУП «MILLIY KINOLOGIYA MARKAZI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/c65c28ea21b5e46ec4911af0a689434903f8160b.png",
                "date": 1695895004403,
                "terminal": {
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
                            "title": "To'lov maqsadi :",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "\"ВЕТЕРИНАРИЯ ХИЗМАТЛАРИ\"",
                                    "value": "vet_services",
                                    "title": "\"ВЕТЕРИНАРИЯ ХИЗМАТЛАРИ\"",
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
                            "name": "payment_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov raqami :",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "MILLIY KINOLOGIYA MARKAZI",
                    "KINOLOGIYA",
                    "MILIY KINOLOGIYA MARKAZI",
                    "кинология",
                    "центр кинологии"
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
                "_id": "5b0fb751423cde0e287228dc",
                "paycom_id": "5b0fb142423cde0e287228cc",
                "name": "O`ZBEKEKSPERTIZA",
                "organization": "АО «O`ZBEKEKSPERTIZA»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/ozbekekspertiza__.png",
                "date": 1527756610360,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "company_name",
                            "title": "Shirkat Nomi",
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
                        },
                        {
                            "name": "inn",
                            "title": "STIR",
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
                        },
                        {
                            "name": "dogovor",
                            "title": "№ shartnoma",
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
                        },
                        {
                            "name": "account_number",
                            "title": "Hisob raqami",
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
                    "экспертиза",
                    "ekspertiza",
                    "O`ZBEKEKSPERTIZA",
                    "узэкспертиза"
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
                "_id": "606d8bbbb8d597ed134d864c",
                "paycom_id": "609282ac8ad987025c60640b",
                "name": "Standartlashtirish, sertifikatlashtirish va texnik jihatdan tartibga solish ilmiy- tadqiqot instituti",
                "organization": "ГУП «\"STANDARTLASHTIRISH,SERTIFIKATLASHTIRISH VA TEXNIK JIHATDAN»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/e511103d08e9938243f584433b8d53d9a25e0103.png",
                "date": 1617791931034,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 600000000,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "payment_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To`lov turi",
                            "type": "select",
                            "validation": "^0[12]$",
                            "values": [
                                {
                                    "name": "Оплата за переподготовку и повышение квалификации",
                                    "value": "01",
                                    "title": "Qayta tayyorlash va malaka oshirish uchun to'lov",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за нормативные документы",
                                    "value": "02",
                                    "title": "Normativ hujjatlar uchun to'lov",
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
                            "name": "invoice",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invoys raqami",
                            "type": "text",
                            "validation": "^.{1,14}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узстандарт",
                    "uzstandart",
                    "epcnfylfhn",
                    "гяыефтвфке",
                    "Standartlashtirish",
                    "sertifikatlashtirish",
                    "sertifikat",
                    "Standartlas"
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
                "_id": "62a347b4aa40a686d47d17e5",
                "paycom_id": "62a3473f8e7f5323c7523afe",
                "name": "SIRDARYOEKSPERTIZA",
                "organization": "ООО «SIRDARYOEKSPERTIZA»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/94ab52322ed462612d44741a06ad7967a3ac9414.png",
                "date": 1654867892277,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "name_of_company",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tashkilot nomi",
                            "type": "text",
                            "validation": null,
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
                            "title": "STIR",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "SIRDARYOEKSPERTIZA",
                    "СырдарьяЭкспертиза",
                    "СирдарьёЭкспертиза",
                    "ЫшквфкнщУлызукешяф"
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
                "_id": "64da213e71e0baa108e0c68d",
                "paycom_id": "64da1fdea8a1f5ec97d1ca1d",
                "name": "IXXQJF",
                "organization": "ГУП «ИХХКЖХБ БЕКОБОД Ш.БУЛИМИ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/dff2207535eaa23a8fb369c899793bd6d689c692.png",
                "date": 1692016958842,
                "terminal": {
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
                            "name": "birthday",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tug'ilgan kun",
                            "type": "text",
                            "validation": null,
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
                    "ixxqjf",
                    "иххкжф",
                    "шччйша"
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
                "_id": "64df36947c8935bad9a8eb6d",
                "paycom_id": "64be71dfe4e564c982861d7c",
                "name": "ЭкоПартия",
                "organization": "ННО «Ўзбекистон Экологик партияси Марказий Кенгаши»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/0b24b095bdd8fc75bfe3f0f408bfced93883acdc.png",
                "date": 1692350100571,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "passport_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Passport raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ЭкоПартия",
                    "Ekopartiya",
                    "эко партиа",
                    "эко",
                    "eko partiya"
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
                "_id": "65e6f22288f9930638b5b877",
                "paycom_id": "65e6f1bf3c319dec9d8d224d",
                "name": "O'ZBEKISTON RESPUBLIKASI DAVLAT AKTIVLARINI BOSHQARISH AGENTLIGI",
                "organization": "ГУП «O'ZBEKISTON RESPUBLIKASI DAVLAT AKTIVLARINI BOSHQARISH AGENTLIGI»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/422922deba4c05de1f74f9d3d5e3a2ade38925fd.png",
                "date": 1709634082382,
                "terminal": {
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
                            "title": "To'lov yo'nalishi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Оплата за покупку государственных активов",
                                    "value": "actives_purchase",
                                    "title": "Davlat aktivlarini sotib olish bo'yicha to'lov qilish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за аренду государственных активов",
                                    "value": "activs_rent",
                                    "title": "Davlat aktivlari ijarasi bo'yicha  to'lov qilish",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Оплата за покупку земли несельскохозяйственного назначения",
                                    "value": "land_purchase",
                                    "title": "Qishloq xo'jaligiga mo'ljallanmagan yer uchastkalarini sotib olish bo'yicha to'lov qilish",
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
                            "name": "territory",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Hudud",
                            "type": "select",
                            "validation": null,
                            "_require": "payment_for",
                            "values": [
                                {
                                    "name": "Марказий аппарат",
                                    "value": "markaziy",
                                    "title": "Markaziy apparat",
                                    "filter": "actives_purchase",
                                    "description": null
                                },
                                {
                                    "name": "Қорақалпоғистон Республикаси",
                                    "value": "qoraqalpoq",
                                    "title": "Qoraqalpogʻiston Respublikasi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Андижон вилояти",
                                    "value": "andijan",
                                    "title": "Andijon viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухоро вилояти",
                                    "value": "buxara",
                                    "title": "Buxoro viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Жиззах вилояти",
                                    "value": "jizzax",
                                    "title": "Jizzax viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Қашқадарё вилояти",
                                    "value": "qashqadaryo",
                                    "title": "Qashqadaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навоий вилояти",
                                    "value": "navoiy",
                                    "title": "Navoiy viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган вилояти",
                                    "value": "namangan",
                                    "title": "Namangan viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарқанд вилояти",
                                    "value": "samarqand",
                                    "title": "Samarqand viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхондарё вилояти",
                                    "value": "surxondaryo",
                                    "title": "Surxondaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сирдарё вилояти",
                                    "value": "sirdaryo",
                                    "title": "Sirdaryo viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент вилояти",
                                    "value": "toshkent_viloyat",
                                    "title": "Toshkent viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фарғона вилояти",
                                    "value": "faqrgona",
                                    "title": "Farg'ona viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хоразм вилояти",
                                    "value": "xorazm",
                                    "title": "Xorazm viloyat",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Тошкент шаҳри",
                                    "value": "toshkent_city",
                                    "title": "Toshkent shahri",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null,
                            "require": null
                        },
                        {
                            "content": "text",
                            "name": "land_purchase_type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Права собственности",
                                    "value": "prava_sobs",
                                    "title": "Mulk huquqi",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Права аренды",
                                    "value": "prava_arenda",
                                    "title": "Ijara huquqi",
                                    "filter": null,
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "optional": true,
                            "visible": {
                                "require": "payment_for",
                                "value": "^land_purchase$"
                            },
                            "error": null,
                            "scan": null,
                            "require": null
                        },
                        {
                            "content": "text",
                            "name": "pinfl_inn",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "JSHSHIR (PINFL) yoki STIR",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "contract_date_number",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma raqami va sanasi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "DAVAKTIV",
                    "O'ZBEKISTON RESPUBLIKASI DAVLAT AKTIVLARINI BOSHQARISH AGENTLIGI",
                    "DAVLAT AKTIVLARINI BOSHQARISH AGENTLIGI",
                    "давактив"
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
                "_id": "5cd2bad83dd3183058ae7063",
                "paycom_id": "6093bcca5d157d44f1e30302",
                "name": "ГУБДД Замена прав",
                "organization": "Главное управление безопасности дорожного движения",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/mvd-driver-license.png",
                "date": 1557318335425,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 200000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "scan": "CODE_128",
                            "validation": "^([a-zA-Z]{2,4})? *\\d{9}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "error": null,
                            "placeholder": "",
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "гаи",
                    "права",
                    "dan",
                    "yhxb",
                    "jarima",
                    "пошлина",
                    "удостоверение",
                    "водитель",
                    "xaydovchi",
                    "haydovchi",
                    "prava",
                    "gai",
                    "gubdd",
                    "guvohnoma"
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
                "_id": "5ec290de343eb86f54d331f6",
                "paycom_id": "5ebe7adb6420f3660dc8b71a",
                "name": "КАРАКАЛПАК ЭКСПЕРТИЗА",
                "organization": "ООО «ДХО ООО КАРАКАЛПАКЭКСПЕРТИЗА»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/95a2834f5ff774abd1337e458a1b12258b649097.png",
                "date": 1589809374764,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "organization_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tashkilot nomi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "TIN_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Soliq to'lovchining shaxsiy raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "contract_id",
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
                        },
                        {
                            "content": "text",
                            "name": "service_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Xizmat nomi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "invoice_number_date",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Schet-faktura raqami va sanasi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "каракалпакстан",
                    "qaraqalpaqstan",
                    "экспертиза",
                    "ekspertiza"
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
                "_id": "5f33c505c447727744caaf16",
                "paycom_id": "5f33c2be77c50d8b75474d90",
                "name": "Джизакэкспертиза ",
                "organization": "ООО «Джизакэкспертиза»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/cdeface400068cdbb31bae4c3488b1cddf9c684b.png",
                "date": 1597228293277,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Organization_name",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tashkilot nomi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        },
                        {
                            "content": "text",
                            "name": "TIN",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "soliq to'lovchining identifikatsiya raqami",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "экспертиза",
                    "проверка",
                    "обследование",
                    "экспертная оценка",
                    "освидетельствование",
                    "осмот",
                    "Джизак экспертиза гаи"
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
                "_id": "604b0bfa52768101829871c3",
                "paycom_id": "6049b30d6692e73f84606b69",
                "name": "Хокимият Миробадского района ",
                "organization": "ГУП «Хокимият Мирабадского района»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/72b7f279845750b295126b68c2d2a7e04366a450.png",
                "date": 1615531002470,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "number",
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
                            "name": "name",
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
                        }
                    ]
                },
                "keywords": [
                    "хокимият мирабадского района",
                    "государственные услуги",
                    "mirobod tumani hokimligi",
                    "davlat xizmatlari",
                    "ujcelfhcndtyyst eckeub"
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
                "_id": "605497f209f72b00dba008cc",
                "paycom_id": "604b6c74b04e9b6f30aa0914",
                "name": "UNICON-SOFT",
                "organization": "ООО «ООО \"UNICON-SOFT\"»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/0945388040d0324b4e59d03b874df279806e84a1.png",
                "date": 1616156658656,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 1000000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "contract_code",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shartnoma kodi",
                            "type": "text",
                            "validation": "^[a-zA-Zа-яА-ЯёЁ0-9]{12,12}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "юникон софт",
                    "unicon soft",
                    "государственные услуги",
                    "davlat xizmatlari",
                    "гтшсщт ыщае"
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
                "_id": "606595b7b8d597ed134d832a",
                "paycom_id": "6051a78473214c962badc24b",
                "name": "ЎРМОН ХЎЖАЛИГИ ДАВЛАТ ҚЎМИТАСИ",
                "organization": "ГУП «ЎРМОН ХЎЖАЛИГИ ДАВЛАТ ҚЎМИТАСИ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/ebd30d1d1ff405cfb75f9dd8301d077bf90f0a46.png",
                "date": 1617270199487,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Jarima",
                                    "value": "1",
                                    "title": "Jarima",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ruxsatnoma",
                                    "value": "2",
                                    "title": "Ruxsatnoma",
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
                            "name": "id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Invois Raqam",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "INV-",
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
                    "ruxsatnoma va jarima uchun to`lov",
                    "ўрмон хўжалиги давлат қўмитаси",
                    "ўрмон хўжалиги дқ жарима/рухсатнома",
                    "jarima",
                    "штраф",
                    "разрешение",
                    "ruxsatnoma-urmon.uz",
                    "jarima-urmon.uz",
                    "jarima uchun tolov"
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
                "_id": "60797363b8d597ed134d8eb4",
                "paycom_id": "60795c35ec58b6dc8f90a179",
                "name": "Adolat",
                "organization": "ННО «СДПУ АДОЛАТ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/5156fc0e0cf87a35f794723f277d37e64493456f.png",
                "date": 1618572131058,
                "terminal": {
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
                            "title": "Region",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Андижан",
                                    "value": "r_andijan",
                                    "title": "Andijon",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Бухара",
                                    "value": "r_buhara",
                                    "title": "Buhoro",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Джизак",
                                    "value": "r_jizak",
                                    "title": "Jizak",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Кашкадарья",
                                    "value": "r_kashkadarya",
                                    "title": "Kashkadaryo",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Навои",
                                    "value": "r_navoi",
                                    "title": "Navoiy",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Наманган",
                                    "value": "r_namangan",
                                    "title": "Namangan",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Самарканд",
                                    "value": "r_samarkand",
                                    "title": "Samarqand",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сурхандарья",
                                    "value": "r_surhandarya",
                                    "title": "Surhandaryo",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Сырдарья",
                                    "value": "r_sirdarya",
                                    "title": "Sirdaryo",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "г. Ташкент",
                                    "value": "gorod_tashkent",
                                    "title": "Toshkent shahar",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Ташкентская область",
                                    "value": "r_tashkent",
                                    "title": "Toshkent viloyati",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Фергана",
                                    "value": "r_fergana",
                                    "title": "Fergana",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Хорезм",
                                    "value": "r_horezm",
                                    "title": "Horezm",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Республика Каракалпакстан",
                                    "value": "r_karakalpakstan",
                                    "title": "Qoraqalpog'iston Respublikasi",
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
                            "title": "Tuman",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "г. Андижан",
                                    "value": "g_andijan",
                                    "title": "Andijon shahri",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Хонобод",
                                    "value": "g_xonobod",
                                    "title": "Xonobod",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Корасув",
                                    "value": "g_korasuv",
                                    "title": "Korasuv",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Андижан",
                                    "value": "andijon",
                                    "title": "Andijon",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Асака",
                                    "value": "asaka",
                                    "title": "Asaka",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Баликчи",
                                    "value": "balikchi",
                                    "title": "Baliqchi",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Буз",
                                    "value": "buz",
                                    "title": "Buz",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Булокбоши",
                                    "value": "buloqboshi",
                                    "title": "Buloqboshi",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Жалолкудук",
                                    "value": "jalolkuduk",
                                    "title": "Jalolquduq",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Избоскан",
                                    "value": "izboskan",
                                    "title": "Izboskan",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Кургонтепа",
                                    "value": "kurgontepa",
                                    "title": "Qo'rg'ontepa",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Мархамат",
                                    "value": "marhamat",
                                    "title": "Markhamat",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Олтинкул",
                                    "value": "oltinkul",
                                    "title": "Oltinkul",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Пахтаобод",
                                    "value": "paxtaobod",
                                    "title": "Paxtaobod",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Хужаобод",
                                    "value": "xujaobod",
                                    "title": "Xo'jaobod",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Улугнор",
                                    "value": "ulugnor",
                                    "title": "Ulug'nor",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Шахрихон",
                                    "value": "shahrihon",
                                    "title": "Shahrixon",
                                    "filter": "r_andijan",
                                    "description": null
                                },
                                {
                                    "name": "Олот",
                                    "value": "olot",
                                    "title": "Olot",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Вобкент",
                                    "value": "vobkent",
                                    "title": "Vobkent",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Гиждувон",
                                    "value": "gijduvon",
                                    "title": "G'ijduvon",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Бухоро",
                                    "value": "buxoro",
                                    "title": "Buxoro",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Коракул",
                                    "value": "korakul",
                                    "title": "Qoraqul",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Ромитан",
                                    "value": "romitan",
                                    "title": "Romitan",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Жондор",
                                    "value": "jondor",
                                    "title": "Jondor",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Шофиркон",
                                    "value": "shofirkon",
                                    "title": "Shofirkon",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Пешку",
                                    "value": "peshku",
                                    "title": "Peshku",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Коровулбозор",
                                    "value": "korovulbozor",
                                    "title": "Korovulbozor",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "Когон",
                                    "value": "kogon",
                                    "title": "Kogon",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "г. Бухара",
                                    "value": "g_buxara",
                                    "title": "Buxoro shahri",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "г. Когон",
                                    "value": "g_kogon",
                                    "title": "Kogon shahri",
                                    "filter": "r_buhara",
                                    "description": null
                                },
                                {
                                    "name": "г. Джизак",
                                    "value": "g_jizak",
                                    "title": "Jizzax shahri",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Пахтакор",
                                    "value": "paxtakor",
                                    "title": "Paxtakor",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Галлаорол",
                                    "value": "gallaorol",
                                    "title": "Gallaorol",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Дустлик",
                                    "value": "dustlik",
                                    "title": "Dustlik",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Мирзачул",
                                    "value": "mirzachul",
                                    "title": "Mirzachul",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Зомин",
                                    "value": "zomin",
                                    "title": "Zomin",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Бахмал",
                                    "value": "bahmal",
                                    "title": "Baxmal",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Фориш",
                                    "value": "forish",
                                    "title": "Forish",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Зафаробод",
                                    "value": "zafarobod",
                                    "title": "Zafarobod",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Шароф Рашидов",
                                    "value": "sharof",
                                    "title": "Sharof Rashidov",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Арнасой",
                                    "value": "arnasay",
                                    "title": "Arnasoy",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Зарбдор",
                                    "value": "zarbdor",
                                    "title": "Zarbdor",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "Янгиобод",
                                    "value": "yangiabad",
                                    "title": "Yangiobod",
                                    "filter": "r_jizak",
                                    "description": null
                                },
                                {
                                    "name": "г. Карши",
                                    "value": "g_karshi",
                                    "title": "Qarshi shahri",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Карши",
                                    "value": "karshi",
                                    "title": "Qarshi",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Гузор",
                                    "value": "guzor",
                                    "title": "Guzor",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Дехконобод",
                                    "value": "dexkonobod",
                                    "title": "Dehqonobod",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Камаши",
                                    "value": "kamashi",
                                    "title": "Kamashi",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Косон",
                                    "value": "koson",
                                    "title": "Koson",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "г. Шахрисабз",
                                    "value": "shahrisabz",
                                    "title": "Shahrisabz shahri",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Чирокчи",
                                    "value": "chirokchi",
                                    "title": "Chiroqchi",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Яккабог",
                                    "value": "yakkabog",
                                    "title": "Yakkabog",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Китоб",
                                    "value": "kitob",
                                    "title": "Kitob",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Касби",
                                    "value": "kasbi",
                                    "title": "Kasbi",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Нишон",
                                    "value": "nishon",
                                    "title": "Nishon",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Муборак",
                                    "value": "muborak",
                                    "title": "Muborak",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Шахрисабз",
                                    "value": "shahrisabz",
                                    "title": "Shahrisabz",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "Миришкор",
                                    "value": "marishkor",
                                    "title": "Mirishkor",
                                    "filter": "r_kashkadarya",
                                    "description": null
                                },
                                {
                                    "name": "г. Навои",
                                    "value": "g_navoi",
                                    "title": "Navoiy shahri",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "г. Зарафшан",
                                    "value": "g_zarafshan",
                                    "title": "Zarafshon shahri",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Кармана",
                                    "value": "karmana",
                                    "title": "Karmana",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Конимех",
                                    "value": "konimex",
                                    "title": "Konimeh",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Кизилтепа",
                                    "value": "kiziltepa",
                                    "title": "Qiziltepa",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Навбахор",
                                    "value": "navbahor",
                                    "title": "Navbahor",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Нурота",
                                    "value": "nurota",
                                    "title": "Nurota",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Хатирчи",
                                    "value": "hatirchi",
                                    "title": "Xatirchi",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Томди",
                                    "value": "tomdi",
                                    "title": "Tomdi",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "Учкудук",
                                    "value": "uchkuduk",
                                    "title": "Uchquduq",
                                    "filter": "r_navoi",
                                    "description": null
                                },
                                {
                                    "name": "г. Наманган",
                                    "value": "g_namangan",
                                    "title": "Namangan shahri",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Мингбулок",
                                    "value": "mingbulok",
                                    "title": "Mingbulok",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Косонбой",
                                    "value": "kosonboy",
                                    "title": "Kosonboy",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Норин",
                                    "value": "norin",
                                    "title": "Norin",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Поп",
                                    "value": "pop",
                                    "title": "Pop",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Туракургон",
                                    "value": "turakurgon",
                                    "title": "Turakurgon",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Уйчи",
                                    "value": "uychi",
                                    "title": "Uychi",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Учкургон",
                                    "value": "uchkurgon",
                                    "title": "Uchqo'rg'on",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Чуст",
                                    "value": "chust",
                                    "title": "Chust",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Янгикургон",
                                    "value": "yangikurgon",
                                    "title": "Yangiqo'rg'on",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Наманган",
                                    "value": "namangan",
                                    "title": "Namangan",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Чорток",
                                    "value": "chortok",
                                    "title": "Chortoq",
                                    "filter": "r_namangan",
                                    "description": null
                                },
                                {
                                    "name": "Окдарё",
                                    "value": "okdaryo",
                                    "title": "Oqdaryo",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Булунгур",
                                    "value": "bulungur",
                                    "title": "Bulungur",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Жомбой",
                                    "value": "jomboy",
                                    "title": "Jomboy",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Иштихон",
                                    "value": "ishtixon",
                                    "title": "Ishtixon",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Каттакургон",
                                    "value": "kattakurgon",
                                    "title": "Kattaqoʻrgʻon",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Кушработ",
                                    "value": "kushrabot",
                                    "title": "Qushrabot",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Нарпай",
                                    "value": "narpay",
                                    "title": "Narpay",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Нуробод",
                                    "value": "nurobod",
                                    "title": "Nurobod",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Пастдаргом",
                                    "value": "pastdargom",
                                    "title": "Pastdargom",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Пахтачи",
                                    "value": "paxtachi",
                                    "title": "Paxtachi",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Пайарик",
                                    "value": "payarik",
                                    "title": "Payariq",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Самарканд",
                                    "value": "samarkand",
                                    "title": "Samarqand",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Тайлок",
                                    "value": "taylok",
                                    "title": "Tylok",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "Ургут",
                                    "value": "urgut",
                                    "title": "Urgut",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "г. Самарканд",
                                    "value": "g_samarkand",
                                    "title": "Samarkand city",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "г. Каттакургон",
                                    "value": "g_kattakurgon",
                                    "title": "Kattakurgon shahri",
                                    "filter": "r_samarkand",
                                    "description": null
                                },
                                {
                                    "name": "г. Термез",
                                    "value": "g_termez",
                                    "title": "Termiz shahri",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Бойсун",
                                    "value": "boysun",
                                    "title": "Boysun",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Денов",
                                    "value": "denov",
                                    "title": "Denov",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Жаркургон",
                                    "value": "jarkurgon",
                                    "title": "Jarqoʻrgʻon",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Музработ",
                                    "value": "muzrabot",
                                    "title": "Muzrabot",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Шеробод",
                                    "value": "sherobod",
                                    "title": "Sherobod",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Шурчи",
                                    "value": "shurcji",
                                    "title": "Shurchi",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Узун",
                                    "value": "uzun",
                                    "title": "Uzun",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Сариосиё",
                                    "value": "sariosiyo",
                                    "title": "Sariosiyo",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Ангор",
                                    "value": "angor",
                                    "title": "Angora",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Кизирик",
                                    "value": "kizirik",
                                    "title": "Qiziriq",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Кумкургон",
                                    "value": "kumkurgon",
                                    "title": "Qumqo'rg'on",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Термиз",
                                    "value": "termiz",
                                    "title": "Termiz",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "Олтинсой",
                                    "value": "oltinsoy",
                                    "title": "Oltinsoy",
                                    "filter": "r_surhandarya",
                                    "description": null
                                },
                                {
                                    "name": "г. Гулистан",
                                    "value": "g_gulistan",
                                    "title": "Guliston shahri",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "г. Янгиер",
                                    "value": "g_yangier",
                                    "title": "Yangiyer shahri",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "г. Ширин",
                                    "value": "g_shirin",
                                    "title": "Shirin shahri",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Околтин",
                                    "value": "okoltin",
                                    "title": "Okoltin",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Боёвут",
                                    "value": "boyovut",
                                    "title": "Boyovut",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Гулистон",
                                    "value": "guliston",
                                    "title": "Guliston",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Сардоба",
                                    "value": "sardoba",
                                    "title": "Sardoba",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Сирдарьё",
                                    "value": "sirdaryo",
                                    "title": "Sirdaryo",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Сайхунобод",
                                    "value": "sayxunodob",
                                    "title": "Sayxunobod",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Хаваст",
                                    "value": "havast",
                                    "title": "Xavast",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Мирзаобод",
                                    "value": "mirzaobod",
                                    "title": "Mirzaobod",
                                    "filter": "r_sirdarya",
                                    "description": null
                                },
                                {
                                    "name": "Учтепа",
                                    "value": "uctepa",
                                    "title": "Uchtepa",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Бектемир",
                                    "value": "bektemir",
                                    "title": "Bektemir",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Юнусобод",
                                    "value": "yunusobod",
                                    "title": "Yunusobod",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Мирзо-Улугбек",
                                    "value": "mirzoulugbek",
                                    "title": "Mirzo Ulug'bek",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Миробод",
                                    "value": "mirobod",
                                    "title": "Mirobod",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Шайхонтохур",
                                    "value": "shayhontohur",
                                    "title": "Shayxontoxur",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Олмазор",
                                    "value": "olmazor",
                                    "title": "Olmazor",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Сергели",
                                    "value": "sergeli",
                                    "title": "Sergeli",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Яккасарой",
                                    "value": "yakkasaroy",
                                    "title": "Yakkasaroy",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Яшнобод",
                                    "value": "yashnobod",
                                    "title": "Yoshnobod",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Чиланзар",
                                    "value": "chilanzar",
                                    "title": "Chilanzor",
                                    "filter": "gorod_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Охангарон",
                                    "value": "g_ohangoron",
                                    "title": "Ohangaron shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Олмалик",
                                    "value": "g_olmalik",
                                    "title": "Olmaliq shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Ангрен",
                                    "value": "g_angren",
                                    "title": "Angren shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Бекабад",
                                    "value": "g_bekabad",
                                    "title": "Bekobod shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Чирчик",
                                    "value": "g_chircjik",
                                    "title": "Chirchiq shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Янгийул",
                                    "value": "g_yangiyul",
                                    "title": "Yangiyo'l shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Нурафшон",
                                    "value": "g_nurafshon",
                                    "title": "Nurafshon shahri",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Оккургон",
                                    "value": "okkurgon",
                                    "title": "Occurgon",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Охангарон",
                                    "value": "ohangoron",
                                    "title": "Ohangaron",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Бустонлик",
                                    "value": "bustonlik",
                                    "title": "Bustonlik",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Бука",
                                    "value": "buka",
                                    "title": "Buka",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Зангиота",
                                    "value": "zangiota",
                                    "title": "Zangiota",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Бекобод",
                                    "value": "bekobod",
                                    "title": "Bekobod",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Кибрай",
                                    "value": "kibray",
                                    "title": "Qibray",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Паркент",
                                    "value": "parkent",
                                    "title": "Parkent",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Куйичирчик",
                                    "value": "kuyichirchik",
                                    "title": "Kuyichirchiq",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Пскент",
                                    "value": "pskent",
                                    "title": "Pskent",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Тошкент",
                                    "value": "toshkent",
                                    "title": "Toshkent",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Уртачирчик",
                                    "value": "urtachirchik",
                                    "title": "Urtachirchiq",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Чиноз",
                                    "value": "chinoz",
                                    "title": "Chinoz",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Юкоричирчик",
                                    "value": "yukorixhirchik",
                                    "title": "YukorichirchikYukorichirchik",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "Янгийул",
                                    "value": "yangiyul",
                                    "title": "Yangiyo'l",
                                    "filter": "r_tashkent",
                                    "description": null
                                },
                                {
                                    "name": "г. Кукон",
                                    "value": "g_kukon",
                                    "title": "Kukon shahri",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "г. Маргилон",
                                    "value": "g_margilon",
                                    "title": "Marg'ilon shahri",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "г. Фергана",
                                    "value": "g_fergana",
                                    "title": "Farg'ona shahri",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "г. Кувасой",
                                    "value": "g_kuvasoy",
                                    "title": "Quvasoy shahri",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Бешарик",
                                    "value": "besharik",
                                    "title": "Beshariq",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Богдод",
                                    "value": "bogdod",
                                    "title": "Bog'dod",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Бувайда",
                                    "value": "buvayda",
                                    "title": "Buvayda",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Дангара",
                                    "value": "dangara",
                                    "title": "Dang'ara",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Ёзёвон",
                                    "value": "yozyovon",
                                    "title": "Yozyovon",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Кува",
                                    "value": "kuva",
                                    "title": "Quva",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Олтинарик",
                                    "value": "oltinarik",
                                    "title": "Oltinarik",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Куштепа",
                                    "value": "kushtepa",
                                    "title": "Qushtepa",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Риштон",
                                    "value": "rishton",
                                    "title": "Rishton",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Сух",
                                    "value": "suh",
                                    "title": "So‘x",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Тошлок",
                                    "value": "toshlok",
                                    "title": "Toshlok",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Узбекистон",
                                    "value": "uzbekiston",
                                    "title": "O'zbekiston",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Учкуприк",
                                    "value": "uchkuprik",
                                    "title": "Uchkuprik",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Фаргона",
                                    "value": "fargona",
                                    "title": "Farg'ona",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "Фуркат",
                                    "value": "furkat",
                                    "title": "Furqat",
                                    "filter": "r_fergana",
                                    "description": null
                                },
                                {
                                    "name": "г. Ургенч",
                                    "value": "g_urgench",
                                    "title": "Urganch shahri",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "г. Хива",
                                    "value": "g_hiva",
                                    "title": "Xiva shahri",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "г. Питнак",
                                    "value": "g_pitnak",
                                    "title": "Pitnak shahri",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Гурлан",
                                    "value": "gurlan",
                                    "title": "Gurlan",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Богот",
                                    "value": "bogot",
                                    "title": "Bogot",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Хазорасп",
                                    "value": "hazorasp",
                                    "title": "Khazorasp",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Хонка",
                                    "value": "honka",
                                    "title": "Xonka",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Янгиарик",
                                    "value": "yangiarik",
                                    "title": "Yangiariq",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Кушкупир",
                                    "value": "kushkupir",
                                    "title": "Kushkupir",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Шовот",
                                    "value": "shovot",
                                    "title": "Shovot",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Урганч",
                                    "value": "urganch",
                                    "title": "Urganch",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Янгибозор",
                                    "value": "yangibozor",
                                    "title": "Yangibozor",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "Хива",
                                    "value": "hiva",
                                    "title": "Xiva",
                                    "filter": "r_horezm",
                                    "description": null
                                },
                                {
                                    "name": "г. Нукус",
                                    "value": "g_nukus",
                                    "title": "Nukus shahri",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Кегейли",
                                    "value": "kegeyli",
                                    "title": "Kegaley",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Шуманай",
                                    "value": "shumanay",
                                    "title": "Shumanay",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Кунгирот",
                                    "value": "kungirot",
                                    "title": "Kungirot",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Муйнок",
                                    "value": "muynok",
                                    "title": "Muynok",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Тахтакупир",
                                    "value": "tahtakupir",
                                    "title": "Taxtakupir",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Турткул",
                                    "value": "turtkul",
                                    "title": "To'rtkul",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Хужайли",
                                    "value": "hujayli",
                                    "title": "Xujayli",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Чимбой",
                                    "value": "chimboy",
                                    "title": "Chimboy",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Беруний",
                                    "value": "beruni",
                                    "title": "Beruniy",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Конликул",
                                    "value": "konlikul",
                                    "title": "Konlicul",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Кораузак",
                                    "value": "korauzak",
                                    "title": "Qorauzak",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Элликкала",
                                    "value": "ellikkala",
                                    "title": "Ellikkala",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Амударьё",
                                    "value": "amudaryo",
                                    "title": "Amudaryo",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Нукус",
                                    "value": "nukus",
                                    "title": "Nukus",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Бузатов",
                                    "value": "buzatov",
                                    "title": "Buzatov",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                },
                                {
                                    "name": "Тахиатош",
                                    "value": "tahiatosh",
                                    "title": "Tachyatosh",
                                    "filter": "r_karakalpakstan",
                                    "description": null
                                }
                            ],
                            "prefix": null,
                            "require": "receiver",
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
                            "name": "service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Uchun to'lov",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Членство",
                                    "value": "chlenstvo",
                                    "title": "A'zolik",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Спонсорство",
                                    "value": "sponsorstvo",
                                    "title": "Homiylik",
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
                    "адолат",
                    "фвщдфе",
                    "членство",
                    "спонсорство",
                    "adolat",
                    "fljkfn",
                    "фвщдфе"
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
                "_id": "609269fead28b36d0fcd8d12",
                "paycom_id": "6092666cad28b36d0fcd8d07",
                "name": "Оплата пошлин за получение биометрического паспорта",
                "organization": "Государственный Центр Персонализации",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/a527c9b3012792ddf15ceee32c310748dbe4ccfc.png",
                "date": 1620208105530,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 1,
                        "max": 600000000
                    },
                    "account": [
                        {
                            "name": "invoice",
                            "title": "Kvitansiya raqami",
                            "content": "text",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{14}$",
                            "validation_error": "Ошибка в номере квитанции",
                            "visible": null,
                            "placeholder": "14 ta raqamni kiriting",
                            "scan": "CODE_128",
                            "error": null,
                            "optional": false
                        }
                    ]
                },
                "keywords": [
                    "центр персонализации",
                    "загранпаспорт",
                    "пошлина",
                    "yig'im",
                    "tushum",
                    "тушум",
                    "ovir",
                    "jdbh",
                    "овир",
                    "щмшк",
                    "паспорт",
                    "passport",
                    "pasport",
                    "gfcgjhn",
                    "biopassport",
                    "биопаспорт",
                    "xalqaro pasport",
                    "zagran pasport",
                    "zagranpasport",
                    "international passport",
                    "ovir",
                    "загранник",
                    "заграничный паспорт",
                    "загран паспорт",
                    "загранпаспорт",
                    "pfuhfygfcgjhn"
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
                "_id": "60e68b1916527be45e019d93",
                "paycom_id": "60e3f900e940656857cdb4cf",
                "name": "НУРАФШОН КАСАБА УЮШМАСИ КЕНГАШ",
                "organization": "ННО «НУРАФШОН КАСАБА УЮШМАСИ КЕНГАШ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/a8d1e7f1336e55791904f2fb89a83fbebd3bd75a.png",
                "date": 1625721625551,
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
                            "title": "Sanatoriya nomi",
                            "type": "text",
                            "validation": null,
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
                            "title": "Sayohat raqami",
                            "type": "text",
                            "validation": null,
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
                            "name": "type",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tur turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "-за счет средств профсоюзов",
                                    "value": "prof",
                                    "title": "-kasaba uyushmalari mablag'lari hisobidan",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "-за счет взносов социального страхования",
                                    "value": "strahovka",
                                    "title": "-ijtimoiy sug'urta badallari orqali",
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
                    "нурафшон",
                    "nurafshon",
                    "профсоюз",
                    "profsoyuz",
                    "kasaba",
                    "касаба",
                    "касба",
                    "кенгаш"
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
                "_id": "5cdbac46a2da2715b8c3e469",
                "paycom_id": "5cdbac46a2da2715b8c3e469",
                "name": "Xalq Ta'limi Vazirligi",
                "organization": "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/president-schools.png",
                "date": 1557912851500,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 10000000000
                    },
                    "account": [
                        {
                            "name": "userNumber",
                            "title": "Kvitansiya raqami",
                            "type": "text",
                            "content": "text",
                            "prefix": {
                                "type": "static",
                                "value": "MT",
                                "output": true
                            },
                            "replace": null,
                            "validation": "^(MT)?[0-9]{4}",
                            "placeholder": "1234",
                            "length": 4,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "президент",
                    "школа",
                    "мактаб",
                    "prezident",
                    "president",
                    "maktab",
                    "school",
                    "irjkf",
                    "vfrnf,",
                    "ьфлефи",
                    "зкуышвуте",
                    "зкуяшвуте",
                    "ghtpbltyn",
                    "xalq",
                    "ta'limi",
                    "vazirligi",
                    "xtv",
                    "мно",
                    "министрество",
                    "народного",
                    "образование"
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
                "_id": "626a63d3fbca73a7881cd723",
                "paycom_id": "626a37a7a56db647fd4bb788",
                "name": "Davlat Soliq Servis",
                "organization": "ПК «ГУП \"O`ZBEKISTON RESPUBLIKASI DAVLAT SOLIQ QO`MITASI HUZURID»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/bb6b562bb768caba4f178fd1efba1931a167132f.png",
                "date": 1651139539541,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "service_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Xizmatning ID raqami",
                            "type": "text",
                            "validation": null,
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
                            "title": "Viloyat",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья",
                                    "value": "10",
                                    "title": "Davlat Soliq Servis - Сурхандарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья",
                                    "value": "11",
                                    "title": "Davlat Soliq Servis - Кашкадарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана",
                                    "value": "12",
                                    "title": "Davlat Soliq Servis - Фергана",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область",
                                    "value": "13",
                                    "title": "Davlat Soliq Servis - Таш. Область",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак",
                                    "value": "14",
                                    "title": "Davlat Soliq Servis - Джизак",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент",
                                    "value": "01",
                                    "title": "Davlat Soliq Servis - Ташкент",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий",
                                    "value": "02",
                                    "title": "Davlat Soliq Servis - Навоий",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан",
                                    "value": "03",
                                    "title": "Davlat Soliq Servis - Каракалпакстан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара",
                                    "value": "04",
                                    "title": "Davlat Soliq Servis - Бухара",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан",
                                    "value": "05",
                                    "title": "Davlat Soliq Servis - Андижан",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья",
                                    "value": "06",
                                    "title": "Davlat Soliq Servis - Сирдарья",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм",
                                    "value": "07",
                                    "title": "Davlat Soliq Servis - Хорезм",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган",
                                    "value": "08",
                                    "title": "Davlat Soliq Servis - Наманган",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд",
                                    "value": "09",
                                    "title": "Davlat Soliq Servis - Самарканд",
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
                            "name": "receiver",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Tuman",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Сиргали тумани",
                                    "value": "1",
                                    "title": "Davlat Soliq Servis - Ташкент;Сиргали тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Яккасарой туман",
                                    "value": "2",
                                    "title": "Davlat Soliq Servis - Ташкент;Яккасарой туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Яшнаобод тумани",
                                    "value": "3",
                                    "title": "Davlat Soliq Servis - Ташкент;Яшнаобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Мирзо-Улугбек тумани",
                                    "value": "4",
                                    "title": "Davlat Soliq Servis - Ташкент;Мирзо-Улугбек тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Юнусобод тумани",
                                    "value": "5",
                                    "title": "Davlat Soliq Servis - Ташкент;Юнусобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Рахбар",
                                    "value": "6",
                                    "title": "Davlat Soliq Servis - Ташкент;Рахбар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Чилонзор тумани",
                                    "value": "7",
                                    "title": "Davlat Soliq Servis - Ташкент;Чилонзор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Учтепа тумани",
                                    "value": "8",
                                    "title": "Davlat Soliq Servis - Ташкент;Учтепа тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Шайхонтохур туман",
                                    "value": "9",
                                    "title": "Davlat Soliq Servis - Ташкент;Шайхонтохур туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Олмаззор тумани",
                                    "value": "10",
                                    "title": "Davlat Soliq Servis - Ташкент;Олмаззор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Бектемир",
                                    "value": "11",
                                    "title": "Davlat Soliq Servis - Ташкент;Бектемир",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Миробод тумани",
                                    "value": "12",
                                    "title": "Davlat Soliq Servis - Ташкент;Миробод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Галлаорол тумани",
                                    "value": "13",
                                    "title": "Davlat Soliq Servis - Джизак;Галлаорол тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Янгиобод тумани",
                                    "value": "14",
                                    "title": "Davlat Soliq Servis - Джизак;Янгиобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Пахтакор тумани",
                                    "value": "15",
                                    "title": "Davlat Soliq Servis - Джизак;Пахтакор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Зафаробод тумани",
                                    "value": "16",
                                    "title": "Davlat Soliq Servis - Джизак;Зафаробод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Мирзачул тумани",
                                    "value": "17",
                                    "title": "Davlat Soliq Servis - Джизак;Мирзачул тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Шароф Рашидов тумани",
                                    "value": "18",
                                    "title": "Davlat Soliq Servis - Джизак;Шароф Рашидов тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Фориш тумани",
                                    "value": "19",
                                    "title": "Davlat Soliq Servis - Джизак;Фориш тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Арнасой тумани",
                                    "value": "20",
                                    "title": "Davlat Soliq Servis - Джизак;Арнасой тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Жиззах шахар",
                                    "value": "21",
                                    "title": "Davlat Soliq Servis - Джизак;Жиззах шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Бахмал тумани",
                                    "value": "22",
                                    "title": "Davlat Soliq Servis - Джизак;Бахмал тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Дустлик тумани",
                                    "value": "23",
                                    "title": "Davlat Soliq Servis - Джизак;Дустлик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Зомин тумани",
                                    "value": "24",
                                    "title": "Davlat Soliq Servis - Джизак;Зомин тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Джизак;Зарбдор тумани",
                                    "value": "25",
                                    "title": "Davlat Soliq Servis - Джизак;Зарбдор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Нурафшон шахар",
                                    "value": "26",
                                    "title": "Davlat Soliq Servis - Таш. Область;Нурафшон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Юкоричирчик тумани",
                                    "value": "27",
                                    "title": "Davlat Soliq Servis - Таш. Область;Юкоричирчик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Олмалик шахар",
                                    "value": "28",
                                    "title": "Davlat Soliq Servis - Таш. Область;Олмалик шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Охангарон тумани",
                                    "value": "29",
                                    "title": "Davlat Soliq Servis - Таш. Область;Охангарон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Бустонлик тумани",
                                    "value": "30",
                                    "title": "Davlat Soliq Servis - Таш. Область;Бустонлик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Оккургон тумани",
                                    "value": "31",
                                    "title": "Davlat Soliq Servis - Таш. Область;Оккургон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Зангиота тумани",
                                    "value": "32",
                                    "title": "Davlat Soliq Servis - Таш. Область;Зангиота тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Чиноз тумани",
                                    "value": "33",
                                    "title": "Davlat Soliq Servis - Таш. Область;Чиноз тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Тошкент тумани",
                                    "value": "34",
                                    "title": "Davlat Soliq Servis - Таш. Область;Тошкент тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Чирчик шахар",
                                    "value": "35",
                                    "title": "Davlat Soliq Servis - Таш. Область;Чирчик шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Янгийул тумани",
                                    "value": "36",
                                    "title": "Davlat Soliq Servis - Таш. Область;Янгийул тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Бука тумани",
                                    "value": "37",
                                    "title": "Davlat Soliq Servis - Таш. Область;Бука тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Ангрен шахар",
                                    "value": "38",
                                    "title": "Davlat Soliq Servis - Таш. Область;Ангрен шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Охангарон шахар",
                                    "value": "39",
                                    "title": "Davlat Soliq Servis - Таш. Область;Охангарон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Пискент тумани",
                                    "value": "40",
                                    "title": "Davlat Soliq Servis - Таш. Область;Пискент тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Уртачирчик тумани",
                                    "value": "41",
                                    "title": "Davlat Soliq Servis - Таш. Область;Уртачирчик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Кибрай тумани",
                                    "value": "42",
                                    "title": "Davlat Soliq Servis - Таш. Область;Кибрай тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Янгийул шахар",
                                    "value": "43",
                                    "title": "Davlat Soliq Servis - Таш. Область;Янгийул шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Паркент тумани",
                                    "value": "44",
                                    "title": "Davlat Soliq Servis - Таш. Область;Паркент тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Куйичирчик тумани",
                                    "value": "45",
                                    "title": "Davlat Soliq Servis - Таш. Область;Куйичирчик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Бекобод шахар",
                                    "value": "46",
                                    "title": "Davlat Soliq Servis - Таш. Область;Бекобод шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Таш. Область;Бекобод тумани",
                                    "value": "47",
                                    "title": "Davlat Soliq Servis - Таш. Область;Бекобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Ёзёвон тумани",
                                    "value": "48",
                                    "title": "Davlat Soliq Servis - Фергана;Ёзёвон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Кукон шахар",
                                    "value": "49",
                                    "title": "Davlat Soliq Servis - Фергана;Кукон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Фаргона шахар",
                                    "value": "50",
                                    "title": "Davlat Soliq Servis - Фергана;Фаргона шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Богдод тумани",
                                    "value": "51",
                                    "title": "Davlat Soliq Servis - Фергана;Богдод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Маргилон шахар",
                                    "value": "52",
                                    "title": "Davlat Soliq Servis - Фергана;Маргилон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Куштепа тумани",
                                    "value": "53",
                                    "title": "Davlat Soliq Servis - Фергана;Куштепа тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Тошлок тумани",
                                    "value": "54",
                                    "title": "Davlat Soliq Servis - Фергана;Тошлок тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Бешарик тумани",
                                    "value": "55",
                                    "title": "Davlat Soliq Servis - Фергана;Бешарик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Риштон тумани",
                                    "value": "56",
                                    "title": "Davlat Soliq Servis - Фергана;Риштон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Узбекистон тумани",
                                    "value": "57",
                                    "title": "Davlat Soliq Servis - Фергана;Узбекистон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Бувайда тумани",
                                    "value": "58",
                                    "title": "Davlat Soliq Servis - Фергана;Бувайда тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Кува тумани",
                                    "value": "59",
                                    "title": "Davlat Soliq Servis - Фергана;Кува тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Фаргона в. Солик-сервис",
                                    "value": "60",
                                    "title": "Davlat Soliq Servis - Фергана;Фаргона в. Солик-сервис",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Фуркат тумани",
                                    "value": "61",
                                    "title": "Davlat Soliq Servis - Фергана;Фуркат тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Кувасой шахар",
                                    "value": "62",
                                    "title": "Davlat Soliq Servis - Фергана;Кувасой шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Дангара тумани",
                                    "value": "63",
                                    "title": "Davlat Soliq Servis - Фергана;Дангара тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Олтиарик тумани",
                                    "value": "64",
                                    "title": "Davlat Soliq Servis - Фергана;Олтиарик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Учкуприк тумани",
                                    "value": "65",
                                    "title": "Davlat Soliq Servis - Фергана;Учкуприк тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Фергана;Фаргона тумани",
                                    "value": "66",
                                    "title": "Davlat Soliq Servis - Фергана;Фаргона тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ДЕҲҚОНОБОД ТУМАНИ",
                                    "value": "67",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ДЕҲҚОНОБОД ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;КИТОБ ТУМАНИ",
                                    "value": "68",
                                    "title": "Davlat Soliq Servis - Кашкадарья;КИТОБ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ҚАРШИ ШАҲАР",
                                    "value": "69",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ҚАРШИ ШАҲАР",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ШАҲРИСАБЗ ШАҲАР",
                                    "value": "70",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ШАҲРИСАБЗ ШАҲАР",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ШАХРИСАБЗ ТУМАНИ",
                                    "value": "71",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ШАХРИСАБЗ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ҚАРШИ ТУМАНИ",
                                    "value": "72",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ҚАРШИ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;МИРИШКОР ТУМАНИ",
                                    "value": "73",
                                    "title": "Davlat Soliq Servis - Кашкадарья;МИРИШКОР ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;НИШОН ТУМАНИ",
                                    "value": "74",
                                    "title": "Davlat Soliq Servis - Кашкадарья;НИШОН ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;КАСБИ ТУМАНИ",
                                    "value": "75",
                                    "title": "Davlat Soliq Servis - Кашкадарья;КАСБИ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ҚАМАШИ ТУМАНИ",
                                    "value": "76",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ҚАМАШИ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;МУБОРАК ТУМАНИ",
                                    "value": "77",
                                    "title": "Davlat Soliq Servis - Кашкадарья;МУБОРАК ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ҒУЗОР ТУМАНИ",
                                    "value": "78",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ҒУЗОР ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ЯККАБОҒ ТУМАНИ",
                                    "value": "79",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ЯККАБОҒ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;КОСОН ТУМАНИ",
                                    "value": "80",
                                    "title": "Davlat Soliq Servis - Кашкадарья;КОСОН ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ҚАШҚАДАРЁ  ВИЛОЯТИ",
                                    "value": "81",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ҚАШҚАДАРЁ  ВИЛОЯТИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Кашкадарья;ЧИРОҚЧИ ТУМАНИ",
                                    "value": "82",
                                    "title": "Davlat Soliq Servis - Кашкадарья;ЧИРОҚЧИ ТУМАНИ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Олтинсой",
                                    "value": "83",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Олтинсой",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Кизирик туман",
                                    "value": "84",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Кизирик туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Денов туман",
                                    "value": "85",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Денов туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Шурчи туман",
                                    "value": "86",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Шурчи туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Узун туман",
                                    "value": "87",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Узун туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Термиз шахри",
                                    "value": "88",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Термиз шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Шеробод туман",
                                    "value": "89",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Шеробод туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Жаркургон туман",
                                    "value": "90",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Жаркургон туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Бойсун туман",
                                    "value": "91",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Бойсун туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Кумкургон туман",
                                    "value": "92",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Кумкургон туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Музробод туман",
                                    "value": "93",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Музробод туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Ангор туман",
                                    "value": "94",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Ангор туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Сариосиё туман",
                                    "value": "95",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Сариосиё туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сурхандарья;Термиз туман",
                                    "value": "96",
                                    "title": "Davlat Soliq Servis - Сурхандарья;Термиз туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Катткургон туман",
                                    "value": "97",
                                    "title": "Davlat Soliq Servis - Самарканд;Катткургон туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Кошрабод тумани",
                                    "value": "98",
                                    "title": "Davlat Soliq Servis - Самарканд;Кошрабод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Пахтачи тумани",
                                    "value": "99",
                                    "title": "Davlat Soliq Servis - Самарканд;Пахтачи тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Жомбой тумани",
                                    "value": "100",
                                    "title": "Davlat Soliq Servis - Самарканд;Жомбой тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Каттакургон шахар",
                                    "value": "101",
                                    "title": "Davlat Soliq Servis - Самарканд;Каттакургон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Булунгур тумани",
                                    "value": "102",
                                    "title": "Davlat Soliq Servis - Самарканд;Булунгур тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Нарпай тумани",
                                    "value": "103",
                                    "title": "Davlat Soliq Servis - Самарканд;Нарпай тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Самарканд тумани",
                                    "value": "104",
                                    "title": "Davlat Soliq Servis - Самарканд;Самарканд тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Ургут тумани",
                                    "value": "105",
                                    "title": "Davlat Soliq Servis - Самарканд;Ургут тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Пайарик тумани",
                                    "value": "106",
                                    "title": "Davlat Soliq Servis - Самарканд;Пайарик тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Нуробод тумани",
                                    "value": "107",
                                    "title": "Davlat Soliq Servis - Самарканд;Нуробод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Самарканд шахар",
                                    "value": "108",
                                    "title": "Davlat Soliq Servis - Самарканд;Самарканд шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Иштихон тумани",
                                    "value": "109",
                                    "title": "Davlat Soliq Servis - Самарканд;Иштихон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Тайлок тумани",
                                    "value": "110",
                                    "title": "Davlat Soliq Servis - Самарканд;Тайлок тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Пастдаргом тумани",
                                    "value": "111",
                                    "title": "Davlat Soliq Servis - Самарканд;Пастдаргом тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Самарканд;Окдарьё тумани",
                                    "value": "112",
                                    "title": "Davlat Soliq Servis - Самарканд;Окдарьё т��мани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Косонсой туман",
                                    "value": "113",
                                    "title": "Davlat Soliq Servis - Наманган;Косонсой туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Чуст тумани",
                                    "value": "114",
                                    "title": "Davlat Soliq Servis - Наманган;Чуст тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Учкургон тумани",
                                    "value": "115",
                                    "title": "Davlat Soliq Servis - Наманган;Учкургон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Чорток тумани",
                                    "value": "116",
                                    "title": "Davlat Soliq Servis - Наманган;Чорток тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Наманган тумани",
                                    "value": "117",
                                    "title": "Davlat Soliq Servis - Наманган;Наманган тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Наманган шахар",
                                    "value": "118",
                                    "title": "Davlat Soliq Servis - Наманган;Наманган шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Поп тумани",
                                    "value": "119",
                                    "title": "Davlat Soliq Servis - Наманган;Поп тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Янгикургон тумани",
                                    "value": "120",
                                    "title": "Davlat Soliq Servis - Наманган;Янгикургон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Уйчи тумани",
                                    "value": "121",
                                    "title": "Davlat Soliq Servis - Наманган;Уйчи тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Норин тумани",
                                    "value": "122",
                                    "title": "Davlat Soliq Servis - Наманган;Норин тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Мингбулок тумани",
                                    "value": "123",
                                    "title": "Davlat Soliq Servis - Наманган;Мингбулок тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Наманган;Туракургон  тумани",
                                    "value": "124",
                                    "title": "Davlat Soliq Servis - Наманган;Туракургон  тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Урганч туман",
                                    "value": "125",
                                    "title": "Davlat Soliq Servis - Хорезм;Урганч туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Янгиарик туман",
                                    "value": "126",
                                    "title": "Davlat Soliq Servis - Хорезм;Янгиарик туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Янгибозар туман",
                                    "value": "127",
                                    "title": "Davlat Soliq Servis - Хорезм;Янгибозар туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Хонка туман",
                                    "value": "128",
                                    "title": "Davlat Soliq Servis - Хорезм;Хонка туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Хива шахар",
                                    "value": "129",
                                    "title": "Davlat Soliq Servis - Хорезм;Хива шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Кушкупир туман",
                                    "value": "130",
                                    "title": "Davlat Soliq Servis - Хорезм;Кушкупир туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Багот туман",
                                    "value": "131",
                                    "title": "Davlat Soliq Servis - Хорезм;Багот туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Шавот туман",
                                    "value": "132",
                                    "title": "Davlat Soliq Servis - Хорезм;Шавот туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Хива туман",
                                    "value": "133",
                                    "title": "Davlat Soliq Servis - Хорезм;Хива туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Урганч шахар",
                                    "value": "134",
                                    "title": "Davlat Soliq Servis - Хорезм;Урганч шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Хазорасп туман",
                                    "value": "135",
                                    "title": "Davlat Soliq Servis - Хорезм;Хазорасп туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Хорезм;Гурлан туман",
                                    "value": "136",
                                    "title": "Davlat Soliq Servis - Хорезм;Гурлан туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Жондор тумани",
                                    "value": "137",
                                    "title": "Davlat Soliq Servis - Бухара;Жондор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Ромитан тумани",
                                    "value": "138",
                                    "title": "Davlat Soliq Servis - Бухара;Ромитан тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Олот тумани",
                                    "value": "139",
                                    "title": "Davlat Soliq Servis - Бухара;Олот тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Кораул тумани",
                                    "value": "140",
                                    "title": "Davlat Soliq Servis - Бухара;Кораул тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Вобкент тумани",
                                    "value": "141",
                                    "title": "Davlat Soliq Servis - Бухара;Вобкент тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Пешку тумани",
                                    "value": "142",
                                    "title": "Davlat Soliq Servis - Бухара;Пешку тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Когон тумани",
                                    "value": "143",
                                    "title": "Davlat Soliq Servis - Бухара;Когон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Коровулбозор тумани",
                                    "value": "144",
                                    "title": "Davlat Soliq Servis - Бухара;Коровулбозор тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Шофиркон тумани",
                                    "value": "145",
                                    "title": "Davlat Soliq Servis - Бухара;Шофиркон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Бухоро тумани",
                                    "value": "146",
                                    "title": "Davlat Soliq Servis - Бухара;Бухоро тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Гиждувон тумани",
                                    "value": "147",
                                    "title": "Davlat Soliq Servis - Бухара;Гиждувон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Когон шахри",
                                    "value": "148",
                                    "title": "Davlat Soliq Servis - Бухара;Когон шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Бухара;Бухоро шахри",
                                    "value": "149",
                                    "title": "Davlat Soliq Servis - Бухара;Бухоро шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Мирзаобод тумани",
                                    "value": "150",
                                    "title": "Davlat Soliq Servis - Сирдарья;Мирзаобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Янгиер шахри",
                                    "value": "151",
                                    "title": "Davlat Soliq Servis - Сирдарья;Янгиер шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Гулистон тумани",
                                    "value": "152",
                                    "title": "Davlat Soliq Servis - Сирдарья;Гулистон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Сайхунобод тумани",
                                    "value": "153",
                                    "title": "Davlat Soliq Servis - Сирдарья;Сайхунобод тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Околтин тумани",
                                    "value": "154",
                                    "title": "Davlat Soliq Servis - Сирдарья;Околтин тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Ховос тумани",
                                    "value": "155",
                                    "title": "Davlat Soliq Servis - Сирдарья;Ховос тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Ширин шахри",
                                    "value": "156",
                                    "title": "Davlat Soliq Servis - Сирдарья;Ширин шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Боёвут тумани",
                                    "value": "157",
                                    "title": "Davlat Soliq Servis - Сирдарья;Боёвут тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Сирдарё тумани",
                                    "value": "158",
                                    "title": "Davlat Soliq Servis - Сирдарья;Сирдарё тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Гулистон шахри",
                                    "value": "159",
                                    "title": "Davlat Soliq Servis - Сирдарья;Гулистон шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Сирдарья;Сардоба тумани",
                                    "value": "160",
                                    "title": "Davlat Soliq Servis - Сирдарья;Сардоба тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Буз туман",
                                    "value": "161",
                                    "title": "Davlat Soliq Servis - Андижан;Буз туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Олтинкул туман",
                                    "value": "162",
                                    "title": "Davlat Soliq Servis - Андижан;Олтинкул туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Асака туман",
                                    "value": "163",
                                    "title": "Davlat Soliq Servis - Андижан;Асака туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Баликчи туман",
                                    "value": "164",
                                    "title": "Davlat Soliq Servis - Андижан;Баликчи туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Мархамат туман",
                                    "value": "165",
                                    "title": "Davlat Soliq Servis - Андижан;Мархамат туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Шахрихон тумани",
                                    "value": "166",
                                    "title": "Davlat Soliq Servis - Андижан;Шахрихон тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Избоскан туман",
                                    "value": "167",
                                    "title": "Davlat Soliq Servis - Андижан;Избоскан туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Жалалкудук туман",
                                    "value": "168",
                                    "title": "Davlat Soliq Servis - Андижан;Жалалкудук туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Кургонтепа туман",
                                    "value": "169",
                                    "title": "Davlat Soliq Servis - Андижан;Кургонтепа туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Булокбоши туман",
                                    "value": "170",
                                    "title": "Davlat Soliq Servis - Андижан;Булокбоши туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Хужаобод туман",
                                    "value": "171",
                                    "title": "Davlat Soliq Servis - Андижан;Хужаобод туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Пахтаобод туман",
                                    "value": "172",
                                    "title": "Davlat Soliq Servis - Андижан;Пахтаобод туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Хонобод шахар",
                                    "value": "173",
                                    "title": "Davlat Soliq Servis - Андижан;Хонобод шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Андижон туман",
                                    "value": "174",
                                    "title": "Davlat Soliq Servis - Андижан;Андижон туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Андижан;Андижон шахар",
                                    "value": "175",
                                    "title": "Davlat Soliq Servis - Андижан;Андижон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Нукус тумани",
                                    "value": "176",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Нукус тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Муйнок тумани",
                                    "value": "177",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Муйнок тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Беруни тумани",
                                    "value": "178",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Беруни тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Турткул тумани",
                                    "value": "179",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Турткул тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Кунгирот тумани",
                                    "value": "180",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Кунгирот тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Конликул тумани",
                                    "value": "181",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Конликул тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Нукус шахри",
                                    "value": "182",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Нукус шахри",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Элликкалъа тумани",
                                    "value": "183",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Элликкалъа тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Кораузак тумани",
                                    "value": "184",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Кораузак тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Чимбой тумани",
                                    "value": "185",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Чимбой тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Кегейли тумани",
                                    "value": "186",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Кегейли тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Амударья тумани",
                                    "value": "187",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Амударья тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Хожели тумани",
                                    "value": "188",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Хожели тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Шуманай тумани",
                                    "value": "189",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Шуманай тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Тахиаташ тумани",
                                    "value": "190",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Тахиаташ тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Тахтакупир тумани",
                                    "value": "191",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Тахтакупир тумани",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Каракалпакстан;Нукус шахри ККРес ДСБ",
                                    "value": "192",
                                    "title": "Davlat Soliq Servis - Каракалпакстан;Нукус шахри ККРес ДСБ",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Нурато туман",
                                    "value": "193",
                                    "title": "Davlat Soliq Servis - Навоий;Нурато туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Канимех туман",
                                    "value": "194",
                                    "title": "Davlat Soliq Servis - Навоий;Канимех туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Навоий шахар",
                                    "value": "195",
                                    "title": "Davlat Soliq Servis - Навоий;Навоий шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Навбахор туман",
                                    "value": "196",
                                    "title": "Davlat Soliq Servis - Навоий;Навбахор туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Зарафшон шахар",
                                    "value": "197",
                                    "title": "Davlat Soliq Servis - Навоий;Зарафшон шахар",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Хатирчи туман",
                                    "value": "198",
                                    "title": "Davlat Soliq Servis - Навоий;Хатирчи туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Кармана туман",
                                    "value": "199",
                                    "title": "Davlat Soliq Servis - Навоий;Кармана туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Кизилтепа туман",
                                    "value": "200",
                                    "title": "Davlat Soliq Servis - Навоий;Кизилтепа туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Учкудук туман",
                                    "value": "201",
                                    "title": "Davlat Soliq Servis - Навоий;Учкудук туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Навоий;Томди туман",
                                    "value": "202",
                                    "title": "Davlat Soliq Servis - Навоий;Томди туман",
                                    "filter": null,
                                    "description": null
                                },
                                {
                                    "name": "Davlat Soliq Servis - Ташкент;Янги хаёт тумани",
                                    "value": "203",
                                    "title": "Davlat Soliq Servis - Ташкент;Янги хаёт тумани",
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
                            "name": "type_of_service",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Xizmat turi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Солиқ-сервис хизматлари",
                                    "value": "011",
                                    "title": "Soliq-servis xizmatlari",
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
                    "Davlat Soliq Servis",
                    "стол",
                    "usluga",
                    "stol",
                    "Давлат Солик Сервис",
                    "Вфмдфе Ыщдшй Ыукмшы"
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
                "_id": "6523d7b95a8224b99c9a39ca",
                "paycom_id": "6523d6db2072915c77048936",
                "name": "O'rta Chirchiq tumani Iste’molchilar huquqlarini himoya qilish jamiyati",
                "organization": "ННО «ИСТЕЪМОЛЧИЛАР ХУКУК.ХИМОЯ КИЛ. УРТАЧИРЧИК ТУМАНИ БОЛИМИ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/db20348f12944217e3c313455f7f59b6b9d7294b.png",
                "date": 1696847801241,
                "terminal": {
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Azolik badali",
                                    "value": "azo",
                                    "title": "Azolik badali",
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
                    "oihhqjf",
                    "ISTEMOLCHILAR HUKUK.HIMOYA QIL. URTACHIRIK TUMANI BOLIMI",
                    "ИСТЕЪМОЛЧИЛАР ХУКУК.ХИМОЯ КИЛ. УРТАЧИРЧИК ТУМАНИ БОЛИМИ",
                    "защита прав потребителей"
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
                "_id": "6523d97e5a8224b99c9a39e6",
                "paycom_id": "6523d8892072915c77048973",
                "name": "Nurafshon shahar Iste’molchilar huquqlarini himoya qilish jamiyati",
                "organization": "ННО «ИСТЕЪМОЛЧИЛАР ҲУҚУҚЛАРИ Ҳ.Қ.Ж НУРАФШОН ШАХАРИ БОЛИМИ»",
                "active": true,
                "type": 150,
                "logo": "https://cdn.payme.uz/merchants/db20348f12944217e3c313455f7f59b6b9d7294b.png",
                "date": 1696848254772,
                "terminal": {
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
                            "name": "payment_for",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "To'lov maqsadi",
                            "type": "select",
                            "validation": null,
                            "values": [
                                {
                                    "name": "Azolik badali to'lovi",
                                    "value": "azolik",
                                    "title": "Azolik badali to'lovi",
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
                    "ИСТЕЪМОЛЧИЛАР ҲУҚУҚЛАРИ Ҳ.Қ.Ж НУРАФШОН ШАХАРИ БОЛИМИ",
                    "oihhqjf",
                    "ИСТЕМОЛЧИЛАР ҲУҚУҚЛАРИ",
                    "защита прав потребителей"
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