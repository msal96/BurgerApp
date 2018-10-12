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
  if (!stateId) {
    const responseInitId = yield call(initializeCartInDB)
    
    if (responseInitId.status === 200) {
      const cartId = '' + responseInitId.data.cartID
      yield put(putIdToGS(cartId))
    }
  }
  const basketAndId = yield select(getBasketAndIdSelector)
  const cartId = basketAndId.cartId
  let burger = formatBurger(basketAndId.basket)
  burger = filterByAmount(burger)
  yield call(addItemToCartInDB, burger, cartId)
}

function * getCartContent () {
  const cartId = yield select(getCartIdSelector)
  const response = yield call(getCartContentFromDB, cartId)
  if (response.status === 200) {
    yield put(putCartToGS(response.data))
  }
}

function * placeOrder () {
  const order = yield select(getCartSelector)
  const response = yield call(sendOrderToDB, order.cartId, order.cart)
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
