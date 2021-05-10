import { takeLatest, call, put,all } from "redux-saga/effects";
import {
  CHECK_IN,
  errorin,
  datain,
  errorcred,
  loggedin,
  SIGN_UP,
  messageup,
  status,
  register,
  LOG_OUT,
  EDIT_PROFILE,
  GET_CREDENTIALS,
  setCredentials,
  setAlertDr,setMsgDr,
  CHANGE_PASS,FORGOT_PASSWORD
} from "../actions/action";
import { forgotPassword,changePass,CheckLogIn,SignUp, logOut,editProfile,getCredentials} from "../api/apiCalls";

import { getData, storeData } from "../Storage";

export function* UserActivityWatcher() {
  yield all([
    takeLatest(CHECK_IN, checkInworker),
    takeLatest(LOG_OUT, checkOutworker),
    takeLatest(SIGN_UP, SignUpWorker),
    takeLatest(EDIT_PROFILE,EditWorker),
    takeLatest(GET_CREDENTIALS,SetCredWorler),
    takeLatest(CHANGE_PASS,ChangePassWorker),
    takeLatest(FORGOT_PASSWORD,ForgotWorker)

  ]);
}


//Sign in worker
function* checkInworker(action) {
  let loge;
  try {
    const dat = action.payload;
    const loge = yield call(CheckLogIn, dat);
    console.log(loge);
    if (loge.status === 200) {
      storeData(loge.sid);
      yield put(datain(loge));
      yield put(loggedin(true));
    } else {
      yield put(errorin(loge.message));
      yield put(errorcred(true));
    }
  } catch (error) {
    console.log(error);
  }
}

//sign out worker
function* checkOutworker(action) {
  let loge;
  yield put(datain(null));
  yield put(loggedin(false));
  try {
     yield call(logOut);   
  } catch (error) {
    console.log(error);
  }
}

//sign up woker
function* SignUpWorker(action) {
  try {
    const dat = action.payload;
    const signup = yield call(SignUp, dat);
   yield put(messageup(signup.message));
   yield put(status(signup.status));
   yield put(register(true));
  } catch (error) {
    console.log(error);
  }
}

function* EditWorker(action){
  try{
    const data=action.payload;
    console.log("in edit worker ")
    console.log(data)
    const res= yield call(editProfile,data)
    yield put(setMsgDr(res.message));
    yield put(setAlertDr(true));
  }
  catch (error) {
    console.log(error);
  }
}

function* SetCredWorler(action) {
  let res;
  try {
    const data = action.payload;
    const res= yield call(getCredentials,data);
    
    yield put(setCredentials(res))  ;
    
  } catch (error) {
    console.log(error);
  }
}

function* ChangePassWorker(action){
  try{
    const res=yield call(changePass,action.payload);
    console.log("In change pass");
    console.log(res)
    yield put(setMsgDr(res.message));
    yield put(setAlertDr(true));
  }catch(error){
    console.log(error);
  }
}

function* ForgotWorker(action){
  try{
    const res=yield call(forgotPassword,action.payload);
    yield put(setMsgDr(res.message));
    yield put(setAlertDr(true));
  }catch(error){
    console.log(error);
  }
}