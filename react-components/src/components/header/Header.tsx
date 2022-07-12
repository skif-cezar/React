import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/404">404</Link>
      </header>
    </>
  );
};

export { Header };
