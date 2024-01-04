export const SAMPLE_RECIPES = [
    {
        id: Math.random(),
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
        id: Math.random(),
        add_date: "3.1.2024",
        title: "Owsianka z brzoskwiniami",
        category: "sweet",
        description: "Owsianka z brzoskwiniami. Słodki posiłek, idealny na śniadanie lub podwieczorek. Do przygotowania również w lodówce wieczór przed.",
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
    }
]