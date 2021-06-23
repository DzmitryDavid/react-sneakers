import React from "react";

function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 >Все кроссовки</h1>
        <div className="sneakers">
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
