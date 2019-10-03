import React from "react";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Navigation = () => {
  return (
    <nav className='app-nav'>
      <ul>
        <li>
          <NavLink exact to='/app/pulpit'>
            Pulpit
          </NavLink>
          <i className='fa fa-chevron-right' aria-hidden='true'></i>
        </li>
        <li>
          <NavLink to='/app/przepisy'>Przepisy</NavLink>
          <i className='fa fa-chevron-right' aria-hidden='true'></i>
        </li>
        <li>
          <NavLink to='/app/plan'>Plany</NavLink>
          <i className='fa fa-chevron-right' aria-hidden='true'></i>
        </li>
        <li>
          <NavLink to='/app/zakupy'>Lista Zakupów</NavLink>
          <i className='fa fa-chevron-right' aria-hidden='true'></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
