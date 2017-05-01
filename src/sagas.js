import { put, call, takeEvery } from 'redux-saga/effects'
import { auth } from './firebase'
import { delay } from 'redux-saga'

function createUserRequest(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(user => ({ user }))
    .catch(error => ({ error }))
}

function* createUser({email, password}) {
  console.log('DELAY')
  yield delay(3000)
  const { user, error } = yield call(createUserRequest, email, password)
  if (user) {
    console.log('DELAY')
    yield delay(3000)
    yield put({ type: 'CREATE_USER_SUCCESS', user })
  }
  else {
    console.log('DELAY')
    yield delay(3000)
    yield put({ type: 'CREATE_USER_FAIL', error })
  }
}

export default function* rootSaga() {
  yield [
    takeEvery('CREATE_USER_REQUEST', createUser)
  ]
}