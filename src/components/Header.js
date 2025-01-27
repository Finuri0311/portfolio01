import React from 'react';

const Header = () => {
  return (
    <header id="welcome-section">
      <div className="forest"></div>
      <div className="silhouette"></div>
      <div className="moon"></div>
      <div className="container">
        <h1>
          <span className="line">Hi, I'm</span>
          <span className="line">Finuri</span>
          <span className="line">
            <span className="color">Future Data Scientist</span>
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">My Projects</a>
          <a href="#contact" className="cta">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
