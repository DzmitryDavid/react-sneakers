import React from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    const  getItems = async () => {
      await axios.get('https://60d51f31943aa600177687d3.mockapi.io/items')
      .then(res => setItems(res.data))
    }
    getItems()
  }, [])

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClickCartClose={() => setCartOpened(false)} /> }
      <Header onClickCartOpen={() => setCartOpened(true)} />
      <div className="content">
        <div className="d-flex justify-between align-center mb-40px">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/Search.svg" alt="search" />
            <input
              placeholder="Search ..."
              className="search-input"
              type="text"
            />
          </div>
        </div>
        <div className="sneakers">
          {items.map((card) => (
            <Card
              key={Math.random()}
              onFavorite={() => console.log('add to favorite')}
              onAddToCart={() => console.log('add to cart')}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
