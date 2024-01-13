import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";

const RouteError = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1, {replace: true});
    }

  console.log("Error");
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <p class="material-symbols-outlined text-[250px] text-red-800 opacity-80">dangerous</p>
      <h2 className="font-bold text-3xl mb-5">Looks like we don't have what you're looking for!</h2>
      <Button onClick={handleClickBack}>Back to previous page.</Button>
    </div>
  );
};

export default RouteError;
