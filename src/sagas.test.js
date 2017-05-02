import { put, call } from 'redux-saga/effects'
import { createUser, createUserRequest, signInUser, signInUserRequest } from './sagas'
import { testSaga } from 'redux-saga-test-plan'

test('createUser Saga test', () => {
  testSaga(createUser, { email: 'email', password: 'password'})
    .next()
    .call(createUserRequest, 'email', 'password')
    .next({error: 'error'})
    .put({ type: 'CREATE_USER_FAIL', error: 'error' })
    .next()
    .isDone()

  testSaga(createUser, { email: 'email', password: 'password'})
    .next()
    .call(createUserRequest, 'email', 'password')
    .next({user: 'user'})
    .put({ type: 'CREATE_USER_SUCCESS', user: 'user' })
    .next()
    .isDone()
});

test('signInUser Saga test', () => {
  testSaga(signInUser, { email: 'email', password: 'password'})
    .next()
    .call(signInUserRequest, 'email', 'password')
    .next({error: 'error'})
    .put({ type: 'SIGN_IN_USER_FAIL', error: 'error' })
    .next()
    .isDone()

  testSaga(signInUser, { email: 'email', password: 'password'})
    .next()
    .call(signInUserRequest, 'email', 'password')
    .next({user: 'user'})
    .put({ type: 'SIGN_IN_USER_SUCCESS', user: 'user' })
    .next()
    .isDone()
});