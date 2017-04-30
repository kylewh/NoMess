import { combineReducers } from 'redux'
import {
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from '../constant'

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggledId, entities } = action.response
    const { completed } = entities.todos[toggledId]
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    )
    return shouldRemove
      ? state.filter(id => id !== toggledId)
      : state
  }

  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return filter === action.filter
          ? action.response.result
          : state
      case ADD_TODO_SUCCESS:
        return filter !== 'completed'
          ? [...state, action.response.result]
          : state
      case TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action)
      case DELETE_TODO_SUCCESS:
        return state.filter(id => id !== action.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        state = true
        return state
      case FETCH_TODOS_SUCCESS:
      case FETCH_TODOS_FAILURE:
        state = false
        return state
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case FETCH_TODOS_FAILURE:
      case DELETE_TODO_FAILURE:
        return action.message
      case FETCH_TODOS_REQUEST:
      case FETCH_TODOS_SUCCESS:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

export default createList

export const getIds = (state) => state.ids

export const getIsFetching = (state) => state.isFetching

export const getErrorMessage = (state) => state.errorMessage
