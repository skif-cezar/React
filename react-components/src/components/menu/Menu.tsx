import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <>
      <nav className="header__navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/404">404</Link>
      </nav>
    </>
  );
};

export { Menu };
