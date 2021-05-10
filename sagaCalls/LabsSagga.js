import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_LABS, setLabs,GET_TEST_LABS,setTestLabs,GET_TEST_DESC,setTestDesc ,BOOK_TEST, GET_TEST_BY_SPEC,GET_SPEC_TEST,setTestSpec} from "../actions/action";
import { getLabs ,getTestLabs,getTestDesc,bookTestLab,getSpecTest,getTestBySpec} from "../api/apiCalls";

export function* LabsWatcher() {
  yield all([
    takeLatest(GET_LABS, Labsworker),
    takeLatest(GET_TEST_LABS,TestLabsworker),
    takeLatest(GET_TEST_DESC,TestDescWoker),
    takeLatest(BOOK_TEST,BookTestWorker),
    takeLatest(GET_TEST_BY_SPEC,TestBySpecWorker),
    takeLatest(GET_SPEC_TEST,SpecTestWorker)
  ]);
}

function* Labsworker() {
  
  try {
    const loge = yield call(getLabs);
    yield put(setLabs(loge));
    console.log(loge);
  } catch (error) {
    console.log(error);
  }
}

function* TestLabsworker(action) {
  let loge;

  try {
    const loge = yield call(getTestLabs,action.payload);
    yield put(setTestLabs(loge));
    console.log(loge);
  } catch (error) {
    console.log(error);
  }
}

function* TestDescWoker(action){
  try{
    const res=yield call(getTestDesc,action.payload)
   
    yield put(setTestDesc(res));
  } catch (error) {
    console.log(error);
  }
}

function* BookTestWorker(action){
  try{
    const res=yield call(bookTestLab,action.payload);
  }catch (error) {
    console.log(error);
  }
}

function* SpecTestWorker(action){
  try{
    const res=yield call(getSpecTest,action.payload);
    console.log(res.all_types);
    yield put(setTestSpec(res.all_types));
  }catch (error){
    console.log(error);
  }
}

function* TestBySpecWorker(action){
  try{
    const loge = yield call(getTestBySpec, action.payload);
    yield put(setTestLabs(loge.tests));
  } catch (error) {
    console.log(error);
  }
}