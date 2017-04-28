import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import control, * as fromControl from './control'
import userInfo, * as fromUser from './userInfo'
import createList, * as fromList from './createList'
import * as api from '../api'

/**
 * Initial state will using api from initLeanCloud
 * which initialization is required
 */
api.initLeanCloud()

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const myApp = combineReducers({
  byId,
  listByFilter,
  control,
  userInfo
})

export default myApp

/**
 * Selectors
 */
export const getVisibleTodos = (state, filter) => {
  
  const ids = fromList.getIds(state.listByFilter[filter])
  const sortedTodos = {}
  // sort todo-list by duedate
  ids.map(id => fromById.getTodo(state.byId, id))
    .sort((a, b) => (+a.due - b.due))
    .forEach(id => {
      const due = new Date(id.due).toJSON()
      if (!sortedTodos[due]) {
        sortedTodos[due] = []
      }
      sortedTodos[due].push(id)
    })
  return sortedTodos
}

export const getIsAdding = (state) =>
  fromControl.getIsAdding(state.control)

export const getIsLogging = (state) =>
  fromControl.getIsLogging(state.control)

export const getLogError = (state) =>
  fromUser.getLogError(state.userInfo)

export const getCurrentUser = (state) =>
  fromUser.getCurrentUser(state.userInfo)

export const getIsSidebarOpen = (state) =>
  fromControl.getIsSidebarOpen(state.control)

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])
