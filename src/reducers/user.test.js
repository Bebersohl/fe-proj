import user, { initialState } from './user'
const currentUser = {
  uid: 'unique-id',
}

it('handles initial state', () => {
  const next = user(undefined, {})
  expect(next).toMatchSnapshot()
})
it('handles SIGN_IN_USER_SUCCESS', () => {
  const next = user(initialState, {
    type: 'SIGN_IN_USER_SUCCESS',
    user: currentUser,
  })
  expect(next).toMatchSnapshot()
})
it('handles SIGN_IN_USER_FAIL', () => {
  const next = user(initialState, { type: 'SIGN_IN_USER_FAIL' })
  expect(next).toMatchSnapshot()
})
it('handles AUTH_CHANGE with user', () => {
  const next = user(initialState, { type: 'AUTH_CHANGE', user: currentUser })
  expect(next).toMatchSnapshot()
})
it('handles AUTH_CHANGE without user', () => {
  const next = user(initialState, { type: 'AUTH_CHANGE' })
  expect(next).toMatchSnapshot()
})
