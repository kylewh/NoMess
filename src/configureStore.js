import AV from 'leancloud-storage/dist/av'
import { debounce } from 'underscore'
import { initLeanCloud } from './api'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import myApp from './reducers'

const configureStore = () => {

  initLeanCloud()

  const middlewares = []
  middlewares.push(thunk)

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    myApp,
    compose(
       applyMiddleware(...middlewares),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  )

  return store
}

export default configureStore
