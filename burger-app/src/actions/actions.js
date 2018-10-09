import constants from '../constants/constants'

export const resetIngredients = () => ({
  type: constants.RESET_INGREDIENTS
})
export const addIngredient = (type, amount) => ({
  type: constants.ADD_INGREDIENT,
  payload: {
    type,
    amount
  }
})
export const updateCurrentPrice = (amount) => ({
  type: constants.UPDATE_CURRENT_PRICE,
  payload: {
    amount
  }
})
export const updateChosenIngredients = (ingredient, action) => ({
  type: constants.UPDATE_CHOSEN_INGREDIENTS,
  payload: {
    ingredient,
    action
  }
})
export const toggleModal = (show) => ({
  type: constants.TOGGLE_MODAL,
  payload: {
    show
  }
})
export const addToBasket = () => ({
  type: constants.ADD_TO_BASKET
})
export const addExtraIngredient = (type, price) => ({
  type: constants.ADD_EXTRA_INGREDIENT,
  payload: {
    type,
    price
  }
})
