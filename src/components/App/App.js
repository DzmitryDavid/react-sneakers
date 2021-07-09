import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';
import AppContext from '../../pages/Context';
import Orders from '../../pages/Orders';
import './App.scss';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartRes = await axios.get(
        'https://60d51f31943aa600177687d3.mockapi.io/cart'
        );
        const favoritesRes = await axios.get(
          'https://60d51f31943aa600177687d3.mockapi.io/favorites'
          );
          const itemsRes = await axios.get(
        'https://60d51f31943aa600177687d3.mockapi.io/items'
      );
      
      setIsLoading(false);
      
      setCartItems(cartRes.data);
      setFavorites(favoritesRes.data);
      setItems(itemsRes.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60d51f31943aa600177687d3.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post(`https://60d51f31943aa600177687d3.mockapi.io/cart`, obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
  };

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://60d51f31943aa600177687d3.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          'https://60d51f31943aa600177687d3.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://60d51f31943aa600177687d3.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider 
    value={{ items,
      cartItems, 
      favorites, 
      isItemAdded, 
      setCartOpened, 
      setCartItems,
      onAddToFavorite, 
      onAddToCart }}>

      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            onRemove={onRemoveItem}
            items={cartItems}
            onClickCartClose={() => setCartOpened(false)}
          />
        )}

        <Header onClickCartOpen={() => setCartOpened(true)} />
        <Route path="/" exact>
          <Home
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearchInput={onSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            items={items}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites onAddToFavorite={onAddToFavorite} />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
};

export default App;
