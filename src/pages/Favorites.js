import Card from '../components/Card/Card';

const Favorites = ({items, onAddToFavorite}) => {
  return (
    <div className="content">
        <div className="content-heading">
          <h1>Мои закладки</h1>
        </div>
        <div className="product-wrapper">
          {items.map((card, index) => {
            return( 
                <Card

                  favorited={true}
                  key={index}
                  onAddToFavorite={onAddToFavorite}
                  id={card.id}
                  {...card}
                  
              />
            )
          })}
        </div>
      </div>
  )
}
export default Favorites;