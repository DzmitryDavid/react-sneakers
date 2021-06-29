import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';
import './App.scss';

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://60d51f31943aa600177687d3.mockapi.io/items')
        .then((res) => setItems(res.data));
    };
    getData();

    const getCartData = async () => {
      await axios
        .get('https://60d51f31943aa600177687d3.mockapi.io/cart')
        .then((res) => setCartItems(res.data));
    };
    getCartData();

    const getFavoriteData = async () => {
      await axios
        .get('https://60d51f31943aa600177687d3.mockapi.io/favorites')
        .then((res) => setFavorites(res.data));
    };
    getFavoriteData();
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60d51f31943aa600177687d3.mockapi.io/cart', obj);
    setCartItems((prevState) => [...prevState, obj]);
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((item) => item.id === obj.id)) {
      axios.delete(
        `https://60d51f31943aa600177687d3.mockapi.io/favorites/${obj.id}`
      );
      // setFavorites(prevState => prevState.filter(item => item.id !== obj.id))
    } else {
      const { data } = await axios.post(
        'https://60d51f31943aa600177687d3.mockapi.io/favorites',
        obj
      );
      setFavorites((prevState) => [...prevState, data]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://60d51f31943aa600177687d3.mockapi.io/cart/${id}`);
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
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
          items={items}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites onAddToFavorite={onAddToFavorite} items={favorites} />
      </Route>
    </div>
  );
};

export default App;
