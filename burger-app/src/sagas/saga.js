import { takeLatest, put, call, all, select } from 'redux-saga/effects'
import {sendOrderToDynamo} from '../networking/networking'
import {getBasketAndTotalPrice} from './selectors'
import constants from '../constants/constants'
function * sendOrderToDb () {
  const order = yield select(getBasketAndTotalPrice)
  yield call(sendOrderToDynamo, order)
}
export default function * mainSaga () {
  yield all(
    [
      yield takeLatest(constants.CONFIRM_ORDER, sendOrderToDb)
    ])
}
