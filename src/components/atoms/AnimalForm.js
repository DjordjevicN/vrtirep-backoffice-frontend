import React, { useState } from "react";

function AnimalForm() {
  const [animalSpecies, setAnimalSpecies] = useState("");

  const handleSubmit = () => {
    console.log(animalSpecies);
  };
  return (
    <div className="animalForm">
      <div className="animalForm__content">
        <div className="animalForm--form">
          <div className="inputItem">
            <p className="label"> animal species</p>
            <input
              type="text"
              placeholder="Species name"
              onChange={(e) => {
                setAnimalSpecies(e.target.value);
              }}
            />
          </div>
          <button className="BTN animalFormButton">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalForm;
