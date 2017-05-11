const requesting = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
    case 'SIGN_IN_USER_REQUEST':
      return true
      break
    case 'CREATE_USER_SUCCESS':
    case 'CREATE_USER_FAIL':
    case 'SIGN_IN_USER_SUCCESS':
    case 'SIGN_IN_USER_FAIL':
      return false
      break
    default:
      return state
  }
}

export default requesting