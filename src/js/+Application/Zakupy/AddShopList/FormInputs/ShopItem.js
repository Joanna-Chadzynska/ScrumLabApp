import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const ShopItem = ({ idx, shopitem, deleteItem }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [newShopItem, setNewShopItem] = useState(shopitem);

  const toggleEdit = (e) => {
    setEditMode(!isEditMode);
  };

  const handleChangeItem = (e) => {
    setNewShopItem(e.target.value);
  };

  const updateItem = (e) => {
    setEditMode(false);
  };
  return (
    <>
      {isEditMode ? (
        <li>
          <input
            type='text'
            name='step'
            value={newShopItem}
            style={{ color: "#468966" }}
            onChange={handleChangeItem}
          />
          <i
            className='fa fa-check-square-o'
            aria-hidden='true'
            onClick={updateItem}></i>
        </li>
      ) : (
        <li className='not-edit-mode'>
          {newShopItem}
          <i className='fa fa-edit' onClick={toggleEdit}></i>
          <i
            className='fa fa-trash-o'
            aria-hidden='true'
            onClick={() => deleteItem(idx)}></i>
        </li>
      )}
    </>
  );
};

export default ShopItem;
