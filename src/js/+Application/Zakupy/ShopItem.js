import React from "react";

const ShopItem = ({ shop }) => {
  return (
    <tr>
      <td>{shop.description}</td>
      <td>
        <ul>
          {shop.shoplist.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default ShopItem;
