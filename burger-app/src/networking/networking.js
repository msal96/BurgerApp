import axios from 'axios'

export const getIngredientsFromDB = () => axios.get('https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/products')

export const initializeCartInDB = () => axios.post('https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart')

export const addItemToCartInDB = (obj, cartId) => {
  const url = `https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart/${cartId}`
  return axios.post(url, { ...obj }
  )
}

export const getCartContentFromDB = (cartId) => {
  return axios.get(`https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart/${cartId}`)
}
export const sendOrderToDB = (cartId, order) => {
  const url = `https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart/${cartId}/checkout`
  return axios.post(url, {...order})
}
