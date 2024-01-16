export const generateShoppingList = (planID, plans, recipes) => {
    let planRecipesIDs = [];
    const mealPlan = plans.filter(plan => plan.id === planID)[0];
    mealPlan.days.map(day => {
        planRecipesIDs = [...planRecipesIDs, ...day.recipesIDs];
    })
    let planIngredients = [];
    let recipe = []
    planRecipesIDs.map(planRecipeID => {
        recipe = recipes.filter(singleRecipe => singleRecipe.id === planRecipeID);
        planIngredients = [...planIngredients, recipe[0].ingredients];
    })
    let helper = [];
    planIngredients.map(planIngredient => {
        planIngredient.map(ingredient => {
            helper = [...helper, {ingredient: ingredient.ingredient, value: ingredient.amount, unit: ingredient.unit}]
        })
    })

    helper = helper.reduce((obj, item) => {  
        let find = obj.find(i => i.ingredient === item.ingredient);  
        let _d = {  
          ...item
        }
        find ? (find.value += item.value ) : obj.push(_d);
        return obj;
      }, [])
    return helper;
};
 