import { takeLatest, call, put,all } from "redux-saga/effects";
import { GET_LABS, setLabs,GET_TEST_LABS,setTestLabs } from "../actions/action";
import { getLabs ,getTestLabs} from "../api/apiCalls";

export function* LabsWatcher() {
  yield all([
    takeLatest(GET_LABS, Labsworker),
    takeLatest(GET_TEST_LABS,TestLabsworker)
  ]);
}

function* Labsworker() {
  let loge;

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
