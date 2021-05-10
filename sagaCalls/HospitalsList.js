import { takeLatest, call, put,all } from "redux-saga/effects";
import { setMsgDr,GET_HOSPITALS, setHospitals,BOOK_DOCTOR,GET_APPOINTMENTS,setAppointments,GET_SPECIALTY_HOSP,setSpecialty } from "../actions/action";
import { getHospitals,bookDoctor,getAppointments,getSpecialties } from "../api/apiCalls";

export function* HospitalsWatcher() {
  yield all([
    takeLatest(GET_HOSPITALS, Hospitalsworker),
    takeLatest(BOOK_DOCTOR, BookDoctWorker),
    takeLatest(GET_APPOINTMENTS,GetAppWorker),
    takeLatest(GET_SPECIALTY_HOSP,GetSpecialtyWorker)
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
    const res=yield call(bookDoctor,action.payload);
    yield put(setMsgDr(res.message))
  } catch (error) {
    console.log(error);
  }
}

function* GetAppWorker(action){
  try{
    const res=yield call(getAppointments,action.payload);
    console.log(res);
    yield put(setAppointments(res))
  }catch (error) {
    console.log(error);
  }
}

function* GetSpecialtyWorker(action){
  try{
    const res=yield call(getSpecialties,action.payload);
    console.log(res.all_specialties);
    yield put(setSpecialty(res.all_specialties));
  }catch (error){
    console.log(error);
  }
}