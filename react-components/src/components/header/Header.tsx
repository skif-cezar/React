import { Menu } from 'components/menu/Menu';
import { SearchBar } from 'components/search-bar/SearchBar';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Menu />
          <SearchBar placeholder="Enter a Card Name..." />
        </div>
      </header>
    </>
  );
};

export { Header };
