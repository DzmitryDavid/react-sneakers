import React from 'react';

const Drawer = () => {
  return (
    <div className="overlay">
      <div className="drawer">
      <h2>Корзина
      <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" />

      </h2>
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-img" style= {{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
          <div className="mr-10">
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999</b>
          </div>
          <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
      </div>
      
      <div className="cart-total">
        <ul className="cart-summary" >
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
        <button className="greenBtn">Оформить заказ
          <img  src="/img/Arrow.svg" alt="ArrowRight" />
        </button>
      </div>
    </div>
    </div>
    
  )
}
export default Drawer;
