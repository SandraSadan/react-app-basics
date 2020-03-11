import {
  put,
  takeEvery,
  all
} from 'redux-saga/effects'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function * incrementAsync () {
  yield delay(1000)
  yield put({
    type: 'INCREMENT'
  })
}

function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([
    watchIncrementAsync()
  ])
}
