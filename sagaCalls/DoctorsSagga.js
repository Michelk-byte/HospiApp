import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_DOCTORS, setDoctors,GET_DOCTOR_PROFILE,setProfileD,GET_DOCT_SPEC } from "../actions/action";
import { getDoctors,getProfile,getDoctorSpec } from "../api/apiCalls";

export function* DoctorsWatcher() {
  yield all([
    takeLatest(GET_DOCTORS, Doctorsworker),
    takeLatest(GET_DOCTOR_PROFILE,ProfileWorker),
    takeLatest(GET_DOCT_SPEC,DoctSpecWorler)
  ]);
}

function* Doctorsworker(action) {
  try {
    const loge = yield call(getDoctors, action.payload);
    yield put(setDoctors(loge.doctors));
  } catch (error) {
    console.log(error);
  }
}

function* ProfileWorker(action) {
  try {
    const loge = yield call(getProfile, action.payload);
    yield put(setProfileD(loge));
    console.log(loge);
  } catch (error) {
    console.log(error);
  }
}

function* DoctSpecWorler(action){
  try{
    const loge = yield call(getDoctorSpec, action.payload);
    yield put(setDoctors(loge.doctors));
    // console.log(loge);
  } catch (error) {
    console.log(error);
  }
}