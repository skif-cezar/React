import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/404">404</Link>
      </header>
      <Outlet />
      <footer>2022</footer>
    </>
  );
};

export { Layout };
