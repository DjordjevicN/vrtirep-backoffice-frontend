import "../../styles/animalPage.scss";
import React, { useState } from "react";
import AnimalForm from "../atoms/AnimalForm";

function AnimalPage() {
  const [openAddForm, SetOpenForm] = useState(true);

  const handleFormOpen = () => {
    SetOpenForm(!openAddForm);
  };
  return (
    <div className="animal">
      <div className="animal__content">
        <button
          className="BTN addAnimalButton"
          onClick={() => {
            handleFormOpen();
          }}
        >
          Add Animal
        </button>
        {openAddForm && <AnimalForm />}
      </div>
    </div>
  );
}

export default AnimalPage;
