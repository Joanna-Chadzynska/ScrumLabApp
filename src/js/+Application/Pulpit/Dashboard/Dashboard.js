import React from "react";
import AddWidget from "./AddWidget";
import InfoWidget from "./InfoWidget";
import Plan from "./Plan";

const Dashboard = ({
  addNewRecipe,
  isAddRecipe,
  addNewPlan,
  isAddPlan,
  isAddShopList,
  addNewShopList,
  shoplist
}) => {
  console.log(shoplist);
  return (
    <div className='dashboard'>
      <div className='dashboard__widgets'>
        <AddWidget
          isAddRecipe={isAddRecipe}
          addNewRecipe={addNewRecipe}
          addNewPlan={addNewPlan}
          isAddPlan={isAddPlan}
          isAddShopList={isAddShopList}
          addNewShopList={addNewShopList}
        />
        <InfoWidget />
      </div>
      <Plan />
    </div>
  );
};

export default Dashboard;
