import React from 'react'
import axios from 'axios';
import Card from '../components/Card/Card';
import AppContext from './Context';

const Orders = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext)
  React.useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          'https://60d51f31943aa600177687d3.mockapi.io/orders'
          );
          setOrders(data.reduce((prev, obj) => [...prev, ...obj.items],[]))
          setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error)
      }
    })()
  }, [])
  return (
    <div className="content">
        <div className="content-heading">
          <h1>Мои заказы</h1>
        </div>
        <div className="product-wrapper">
          {(isLoading ? [...Array(8)] : orders).map((card, index) => {
            return( 
              <Card
                key={index}
                loading={isLoading}
              {...card}
              />
            )
          })}
        </div>
      </div>
  )
}
export default Orders;