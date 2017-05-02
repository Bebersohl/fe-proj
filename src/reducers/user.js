export const initialState = {
  creatingUser: false,
  signingInUser: false,
  uid: null,
}

const user = (state = initialState, action) => {
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
    case 'SIGN_IN_USER_REQUEST':
      return {
        ...state,
        signingInUser: true
      }
    case 'SIGN_IN_USER_SUCCESS':
      return {
        ...state,
        signingInUser: false,
        uid: action.user.uid,
      }
    case 'SIGN_IN_USER_FAIL':
      return {
        ...state,
        signingInUser: false,
        uid: null,
      }
    case 'AUTH_CHANGE':
      return {
        ...state,
        uid: action.user ? action.user.uid : null
      }
    default:
      return state
  }
}

export default user