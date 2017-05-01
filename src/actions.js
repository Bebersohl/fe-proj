
export const createUserRequest = (email, password) => ({
  type: 'CREATE_USER_REQUEST',
  email,
  password,
})