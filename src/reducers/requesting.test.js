import requesting from './requesting'

it('handles initial state', () => {
  const next = requesting(undefined, {})
  expect(next).toMatchSnapshot()
})

it('handles SIGN_IN_USER_REQUEST', () => {
  const next = requesting(undefined, {type: 'SIGN_IN_USER_SUCCESS'})
  expect(next).toMatchSnapshot()
})

it('handles SIGN_IN_USER_SUCCESS', () => {
  const next = requesting(undefined, {type: 'SIGN_IN_USER_SUCCESS'})
  expect(next).toMatchSnapshot()
})

it('handles SIGN_IN_USER_FAIL', () => {
  const next = requesting(undefined, {type: 'SIGN_IN_USER_FAIL'})
  expect(next).toMatchSnapshot()
})
