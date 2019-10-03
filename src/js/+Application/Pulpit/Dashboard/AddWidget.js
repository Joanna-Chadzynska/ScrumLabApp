import React from "react";
import "font-awesome/css/font-awesome.min.css";

const AddWidget = ({ addNewRecipe, isAddRecipe, addNewPlan, isAddPlan }) => {
  return (
    <div className="add_widget__container">
      <div className="add_widget__box">
        <div
          className="add__widget recipe"
          onClick={() => addNewRecipe(isAddRecipe)}
        >
          <i className="fa fa-plus"></i>
        </div>
        <p>dodaj przepis</p>
      </div>
      <div className="add_widget__box">
        <div className="add__widget plan" onClick={() => addNewPlan(isAddPlan)}>
          <i className="fa fa-plus"></i>
        </div>
        <p>dodaj plan</p>
      </div>
    </div>
  );
};

export default AddWidget;
