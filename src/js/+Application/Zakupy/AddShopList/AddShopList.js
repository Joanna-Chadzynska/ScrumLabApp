import React from "react";

const AddShopList = ({ onClose }) => {
  return (
    <div className='backdrop'>
      <form className='shopList'>
        <i
          className='fa fa-times close-btn'
          aria-hidden='true'
          onClick={onClose}></i>
        <h1>Dodaj listę zakupów</h1>
      </form>
    </div>
  );
};

export default AddShopList;
