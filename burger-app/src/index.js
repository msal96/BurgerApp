import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer/reducer'
import mainSaga from './sagas/saga'
import App from './App'
import './index.css'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import localForage from 'localforage'

localForage.config({
    driver: localForage.LOCALSTORAGE,
    name: 'Burger App',
    version: 1.0,
    storeName: 'globalstate'
  })
  
const persistConfig = {
    key: 'root',
    storage: localForage,
    whitelist: ['cartId']
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)
sagaMiddleware.run(mainSaga)


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App />
        </PersistGate>
    </Provider>, 
document.getElementById('root'))
