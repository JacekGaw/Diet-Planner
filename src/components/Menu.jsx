import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <menu className="w-full bg-dark-green z-50">
      <ul className="flex justify-between items-end w-full">
        <div className="w-full p-x-5 flex">
          <NavLink to="/">
            <h2 className="group p-5 text-2xl text-white hover:drop-shadow-md font-bold flex items-center">
              <p className="material-symbols-outlined text-2xl mr-1 group-hover:rotate-6 group-hover:scale-110 transition-all duration-200">
                lunch_dining
              </p>
              <div className="group-hover:translate-x-1 transition-all duration-200">
                Diet Planner
              </div>
            </h2>
          </NavLink>

          <div className="group flex flex-col justify-center">
            <div className="group absolute right-5 top-5">
              {/* <span className="material-symbols-outlined text-white hover:-translate-x-0.5 hover:cursor-pointer transition-all duation-200">
                menu
              </span> */}
            </div>
            <div className="flex w-full justify-center items-baseline">
              <div>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "p-5 text-md transition-all duration-200 text-white rounded-t-lg bg-darker-green"
                  : "p-5 text-md transition-all duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
              }
            >
              Recipes
            </NavLink>
            <NavLink
              to="/create-plan"
              className={({ isActive }) =>
                isActive
                  ? "p-5 text-md transition-all duration-200 text-white rounded-t-lg bg-darker-green"
                  : "p-5 text-md transition-all duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
              }
            >
              Create Plan
            </NavLink>
              </div>
            <NavLink
              to="/your-plans"
              className={({ isActive }) =>
                isActive
                  ? " p-5 text-md transition-all duration-200 text-white rounded-t-lg bg-darker-green"
                  : " p-5 text-md transition-all duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
              }
            >
              Your Plans
            </NavLink>
            </div>
          </div>
        </div>
      </ul>
    </menu>
  );
};

export default Menu;
