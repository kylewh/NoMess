import * as api from '../api'
import * as schema from './schema'
import { normalize } from 'normalizr'
import { getIsFetching } from '../reducers'

// All action types will be stored at ../constant/action.js
// in case of typo

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
    disptach({
      type: 'ADD_TODO_FAILURE',
      filter: 'all',
      message: error.message || 'Add todo fail, please retry'
    })
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
  },
  error => {
    disptach({
      type: 'EDIT_TODO_FAILURE',
      filter: 'all',
      message: error.message || 'Edit fail, please retry.'
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
  },
  error => {
    dispatch({
      type: 'TOGGLE_TODO_FAILURE',
      filter: 'all',
      message: error.message
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
    },
    error => {
      dispatch({
        type: 'DELETE_TODO_FAILURE',
        filter: 'all',
        message: error.message
      })
    })
}

export const login = (username, password) => (dispatch) => {
  if ( !username || !password ) {
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      error: { clientErr: '请确保已经输入账号密码.' }
    })
    return
  }

  dispatch({
    type: 'USER_LOGIN_REQUEST'
  })

  api.login(username, password)
    .then(loginedUser => {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        loginedUser
      })
    })
    .catch(res => {
      if (res.code === 211) {
        console.log('无法找到用户，我们将为您注册，请注意您将会使用输入的用户名登录。')
        return api.signUp(username, password)
          .then(signedUser => {
            dispatch({
              type: 'USER_LOGIN_SUCCESS',
              loginedUser: signedUser
            })
          })
      }
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
