import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ onClickCartOpen }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img 
            className="header__logo-img" 
            src="img/sneakersLogo.png" 
            alt="logo" />
        
        <div>
          <h2 className="header__logo-title">React sneakers</h2>
          <p className="header__logo-subtitle">Магазин лучших кроссовок</p>
        </div>
        </Link>
      </div>
      <ul className="header__status">
        <li 
          onClick={onClickCartOpen} 
          className="header__status-item">
          <img src="/img/Cart.svg" alt="cart" />
          <span>1205руб</span>
        </li>
        <Link to="/favorites">
          <li 
            className="header__status-item">
            <img src="/img/Like.svg" alt="like Logo" />
          </li>
        </Link>
        
        <li 
          className="header__status-item">
          <img src="/img/User.svg" alt="userLogo" />
        </li>
      </ul>
    </header>
  );
};
export default Header;
