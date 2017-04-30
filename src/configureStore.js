import { initLeanCloud } from './api'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import myApp from './reducers'

const configureStore = () => {
  initLeanCloud()

  const middlewares = [thunk, createLogger()]

  // if (process.env.NODE_ENV !== 'production') {
  //   middlewares.push(createLogger())
  // }

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

  const store = createStore(
    myApp,
    composeEnhancers(...enhancers)
  )

  return store
}

export default configureStore
