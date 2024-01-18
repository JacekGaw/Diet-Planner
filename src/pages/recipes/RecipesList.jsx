import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../store/recipes-context";
import RecipeCard from "./RecipeCard";
import { useSearchParams } from "react-router-dom";

const RecipesList = ({ className, cardStyle}) => {
  const { recipes } = useContext(RecipesContext);
  const [searchParams, setSearchParams] = useSearchParams({
  });


  const [arr, setArr] = useState([...recipes]);
  let cat = searchParams.get("cat");
  let search = searchParams.get("search");
  let sort = searchParams.get("sort");



  useEffect(() => {
    let helperArr = recipes;
    helperArr = recipes.sort((a,b) => new Date(a.add_date) - new Date(b.add_date))
    setArr(helperArr);
    if (searchParams.size !== 0) {
      if (sort === "newest") {
        let helo = recipes;
        helperArr = helo.sort((a,b) => new Date(b.add_date) - new Date(a.add_date));
        setArr(helperArr);
      } 
      else if (sort === "oldest") {
        let helo = recipes;
        helperArr = helo.sort((a,b) => new Date(a.add_date) - new Date(b.add_date));
        setArr(helperArr);
      }
      if (cat !== "all") {
        helperArr = helperArr.filter((item) => item.category === cat);
      }
      setArr(
        helperArr.filter((recipe) => {
          if (recipe.title.toLowerCase().includes(search.toLowerCase())) {
            return recipe;
          }
        })
      );
    }
    else setArr(recipes);
    // return () => {
    //   setArr(recipes);
    // };
  }, [searchParams, cat, search, sort]);

  return (
    <ul className={className}>
      {arr.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            recipeInfo={recipe}
            className={cardStyle}
          />
        );
      })}
    </ul>
  );
};

export default RecipesList;
