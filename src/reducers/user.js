const user = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return {
        uid: action.user.uid
      }
    case 'NEW_USER':
      if(action.user) {
        return {
          uid: action.user.uid
        }
      } else {
        return null
      }
    default:
      return state
  }
}

export default user