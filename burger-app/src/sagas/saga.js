import { takeLatest, put, call, all, select } from 'redux-saga/effects'

import constants from '../constants/constants'
import { getBasketAndTotalPrice, getCartIdSelector } from './selectors'
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
} from '../actions/actions'

function * getIngredients () {
  const response = yield call(getIngredientsFromDB)
  console.log('[GET INGREDIENTS SAGA]', response)
  if (response.status === 200) {
    console.log('aici')
    yield put(putIngredientsToGS(response.data))
  }
}

function * getCartId () {
  const id = yield call(initializeCartInDB)
  console.log('[GET CART ID SAGA]', id)
  yield put(putIdToGS(id))
}

function * addBurgerToCart (actions) {
  const {ingredients, burgerPrice} = actions.payload
  const cartId = yield select(getCartIdSelector)
  const response = yield call(addItemToCartInDB, ingredients, burgerPrice, cartId)
}

function * getCartContent () {
  const cart = yield call(getCartContentFromDB)
  yield put(putCartToGS(cart))
}

function * placeOrder () {
  const order = yield select(getBasketAndTotalPrice)
  yield call(sendOrderToDB, order)
}

export default function * mainSaga() {
  yield all([
    yield takeLatest(constants.INITIAL_ING_LOAD, getIngredients),
    // yield takeLatest(constants.PUT_ID_TO_GLOBAL_STATE, getCartId),
    // // yield takeLatest(constants.CONFIRM_ORDER, addBurgerToCart),
    // // yield takeLatest(constants.CONFIRM_ORDER, getCartContent),
    // yield takeLatest(constants.CONFIRM_ORDER, placeOrder)
  ])
}
