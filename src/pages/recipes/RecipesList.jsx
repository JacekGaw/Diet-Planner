import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../store/recipes-context";
import RecipeCard from "./RecipeCard";
import { useSearchParams } from "react-router-dom";

const RecipesList = ({className, cardStyle}) => {
  const { recipes } = useContext(RecipesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [arr, setArr] = useState([...recipes]);
  let cat = searchParams.get("cat");
  let search = searchParams.get("search");
  let sort = searchParams.get("sort");

  useEffect(() => {
    if(searchParams.size !== 0){
    setArr( recipes.filter((recipe) => {
      if(recipe.title.toLowerCase().includes(search.toLowerCase())){
      return recipe;
      }
    }))
  }
  }, [searchParams])



  return (
    <ul className={className}>
      {arr.map((recipe) => (
        <RecipeCard key={recipe.id} recipeInfo={recipe} className={cardStyle} />
      ))}
    </ul>
  );
};

export default RecipesList;
