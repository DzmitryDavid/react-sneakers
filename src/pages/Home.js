import Card from '../components/Card/Card';
import '../components/Card/Card.scss';


const Home = ({
  searchValue,
  onSearchInput,
  setSearchValue,
  items,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  isLoading
}) => {
  
  const renderItems = () => {

    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((card, index) => (
        <Card
          key={index}
          loading={isLoading}
          onAddToFavorite={(obj) => onAddToFavorite(obj)}
          onAddToCart={(obj) => onAddToCart(obj)}
          {...card}
        />
      ))
  }
  return (
    <div className="content">
      <div className="content-heading">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}
        </h1>

        <div className="search-block">
          <img src="/img/Search.svg" alt="search" />

          <input
            onChange={onSearchInput}
            placeholder="Поиск ..."
            className="search-input"
            type="text"
            value={searchValue}
          />
          {searchValue ? (
            <img
              className="plus"
              src={'img/btn-remove.svg'}
              onClick={() => setSearchValue('')}
              alt="plus"
            />
          ) : null}
        </div>
      </div>
      <div className="product-wrapper">
        {renderItems()}
      </div>
    </div>
  );
};

export default Home;
