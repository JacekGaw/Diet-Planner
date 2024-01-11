import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <menu className="w-full bg-dark-green z-50">
      <ul className="flex p-5 justify-start items-end">
        <NavLink to="/">
          <h2 className="px-5 text-2xl text-white hover:drop-shadow-md font-bold flex items-center">
            <div class="material-symbols-outlined text-2xl mr-1">lunch_dining</div>
            <div>Diet
            Planner</div>
          </h2>
        </NavLink>
        <NavLink
          to="/recipes"
          className="px-5 text-lg hover:drop-shadow-md text-white"
        >
          Recipes
        </NavLink>
        <NavLink
          to="/create-plan"
          className="px-5 text-lg text-white hover:drop-shadow-md"
        >
          Meal Plan
        </NavLink>
      </ul>
    </menu>
  );
};

export default Menu;
