const errors = (state = {}, action) => {
  const { type, error } = action
  if (type === 'RESET_ERRORS') {
    return {}
  } else if (
    error &&
    error.hasOwnProperty('code') &&
    error.hasOwnProperty('message')
  ) {
    return {
      ...state,
      [error.code]: error.message,
    }
  }

  return state
}

export default errors
