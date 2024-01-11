export const SAMPLE_RECIPES = [
    {
        id: 0.19191723944889527,
        add_date: "3.1.2024",
        title: "Jajecznica z boczkiem",
        category: "breakfast",
        description: "Jajecznica z boczkiem, idealna na śniadanie, szybki, łatwy, jednogarnkowy przepis. Bardzo wiele możliwości kombinacji i uzupełnienia o inne dodatki. Najlepiej do zrobienia na maśle",
        proteins: 30,
        fats: 30,
        carbohydrates: 20,
        calories: 400,
        ingredients: [{
            id: Math.random(),
            ingredient: "Jajka",
            amount: 60,
            unit: "g"
        },
        {
            id: Math.random(),
            ingredient: "Boczek",
            amount: 80,
            unit: "g"
        }]
    },
    {
        id: 0.7899567626143982,
        add_date: "3.1.2024",
        title: "Owsianka z brzoskwiniami",
        category: "sweet",
        description: "Owsianka z brzoskwiniami. Słodki posiłek. ",
        proteins: 35,
        fats: 20,
        carbohydrates: 50,
        calories: 500,
        ingredients: [{
            id: Math.random(),
            ingredient: "Płatki owsiane",
            amount: 60,
            unit: "g"
        },
        {
            id: Math.random(),
            ingredient: "Brzoskwinie",
            amount: 10,
            unit: "g"
        }]
    },
    {
        id: Math.random(),
        add_date: "02.03.2024",
        title: "Koktajl z awokado i szpinakiem",
        category: "snack",
        description: "Koktajl z awokado i szpinakiem to połączenie kremowej konsystencji i intensywnego smaku. Miksujemy awokado, świeży szpinak, jogurt naturalny i miód. Koktajl podajemy schłodzony, ozdobiony listkami mięty.",
        proteins: 7,
        fats: 10,
        carbohydrates: 15,
        calories: 180,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Awokado",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Szpinak",
                amount: 50,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Jogurt naturalny",
                amount: 150,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Miód",
                amount: 1,
                unit: "łyżka"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "03.03.2024",
        title: "Ratatouille z kuskusem",
        category: "dinner",
        description: "Ratatouille to tradycyjne danie kuchni francuskiej, wzbogacone o aromatyczny kuskus. Warzywa, takie jak bakłażan, cukinia i papryka, dusimy na patelni z ziołami prowansalskimi. Kuskus gotujemy zgodnie z instrukcją, a następnie łączymy z warzywami. Możemy podać posypane świeżą natką pietruszki.",
        proteins: 8,
        fats: 5,
        carbohydrates: 35,
        calories: 240,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Bakłażan",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Cukinia",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Papryka czerwona",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Kuskus",
                amount: 150,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "04.03.2024",
        title: "Kurczak w sosie teriyaki z warzywami",
        category: "dinner",
        description: "Soczyste kawałki kurczaka podawane w aromatycznym sosie teriyaki, z dodatkiem kolorowych warzyw. Kurczaka smażymy na patelni, a następnie dusimy w sosie teriyaki razem z marchewką, cukinią i groszkiem. Podajemy z ugotowanym ryżem.",
        proteins: 30,
        fats: 12,
        carbohydrates: 25,
        calories: 380,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Kurczak",
                amount: 250,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Marchew",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Cukinia",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Groszek",
                amount: 100,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Sos teriyaki",
                amount: 50,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Ryż basmati",
                amount: 100,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "05.03.2024",
        title: "Krewetki w cieście tempura",
        category: "dinner",
        description: "Krewetki w delikatnym cieście tempura to danie pochodzące z kuchni japońskiej. Krewetki obtaczamy w cieście tempura i smażymy na głębokim oleju, aż staną się złociste i chrupiące. Podajemy je z sosem sojowym i posypane koperkiem.",
        proteins: 20,
        fats: 10,
        carbohydrates: 15,
        calories: 260,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Krewetki",
                amount: 200,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Mąka ryżowa",
                amount: 100,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Jajko",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Sos sojowy",
                amount: 30,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Koper",
                amount: 10,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "06.03.2024",
        title: "Tarta z malinami i mascarpone",
        category: "dessert",
        description: "Tarta z kruchym ciastem, kremem mascarpone i świeżymi malinami to doskonały deser na letnie dni. Ciasto kruche przygotowujemy z mąki, masła i cukru, a następnie smarujemy je kremem mascarpone i układamy maliny. Całość pieczemy do momentu zrumienienia ciasta.",
        proteins: 6,
        fats: 20,
        carbohydrates: 40,
        calories: 350,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Maliny",
                amount: 150,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Mascarpone",
                amount: 200,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Mąka",
                amount: 200,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Masło",
                amount: 100,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Cukier",
                amount: 50,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "07.03.2024",
        title: "Zapiekanka ziemniaczana z kiełbasą",
        category: "dinner",
        description: "Zapiekanka ziemniaczana z kiełbasą to syta i rozgrzewająca propozycja na obiad. Ziemniaki obieramy i kroimy na cienkie plastry, a następnie układamy je warstwami z kiełbasą. Całość zalewamy sosem beszamelowym i zapiekamy w piekarniku.",
        proteins: 15,
        fats: 20,
        carbohydrates: 30,
        calories: 360,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Ziemniaki",
                amount: 500,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Kiełbasa",
                amount: 250,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Mleko",
                amount: 300,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Mąka",
                amount: 50,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "08.03.2024",
        title: "Koktajl proteinowy z bananem",
        category: "snack",
        description: "Koktajl proteinowy z bananem to szybki sposób na uzupełnienie białka po treningu. Mieszamy białko serwatkowe z mlekiem, dodajemy banana i lód, a następnie miksujemy. Koktajl podajemy w wysokim szklankach.",
        proteins: 25,
        fats: 5,
        carbohydrates: 20,
        calories: 280,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Białko serwatkowe",
                amount: 30,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Mleko",
                amount: 300,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Banan",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Lód",
                amount: 100,
                unit: "g"
            }
        ]
    },
    {
        id: Math.random(),
        add_date: "10.03.2024",
        title: "Kurczak curry z basmati",
        category: "dinner",
        description: "Kurczak curry z basmati to aromatyczne danie, które zadowoli miłośników kuchni indyjskiej. Kawałki kurczaka dusimy w sosie curry z dodatkiem warzyw, a następnie podajemy na ugotowanym ryżu basmati.",
        proteins: 25,
        fats: 15,
        carbohydrates: 30,
        calories: 350,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Kurczak",
                amount: 300,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Ryż basmati",
                amount: 200,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Curry",
                amount: 10,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Cebula",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Papryka czerwona",
                amount: 1,
                unit: "sztuka"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "11.03.2024",
        title: "Sałatka grecka z oliwkami",
        category: "lunch",
        description: "Sałatka grecka to klasyczne danie śródziemnomorskie, bogate w smaki i aromaty. Składniki to pomidory, ogórek, oliwki, feta i cebula. Całość skrapiamy oliwą z oliwek i posypujemy oregano. Idealna na lekką kolację lub lunch.",
        proteins: 10,
        fats: 15,
        carbohydrates: 20,
        calories: 250,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Pomidory",
                amount: 200,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Ogórek",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Oliwki czarne",
                amount: 50,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Feta",
                amount: 100,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Cebula czerwona",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Oliwa z oliwek",
                amount: 30,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Oregano",
                amount: 5,
                unit: "g"
            }
        ]
    },

    {
        id: Math.random(),
        add_date: "12.03.2024",
        title: "Smoothie jagodowe z bananem",
        category: "snack",
        description: "Smoothie jagodowe z bananem to pyszny i zdrowy napój na ciepłe dni. Mieszamy mrożone jagody z banana i jogurtem naturalnym. Możemy dodać miód dla słodkiego smaku. Idealne jako szybki przekąska lub uzupełnienie śniadania.",
        proteins: 5,
        fats: 2,
        carbohydrates: 25,
        calories: 150,
        ingredients: [
            {
                id: Math.random(),
                ingredient: "Jagody mrożone",
                amount: 150,
                unit: "g"
            },
            {
                id: Math.random(),
                ingredient: "Banan",
                amount: 1,
                unit: "sztuka"
            },
            {
                id: Math.random(),
                ingredient: "Jogurt naturalny",
                amount: 150,
                unit: "ml"
            },
            {
                id: Math.random(),
                ingredient: "Miód",
                amount: 1,
                unit: "łyżeczka"
            }
        ]
    },
    ];
    