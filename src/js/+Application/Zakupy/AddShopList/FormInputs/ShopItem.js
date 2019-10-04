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
        <li className='shoplist__item'>
          <i
            className='fa fa-check'
            aria-hidden='true'
            style={{ color: "#468966" }}>
            <input
              type='text'
              name='step'
              value={newShopItem}
              style={{ color: "#000", margin: "1rem" }}
              onChange={handleChangeItem}
            />
            <i
              className='fa fa-check-square-o'
              aria-hidden='true'
              onClick={updateItem}
              style={{ color: "#468966", fontSize: "1.25rem" }}
            />
          </i>
        </li>
      ) : (
        <li className='shoplist__item'>
          <i
            className='liststyle fa fa-check'
            aria-hidden='true'
            style={{ color: "#468966" }}>
            <span style={{ color: "#000", margin: "1rem" }}>{newShopItem}</span>
            <i
              className='fa fa-edit edit'
              onClick={toggleEdit}
              style={{
                color: "#ffb03b",
                marginRight: "1rem",
                fontSize: "1.25rem"
              }}
            />
            <i
              className='fa fa-trash-o delete'
              aria-hidden='true'
              onClick={() => deleteItem(idx)}
              style={{ color: "#bd4932", fontSize: "1.25rem" }}
            />
          </i>
        </li>
      )}
    </>
  );
};

export default ShopItem;
