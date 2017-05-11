export const initialState = {
  uid: null,
  authRequestMade: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER_SUCCESS':
      return {
        ...state,
        uid: action.user.uid,
      }
    case 'SIGN_IN_USER_FAIL':
      return {
        ...state,
        uid: null,
      }
    case 'AUTH_CHANGE':
      return {
        ...state,
        authRequestMade: true,
        uid: action.user ? action.user.uid : null,
      }
    default:
      return state
  }
}

export default user
