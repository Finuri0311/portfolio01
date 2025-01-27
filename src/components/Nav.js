import React from 'react';

const Nav = ({ toggleMenu, showMenu }) => {
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <p className="brand">Finuri</p>
        <button
          onClick={toggleMenu}
          className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Nav;
