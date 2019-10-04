import React from "react";
import ShopItem from "./ShopItem";
import "font-awesome/css/font-awesome.min.css";

const FormInputs = ({ shoplist, shopItem, addItem, deleteItem, addToList }) => {
  return (
    <div className='shopList__form-container'>
      <div className='shopList__input-box'>
        <label htmlFor='name'>Nazwa listy</label>
        <input type='text' id='name' name='name' />
      </div>
      <br />
      <div className='shopList__input-box'>
        <label htmlFor='item'>Dodaj produkt</label>
        &nbsp;
        <input
          type='text'
          name='item'
          id='item'
          value={shopItem}
          onChange={addItem}
          placeholder='Dodaj produkt'
          className={shoplist.length <= 0 ? "error" : null}
        />
        <i
          className='fa fa-plus-square fa-3x'
          onClick={() => addToList(shopItem)}
        />
      </div>

      <div className='shopList__item-box'>
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
