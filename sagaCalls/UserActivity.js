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
  CHANGE_PASS
} from "../actions/action";
import { changePass,CheckLogIn,SignUp, logOut,editProfile,getCredentials} from "../api/apiCalls";

import { getData, storeData } from "../Storage";

export function* UserActivityWatcher() {
  yield all([
    takeLatest(CHECK_IN, checkInworker),
    takeLatest(LOG_OUT, checkOutworker),
    takeLatest(SIGN_UP, SignUpWorker),
    takeLatest(EDIT_PROFILE,EditWorker),
    takeLatest(GET_CREDENTIALS,SetCredWorler),
    takeLatest(CHANGE_PASS,ChangePassWorker)

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
    const dat = action.payload;
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
    yield call(editProfile,data)
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
    yield call(changePass,action.payload);
  }catch(error){
    console.log(error);
  }
}