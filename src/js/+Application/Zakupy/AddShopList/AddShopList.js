import React from "react";
import FormHeader from "./FormHeader";

const AddShopList = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (true) {
      // addRecipe(recipe);
      // setName("");
      // setDescription("");
      // setSteps([]);
      // setIngredients([]);
      onClose();
      window.location.reload();
      alert(`Dziękujemy za dodanie listy zakupów!`);
    } else {
      console.log("Formularz błędnie wypełniony");
      // return errors;
    }
  };
  return (
    <div className='backdrop'>
      <form className='shopList' onSubmit={handleSubmit}>
        <i
          className='fa fa-times close-btn'
          aria-hidden='true'
          onClick={onClose}
        />
        <FormHeader />
        <h1>Dodaj listę zakupów</h1>
      </form>
    </div>
  );
};

export default AddShopList;
