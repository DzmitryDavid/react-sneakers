import Card from '../components/Card/Card';
import styles from '../components/Card/Card.module.scss';


const Home = ({searchValue, onSearchInput, setSearchValue, items, onAddToFavorite, onAddToCart}) => {
  return (
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
          .map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              imgUrl={card.imgUrl}
              id={card.id}
              onAddToFavorite={(obj) => onAddToFavorite(obj)}
              onAddToCart={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
  )
}
export default Home;