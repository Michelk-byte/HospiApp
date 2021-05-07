import { takeLatest, call, put } from "redux-saga/effects";
import { GET_DOCTORS, setDoctors } from "../actions/action";
import { getDoctors } from "../api/apiCalls";

export function* DoctorsWatcher() {
  yield takeLatest(GET_DOCTORS, Doctorsworker);
}

function* Doctorsworker(action) {
  let loge;
  try {
    const data = action;
    // console.log(data)
    const loge = yield call(getDoctors, action.payload);
    yield put(setDoctors(loge.doctors));
    // console.log(loge);
  } catch (error) {
    console.log(error);
  }
}
