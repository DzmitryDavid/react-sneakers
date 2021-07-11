import React from 'react';
import axios from 'axios';
import Info from '../Info/Info';
import useCart from '../../hooks/useCart';
import './Drawer.scss';

import btnRemoveImg from '../../assets/img/btn-remove.svg';
import btnArrowImg from '../../assets/img/Arrow.svg';
import orderImg from '../../assets/img/order.png';
import emptyCartImg from '../../assets/img/emptyCart.png';

const delay = () => new Promise((res) => setTimeout(res, 1000));

const Drawer = ({ onClickCartClose, items = [], onRemove, opened }) => {
  const { totalPrice, cartItems, setCartItems, tax } = useCart();

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://60d51f31943aa600177687d3.mockapi.io/orders`,
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://60d51f31943aa600177687d3.mockapi.io/cart/${item.id}`
        );
        await delay();
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={`overlay ${opened ? 'overlay-visible' : ''}`}>
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClickCartClose}
            className="remove-btn"
            src={btnRemoveImg}
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
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
                    src={btnRemoveImg}
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
                  <b>{totalPrice}</b>
                </li>
                <li className="cart-summary__item">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax}</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenBtn"
              >
                Оформить заказ
                <img
                  className="arrow-icon"
                  src={btnArrowImg}
                  alt="ArrowRight"
                />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? {orderImg} : {emptyCartImg}}
          />
        )}
      </div>
    </div>
  );
};
export default Drawer;
