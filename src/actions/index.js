import * as api from '../api'
import * as schema from './schema'
import { normalize } from 'normalizr'
import AV from 'leancloud-storage/dist/av'
import { getIsFetching } from '../reducers'

export const toggleAddToDo = () => ({
  type: 'TOGGLE_ADD_TODO'
})

export const toggleSideBar = () => ({
  type: 'TOGGLE_SIDEBAR'
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })
  return api.fetchTodos(filter).then(
    response => {
      const receivedTodos = response.map(todo => {
        return {
          ...todo.attributes,
          id: todo.id
        }
      })
      return dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(receivedTodos, schema.arrayOfTodos)
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'SOMETHING WENT WRONG'
      })
    }
  )
}

export const addTodo = (text, due) => (disptach) => {
  api.addTodo(text, due).then((response) => {
    const receivedTodo = {
      ...response.attributes,
      id: response.id
    }
    disptach({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(receivedTodo, schema.todo)
    })
  },
  error => {
    console.log(error.message)
  })
}

export const editTodo = (id, text) => (dispatch) => {
  api.editTodo(id, text).then((response) => {
    const receivedTodo = {
      ...response.attributes,
      id: response.id
    }
    dispatch({
      type: 'EDIT_TODO_SUCCESS',
      response: normalize(receivedTodo, schema.todo)
    })
  })
}

export const toggleTodo = (id) => (dispatch) => {
  api.toggleTodo(id).then((response) => {
    const receivedTodo = {
      ...response.attributes,
      id: response.id
    }
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(receivedTodo, schema.todo)
    })
  })
}

export const deleteTodo = (id) => (dispatch) => {
  api.deleteTodo(id)
    .then(function (res) {
      if (res.results.length) {
        dispatch({
          type: 'DELETE_TODO_SUCCESS',
          id: id
        })
      }
    }, function (error) {
      dispatch({
        type: 'DELETE_TODO_FAILURE',
        message: error.message
      })
    })
}

export const login = (username, password) => (dispatch) => {
  dispatch({
    type: 'USER_LOGIN_REQUEST'
  })

  api.login(username, password)
    .then(loginedUser => {
      console.log(AV.User.current())
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        loginedUser
      })
    }).catch(res => {
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        error: res
      })
    })
}

export const logOut = () => (dispatch) => {
  api.logOut().then(() => {
    dispatch({
      type: 'USER_LOGOUT_SUCCESS'
    })
  }).catch(res => {
    dispatch({
      type: 'USER_LOGOUT_FAILURE',
      error: res
    })
  })
}
