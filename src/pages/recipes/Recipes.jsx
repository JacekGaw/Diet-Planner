import React, { useState, useRef } from "react";
import AddRecipe from "./AddRecipe";
import RecipesList from "./RecipesList";
import Modal from "../../components/UI/Modal";

const Recipes = () => {
  const modalRef = useRef();

  const handleChangeVisibility = () => {
    modalRef.current.open();
  };


  return (
    <>
      <Modal ref={modalRef}>
        <AddRecipe />
      </Modal>
      <section className=" z-0 flex flex-col ">
        <header className="w-full relative p-2 z-50 ">
          <h2 className="text-center text-4xl font-regular z-50 drop-shadow-md">
            Recipe Book
          </h2>
          <span className="material-symbols-outlined text-[80px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0 ">
            menu_book
          </span>
        </header>
        <div className="max-w-[500px]">
          <button
            onClick={handleChangeVisibility}
            className="bg-dark-green text-white rounded p-2 text-sm mb-5"
          >
            Add recipe
          </button>
        </div>
        <div className="flex w-full justify-center">
        <RecipesList
          className="flex flex-wrap z-50 max-w-screen-xl"
          cardStyle="z-50 w-[23%] m-[1%] bg-white rounded-xl flex flex-col justify-between border-2 border-dark-green"
        />
        </div>
      </section>
    </>
  );
};

export default Recipes;
