import { takeLatest, call, put } from "redux-saga/effects";
import {LOG_OUT,loggedin,datain} from "../actions/action"
import {logOut} from "../api/apiCalls"

export function* checkOutWatcher() {
    yield takeLatest(LOG_OUT, checkOutworker);
  }
  

  function* checkOutworker(action) {
    let loge;
    yield put(datain(null));
    yield put(loggedin(false));
    try {
      const dat = action.payload;
      const loge = yield call(logOut, dat);
        yield put(datain(null));
        yield put(loggedin(false));
      
    } catch (error) {
      console.log(error);
    }
  }
  