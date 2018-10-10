import axios from 'axios'

export const getIngredientsFromDB = () => {
  axios({
    method: 'GET',
    url: '/products'
  })
  .then(data => resolve(data))
  .catch(error => console.log(error))
}

export const initializeCartInDB = () => {
  axios({
    method: 'POST',
    url: '/cart',
    data: {}
  })
  .then(id => resolve(id))
  .catch(error => console.log(error))
}

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
  .then(data => resolve(data))
  .catch(error => console.log(error))
}

export const getCartContentFromDB = () => {
  axios({
    method: 'GET',
    url: '/cart/{cartId}',
  })
  .then(cart => resolve(cart))
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
  .then(data => resolve(data))
  .catch(error => console.log(error))
}