import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import constants from '../constants/constants'
import { getBasketAndIdSelector, getCartIdSelector, getCartSelector } from './selectors'
import { formatBurger, filterByAmount } from '../reducer/helpers'
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
  putCartToGS,
  showSuccessMessage
} from '../actions/actions'

function * getIngredientsAndCartId () {
  const response = yield call(getIngredientsFromDB)
  if (response.status === 200) {
    yield put(putIngredientsToGS(response.data))
  }
}

function * createCartAndAddBurgerToCart () {
  const stateId = yield select(getCartIdSelector)
  console.log('[createCartAndAddBurgerToCart] STATE ID: ]', stateId)
  if (!stateId) {
    console.log('[createCartAndAddBurgerToCart INSIDE IF:]')
    const responseInitId = yield call(initializeCartInDB)
    console.log('[createCartAndAddBurgerToCart] responseInitId: ', responseInitId)
    
    if (responseInitId.status === 200) {
      const cartId = '' + responseInitId.data.cartID
      yield put(putIdToGS(cartId))
    }
  }
  const basketAndId = yield select(getBasketAndIdSelector)
  const cartId = basketAndId.cartId
  let burger = formatBurger(basketAndId.basket)
  burger = filterByAmount(burger)
  console.log('[createCartAndAddBurgerToCart] BURGER:', burger)
  const response = yield call(addItemToCartInDB, burger, cartId)
  //yield put(putTotalPriceToGs(response.data.TotalPrice))
}

function * getCartContent () {
  const cartId = yield select(getCartIdSelector)
  console.log('[GET CART CONTENT CART ID:]', cartId)
  const response = yield call(getCartContentFromDB, cartId)
  console.log('[GET CART CONTENT RESPONSE:]', response)
  if (response.status === 200) {
    yield put(putCartToGS(response.data))
  }
}

function * placeOrder () {
  const order = yield select(getCartSelector)
  const response = yield call(sendOrderToDB, order.cartId, order.cart)
  console.log('[PLACE ORDER SAGA: Response]', response)
  if (response.status === 200) {
    yield put(showSuccessMessage(true))
  }
}

export default function * mainSaga () {
  yield all([
    yield takeLatest(constants.INITIAL_ING_LOAD, getIngredientsAndCartId),
    yield takeLatest(constants.SEND_BURGER_TO_DB, createCartAndAddBurgerToCart),
    yield takeLatest(constants.START_CART_LOAD, getCartContent),
    yield takeLatest(constants.START_SENDING_ORDER, placeOrder)
  ])
}
