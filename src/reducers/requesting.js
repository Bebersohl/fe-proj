const requesting = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER_REQUEST':
      return true
    case 'SIGN_IN_USER_SUCCESS':
    case 'SIGN_IN_USER_FAIL':
      return false
    default:
      return state
  }
}

export default requesting