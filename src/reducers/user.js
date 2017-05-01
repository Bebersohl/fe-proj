const user = (state = {creatingUser: false}, action) => {
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
      return {
        ...state,
        creatingUser: true
      }
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        creatingUser: false,
        uid: action.user.uid
      }
    case 'CREATE_USER_FAIL':
      return {
        ...state,
        creatingUser: false,
        uid: null,
      }
    case 'AUTH_CHANGE':
      if(action.user) {
        return {
          ...state,
          uid: action.user.uid
        }
      } else {
        return {
          ...state,
          uid: null,
        }
      }
    default:
      return state
  }
}

export default user