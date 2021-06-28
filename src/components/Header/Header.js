import React from 'react';

const Header = ({onClickCartOpen}) => {
  return (
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-20" src="img/sneakersLogo.png" alt="logo" />
          <div>
            <h2 className="text-uppercase">React sneakers</h2>
              <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="d-flex">
            <li
              onClick={onClickCartOpen}
              className="mr-30 cu-p">
              <img src="/img/Cart.svg" alt="cart" />
              <span>1205руб</span>
            </li>
            <li>
              <img src="/img/User.svg" alt="userLogo" />
              </li>
          </ul>
      </header>
  )
}
export default Header;