import React from "react";
import "font-awesome/css/font-awesome.min.css";

const AddWidget = ({
  addNewRecipe,
  isAddRecipe,
  addNewPlan,
  isAddPlan,
  isAddShopList,
  addNewShopList
}) => {
  return (
    <div className='add_widget__container'>
      <div className='add_widget__box'>
        <i
          className='fa fa-plus-square-o fa-5x'
          onClick={() => addNewRecipe(isAddRecipe)}
        />
        <p>przepis</p>
      </div>
      <div className='add_widget__box'>
        <i
          className='fa fa-plus-square-o fa-5x'
          onClick={() => addNewPlan(isAddPlan)}
        />
        <p>plan</p>
      </div>
      <div className='add_widget__box'>
        <i
          className='fa fa-plus-square-o fa-5x'
          onClick={() => addNewShopList(isAddShopList)}
        />
        <p>zakupy</p>
      </div>
    </div>
  );
};

export default AddWidget;
