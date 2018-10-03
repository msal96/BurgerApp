// export const increment = (number) => ({
//   type: 'INCREMENT',
//   payload: number
// })

export const addIngredient = (type, amount) => ({
  type: 'ADD_INGREDIENT',
  payload: {
    type,
    amount
  }
})