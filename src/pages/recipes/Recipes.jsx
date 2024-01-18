import React, { useState, useRef } from "react";
import AddRecipe from "./AddRecipe";
import RecipesList from "./RecipesList";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import FilterRecipesForm from "./FilterRecipesForm";

const Recipes = () => {
  const modalRef = useRef();

  const handleChangeVisibility = () => {
    modalRef.current.open();
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  }


  return (
    <>
      <Modal ref={modalRef}>
        <AddRecipe onClose={handleCloseModal} />
      </Modal>
      <section className="w-full z-0 flex flex-col items-center">
        <header className="w-full relative p-2 z-30 ">
          <h2 className="text-center text-4xl font-regular z-30 drop-shadow-md">
            Recipe Book
          </h2>
          <span className="material-symbols-outlined text-[80px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0 ">
            menu_book
          </span>
        </header>
        <div className="pb-1 my-5 w-full max-w-screen-xl flex justify-between items-center gap-10 border-b-2 border-b-slate-300">
          <Button
            onClick={handleChangeVisibility}
            className="bg-dark-green text-white font-light rounded p-2 text-xs"
          >
            Add recipe
          </Button>
          <FilterRecipesForm></FilterRecipesForm>
        </div>
        <div className="flex w-full justify-center">
        <RecipesList
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-50 max-w-screen-xl"
          cardStyle="z-50 bg-white rounded-xl flex flex-col justify-between "
        />
        </div>
      </section>
    </>
  );
};

export default Recipes;
