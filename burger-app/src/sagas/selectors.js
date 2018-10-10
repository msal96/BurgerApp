export const getBasketAndTotalPrice = state => ({
  basket: state.basket,
  total: state.totalPrice
})

export const getCartIdSelector = state => ({
  cartId: state.cartId,
})
