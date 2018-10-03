import constants from '../constants/constants'

const initialState = {
  ingredients: [
    { type: 'salad', amount: 0, price: 1 },
    { type: 'meat', amount: 0, price: 4 },
    { type: 'cheese', amount: 0, price: 2 },
    { type: 'bacon', amount: 0, price: 3 }
  ],
  chosenIngredients: [],
  currentPrice: 0,
  totalPrice: 0
}

const modifyItemAmount = (items, type, value) => {
  return items.map(item =>
    item.type === type
      ? { ...item, amount: item.amount + value }
      : item
  )
}
const updateChosenIngredients = (arr, ingredient, action) => {
  let result = [...arr]
  action === 'add' ? result.push(ingredient)
    : result.pop(ingredient)
  return result
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_INGREDIENT: {
      const payload = action.payload
      return {
        ...state,
        ingredients: modifyItemAmount(state.ingredients, payload.type, payload.amount)
      }
    }
    case constants.UPDATE_CURRENT_PRICE:
      const { amount } = action.payload
      const { currentPrice } = state
      return {
        ...state,
        currentPrice: currentPrice + amount
      }
    case constants.UPDATE_CHOSEN_INGREDIENTS:
      return {
        ...state,
        chosenIngredients: updateChosenIngredients(state.chosenIngredients, action.payload.ingredient, action.payload.action)
      }
    default: return state
  }
}
export default reducer
