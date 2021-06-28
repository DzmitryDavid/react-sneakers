import React from 'react';

const Drawer = ({onClickCartClose, items = []}) => {
  return (
    <div className="overlay">
      <div className="drawer">
      <h2>Корзина
      <img
        onClick={onClickCartClose}
        className="remove-btn" src="/img/btn-remove.svg" alt="Remove" />

      </h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item">
          <div className="cart-img" style= {{backgroundImage: `url(${item.imgUrl})`}}></div>
          <div className="mr-10">
            <p>{item.title}</p>
            <b>{item.price}</b>
          </div>
          <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
        ))}
        
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
