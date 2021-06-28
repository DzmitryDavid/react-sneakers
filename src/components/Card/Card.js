import React from 'react';
import styles from './Card.module.scss';

const Card = ({card, onAddToCart, onFavorite}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onPlusClick = () => {
    setIsAdded(!isAdded)
    console.log(isAdded);
    
  }
  return (
    <div className={styles.card}>
            <div className={styles.favorite}>
            <img 
              className={styles.favoriteIcon}
              onClick={onFavorite}
              src="/img/HeartUnliked.svg" 
              alt="heart" /> 
            </div>
            <img height={112} width={132} src={card.imgUrl} alt="sneakers"/>
            <h5>{card.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{card.price}</b>
              </div>
                <img
                  className={styles.plus}  
                  onClick={onPlusClick} 
                  src={isAdded ? 'img/ButtonChecked.svg' : 'img/Plus.svg'} 
                  alt="plus" />
            </div>
          </div>
  )
}
export default Card;