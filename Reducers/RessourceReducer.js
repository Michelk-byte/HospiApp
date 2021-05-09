import { SET_HOSPITALS, SET_DOCTORS,SET_LABS,SET_TEST_LABS,SET_DOCTOR_PROFILE} from "../actions/action";

const initial = {
  hospitals:[],
  doctors:[],
  labs:[],
  testLabs:[],
  profile:[]
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
    default:
      return state;
  }
};

export default RessourceReducer;