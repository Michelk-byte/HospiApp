import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_DOCTORS, setDoctors,GET_DOCTOR_PROFILE,setProfileD } from "../actions/action";
import { getDoctors,getProfile } from "../api/apiCalls";

export function* DoctorsWatcher() {
  yield all([
    takeLatest(GET_DOCTORS, Doctorsworker),
    takeLatest(GET_DOCTOR_PROFILE,ProfileWorker)
  ]);
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

function* ProfileWorker(action) {
  let loge;
  try {
    const data = action;
    // console.log(data)
    const loge = yield call(getProfile, action.payload);
    yield put(setProfileD(loge));
    console.log(loge);
  } catch (error) {
    console.log(error);
  }
}

