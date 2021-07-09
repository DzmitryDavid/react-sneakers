import React from 'react';
import AppContext from '../../pages/Context';


function Info({title, image,  description, }) {
  const { setCartOpened } = React.useContext(AppContext);

  
  return (
    <div className="empty-cart">
      <img
        className="empty-cart__icon"
        src={image}
        alt="Empty cart"
      />
      <h2>{title}</h2>
      <p className="empty-cart__title">
        {description}
      </p>
      <button 

        onClick={ () => setCartOpened(false)}
        className="greenBtn">
          Вернуться назад
        <img 
          className="arrow-icon"  
          src="img/Arrow-left.svg" alt="Arrow icon" />
      </button>
    </div>
  );
}

export default Info;