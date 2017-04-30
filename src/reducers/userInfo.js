import * as api from '../api'
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS
} from '../constant'

const userInfo = (state = {
  currentUser: api.getCurrentUser() || null,
  error: null
}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.loginedUser,
        error: null
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }
    case USER_LOGIN_FAILURE:
    case USER_LOGOUT_FAILURE:
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
