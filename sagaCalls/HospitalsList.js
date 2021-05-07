import { takeLatest, call, put } from "redux-saga/effects";
import { GET_HOSPITALS, setHospitals } from "../actions/action";
import { getHospitals } from "../api/apiCalls";

export function* HospitalsWatcher() {
  yield takeLatest(GET_HOSPITALS, Hospitalsworker);
}

function* Hospitalsworker() {
  let loge;

  try {
    const loge = yield call(getHospitals);
    yield put(setHospitals(loge));
    // console.log(loge);
  } catch (error) {
    console.log(error);
  }
}
