import { takeLatest, call, put } from "redux-saga/effects";
import {
  CHECK_IN,
  errorin,
  datain,
  errorcred,
  loggedin,
} from "../actions/action";
import { CheckLogIn } from "../api/apiCalls";

import { getData, storeData } from "../Storage";

export function* checkInWatcher() {
  yield takeLatest(CHECK_IN, checkInworker);
}

function* checkInworker(action) {
  let loge;
  try {
    const dat = action.payload;
    const loge = yield call(CheckLogIn, dat);
    // console.log(loge.status);
    if (loge.status === 200) {
      storeData(loge.sid);

      yield put(datain(loge));
      yield put(loggedin(true));
    } else {
      yield put(errorin(loge.message));
      yield put(errorcred(true));
    }
  } catch (error) {
    console.log(error);
  }
}
