import React from 'react';
import './Drawer.scss';

const Drawer = ({ onClickCartClose, items = [], onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClickCartClose}
            className="remove-btn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="cart-items">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="cart-item">
                  <div
                    className="cart-img"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  ></div>
                  <div className="mr-10">
                    <p>{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(item.id)}
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cart-total">
              <ul className="cart-summary">
                <li className="cart-summary__item">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 648</b>
                </li>
                <li className="cart-summary__item">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074</b>
                </li>
              </ul>
              <button className="greenBtn">
                Оформить заказ
                <img src="/img/Arrow.svg" alt="ArrowRight" />
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <img
              className="empty-cart__icon"
              src="img/emptyCart.png"
              alt="Empty cart"
            />
            <h2>Корзина пустая</h2>
            <p className="empty-cart__title">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button 
              onClick={onClickCartClose}
              className="greenBtn">
              <img src="img/Arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Drawer;
