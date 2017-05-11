import { put, call, takeEvery } from 'redux-saga/effects'
import { auth } from './firebase'

export function createUserRequest(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(user => ({ user }))
    .catch(error => ({ error }))
}

export function signInUserRequest(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then(user => ({ user }))
    .catch(error => ({ error }))
}

export function* signInUser({email, password, newUser}) {
  const func = newUser ? createUserRequest : signInUserRequest
  const { user, error } = yield call(func, email, password)
  if (user) {
    yield put({ type: 'SIGN_IN_USER_SUCCESS', user })
  }
  else {
    yield put({ type: 'SIGN_IN_USER_FAIL', error })
  }
}

export default function* rootSaga() {
  yield [
    takeEvery('SIGN_IN_USER_REQUEST', signInUser)
  ]
}