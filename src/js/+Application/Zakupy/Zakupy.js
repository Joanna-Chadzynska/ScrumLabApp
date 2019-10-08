import React from "react";
import { connect } from "react-redux";
import ShopItem from "./ShopItem";

const Zakupy = ({ shoplist }) => {
  return (
    <div className='itemsList'>
      <div className='itemsList__header'>
        <h3>Lista Przepisów</h3>
        <i
          className='fa fa-plus-square fa-2x'
          // onClick={openAddRecipe}
          aria-hidden='true'></i>
      </div>

      <div className='itemsList__table'>
        <table>
          <thead>
            <tr className='itemsList--headRow'>
              <th>nazwa</th>
              <th>lista</th>
              <th>akcje</th>
            </tr>
          </thead>
          <tbody>
            {shoplist.map((shop, idx) => (
              <ShopItem key={idx} shop={shop} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    shoplist: state.shoplist.shoplist
  };
};

export default connect(
  mapState,
  null
)(Zakupy);
