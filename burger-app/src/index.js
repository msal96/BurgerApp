import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer/reducer'
import mainSaga from './sagas/saga'
import App from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mainSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
