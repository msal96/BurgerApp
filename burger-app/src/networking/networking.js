import axios from 'axios'

export const getIngredientsFromDB = () => axios.get('https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/products')

export const initializeCartInDB = () => axios.post('https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart')

export const addItemToCartInDB = (obj, cartId) => {
  const url = `https://ail52vyl9g.execute-api.us-east-1.amazonaws.com/BurgersApi/cart/${cartId}`
  return axios.post(url, { ...obj }
  )
}

// export const getCartContentFromDB = () => {
//   axios({
//     method: 'GET',
//     url: '/cart/{cartId}',
//   }).then(cart => console.log(cart))
//     .catch(error => console.log(error))
// }

// export const sendOrderToDB = (order) => {
//   axios({
//     method: 'POST',
//     url: '/cart/{cartId}/checkout',
//     data: {
//       order
//     }
//   }).then(data => console.log(data))
//     .catch(error => console.log(error))
// }
