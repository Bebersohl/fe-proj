import { put, call } from 'redux-saga/effects'
import { signInUser, signInUserRequest, createUserRequest } from './sagas'
import { testSaga } from 'redux-saga-test-plan'

test('signInUser Saga test', () => {
  testSaga(signInUser, { email: 'email', password: 'password', newUser: false })
    .next()
    .call(signInUserRequest, 'email', 'password')
    .next({ error: 'error' })
    .put({ type: 'SIGN_IN_USER_FAIL', error: 'error' })
    .next()
    .isDone()

  testSaga(signInUser, { email: 'email', password: 'password', newUser: false })
    .next()
    .call(signInUserRequest, 'email', 'password')
    .next({ user: 'user' })
    .put({ type: 'SIGN_IN_USER_SUCCESS', user: 'user' })
    .next()
    .isDone()

  testSaga(signInUser, { email: 'email', password: 'password', newUser: true })
    .next()
    .call(createUserRequest, 'email', 'password')
    .next({ error: 'error' })
    .put({ type: 'SIGN_IN_USER_FAIL', error: 'error' })
    .next()
    .isDone()

  testSaga(signInUser, { email: 'email', password: 'password', newUser: true })
    .next()
    .call(createUserRequest, 'email', 'password')
    .next({ user: 'user' })
    .put({ type: 'SIGN_IN_USER_SUCCESS', user: 'user' })
    .next()
    .isDone()
})
