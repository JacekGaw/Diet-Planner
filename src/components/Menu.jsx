import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <menu className="w-full bg-dark-green z-50">
      <ul className="flex px-5 justify-between items-end w-full">
        <div className="flex items-end">
          <NavLink to="/">
            <h2 className="group p-5 text-2xl text-white hover:drop-shadow-md font-bold flex items-center">
              <p class="material-symbols-outlined text-2xl mr-1 group-hover:rotate-6 group-hover:scale-110 transition-all duration-200">
                lunch_dining
              </p>
              <div className="group-hover:translate-x-1 transition-all duration-200">Diet Planner</div>
            </h2>
          </NavLink>
          <NavLink
            to="/recipes"
            className="p-5 text-lg hover:bg-darker-green hover:rounded-t-lg transition-all duration-200 text-white"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/create-plan"
            className="p-5 text-lg text-white hover:bg-darker-green hover:rounded-t-lg transition-all duration-200"
          >
            Create Plan
          </NavLink>
        </div>
        <NavLink
          to="/your-plans"
          className="place-self-end	 p-5 text-lg text-white hover:bg-darker-green hover:rounded-t-lg transition-all duration-200"
        >
          Your Plans
        </NavLink>
      </ul>
    </menu>
  );
};

export default Menu;
