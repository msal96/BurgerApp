import constants from '../constants/constants'
import {
  formatIngredients,
  modifyItemAmount,
  updateChosenIngredients,
  resetAmount,
  formatCart
} from './helpers'

const initialState = {
  ingredients: {
    normal: [],
    extra: []
  },
  basket: [],
  cart: {
    totalPrice: 0,
    burgers: []
  },
  chosenIngredients: [],
  currentPrice: 0,
  totalPrice: 0,
  showModal: false,
  cartId: '',
  successOrderMessage: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_INGREDIENT: {
      const { type, amount } = action.payload
      return {
        ...state,
        ingredients: {
          normal: modifyItemAmount(state.ingredients.normal, type, amount),
          extra: [...state.ingredients.extra]
        }
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
        chosenIngredients: updateChosenIngredients(
          state.chosenIngredients,
          action.payload.ingredient,
          action.payload.action
        )
      }
    case constants.TOGGLE_MODAL:
      const { show } = action.payload
      return {
        ...state,
        showModal: show
      }
    case constants.ADD_TO_BASKET:
      let { ingredients } = state
      let burger = {
        ingredients: [...ingredients.normal],
        price: state.currentPrice
      }
      return {
        ...state,
        basket: burger
      }
    case constants.RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          normal: resetAmount(state.ingredients.normal)
        },
        chosenIngredients: [],
        currentPrice: 0
      }
    case constants.PUT_INGS_TO_GLOBAL_STATE:
      const { normalIngrediends, extraIngredients } = action.payload.ingredients
      return {
        ...state,
        ingredients: formatIngredients(normalIngrediends, extraIngredients)
      }
    case constants.PUT_ID_TO_GLOBAL_STATE:
      return {
        ...state,
        cartId: action.payload.id
      }
    case constants.PUT_CART_TO_GLOBAL_STATE:
      return {
        ...state,
        cart: formatCart(action.payload.cart)
      }
    case constants.ADD_EXTRA_INGREDIENT:
      const {ingredient} = action.payload
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          normal: [...state.ingredients.normal, ingredient]
        }
      }
    case constants.PUT_TOTAL_PRICE_TO_GS:
      return {
        ...state,
        totalPrice: action.payload.total
      }
    case constants.SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        successOrderMessage: action.payload.value
      }
    default:
      return state
  }
}
export default reducer
