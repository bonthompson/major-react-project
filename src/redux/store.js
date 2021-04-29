import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
// can add more middlewares in future
const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
