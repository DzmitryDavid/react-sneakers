import React from 'react';
import styles from './Card.module.scss';

const Card = ({id, title, imgUrl, price, onAddToCart, onAddToFavorite, favorited = false }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavoriteIcon, setIsFavoriteIcon] = React.useState(favorited);

  const onFavoriteIconChange = () => {
    console.log(id);
    onAddToFavorite({id, title, imgUrl, price})
    setIsFavoriteIcon(!isFavoriteIcon)
  }
  const onPlusClick = () => {
    onAddToCart({title, imgUrl, price})
    setIsAdded(!isAdded) 
  }

  return (
    <div className={styles.card}>
            <div className={styles.favorite}>
            <img 
              className={styles.favoriteIcon}
              onClick={onFavoriteIconChange}
              src={isFavoriteIcon ? "/img/HeartLiked.svg" : "/img/HeartUnliked.svg"} 
              alt="heart" /> 
            </div>
            <img height={112} width={132} src={imgUrl} alt="sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price}</b>
              </div>
                <img
                  className={styles.plus}  
                  src={isAdded ? 'img/ButtonChecked.svg' : 'img/Plus.svg'} 
                  onClick={onPlusClick} 
                  alt="plus" />
            </div>
          </div>
  )
}
export default Card;