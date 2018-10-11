import axios from 'axios'

export const getIngredientsFromDB = () => axios.get('https://e7va3q02e4.execute-api.us-east-1.amazonaws.com/BurgersApi/products')

export const initializeCartInDB = () => axios.post('https://e7va3q02e4.execute-api.us-east-1.amazonaws.com/BurgersApi/products/cart')

export const addItemToCartInDB = (ingredients, burgerPrice, cartId) => {
  const url = '/cart/' + cartId
  axios({
    method: 'POST',
    url: url,
    data: {
      ingredients,
      burgerPrice
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

export const getCartContentFromDB = () => {
  axios({
    method: 'GET',
    url: '/cart/{cartId}',
  })
  .then(cart => console.log(cart))
  .catch(error => console.log(error))
}

export const sendOrderToDB = (order) => {
  axios({
    method: 'POST',
    url: '/cart/{cartId}/checkout',
    data: {
      order
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))
}