import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import constants from '../constants/constants'
import { getBasketAndIdSelector, getCartIdSelector } from './selectors'
import {
  getIngredientsFromDB,
  initializeCartInDB,
  addItemToCartInDB
  // getCartContentFromDB,
  // sendOrderToDB
} from '../networking/networking'

import {
  putIngredientsToGS,
  putIdToGS,
  putTotalPriceToGs
  // putCartToGS
} from '../actions/actions'
import { formatBurger } from '../reducer/helpers'
function * getIngredientsAndCartId () {
  const response = yield call(getIngredientsFromDB)
  console.log('[GET INGREDIENTS SAGA]', response)
  if (response.status === 200) {
    yield put(putIngredientsToGS(response.data))
  }
  const stateId = yield select(getCartIdSelector)
  if (!stateId) {
    const responseInitId = yield call(initializeCartInDB)
    if (responseInitId.status === 200) {
      const cartId = '' + responseInitId.data.cartID
      yield put(putIdToGS(cartId))
    }
  }
}
function * addBurgerToCart () {
  const basketAndId = yield select(getBasketAndIdSelector)
  const cartId = basketAndId.cartId
  console.log('iddd:', cartId)
  const burger = formatBurger(basketAndId.basket)
  console.log('burger saga:', burger)
  // const {ingredients, burgerPrice} = actions.payload
  // const cartId = yield select(getCartIdSelector)
  // const response = yield call(addItemToCartInDB, ingredients, burgerPrice, cartId)
  // yield call(addItemToCartInDB, burger, cartId)
  const response = yield call(addItemToCartInDB, burger, cartId)
  console.log('respooonse:', response)
  yield put(putTotalPriceToGs(response.data.TotalPrice))
}

// function * getCartContent () {
//   const cart = yield call(getCartContentFromDB)
//   yield put(putCartToGS(cart))
// }

// function * placeOrder () {
//   yield call(sendOrderToDB, order)
// }

export default function * mainSaga () {
  yield all([
    yield takeLatest(constants.INITIAL_ING_LOAD, getIngredientsAndCartId),
    yield takeLatest(constants.SEND_BURGER_TO_DB, addBurgerToCart)
    // yield takeLatest(constants.PUT_ID_TO_GLOBAL_STATE, getCartId),
    // // yield takeLatest(constants.CONFIRM_ORDER, getCartContent),
    // yield takeLatest(constants.CONFIRM_ORDER, placeOrder)
  ])
}
