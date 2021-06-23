import React from "react";

function App() {
  return (
    <div className="wrapper clear">
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
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-20" src="img/sneakersLogo.png" alt="logo" />
          <div>
            <h2 className="text-uppercase">React sneakers</h2>
              <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="/img/Cart.svg" alt="cart" />
              <span>1205руб</span>
            </li>
            <li>
              <img src="/img/User.svg" alt="userLogo" />
              </li>
          </ul>
      </header>
      <div className="content">
        <div className="d-flex justify-between align-center mb-40px">

        <h1 >Все кроссовки</h1>
        <div className="search-block">
          <img width={20} height={20} src="/img/Search.svg" alt="search" />
            <input
              placeholder="Search ..."
              className="search-input"
              type="text" />

        </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
            <img src="/img/HeartUnliked.svg" alt="heart" /> 
            </div>
            <img height={112} width={132} src="/img/sneakers1.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="d-flex  flex-column">
            <img height={112} width={132} src="/img/sneakers1.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
