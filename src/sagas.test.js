import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { createUser, createUserRequest, signInUser } from './sagas'

test('createUser Saga test', () => {
  const gen = createUser({ email: 'email', password: 'password'})
  const result = call(createUserRequest, 'email', 'password')
  expect(
    gen.next().value
  ).toEqual(
    result
  )
  const user = 'foo'
  expect(
    gen.next(result).value
  ).toEqual(
    put({ type: 'CREATE_USER_SUCCESS', user: 'foo' })
  )
});