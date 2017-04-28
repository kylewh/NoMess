import { combineReducers } from 'redux'

const isAdding = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TODO':
    case 'ADD_TODO_SUCCESS':
      return !state
    default:
      return state
  }
}

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return !state
    default:
      return state
  }
}

const isLogging = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return state = true
    case 'USER_LOGIN_SUCCESS':
    case 'USER_LOGIN_FAILURE':
      return state = false
    default:
      return state
  }
}

const control = combineReducers({
  isAdding,
  isLogging,
  isSidebarOpen
})

export default control

export const getIsAdding = (state) => state.isAdding

export const getIsLogging = (state) => state.isLogging

export const getIsSidebarOpen = (state) => state.isSidebarOpen
