export const addIngredient = (type, amount) => ({
  type: 'ADD_INGREDIENT',
  payload: {
    type,
    amount
  }
})