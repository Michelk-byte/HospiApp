import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_HOSPITALS, setHospitals,BOOK_DOCTOR,GET_APPOINTMENTS,setAppointments } from "../actions/action";
import { getHospitals,bookDoctor,getAppointments } from "../api/apiCalls";

export function* HospitalsWatcher() {
  yield all([
    takeLatest(GET_HOSPITALS, Hospitalsworker),
    takeLatest(BOOK_DOCTOR, BookDoctWorker),
    takeLatest(GET_APPOINTMENTS,GetAppWorker)
  ]);
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

function* BookDoctWorker(action) {
  try {
    yield call(bookDoctor,action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* GetAppWorker(action){
  try{
    const res=yield call(getAppointments,action);
    console.log(res);
    yield put(setAppointments(res))
  }catch (error) {
    console.log(error);
  }
}