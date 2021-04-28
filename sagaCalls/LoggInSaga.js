import { takeLatest, call, put } from "redux-saga/effects";
import { CHECK_IN, errorin, datain, errorcred } from "../actions/action";
import { CheckLogIn } from "../api/apiCalls";

import { AsyncStorage } from "react-native";

export function* checkInWatcher() {
  yield takeLatest(CHECK_IN, checkInworker);
}

function* checkInworker(action) {
  let loge;
  try {
    loge = yield call(CheckLogIn, { action });

    if (loge.status === 200) {
      AsyncStorage.setItem("sid", loge._id);

      yield put(datain(loge));
    } else {
      yield put(errorin(loge.message));
      yield put(errorcred(true));
    }
  } catch (error) {
    console.log(error);
  }
}
