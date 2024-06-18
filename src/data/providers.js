export const providers =
{
    "jsonrpc": "2.0",
    "result": {
        "merchants": [
            {
                "_id": "545e1fe65ae5eca82d1b4633",
                "paycom_id": "55ae373aea05384bd72e2eaa",
                "ussd_id": "06",
                "name": "UzOnline",
                "organization": "АК «Узбектелеком»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/uzonline.png",
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
                            "title": "Hisob raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^[0-9]{1,10}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "узонлайн",
                    "epjykfqy",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.035540847544495255,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "560b980f5c752614212bde8a",
                "paycom_id": "5fbf989a4602db1c688d9b7a",
                "name": "Turon Telecom Интернет",
                "organization": "ЧП «Turon Media»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/eaa928a2144ed7711ea7979e37717ad2368af569.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "nehjy ntktrjv",
                    "турон телеком",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.005189037272267421,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e23b55ae5eca82d1b4635",
                "paycom_id": "5630bc3ae71e91553ab935bf",
                "ussd_id": "07",
                "name": "Sarkor Telecom",
                "organization": "СП ООО «Sarkor Telecom»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/765196cb84753aa600c048b13e4c5b7f1ca24f1b.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "number",
                            "type": "text",
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "HE",
                                        "value": "he-"
                                    },
                                    {
                                        "title": "X",
                                        "value": "x-"
                                    },
                                    {
                                        "title": "GE",
                                        "value": "ge-"
                                    },
                                    {
                                        "title": "RW",
                                        "value": "rw-"
                                    },
                                    {
                                        "title": "C",
                                        "value": "c-"
                                    }
                                ],
                                "output": true
                            },
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
                    "саркор",
                    "cfhrjh",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.002135943564297594,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e26045ae5eca82d1b4638",
                "paycom_id": "5e8b17dc7e9d5724c0897395",
                "ussd_id": "08",
                "name": "Comnet",
                "organization": "ООО «TVPLUS»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/15ac4bdaa13300dba18a2292c28b3968ec92b3ee.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "komnet",
                    "комнэт",
                    "комнет",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.002081317721552966,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "57bae69f9a910920584d3659",
                "paycom_id": "61697329a934af095c7fec68",
                "ussd_id": "43",
                "name": "ISTV",
                "organization": "Inform Service TV",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/5aacc890417e9c2f693ad776618056dd1330e215.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "иств",
                    "ис тв",
                    "is tv",
                    "istv",
                    "интернет провайдер",
                    "provayderi"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0010578404116971163,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "545e25515ae5eca82d1b4637",
                "paycom_id": "6155a0e1161e70ea14dcf3a8",
                "ussd_id": "46",
                "name": "TPS",
                "organization": "ООО «Технопросистем»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/02d88f28330050bcda3c3027b0966af230cefcb6.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "account",
                            "title": "Login",
                            "content": "text",
                            "type": "text",
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "tps",
                                        "value": "tps"
                                    },
                                    {
                                        "title": "tps00",
                                        "value": "tps00"
                                    },
                                    {
                                        "title": "tps01",
                                        "value": "tps01"
                                    },
                                    {
                                        "title": "tps02",
                                        "value": "tps02"
                                    },
                                    {
                                        "title": "tps03",
                                        "value": "tps03"
                                    },
                                    {
                                        "title": "tps04",
                                        "value": "tps04"
                                    },
                                    {
                                        "title": "tps05",
                                        "value": "tps05"
                                    },
                                    {
                                        "title": "tps06",
                                        "value": "tps06"
                                    },
                                    {
                                        "title": "tps07",
                                        "value": "tps07"
                                    },
                                    {
                                        "title": "tps08",
                                        "value": "tps08"
                                    },
                                    {
                                        "title": "tps09",
                                        "value": "tps09"
                                    },
                                    {
                                        "title": "tps21",
                                        "value": "tps21"
                                    },
                                    {
                                        "title": "tps22",
                                        "value": "tps22"
                                    },
                                    {
                                        "title": "fiber",
                                        "value": "fiber"
                                    },
                                    {
                                        "title": "fiberjet",
                                        "value": "fiberjet"
                                    },
                                    {
                                        "title": "fu10",
                                        "value": "fu10"
                                    },
                                    {
                                        "title": "fu11",
                                        "value": "fu11"
                                    },
                                    {
                                        "title": "fu12",
                                        "value": "fu12"
                                    },
                                    {
                                        "title": "fu13",
                                        "value": "fu13"
                                    },
                                    {
                                        "title": "fu14",
                                        "value": "fu14"
                                    },
                                    {
                                        "title": "fu15",
                                        "value": "fu15"
                                    },
                                    {
                                        "title": "fu16",
                                        "value": "fu16"
                                    },
                                    {
                                        "title": "fu17",
                                        "value": "fu17"
                                    },
                                    {
                                        "title": "fu18",
                                        "value": "fu18"
                                    },
                                    {
                                        "title": "fu19",
                                        "value": "fu19"
                                    },
                                    {
                                        "title": "fu20",
                                        "value": "fu20"
                                    },
                                    {
                                        "title": "fu21",
                                        "value": "fu21"
                                    },
                                    {
                                        "title": "fu22",
                                        "value": "fu22"
                                    },
                                    {
                                        "title": "fu23",
                                        "value": "fu23"
                                    },
                                    {
                                        "title": "fx10",
                                        "value": "fx10"
                                    },
                                    {
                                        "title": "fx11",
                                        "value": "fx11"
                                    },
                                    {
                                        "title": "fx12",
                                        "value": "fx12"
                                    },
                                    {
                                        "title": "fx13",
                                        "value": "fx13"
                                    },
                                    {
                                        "title": "fx14",
                                        "value": "fx14"
                                    },
                                    {
                                        "title": "fx15",
                                        "value": "fx15"
                                    },
                                    {
                                        "title": "fx16",
                                        "value": "fx16"
                                    },
                                    {
                                        "title": "fx17",
                                        "value": "fx17"
                                    },
                                    {
                                        "title": "fx18",
                                        "value": "fx18"
                                    },
                                    {
                                        "title": "fx19",
                                        "value": "fx19"
                                    },
                                    {
                                        "title": "FX20",
                                        "value": "fx20"
                                    },
                                    {
                                        "title": "fx21",
                                        "value": "fx21"
                                    },
                                    {
                                        "title": "fx22",
                                        "value": "fx22"
                                    },
                                    {
                                        "title": "fx23",
                                        "value": "fx23"
                                    }
                                ],
                                "output": true
                            },
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
                    "тпс",
                    "ngc",
                    "езы",
                    "интернет",
                    "internet",
                    "провайдер",
                    "TPS",
                    "jet",
                    "djet",
                    "оуе",
                    "джет"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0007949470155437157,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5821891887d6e509a853b8f4",
                "paycom_id": "5ff2d85ec6d91b16f4872bf4",
                "name": "FreeLink",
                "organization": "ООО «IMAGE TV»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/freelink.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 200000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "flink",
                    "фри линк",
                    "акуу дштл",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0006916488157837978,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5a1bf1b52081d71fa8bba393",
                "paycom_id": "5fc095bb4602db1c688d9b8a",
                "ussd_id": "10",
                "name": "Netco.Uz",
                "organization": "ООО «Netka Telekom»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/netco.png",
                "date": 1511780694664,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "интернет",
                    "internet",
                    "провайдер",
                    "Netco.Uz",
                    "нетко.уз",
                    "туесщ.гя"
                ],
                "myhome": true,
                "weight": 0.0005455272976198695,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "592c06bda87ade0e9fefa81b",
                "paycom_id": "5f157a739c3d0731e01b2ed5",
                "name": "Gals Telecom",
                "organization": "ООО «GALS TELEKOM»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/1e585e8b90ccefcd8e083c550bdc941ac7583478.png",
                "date": 1496056735470,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "validation": "^[a-zA-Z0-9\\-]{4,18}$",
                            "content": "text",
                            "type": "text",
                            "title": "Login",
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
                    "галс телеком",
                    "пфды еудулщь",
                    "интернет",
                    "internet",
                    "провайдер",
                    "Gals Telecom"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0005115819842508369,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58077ab2d20aef2500057c9a",
                "paycom_id": "5fca24024602db23286dc63e",
                "name": "FiberNet",
                "organization": "ООО \"NET TELEVISION\"",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/fiber.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "фибернет",
                    "фибернэт",
                    "ашиуктуе",
                    "интернет",
                    "internet",
                    "провайдер",
                    "FiberNet"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.00031793702737026286,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58e2534c00277523609b8062",
                "paycom_id": "6087b3807bb924422cdc7dc3",
                "name": "Spectr IT",
                "organization": "ЧП «LUSEYA PLYUS»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/spectrit-internet.png",
                "date": 1490788502565,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 999999900
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "number",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "SP",
                                "output": true
                            },
                            "placeholder": "998xxxxxxxxx",
                            "replace": null,
                            "validation": null,
                            "validation_error": "Ошибка в логине",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "спектр ит",
                    "ызусещк ше",
                    "интернет",
                    "internet",
                    "провайдер",
                    "Spectr IT"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.0003178325802522043,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5bf53aa7f7ad1330c068c170",
                "paycom_id": "6034b4a955c3355b27766de2",
                "name": "SOLA",
                "organization": "ООО «ASIA WIRELESS GROUP»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/sola.png",
                "date": 1542797985997,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000000
                    },
                    "account": [
                        {
                            "name": "acc_id",
                            "title": "Hisob raqami",
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
                    "сола",
                    "ыщдф"
                ],
                "myhome": true,
                "weight": 0.00028482729094569866,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "62d8e3172cfc087774bb9450",
                "paycom_id": "62d8e25839c675be34e2de6a",
                "name": "CITYNET",
                "organization": "ООО «\"CITYNET\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/53d6e7d0bb9ca089cd4ea19d4d3a54ce6dcb37e7.png",
                "date": 1658381079905,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "clientid",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Shaxsiy hisob",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "citynet",
                    "сити нет",
                    "ситинет",
                    "citynet",
                    "citynet",
                    "citynet",
                    "citynet",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.00021526551031869636,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61403609f139838334a1c486",
                "paycom_id": "611e02cf754e932e68fe96af",
                "name": "Optikom",
                "organization": "ООО «BROSS TELEKOM»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/07f35e8232cb796e0a3698ab4303ee4a63dc6fa1.png",
                "date": 1631598089477,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 10000,
                        "round": true
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
                    "BROSS TELEKOM",
                    "икщыы еудулщь",
                    "бросс телеком",
                    ",hjcc ntktrjv",
                    "Optikom",
                    "оптиком",
                    "провайдер бросс"
                ],
                "myhome": true,
                "weight": 0.00019688281754038945,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5798a52b7ac17b0fe0d6b740",
                "paycom_id": "600eb174ae0c256653a048e9",
                "ussd_id": "44",
                "name": "Sharq Telekom",
                "organization": "СП ООО \"Sharq Telekom\"",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/st.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 60000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "number",
                            "type": "text",
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "shsts",
                                        "value": "shsts"
                                    },
                                    {
                                        "title": "volsts",
                                        "value": "volsts"
                                    },
                                    {
                                        "title": "rentts",
                                        "value": "rentts"
                                    },
                                    {
                                        "title": "hethts",
                                        "value": "hethts"
                                    },
                                    {
                                        "title": "colts",
                                        "value": "colts"
                                    },
                                    {
                                        "title": "ts",
                                        "value": "ts"
                                    }
                                ],
                                "output": true
                            },
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
                    "шарк",
                    "ырфкй",
                    "интернет",
                    "internet",
                    "провайдер",
                    "sharq",
                    "ifhr"
                ],
                "myhome": true,
                "weight": 0.0001480015662889824,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "56f915e66b6e64ed13b03c64",
                "paycom_id": "56e8f2f5e6f46b5c1cbe51cb",
                "name": "Nano Telecom",
                "organization": "ООО «Nano Telecom»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/nano_telecom.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 50000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "text",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "I/H-",
                                "output": true
                            },
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
                    "нано",
                    "тфтщ",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.00012700769555921144,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ef33ccf343eb86f54d34205",
                "paycom_id": "5ef337e1b18e52dd0c1b054e",
                "name": "ARS-INFORM",
                "organization": "ООО «ARS-INFORM»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/ars--inform.png",
                "date": 1592999119099,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 2000000000,
                        "min": 50000,
                        "round": true
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
                    "ars",
                    "inform",
                    "интернет",
                    "ars inform",
                    "арс"
                ],
                "myhome": true,
                "weight": 0.00009212235812765172,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63f340a66a689d2b4b9554fc",
                "paycom_id": "63f33f7a2c4604cfd1bd3115",
                "name": "DUPLEXTEL",
                "organization": "ООО «\"DUPLEX TEL\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/1764b9af016728ce70133bc77c54bf3640873a2c.png",
                "date": 1676886182289,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "username",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9]{3,64}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "duplextel",
                    "duplex tel",
                    "дюплекс",
                    "internet",
                    "интернет",
                    "провайдер"
                ],
                "weight": 0.00006757728538388964,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f9fd1c28b38a19f0b39948f",
                "paycom_id": "616d3736a934af095c803f9d",
                "name": "SIRIUS TELECOM ",
                "organization": "ООО «ООО \"INFOBOX\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/0d7dc6d4513eb34c492dcc4ee13202483620708b.png",
                "date": 1604309442751,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "1",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi IDsi",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "static",
                                "value": "User_",
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
                    "infobox",
                    "инфобокс",
                    "интернет",
                    "sirius telecom",
                    "сириус телеком",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.000052954688855690956,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63ef68036a689d2b4b9552be",
                "paycom_id": "6360f41a8ed3aecdf3e8d3fa",
                "name": "TEKINWIFI.UZ",
                "organization": "ООО «MIMAX SOFTWARE GROUP MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/86d1ac6053068bded5469e7b513e01035c8a07e3.png",
                "date": 1676634115348,
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
                            "name": "key",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Buyurtma raqami",
                            "type": "text",
                            "validation": "^[0-9]{0,10}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "текин вайфай",
                    "вайфай",
                    "wifi",
                    "tekinwifi.uz",
                    "еулшт"
                ],
                "weight": 0.00004804567430693854,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65b392a1a701df8cdcd39e8b",
                "paycom_id": "62f4c76839c675be34e7b15b",
                "name": "G-TELL",
                "organization": "ООО «\"G-TELL\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/b3d7a46a845ac9ab985dd31018c1d651440d1455.png",
                "date": 1706267297768,
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
                            "name": "username",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi nomi",
                            "type": "text",
                            "validation": "^[0-9]{4,8}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "G-TELL ",
                    "П-ЕУДД",
                    "г-телл",
                    "u-ntkk"
                ],
                "weight": 0.00004574783770965017,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63186909e5b34221aeba2042",
                "paycom_id": "630f5bd0c32540a80de70be9",
                "name": "ALLNET",
                "organization": "ООО «ALNET»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/21903c6bda4f6eb61bb1e198c6a87ceabbd4f880.png",
                "date": 1662544137038,
                "terminal": {
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
                    "allnet",
                    "фддтуе",
                    "аллнет",
                    "аллнэт"
                ],
                "weight": 0.00004282331840401043,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "611d021412950f485b3b2002",
                "paycom_id": "611cdf9a754e932e68fe6754",
                "name": "SILVER TELECOM",
                "organization": "ООО «\"SILVER TELECOM\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/35cbdfd1cefa749f6e2a25872e310c9a1fccaf7e.png",
                "date": 1629291028252,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "SILVER TELECOM",
                    "Силвер телеком",
                    "ышдмук еудусщь",
                    "cbkdth ntktjv",
                    "интернет"
                ],
                "weight": 0.000041256611633132006,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fe3278d58bb9fee75c0ee3a",
                "paycom_id": "5fe3187b7acf24a8d0572d2b",
                "name": "CITY LINE",
                "organization": "ООО «\"CABLE AND MOBILE BEST SERVICE\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/39005502ac03ec4eadb6cef4947ee0a644179ad7.png",
                "date": 1608722317624,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "UID",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Foydalanuvchi nomi",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "city line",
                    "line",
                    "сити",
                    "лайн",
                    "интернет",
                    "провайдер",
                    "internet",
                    "provider",
                    "cbnb",
                    "kfqy",
                    "сшен",
                    "дшту"
                ],
                "myhome": true,
                "weight": 0.00003478089031350116,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5f97fe7eea62ccfa6119cf31",
                "paycom_id": "5c7528c7b4db2fbd668878d7",
                "name": "A-net",
                "organization": "ООО «OLMALIQ VIKTORIYA»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/1d0051dff7367f24c960c15f35522fc56f2ecb42.png",
                "date": 1603796606401,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 9999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "интернет",
                    "а-нет",
                    "анет",
                    "a-net",
                    "anet",
                    "internet"
                ],
                "myhome": true,
                "weight": 0.00002663401510493332,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61ea8b9187325e773d7719c4",
                "paycom_id": "61dd558d94e58c782a4689af",
                "name": "OOO ARTV UNION",
                "organization": "ООО «ООО \"ARTV UNION\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/45e999ba4b4acba977ec583024ebfcd414656382.png",
                "date": 1642761105785,
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
                            "name": "login",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "login",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ARTV UNION",
                    "ARTVUNION",
                    "ar tv UNION",
                    "АРТВ онион"
                ],
                "myhome": true,
                "weight": 0.000024962861215996327,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ab49c34423cde214cf25bf8",
                "paycom_id": "5ec51db56420f3660dc93ba0",
                "name": "TNET",
                "organization": "ООО «NOVA GROUP»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/t-net.png",
                "date": 1521785667338,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 10000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "text",
                            "type": "text",
                            "prefix": {
                                "type": "static",
                                "value": "tnet",
                                "output": true
                            },
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
                    "тнет",
                    "тинет",
                    "TNET",
                    "ЕТУЕ"
                ],
                "myhome": true,
                "weight": 0.000024858414097937765,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "57f50009d20aef2500057c78",
                "paycom_id": "600fa3eec27d344dd1cc8f98",
                "ussd_id": "39",
                "name": "SIMUS",
                "organization": "СП ООО \"SIMUS\"",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/simus.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
                            "content": "number",
                            "type": "text",
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "volsfg",
                                        "value": "volsfg"
                                    },
                                    {
                                        "title": "simfg",
                                        "value": "simfg"
                                    },
                                    {
                                        "title": "wififg",
                                        "value": "wififg"
                                    },
                                    {
                                        "title": "siman",
                                        "value": "siman"
                                    },
                                    {
                                        "title": "simnm",
                                        "value": "simnm"
                                    },
                                    {
                                        "title": "wifinm",
                                        "value": "wifinm"
                                    },
                                    {
                                        "title": "simbh",
                                        "value": "simbh"
                                    },
                                    {
                                        "title": "shsbh",
                                        "value": "shsbh"
                                    },
                                    {
                                        "title": "wifibh",
                                        "value": "wifibh"
                                    },
                                    {
                                        "title": "simsm",
                                        "value": "simsm"
                                    },
                                    {
                                        "title": "shssm",
                                        "value": "shssm"
                                    },
                                    {
                                        "title": "hethsm",
                                        "value": "hethsm"
                                    },
                                    {
                                        "title": "volssm",
                                        "value": "volssm"
                                    },
                                    {
                                        "title": "wifism",
                                        "value": "wifism"
                                    },
                                    {
                                        "title": "wifitr",
                                        "value": "wifitr"
                                    }
                                ],
                                "output": true
                            },
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
                    "симус",
                    "ышьгы",
                    "симас",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.000024336178507644954,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65278ec6ee556d5007ebce54",
                "paycom_id": "6322befff5172565f156bb70",
                "name": "SONET",
                "organization": "ООО «\"SOLAR NETWORK\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/38d0940bacdccf0a8d26623cb3dad688756ab6da.png",
                "date": 1697091270750,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 500000000,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9_-]+$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "SONET",
                    "ЫЩТУЕ",
                    "сонет",
                    "cjytn"
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
                "_id": "636a1d627ec4232611a3177c",
                "paycom_id": "6331ed7092bf46e26edcebac",
                "name": "CLOUDNET.UZ",
                "organization": "ООО «PROSPEKT BIZNES»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/9b4fe2be1cb84a203b91f6777a8cf3a3ea6af62b.png",
                "date": 1667898722892,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 30000000,
                        "min": 9900000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Login",
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
                    "CLOUDNET.UZ",
                    "СДЩГВТУЕюГЯ",
                    "клауднет.уз",
                    "rkfelytn/ep"
                ],
                "weight": 0.000022978365972883647,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "66387ec7db7c028962a040f0",
                "paycom_id": "662cc5392c3ef1dc22cfdbe7",
                "name": "KOKAND TELECOM",
                "organization": "ООО «\"KOKAND TELECOM\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/d44fa7d749282f7fdcca2e0beedc390b9627fcf8.png",
                "date": 1714978503513,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "Login",
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
                    "kokand telecom",
                    "коканд телеком",
                    "лщлфтв еудусщь"
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
                "_id": "5a25318f2081d7249c12af36",
                "paycom_id": "6006a38075d4416c5fb73876",
                "name": "DGT",
                "organization": "ООО «DANIEL GROUP TELECOM»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/dgt.png",
                "date": 1512386946333,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 999999900
                    },
                    "account": [
                        {
                            "name": "Login",
                            "title": "Login",
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
                    "DGT",
                    "дгт",
                    "впе"
                ],
                "myhome": true,
                "weight": 0.000018800481250541167,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "61e7bc0487325e773d771471",
                "paycom_id": "614473142cda62ef2bd91c3b",
                "name": "Capital Telecom",
                "organization": "ООО «MCHJ CAPITAL TELECOM»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/82fcb21093d8e827fe4a98927f7c1ae21c60129f.png",
                "date": 1642576900975,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100,
                        "max": 99999999900
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
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "S/2022/",
                                        "value": "S/2022/"
                                    },
                                    {
                                        "title": "T/2022/",
                                        "value": "T/2022/"
                                    },
                                    {
                                        "title": "CT/2022/",
                                        "value": "CT/2022/"
                                    },
                                    {
                                        "title": "CT/2021/",
                                        "value": "CT/2021/"
                                    },
                                    {
                                        "title": "CT",
                                        "value": "CT"
                                    }
                                ],
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
                    "Сфзшефд Еудусщь",
                    "капитал телеком",
                    "rfgbnfk ntktrjv"
                ],
                "weight": 0.000018069351424131233,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5d5e97bc60753c412ac3a9fb",
                "paycom_id": "5d515ef759d0dba25945a817",
                "name": "KOINOT-TV Интернет",
                "organization": "ООО «KOINOT-TV»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/70f263083f040feed329ddae5f668c194e776b1b.png",
                "date": 1566480316088,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999900,
                        "min": 100,
                        "round": true
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "UID",
                            "placeholder": "",
                            "title": "UID",
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
                    "koinot",
                    "коинот",
                    "koinot",
                    "KOINOT-TV Интернет",
                    "интернет",
                    "интернет провайдер",
                    "оплата за интернет"
                ],
                "myhome": true,
                "weight": 0.00001692043312548705,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "63f355636a689d2b4b955582",
                "paycom_id": "63d7b73945caa8355e120140",
                "name": "CITY WIFI",
                "organization": "ООО «\"CITY WIFI\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/c2b1adcee62ac12a5731db583e46d7eb7bed2014.png",
                "date": 1676891491650,
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
                            "name": "login",
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
                    "CITY WiFi ZARAFSHAN ",
                    "CITY WiFi",
                    "ZARAFSHAN "
                ],
                "myhome": true,
                "weight": 0.000016815986007428487,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "58a18d088611444ee0570b8a",
                "paycom_id": "5e86ff057e9d570470c5544a",
                "ussd_id": "41",
                "name": "EVO",
                "organization": "ООО «Super iMax»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/evo.png",
                "date": 1486982180705,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 70000000
                    },
                    "account": [
                        {
                            "name": "subscriber_id",
                            "title": "Login",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d{4,10}$",
                            "validation_error": "Неверный логин",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "эво",
                    "ево",
                    "интернет",
                    "internet",
                    "провайдер",
                    "EVO"
                ],
                "myhome": true,
                "weight": 0.00001598040906295999,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5847bdeedacc172a8089fc04",
                "paycom_id": "5847bdeedacc172a8089fc04",
                "ussd_id": "40",
                "name": "Skyline",
                "organization": "ООО «Lit-Tel»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/b15ed20a3c326b8f48943d8084f81f15b7a9abee.png",
                "date": 1399114284039,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 500000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                    "скайлайн",
                    "ылндшту",
                    "интернет",
                    "internet",
                    "провайдер"
                ],
                "additional_info": true,
                "myhome": true,
                "weight": 0.000014935937882374372,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65421d88cbc305212221099d",
                "paycom_id": "65421ce50a158c26157c66c3",
                "name": "BUZTON - Интернет",
                "organization": "СП ООО «Buzton»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/4f89bd58bbc67c3c4a02f56c86eccf6883b0e5b5.png",
                "date": 1698831752146,
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
                            "title": "Hisob raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "length": 10,
                            "validation": "^[0-9]{1,10}$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "biline",
                    "билайн",
                    "интернет",
                    "internet",
                    "провайдер"
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
                "_id": "6183c2d9e7c3186a3150b9d2",
                "paycom_id": "6041de40cd4732266c275941",
                "name": "ARKNET",
                "organization": "«ООО \"KRISTAL ELEKTRONIKS\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/32ce52cda30eecc544728bcef9f70cb94ba19f80.png",
                "date": 1636025049620,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "phone",
                            "name": "customer_id",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Mijoz identifikatori",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "Kristall Electronics",
                    "Кристал электроникс",
                    "интернет",
                    "internet",
                    "arknet",
                    "аркнет",
                    "фклтуе",
                    "fhrytn"
                ],
                "weight": 0.000013682572465671626,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6168064888800c96dd77fd90",
                "paycom_id": "6113a8ff754e932e68fd8560",
                "name": "Plusnet",
                "organization": "ООО «\"A-ZZ-A SERVICE\" МЧЖ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/108625e06a9b698dfe8b3c67087c62303b5770a9.png",
                "date": 1634207304847,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "order_id",
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
                    "плюснет",
                    "плюс нет",
                    "plusnet",
                    "plus net",
                    "интернет",
                    "internet",
                    "A-ZZ-A SERVICE",
                    "AZZA SERVICE",
                    "здгытуе",
                    "gk.c ytn",
                    "gk.cytn"
                ],
                "myhome": true,
                "weight": 0.000010862500278090452,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e0546388f9930638b5ac85",
                "paycom_id": "65c072f33c319dec9d89daaf",
                "name": "IPAK YOL TELECOM",
                "organization": "ООО «\"IPAK YOL\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/5b51554d555937fb7324ca111427ff07fdab6705.png",
                "date": 1709200483729,
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
                            "name": "LOGIN",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "LOGIN",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "ipak yol telecom",
                    "ipak yo'l telecom",
                    "ipak yol telekom",
                    "ipak yul telekom",
                    "ипак йул телеком",
                    "ипак телеком"
                ],
                "weight": 0.000010549158923914766,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "634538691fe5cc9de25ec3bb",
                "paycom_id": "63355908f78e7a020da11fa9",
                "name": "DOST LINK",
                "organization": "ООО «\"DOSTLINK\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/bf51ebf022d5a01961422421dd0ae0c425fcd985.png",
                "date": 1665480809505,
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
                            "name": "user_id",
                            "placeholder": "",
                            "replace": null,
                            "title": "ID",
                            "type": "text",
                            "validation": null,
                            "prefix": {
                                "type": "select",
                                "values": [
                                    {
                                        "title": "phs-",
                                        "value": "phs-"
                                    },
                                    {
                                        "title": "DL-",
                                        "value": "DL-"
                                    }
                                ],
                                "output": true
                            },
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "DOST LINK",
                    "dost link",
                    "дост линк",
                    "вщые дштл"
                ],
                "myhome": true,
                "weight": 0.000010131370451680518,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6409b88a6a689d2b4b957bc8",
                "paycom_id": "6409b71071f8efd0256661b7",
                "name": "SAMTELECOM ",
                "organization": "ООО «\"OLIMJON TELECOM\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/54574be30268611dcbfe1b9118816234455bf2ef.png",
                "date": 1678358666853,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login_id",
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
                    "SAMTELECOM ",
                    "OLIMJON TELECOM",
                    "OLIMJON"
                ],
                "weight": 0.000009609134861387707,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65112dcb5240a8ca4dff16c3",
                "paycom_id": "65112c7d2918d26924fcf7b2",
                "name": "STARK-TV TELECOM Интернет услуги",
                "organization": "ООО «\"EAST STARK-TV\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/cb8862537ad838ed93e02b567aa32b4a53e03024.png",
                "date": 1695624651729,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 500000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "интернет",
                    "internet",
                    "старк",
                    "провайдер",
                    "ыефкл ем"
                ],
                "weight": 0.000007624639618275028,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5dce5b58e84c43916115be46",
                "paycom_id": "5dbdc8f67a1066cc7fe9972b",
                "name": "RAYPO WiFi",
                "organization": "ООО «RAYPO MEGATECH»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/1145af0593957ef73b26f07c2a1e0b45b21e2ada.png",
                "date": 1573804888463,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 100000000,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "RAYPOWiFi",
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
                    "wifi",
                    "интернет",
                    "internet",
                    "RAYPO WiFi"
                ],
                "myhome": true,
                "weight": 0.0000065801684376894085,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "6515820e00bcd3ec3935bbf1",
                "paycom_id": "65156f822918d26924fd4798",
                "name": "Wifi Uz",
                "organization": "ООО «\"HAFTA-24\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/69a39555684d7661eb3e73cdfd433c9c983aed3d.png",
                "date": 1695908366745,
                "terminal": {
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
                    "HAFTA-24",
                    "wifi uz",
                    "HAFTA 24"
                ],
                "weight": 0.0000063712742015722845,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5fe4708558bb9fee75c0ef0c",
                "paycom_id": "60f50bc51eea9c5f6d8fe123",
                "name": "DUPLEXTEL",
                "organization": "ООО «\"DUPLEX TEL\"»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/23814bc0fd3c8c659b6f0dd098e888106516d4cc.png",
                "date": 1608806533610,
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
                            "name": "login",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9]{3,64}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "duplextel",
                    "duplex tel",
                    "дюплекс",
                    "internet",
                    "интернет",
                    "провайдер"
                ],
                "myhome": true,
                "weight": 0.000005744591493220912,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "651d06aa5a8224b99c9a313f",
                "paycom_id": "650408792e002e2aabe76c31",
                "name": "iLink",
                "organization": "ООО «ASIA NETWORK»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/18a6ed896d164c94699ac13f4206d731f239963a.png",
                "date": 1696401066204,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 500000000,
                        "min": 50000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "iLink",
                    "айлинк",
                    "i линк",
                    "ay link",
                    "i link",
                    "i-link",
                    "шдштл"
                ],
                "weight": 0.000005013461666810978,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5dfa21d56fc2d0a023f46acf",
                "paycom_id": "601ce1e8b6e5ee22922a4013",
                "name": "SKS",
                "organization": "ООО «SERVIS-KOMMUNIKATSIYA SISTEMALARI»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/b7edf6e981bfe1d3f9517309680071717ecc25eb.png",
                "date": 1576673749612,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
                            "placeholder": "",
                            "replace": "[ -]",
                            "title": "Login",
                            "type": "text",
                            "validation": "^[a-zA-Z0-9\\_]{1,63}$",
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "оплата за интернет",
                    "оплата услуг интернета",
                    "internet orqali to'lov",
                    "internet to'lov",
                    "internet tolov",
                    "SKS",
                    "SERVIS-KOMMUNIKATSIYA SISTEMALARI"
                ],
                "myhome": true,
                "weight": 0.0000020889423611712407,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5ee200d0343eb86f54d33c86",
                "paycom_id": "5ed71f9a13438abc3892d54a",
                "name": "Salom Telecom",
                "organization": "ООО «MAXEMEX»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/9b419d05a4da33fe1ffd265e79edd074c768a562.png",
                "date": 1591869648770,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 500000000,
                        "min": 100000,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "salom telecom",
                    "оплата salom telecom",
                    "оплата за интернет",
                    "salom telecom to`lov"
                ],
                "myhome": true,
                "weight": 0.0000017756010069955547,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "65e6fa8088f9930638b5b8b0",
                "paycom_id": "65e1841bf4193eeca0afb668",
                "name": "MiranNet",
                "organization": "ООО «\"MIRAN NET  4155\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/e2470f579b8e818022f1ad121cfd719cdbdd6dcf.png",
                "date": 1709636224311,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "max": 99999999900,
                        "min": 100,
                        "round": false
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "LOGIN",
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
                    "MIRAN NET",
                    "MIRANNET",
                    "meran net",
                    "миран нет"
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
                "_id": "5b3df9de75dec31614ab1349",
                "paycom_id": "619cd684328ba73ec0fb2548",
                "name": "AIRNET интернет",
                "organization": "ООО «AIRNET»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/86afe4c716d1b8707b362c9807bc1986d89a5600.png",
                "date": 1530788292372,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 100000000
                    },
                    "account": [
                        {
                            "name": "login",
                            "title": "Login",
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
                            "validation": "^(\\+?998)?[0-9]{2}[0-9]{7}$",
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "фшктуе",
                    "эйрнет"
                ],
                "myhome": true,
                "weight": 6.266827083513723e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "5c401719a9fd3f41f405e395",
                "paycom_id": "61091fe0754e932e68fc7863",
                "name": "BCC",
                "organization": "ООО «Amaliy Aloqalar Biznesi»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/a9c808b6d19e1465f0d42263ef9280052534c351.png",
                "date": 1547704073397,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 100000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "username",
                            "title": "Abonent nomi",
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
                    "BCC",
                    "интернет",
                    "интернет провайдер",
                    "оплата за интернет",
                    "telecom x",
                    "телеком х"
                ],
                "myhome": true,
                "weight": 6.266827083513723e-7,
                "options": {
                    "prompts": {
                        "amount_disabled": false,
                        "requisite_disabled": false
                    }
                }
            },
            {
                "_id": "643657b1edabbd6b24e6e529",
                "paycom_id": "643544128ee89704b522a2c5",
                "name": "BeeTEL интернет",
                "organization": "ООО «BeeTel»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/b44f6bc8b91b2089c30ce926b6208ccc1127935c.png",
                "date": 1681282993099,
                "terminal": {
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
                            "title": "login",
                            "type": "text",
                            "validation": null,
                            "prefix": null,
                            "require": null,
                            "error": null,
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "BeeTEL интернет",
                    "BeeTEL",
                    "BeeTel"
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
                "_id": "5c7e87d106a4820839e98495",
                "paycom_id": "5c7e87d106a4820839e98495",
                "name": "UzCloud",
                "organization": "«Центр продаж и обслуживания»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/uzcloud.png",
                "date": 1551853627642,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000
                    },
                    "account": [
                        {
                            "name": "acc_id",
                            "title": "Akkaunt raqami",
                            "content": "number",
                            "type": "text",
                            "prefix": null,
                            "replace": null,
                            "validation": "^\\d+$",
                            "error": null,
                            "placeholder": "",
                            "scan": null,
                            "optional": false,
                            "visible": null
                        }
                    ]
                },
                "keywords": [
                    "мсдщгвы",
                    "хостинг",
                    "домен",
                    "hosting",
                    "uzcloud",
                    "uzclaud",
                    "узклауд"
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
                "_id": "5f48907c5099c11c41f36471",
                "paycom_id": "5f4795961d8bbeb111fb144c",
                "name": "AON TELECOM",
                "organization": "ООО «VERIZON COMMUNICATION GROUP»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/4d594f02a397cda6f69ff51315c76dbd86c8d6f0.png",
                "date": 1598591100976,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 99999999900
                    },
                    "account": [
                        {
                            "content": "text",
                            "name": "login",
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
                    "интернет",
                    "нэт",
                    "инет",
                    "телек",
                    "трафик",
                    "аон",
                    "фщт",
                    "аон телеком"
                ],
                "additional_info": true,
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
                "_id": "5d9af5933b466e5d59104468",
                "paycom_id": "6034b4d655c3355b27766de6",
                "name": "METRO TELECOM",
                "organization": "ООО \"INDEPENDENT TELECOM INNOVATIONS\"",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/metro-telecom.png",
                "date": 1570441919102,
                "terminal": {
                    "type": "form",
                    "amount": {
                        "min": 50000,
                        "max": 1000000000000
                    },
                    "account": [
                        {
                            "name": "acc_id",
                            "title": "Hisob raqami",
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
                    "internet",
                    "metro",
                    "telecom",
                    "метро",
                    "телеком",
                    "интернет",
                    "провайдер"
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
                "_id": "665078edb23b231bab8eef4b",
                "paycom_id": "665078680d43eb1d7266de65",
                "name": "SamLink",
                "organization": "ООО «\"SAM LINK\" MCHJ»",
                "active": true,
                "type": 100,
                "logo": "https://cdn.payme.uz/merchants/ff03122db90624e3b514ee9a1d5e71d3154e0dee.png",
                "date": 1716549869338,
                "terminal": {
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
                    "samlink",
                    "самлинк",
                    "ыфьдштл"
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