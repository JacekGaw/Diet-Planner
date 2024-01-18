import React, { useContext, useEffect, useRef } from "react";
import { RecipesContext } from "../../store/recipes-context";
import { useSearchParams } from "react-router-dom";

const FilterRecipesForm = () => {
  const { recipes } = useContext(RecipesContext);
  const sortRef = useRef();
  const categoryRef = useRef();
  const searchRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams({
    sort: "oldest",
    cat: "all",
    search: "",
  });

  useEffect(() => {
    setSearchParams({});
    sortRef.current.value = "oldest";
    categoryRef.current.value = "all";
    searchRef.current.value = "";
  }, [])

  const getUniq = (recipes) => {
    let arr = [...new Set(recipes.map((recipe) => recipe.category))];
    return arr;
   
  };

  const handleSearch = (e) => {
    let sort = { sort: sortRef.current.value };
    let cat = { cat: categoryRef.current.value };
    let search = { search: searchRef.current.value };
    setSearchParams({ ...search, ...sort, ...cat });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="z-50"
    >
      <input
        placeholder="Search titles"
        onChange={handleSearch}
        ref={searchRef}
        className="p-2 rounded-md border border-grey-900 focus:outline-green"
      ></input>

      <label htmlFor="category" className="ml-2">Category: </label>
      <select id="category" ref={categoryRef} onChange={handleSearch} className="p-2 rounded-md border border-grey-900 text-slate-600 focus:outline-green">
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="snack">Snack</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="sweet">Sweet</option>
      </select>
      <label htmlFor="sort" className="ml-2">Sort: </label>
      <select id="sort" ref={sortRef} onChange={handleSearch} className="p-2 rounded-md border border-grey-900 text-slate-600 focus:outline-green">
        <option value="oldest" defaultValue>From Oldest</option>
        <option value="newest">From Newest</option>
        <option value="favourites">Favourites First</option>
      </select>
    </form>
  );
};

export default FilterRecipesForm;
