export const addIngredient = (type, amount) => ({
  type: 'ADD_INGREDIENT',
  payload: {
    type,
    amount
  }
})
export const updateCurrentPrice = (amount) => ({
  type: 'UPDATE_CURRENT_PRICE',
  payload: {
    amount
  }
})
