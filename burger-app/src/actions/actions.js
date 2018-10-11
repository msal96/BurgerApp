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

export const putIngredientsToGS = (ingredients) => ({
  type: constants.PUT_INGS_TO_GLOBAL_STATE,
  payload: {
    ingredients
  }
})

export const putIdToGS = (id) => ({
  type: constants.PUT_ID_TO_GLOBAL_STATE,
  payload: {
    id
  }
})

export const putCartToGS = (cart) => ({
  type: constants.PUT_CART_TO_GLOBAL_STATE,
  payload: {
    cart
  }
})

export const initialIngredientsLoad = () => ({
  type: constants.INITIAL_ING_LOAD
})
export const addExtraIngredient = (ingredient) => ({
  type: constants.ADD_EXTRA_INGREDIENT,
  payload: {
    ingredient
  }
})