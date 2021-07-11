import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import './Header.scss';
import sneakersLogo from  '../../assets/img/sneakersLogo.png';

const Header = ({ onClickCartOpen }) => {
  const {totalPrice} = useCart();

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img 
            className="header__logo-img" 
            src={sneakersLogo} 
            alt="Logo" />
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
          <span>{totalPrice} руб</span>
        </li>
        <Link to="/favorites">
          <li 
            className="header__status-item">
            <img src="/img/Like.svg" alt="like Logo" />
          </li>
        </Link>
        <Link to='/orders'>
          <li 
            className="header__status-item">
            <img src="/img/User.svg" alt="userLogo" />
          </li>
        </Link>
      </ul>
    </header>
  );
};
export default Header;
