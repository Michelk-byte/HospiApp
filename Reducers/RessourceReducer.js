import { SET_MSG_BKDR,SET_MSG_BKTS,SET_SPEC_TEST,SET_HOSPITALS, SET_DOCTORS,SET_LABS,SET_TEST_LABS,SET_DOCTOR_PROFILE,SET_CREDENTIALS,SET_TEST_DESC,SET_APPOINTMENTS,SET_SPECIALTY_HOSP} from "../actions/action";

const initial = {
  hospitals:[],
  doctors:[],
  labs:[],
  testLabs:[],
  profile:[],
  credentials:[],
  testDesc:[],
  appointments:[],
  specialties:[],
  testSpec:[],
  DrmsgBooked:"",
  TestMsgBooked:"",


};

const RessourceReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_HOSPITALS:
      return { ...state, hospitals: action.payload };
    case SET_DOCTORS:
        return { ...state, doctors: action.payload };
    case SET_LABS:
        return { ...state, labs: action.payload };
    case SET_TEST_LABS:
      return { ...state, testLabs: action.payload };
    case SET_DOCTOR_PROFILE:
      return { ...state, profile: action.payload };
    case SET_CREDENTIALS:
      return { ...state, credentials: action.payload };
    case SET_TEST_DESC:
      return { ...state, testDesc: action.payload };
    case SET_APPOINTMENTS:
      return { ...state, appointments: action.payload };
    case SET_SPECIALTY_HOSP:
      return { ...state, specialties: action.payload };
    case SET_SPEC_TEST:
        return { ...state, testSpec: action.payload };
    case SET_MSG_BKDR:
      return { ...state, DrmsgBooked: action.payload };
    case SET_MSG_BKTS:
      return { ...state, TestMsgBooked: action.payload };
    default:
      return state;
  }
};

export default RessourceReducer;