import React, { useState } from "react";
import { connect } from "react-redux";
import { addToShoplist } from "../../../../redux/shoplist/actions";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";

const AddShopList = ({ onClose, addToShoplist }) => {
  const [shopItem, setShopItem] = useState("");
  const [listName, setListName] = useState("");
  const [shopList, setShoplist] = useState([]);
  const [list, setList] = useState({
    shoplist: "",
    description: ""
  });
  const [errors, setErrors] = useState({
    item: "",
    description: ""
  });

  const addItem = (e) => {
    if (e.target.value.length <= 50) {
      setShopItem(e.target.value);
    } else {
      setErrors({ item: "Nazwa jest za długa!" });
    }
  };

  const deleteItem = (index) => {
    setShoplist(shopList.filter((el, idx) => index !== idx));
  };

  const addToList = (item) => {
    if (item.length > 0) {
      setShoplist([...shopList, item]);
      setShopItem("");
    } else {
      setErrors({ item: "Nazwa nie może być pusta!" });
    }
  };

  const addDescription = (e) => {
    setListName(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    if (shopList.length <= 0) {
      isValid = false;
      errors.item = "lista nie może być pusta!";
    } else {
      errors.item = "";
      list.shoplist = shopList;
    }

    if (listName.length <= 0) {
      isValid = false;
      errors.description = "Nazwa jest za krótka!";
    } else {
      errors.description = "";
      list.description = listName;
    }

    setErrors({ ...errors });
    setList({ ...list });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addToShoplist(list);
      setShoplist([]);
      onClose();
      alert(`Dziękujemy za dodanie listy zakupów!`);
    } else {
      console.log("Formularz błędnie wypełniony");
      return errors;
    }
  };

  return (
    <div className='backdrop'>
      <form className='shopList' onSubmit={handleSubmit}>
        <i
          className='fa fa-times close-btn'
          aria-hidden='true'
          onClick={onClose}
        />
        <FormHeader shopList={shopList} errors={errors} shopItem={shopItem} />
        <FormInputs
          addItem={addItem}
          deleteItem={deleteItem}
          addToList={addToList}
          shoplist={shopList}
          shopItem={shopItem}
          listName={listName}
          addDescription={addDescription}
        />
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  addToShoplist: (item) => dispatch(addToShoplist(item))
});

export default connect(
  null,
  mapDispatch
)(AddShopList);
