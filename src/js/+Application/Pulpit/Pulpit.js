import React, { useState } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import AddRecipe from "../Przepisy/AddRecipe/AddRecipe";
import AddPlan from "../Plany/AddPlan/AddPlan";
import AddShopList from "../Zakupy/AddShopList";

const Pulpit = ({ user }) => {
  const [isAddRecipe, setAddRecipe] = useState(false);
  const [isAddPlan, setAddPlan] = useState(false);
  const [isAddShopList, setShopList] = useState(false);

  const addNewRecipe = (e) => {
    setAddRecipe(!isAddRecipe);
  };

  const addNewPlan = (e) => {
    setAddPlan(!isAddPlan);
  };

  const addNewShopList = (e) => {
    setShopList(!isAddShopList);
    console.log(isAddShopList);
  };

  const list = () => {
    if (isAddRecipe) {
      return <AddRecipe show={isAddRecipe} onClose={addNewRecipe} />;
    }
    if (isAddPlan) {
      return <AddPlan show={isAddPlan} onClose={addNewPlan} />;
    }

    if (isAddShopList) {
      return <AddShopList show={isAddShopList} onClose={addNewShopList} />;
    }

    return (
      <Dashboard
        isAddRecipe={isAddRecipe}
        addNewRecipe={addNewRecipe}
        isAddPlan={isAddPlan}
        addNewPlan={addNewPlan}
        isAddShopList={isAddShopList}
        addNewShopList={addNewShopList}
      />
    );
  };

  return <div className='pulpit'>{list()}</div>;
};

const mapState = (state) => {
  return {
    user: state.user.user,
    recipes: state.recipes.recipes
  };
};

export default connect(
  mapState,
  null
)(Pulpit);
