const questions = [
//question 1
    {
        lv: {
            question: "Tava ideālā atpūta Rīgā:",
            answers: [
                "Gadatirgus Latvijas Etnogrāfiskājā brīvdabas muzejā",
                "Pastaiga pa Jūgendstila rajonu",
                "Pikniks kādā no Rīgas parkiem",
                "Izbrauciens ar laivu pa pilsētas kanālu"
            ]
        },
        en: {
            question: "Your ideal day off in Riga:",
            answers: [
                "Traditional fair at the Ethnographic Open-Air Museum of Latvia",
                "A stroll through the Art Nouveau district",
                "Picnic in one of Riga's parks",
                "Boat ride along the city canal"
            ]
        },

        images: [
            "images/q1-option1.webp",
            "images/q1-option2.jpg",
            "images/q1-option3.jpg",
            "images/q1-option4.jpg"
        ],

        results: [
            "piradzins",
            "vecriga",
            "biezpienmaize",
            "austina"
        ]
    },
//question 2
    {
        lv: {
            question: "Kultūras pasākums Rīgā:",
            answers: [
                "Operas izrādes apmeklējums LNOB",
                "Džeza koncerts pie Mazās Ģildes",
                "Tautas mūzikas koncerti vasaras saulgriežu laikā Rīgā",
                "Ceturtdienas vakaru koncerti Kalnciema kvartālā"
            ]
        },
        en: {
            question: "Cultural event in Riga:",
            answers: [
                "Attending an opera performance at The Latvian National Opera and Ballet",
                "Jazz concert by the Small Guild",
                "Folk music concerts during Midsummer in Riga",
                "Thursday evening concerts in the Kalnciema Quarter"
            ]
        },

        images: [
            "images/q2-option1.webp",
            "images/q2-option2.jpg",
            "images/q2-option3.jpg",
            "images/q2-option4.webp"
        ],

        results: [
            "vecriga",
            "austina",
            "piradzins",
            "biezpienmaize"
        ]
    },
//question 3
    {
        lv: {
            question: "Izvēlies ēku:",
            answers: [
                "Latvijas Nacionālā mākslas muzeja galvenā ēka",
                "3 brāļi Vecrīgā",
                "Jūgendstila ēka Elizabetes ielā 10b",
                "Latvijas Nacionālā bibliotēka"
            ]
        },
        en: {
            question: "Pick a building:",
            answers: [
                "Latvian National Museum of Art",
                "The Three Brothers in Riga Old Town",
                "Art Nouveau building at 10b Elizabetes Street",
                "National Library of Latvia"
            ]
        },

        images: [
            "images/q3-option1.jpg",
            "images/q3-option2.webp",
            "images/q3-option3.webp",
            "images/q3-option4.webp"
        ],

        results: [
            "vecriga",
            "piradzins",
            "austina",
            "biezpienmaize"
        ]
    },
//question 4
    {
        lv: {
            question: "Parks Rīgā:",
            answers: [
                "Vērmanes dārzs",
                "Botāniskais dārzs",
                "Operas skvērs",
                "Uzvaras parks"
            ]
        },
        en: {
            question: "Most beautiful park in Riga:",
            answers: [
                "Vērmanes Garden",
                "The Botanical Garden of the University of Latvia",
                "Opera Square",
                "Victory Park"
            ]
        },

        images: [
            "images/q4-option1.webp",
            "images/q4-option2.jpg",
            "images/q4-option3.webp",
            "images/q4-option4.webp"
        ],


        results: [
            "biezpienmaize",
            "austina",
            "vecriga",
            "piradzins"
        ]


    },
//question 5
    {
        lv: {
            question: "Sporta veids Rīgā:",
            answers: [
                "Skriešana Rimi Rīgas maratonā",
                "Saulrieta kanoe Pilsētas kanālā",
                "Ekskursija ar riteņiem pa Rīgu",
                "Līdzi just Latvijas hokejistiem"
            ]
        },
        en: {
            question: "Active and sports-related experiences in Riga:",
            answers: [
                "Running the Rimi Riga Marathon",
                "Sunset canoeing on the City Canal",
                "Bike tour around Riga",
                "Cheering for the Latvian ice hockey team"
            ]
        },

        images: [
            "images/q5-option1.jpg",
            "images/q5-option2.jpg",
            "images/q5-option3.webp",
            "images/q5-option4.jpg"
        ],


        results: [
            "biezpienmaize",
            "vecriga",
            "austina",
            "piradzins"
        ]
    },
//question 6
    {
        lv: {
            question: "Labākais gadalaiks Rīgā:",
            answers: [
                "Pavasaris",
                "Vasara",
                "Rudens",
                "Ziema"
            ]
        },
        en: {
            question: "Best season in Riga:",
            answers: [
                "Spring",
                "Summer",
                "Autumn",
                "Winter"
            ]
        },

        images: [
            "images/q6-option1.jpg",
            "images/q6-option2.jpg",
            "images/q6-option3.jpg",
            "images/q6-option4.jpg"
        ],

        results: [
            "austina",
            "vecriga",
            "biezpienmaize",
            "piradzins"
        ]
    },
//question 7
    {
        lv: {
            question: "Latviešu mākslinieks:",
            answers: [
                "Janis Rozentāls",
                "Kārlis Miesnieks",
                "Džemma Skulme",
                "Kristians Brekte"
            ]
        },
        en: {
            question: "Latvian artist:",
            answers: [
                "Janis Rozentāls",
                "Kārlis Miesnieks",
                "Džemma Skulme",
                "Kristians Brekte"
            ]
        },

        images: [
            "images/q7-option1.jpg",
            "images/q7-option2.jpg",
            "images/q7-option3.jpg",
            "images/q7-option4.png"
        ],

        results: [
            "vecriga",
            "piradzins",
            "biezpienmaize",
            "austina"
        ]
    },
//question 8
    {
        lv: {
            question: "Muzejs Rīgā:",
            answers: [
                "Mākslas muzejs Rīgas Birža",
                "Rīgas Motormuzejs",
                "Latvijas Nacionālais vēstures muzejs",
                "Modes muzejs"
            ]
        },
        en: {
            question: "Museum in Riga:",
            answers: [
                "Art Museum Riga Bourse",
                "Riga Motor Museum",
                "National History Museum of Latvia",
                "Fashion Museum"
            ]
        },

        images: [
            "images/q8-option1.webp",
            "images/q8-option2.webp",
            "images/q8-option3.webp",
            "images/q8-option4.webp"
        ],

        results: [
            "vecriga",
            "biezpienmaize",
            "piradzins",
            "austina"
        ]
    },
//question 9
    {
        lv: {
            question: "Kur ballēties Rīgā:",
            answers: [
                "Vecrīga",
                "Briāna kvartāls",
                "Kimmel kvartāls",
                "Klusais centrs"
            ]
        },
        en: {
            question: "Where to party in Riga:",
            answers: [
                "The Old Town of Riga",
                "Briāna Quarter",
                "Kimmel Quarter",
                "Quiet Centre"
            ]
        },

        images: [
            "images/q9-option1.webp",
            "images/q9-option2.webp",
            "images/q9-option3.webp",
            "images/q9-option4.webp"
        ],

        results: [
            "vecriga",
            "piradzins",
            "biezpienmaize",
            "austina"
        ]
    },
//question 10
    {
        lv: {
            question: "Iemīļotākais tirgus Rīgā:",
            answers: [
                "Āgenskalna tirgus",
                "Rīgas krāmu tirdziņš Spīķeros",
                "Mūsdienu amatniecības tirgus",
                "Rīgas Centrāltirgus"
            ]
        },
        en: {
            question: "Favourite market in Riga:",
            answers: [
                "Āgenskalns Market",
                "Spīķeri Flea Market",
                "Modern Craft Market",
                "Riga Central Market"
            ]
        },

        images: [
            "images/q10-option1.webp",
            "images/q10-option2.webp",
            "images/q10-option3.webp",
            "images/q10-option4.webp"
        ],

        results: [
            "vecriga",
            "austina",
            "biezpienmaize",
            "piradzins"
        ]
    },
//question 11
    {
        lv: {
            question: "Rīgas rajons:",
            answers: [
                "Vecrīga",
                "Klusais centrs",
                "Āgenskalns",
                "Mežaparks"
            ]
        },
        en: {
            question: "Riga neighbourhood:",
            answers: [
                "The Old Town of Riga",
                "Quiet Centre",
                "Āgenskalns",
                "Mežaparks"
            ]
        },

        images: [
            "images/q11-option1.webp",
            "images/q11-option2.jpg",
            "images/q11-option3.webp",
            "images/q11-option4.webp"
        ],

        results: [
            "vecriga",
            "biezpienmaize",
            "austina",
            "piradzins"
        ]
    },
//question 12
    {
        lv: {
            question: "Pārvietošanās veids Rīgā:",
            answers: [
                "Tramvajs",
                "Velosipēds",
                "Automašīna",
                "Pastaiga"
            ]
        },
        en: {
            question: "The best way of getting around Riga:",
            answers: [
                "Tram",
                "Bicycle",
                "Car",
                "Walking"
            ]
        },

        images: [
            "images/q12-option1.jpg",
            "images/q12-option2.jpg",
            "images/q12-option3.webp",
            "images/q12-option4.jpg"
        ],

        results: [
            "biezpienmaize",
            "austina",
            "piradzins",
            "vecriga"
        ]
    }

];