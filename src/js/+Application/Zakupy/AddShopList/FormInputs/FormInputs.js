import React from "react";
import ShopItem from "./ShopItem";
import "font-awesome/css/font-awesome.min.css";

const FormInputs = ({ shoplist, shopItem, addItem, deleteItem, addToList }) => {
  return (
    <div>
      <div className='inputs'>
        <input
          type='text'
          name='item'
          value={shopItem}
          onChange={addItem}
          placeholder='dodaj produkt'
        />
        <i
          className='fa fa-plus-square fa-3x'
          onClick={() => addToList(shopItem)}
        />
      </div>
      <div className='list'>
        <ul>
          {shoplist.map((shopitem, idx) => (
            <ShopItem
              shopitem={shopitem}
              key={idx}
              idx={idx}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormInputs;
