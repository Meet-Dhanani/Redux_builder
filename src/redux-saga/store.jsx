import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootreducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga } from './saga'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
)
sagaMiddleWare.run(rootSaga)

export default store