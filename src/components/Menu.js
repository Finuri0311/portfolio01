import React from 'react';

const Menu = ({ showMenu, toggleMenu }) => {
  return (
    <div className={`menu-container ${showMenu}`}>
      <div className="overlay"></div>
      <ul>
        <li>
          <a href="#welcome-section" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
