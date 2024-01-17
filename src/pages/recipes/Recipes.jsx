import React, { useState, useRef } from "react";
import AddRecipe from "./AddRecipe";
import RecipesList from "./RecipesList";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";

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
      <section className=" z-0 flex flex-col items-center">
        <header className="w-full relative p-2 z-50 ">
          <h2 className="text-center text-4xl font-regular z-50 drop-shadow-md">
            Recipe Book
          </h2>
          <span className="material-symbols-outlined text-[80px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0 ">
            menu_book
          </span>
        </header>
        <div className="w-fulll flex  justify-end">

          <Button
            onClick={handleChangeVisibility}
            className="bg-dark-green text-white font-light rounded p-2 text-xs my-5"
          >
            Add recipe
          </Button>
          
        </div>
        <div className="flex w-full justify-center">
        <RecipesList
          className="flex flex-wrap z-50 max-w-screen-xl"
          cardStyle="z-50 w-[100%] sm:w-[48%] md:w-[31.3%] xl:w-[23%] m-[1%] bg-white rounded-xl flex flex-col justify-between "
        />
        </div>
      </section>
    </>
  );
};

export default Recipes;
