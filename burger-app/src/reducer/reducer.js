import constants from '../constants/constants'
import { 
  formatIngredients, 
  filterByAmount, 
  modifyItemAmount, 
  updateChosenIngredients
} from './helpers'

const initialState = {
  // ingredients: [
  //   { type: 'salad', amount: 0, price: 1 },
  //   { type: 'meat', amount: 0, price: 4 },
  //   { type: 'cheese', amount: 0, price: 2 },
  //   { type: 'bacon', amount: 0, price: 3 }
  // ],

  ingredients: {
    normal: [],
    extra: []
  },
  basket: [],
  chosenIngredients: [],
  currentPrice: 0,
  totalPrice: 0,
  showModal: false,
  cartId: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_INGREDIENT: {
      const {type, amount} = action.payload
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
        chosenIngredients: updateChosenIngredients(state.chosenIngredients, action.payload.ingredient, action.payload.action)
      }
    case constants.TOGGLE_MODAL:
      const { show } = action.payload
      return {
        ...state,
        showModal: show
      }
    case constants.ADD_TO_BASKET:
      let { ingredients, basket, totalPrice } = state
      let burger = {
        ingredients: filterByAmount(ingredients),
        price: state.currentPrice
      }
      totalPrice += burger.price
      basket.push(burger)
      return {
        ...state,
        basket,
        totalPrice
      }
    case constants.RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          { type: 'salad', amount: 0, price: 1 },
          { type: 'meat', amount: 0, price: 4 },
          { type: 'cheese', amount: 0, price: 2 },
          { type: 'bacon', amount: 0, price: 3 }
        ],
        chosenIngredients: [],
        currentPrice: 0
      }
      case constants.PUT_INGS_TO_GLOBAL_STATE:
        const { normalIngrediends, extraIngredients } = action.payload.ingredients
          console.log('ssss:', normalIngrediends, extraIngredients)
          console.log('fct:', formatIngredients(normalIngrediends, extraIngredients))
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
          basket: [...action.payload.cart]
        }
    default: return state
  }
}
export default reducer
