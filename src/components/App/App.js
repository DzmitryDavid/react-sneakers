import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import Card from '../Card/Card';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';
import styles from '../Card/Card.module.scss';
import './App.scss';

const  App = () =>  {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([])



  React.useEffect(() => {
    const getData = async() => {
      await axios.get('https://60d51f31943aa600177687d3.mockapi.io/items')
      .then(res => setItems(res.data))
    }
    getData()

    const getCartData = async() => {
      await axios.get('https://60d51f31943aa600177687d3.mockapi.io/cart')
      .then(res => setCartItems(res.data))
    }
    getCartData()
  },[])

    const onAddToCart = (obj) => {
      axios.post('https://60d51f31943aa600177687d3.mockapi.io/cart', obj)
      .then(res => setCartItems(prevState => [...prevState , obj]))
    }
    
    const onRemoveItem = (id) => {
      axios.delete(`https://60d51f31943aa600177687d3.mockapi.io/cart/${id}`)
      setCartItems(prevState => prevState.filter(item => item.id !== id))
    }

    const onSearchInput = (e) => {
      setSearchValue(e.target.value)
    }

    const onAddToFavorite = (obj) => {
      axios.post('https://60d51f31943aa600177687d3.mockapi.io/favorites', obj)
      .then(res => setFavorites(prevState => [...prevState , obj]))
    }

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer
        onRemove={onRemoveItem}
        items={cartItems} 
        onClickCartClose={() => setCartOpened(false)} /> }
      <Header onClickCartOpen={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-heading">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
          
          <div className="search-block">
            <img src="/img/Search.svg" alt="search" />

            <input
              onChange={onSearchInput}
              placeholder="Поиск ..."
              className="search-input"
              type="text"
              value={searchValue}
            />
                {searchValue ?  <img
                  className={styles.plus}  
                  src={'img/btn-remove.svg'} 
                  onClick={() => setSearchValue('')} 
                  alt="plus" /> : null}
          </div>
        </div>
        <div className="product-wrapper">
          {items
          .filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()))
          .map((card,index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              imgUrl={card.imgUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onAddToCart={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
