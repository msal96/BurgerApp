import Constants from '../constants/constants'

const initialState = {
  totalPrice: 0,
  currentPrice: 0,
  count: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      return {
        ...state,
        Count: state.count + action.payload
      }
    default: return state
  }
}
export default reducer
