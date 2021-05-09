import { call, all } from "redux-saga/effects";
import { UserActivityWatcher } from "./UserActivity";
import {HospitalsWatcher} from "./HospitalsList"
import {DoctorsWatcher} from "./DoctorsSagga"
import {LabsWatcher} from "./LabsSagga"

export function* rootSaga() {
  yield all([
    call(UserActivityWatcher), 
    call(HospitalsWatcher),
    call(DoctorsWatcher),
    call(LabsWatcher)
  ]);
}
