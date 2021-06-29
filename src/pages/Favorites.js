import React from 'react'
import  AppContext  from './Context';
import Card from '../components/Card/Card';


const Favorites = ({ onAddToFavorite}) => {
  const state = React.useContext(AppContext);
  console.log(state);
  return (
    <div className="content">
        <div className="content-heading">
          <h1>Мои закладки</h1>
        </div>
        <div className="product-wrapper">
          {state.favorites.map((card, index) => {
            return( 
                <Card
                  key={index}
                  onAddToFavorite={onAddToFavorite}
                  id={card.id}
                  {...card}
                  favorited={true}
                  
              />
            )
          })}
        </div>
      </div>
  )
}
export default Favorites;