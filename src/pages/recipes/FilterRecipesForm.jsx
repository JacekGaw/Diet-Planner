import React, { useContext, useRef } from "react";
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
      ></input>

      <label htmlFor="category">Category: </label>
      <select id="category" ref={categoryRef} onChange={handleSearch}>
        <option value="all">All</option>
        {getUniq(recipes).map((item, index) => (
          <option value={item} className="capitalize" key={index}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor="sort">Sort: </label>
      <select id="sort" ref={sortRef} onChange={handleSearch}>
        <option value="oldest">From Oldest</option>
        <option value="newest">From Newest</option>
        <option value="favourites">Favourites First</option>
      </select>
    </form>
  );
};

export default FilterRecipesForm;
