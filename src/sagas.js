import { put, call, takeEvery } from 'redux-saga/effects'
import { auth } from './firebase'
import { delay } from 'redux-saga'

export function createUserRequest(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(user => ({ user }))
    .catch(error => ({ error }))
}

function signInUserRequest(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then(user => ({ user }))
    .catch(error => ({ error }))
}

export function* createUser({email, password}) {
  const { user, error } = yield call(createUserRequest, email, password)
  if (user) {
    yield put({ type: 'CREATE_USER_SUCCESS', user })
  }
  else {
    yield put({ type: 'CREATE_USER_FAIL', error })
  }
}

function* signInUser({email, password}) {
  const { user, error } = yield call(signInUserRequest, email, password)
  if (user) {
    yield put({ type: 'SIGN_IN_USER_SUCCESS', user })
  }
  else {
    yield put({ type: 'SIGN_IN_USER_FAIL', error })
  }
}

export default function* rootSaga() {
  yield [
    takeEvery('CREATE_USER_REQUEST', createUser),
    takeEvery('SIGN_IN_USER_REQUEST', signInUser)
  ]
}