import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import constants from '../constants/constants'
import { getBasketAndIdSelector, getCartIdSelector, getCartSelector } from './selectors'
import {
  getIngredientsFromDB,
  initializeCartInDB,
  addItemToCartInDB,
  getCartContentFromDB,
  sendOrderToDB
} from '../networking/networking'

import {
  putIngredientsToGS,
  putIdToGS,
  putTotalPriceToGs,
  putCartToGS
} from '../actions/actions'
import { formatBurger, filterByAmount } from '../reducer/helpers'
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
  console.log('fctFormat:', formatBurger(basketAndId.basket))
  let burger = formatBurger(basketAndId.basket)
  burger = filterByAmount(burger)
  console.log('burger saga:', burger)
  const response = yield call(addItemToCartInDB, burger, cartId)
  console.log('respooonse:', response)
  yield put(putTotalPriceToGs(response.data.TotalPrice))
}

function * getCartContent () {
  const cartId = yield select(getCartIdSelector)
  const response = yield call(getCartContentFromDB, cartId)
  console.log('cart resp', response)
  yield put(putCartToGS(response.data))
  // yield put(putCartToGS(cart))
}

function * placeOrder () {
  console.log('plc')
  const order = yield select(getCartSelector)
  console.log('order', order)
  const response = yield call(sendOrderToDB, order.cartId, order.cart)
  console.log('placeOrder Saga:', response)
}

export default function * mainSaga () {
  yield all([
    yield takeLatest(constants.INITIAL_ING_LOAD, getIngredientsAndCartId),
    yield takeLatest(constants.SEND_BURGER_TO_DB, addBurgerToCart),
    yield takeLatest(constants.START_CART_LOAD, getCartContent),
    yield takeLatest(constants.START_SENDING_ORDER, placeOrder)
  ])
}
