import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_LABS, setLabs,GET_TEST_LABS,setTestLabs,GET_TEST_DESC,setTestDesc ,BOOK_TEST, bookTest} from "../actions/action";
import { getLabs ,getTestLabs,getTestDesc,bookTestLab} from "../api/apiCalls";

export function* LabsWatcher() {
  yield all([
    takeLatest(GET_LABS, Labsworker),
    takeLatest(GET_TEST_LABS,TestLabsworker),
    takeLatest(GET_TEST_DESC,TestDescWoker),
    takeLatest(BOOK_TEST,BookTestWorker)
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
    console.log("tests");
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
    console.log(res);
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
