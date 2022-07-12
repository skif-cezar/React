import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export { Layout };
