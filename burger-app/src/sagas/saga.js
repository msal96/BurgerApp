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
  const ingredients = yield call(getIngredientsFromDB)
  yield put(putIngredientsToGS(ingredients))
}

function * getCartId () {
  const id = yield call(initializeCartInDB)
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
    // yield takeLatest(constants._, getCartId),
    // yield takeLatest(constants.CONFIRM_ORDER, addBurgerToCart),
    // yield takeLatest(constants.CONFIRM_ORDER, getCartContent),
    yield takeLatest(constants.CONFIRM_ORDER, placeOrder)
  ])
}
