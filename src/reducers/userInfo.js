import * as api from '../api'

const userInfo = (state = {
  currentUser: api.getCurrentUser() || null,
  error: null
}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.loginedUser
      }
    case 'USER_LOGOUT_SUCCESS':
      return {
        ...state,
        currentUser: null
      }
    case 'USER_LOGIN_FAILURE':
    case 'USER_LOGOUT_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default userInfo

export const getCurrentUser = (state) => state.currentUser

export const getLogError = (state) => state.error
