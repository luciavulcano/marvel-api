import React from 'react';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">

        <a href="">
          <img src="https://i.imgur.com/GkxHb9d.png" alt="Logo da Marvel" className="navbar__img" />
        </a>

        <ul className="navbar__ul">
          <li className="navbar__link">
            <a>Personagens</a>
          </li>
          <li className="navbar__link">
            <a>Quadrinhos</a>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default NavBar;