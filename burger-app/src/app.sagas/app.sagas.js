import { all } from "redux-saga/effects"

import mainSaga from "../sagas/saga"

export default function* root() {
  yield all([mainSaga()])
}
