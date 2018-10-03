import constants from '../constants/constants'

const initialState = {
  ingredients: [
    { type: 'salad', amount: 0 },
    { type: 'meat', amount: 0 },
    { type: 'cheese', amount: 0 },
    { type: 'bacon', amount: 0 }
  ]
}

const modifyItemAmount = (items, type, value) => {
  return items.map(item =>
    item.type === type
      ? { ...item, amount: item.amount + value }
      : item
  )
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
    default: return state
  }
}
export default reducer
