import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisibility(prevState => {
      return !prevState;
    })
  }

  return (
    <menu className="w-full bg-dark-green z-50 px-5">
      <ul className="flex flex-col sm:flex-row justify-between items-center w-full relative">
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
        <button className={`flex visible sm:invisible peer absolute top-[35px] right-[5%] -translate-y-[50%] translate-x-[50%] ${menuVisibility && "rotate-180"}`}  onClick={handleMenuVisibility} >
          <span class="material-symbols-outlined text-white">expand_more</span>
        </button>

        <div className={`z-auto flex flex-col sm:flex sm:flex-row ${menuVisibility ? "top-full bg-dark-green" : "hidden"} justify-center`}>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "p-5 text-md transition-bg duration-200 text-white sm:rounded-t-lg bg-darker-green"
                : "p-5 text-md transition-bg duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/create-plan"
            className={({ isActive }) =>
              isActive
                ? "p-5 text-md transition-bg duration-200 text-white sm:rounded-t-lg bg-darker-green"
                : "p-5 text-md transition-bg duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
            }
          >
            Create Plan
          </NavLink>
          <NavLink
            to="/your-plans"
            className={({ isActive }) =>
              isActive
                ? " p-5 text-md transition-bg duration-200 text-white sm:rounded-t-lg bg-darker-green"
                : " p-5 text-md transition-bg duration-200 text-white hover:rounded-t-lg hover:bg-darker-green"
            }
          >
            Your Plans
          </NavLink>
        </div>
      </ul>
    </menu>
  );
};

export default Menu;
