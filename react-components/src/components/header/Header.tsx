import { Menu } from 'components/menu/Menu';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Menu />
        </div>
      </header>
    </>
  );
};

export { Header };
