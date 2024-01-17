export const getMealInfo = (meal) => {
    return (
        <div>
            <header className="w-full">
          <h3 className="font-bold text-3xl">{meal.title}</h3>
          <p className="capitalize">{meal.category}</p>
        </header>
        <div className="flex justify-center p-2 mb-2 text-sm font-semibold bg-light-green">
          <p className="mx-1">P: {meal.proteins}</p>
          <p className="mx-1">F: {meal.fats}</p>
          <p className="mx-1">C: {meal.carbohydrates}</p>
          <p className="mx-1">Calories: {meal.calories}</p>
        </div>
        <p className="text-sm  py-3 text-justify">
          <strong>Description: </strong>
          {meal.description}
        </p>
        <div className="text-sm pb-3">
            <strong>Ingredients:</strong>
            <ul>
                {meal.ingredients.map(ingredient => {
                    return <li key={ingredient.id} className="pl-10 my-1 font-semibol">{ingredient.ingredient}: {ingredient.amount}{ingredient.unit}</li>
                })}
            </ul>
        </div>
        </div>
    )
}