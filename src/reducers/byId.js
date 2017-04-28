const byId = (state = {}, action) => {
  // if (action.type === 'USER_LOGOUT_SUCCESS') {
  //   return state = {}
  // }
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    }
  }
  return state
}

export default byId

export const getTodo = (state, id) => state[id]
export const getDue = (state, id) => state[id]['due']
