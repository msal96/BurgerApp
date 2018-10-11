export const getBasketAndIdSelector = state => ({
  basket: state.basket,
  cartId: state.cartId
})
export const getCartIdSelector = state => state.cartId
export const getCartSelector = state => ({ cartId: state.cartId,
  cart: state.cart
})
