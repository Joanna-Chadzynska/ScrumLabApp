import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Menu = () => {
  return (
    <nav className='header__nav'>
      <ul>
        <li>
          <Link to='/#goToApp'>Zaplanuj posiłki!</Link>
        </li>
        <li>
          <Link to='/#aboutApp'>Dlaczego warto?</Link>
        </li>
        <li>
          <Link to='/#aboutMe'>O mnie</Link>
        </li>
        <li>
          <Link to='/#contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
