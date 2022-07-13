import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <>
      <nav className="header__navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          About Us
        </NavLink>
        <NavLink to="/404" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          404
        </NavLink>
      </nav>
    </>
  );
};

export { Menu };
