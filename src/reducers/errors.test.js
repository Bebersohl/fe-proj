import errors from './errors'

it('handles initial state', () => {
  const next = errors(undefined, {})
  expect(next).toMatchSnapshot()
})

it('handles adding errors', () => {
  const next = errors({}, {type: 'TEST', error: {code: 'errorCode', message: 'error message'}})
  expect(next).toMatchSnapshot()
})

it('handles RESET_ERRORS', () => {
  const next = errors({error: 'error'}, {type: 'RESET_ERRORS'})
  expect(next).toMatchSnapshot()
})
