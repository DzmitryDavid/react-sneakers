import React from 'react';
import './Card.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../pages/Context';

const Card = ({
  id,
  title,
  imgUrl,
  price,
  onAddToCart,
  onAddToFavorite,
  favorited = false,
  loading = false 
}) => {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onFavoriteChange = () => {
    onAddToFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };
  
  const onPlusClick = () => {
    onAddToCart({ id, title, imgUrl, price });
  };

  return (
    <div className="card">
      {
        loading ? <ContentLoader 
        speed={2}
        width={155}
        height={260}
        viewBox="0 0 155 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="11" ry="11" width="150" height="155" /> 
        <rect x="0" y="167" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
        <rect x="0" y="234" rx="5" ry="5" width="80" height="24" /> 
        <rect x="124" y="230" rx="5" ry="5" width="32" height="32" />
      </ContentLoader> : 
        <>
        { onAddToFavorite && <div className="favorite">
            <img
              className="favorite__icon"
              onClick={onFavoriteChange}
              src={isFavorite ? '/img/HeartLiked.svg' : '/img/HeartUnliked.svg'}
              alt="heart"
            />
          </div>}
          <img height={135} width="100%" src={imgUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price}</b>
            </div>
        {onAddToCart && <img
          className="plus"
          src={isItemAdded(id) ? 'img/ButtonChecked.svg' : 'img/Plus.svg'}
          onClick={onPlusClick}
          alt="plus"
        />}
      </div>
        </>
      }
      
    </div>
  );
};
export default Card;
