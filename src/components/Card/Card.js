import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
            <div className="favorite">
            <img src="/img/HeartUnliked.svg" alt="heart" /> 
            </div>
            <img height={112} width={132} src="/img/sneakers1.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/Plus.svg" alt="plus" />
              </button>
            </div>
          </div>
  )
}
export default Card;