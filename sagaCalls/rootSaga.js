import { call, all } from "redux-saga/effects";
import { checkInWatcher } from "./LoggInSaga";
import { signUpWatcher } from "./SignUpReducer";
import {checkOutWatcher} from "./LogOutSagga"
import {HospitalsWatcher} from "./HospitalsList"
import {DoctorsWatcher} from "./DoctorsSagga"

export function* rootSaga() {
  yield all([
    call(checkInWatcher), 
    call(signUpWatcher),
    call(checkOutWatcher),
    call(HospitalsWatcher),
    call(DoctorsWatcher)
  ]);
}
