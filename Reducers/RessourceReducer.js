import { SET_HOSPITALS, SET_DOCTORS} from "../actions/action";

const initial = {
  hospitals:[],
  doctors:[],
};

const RessourceReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_HOSPITALS:
      return { ...state, hospitals: action.payload };
    case SET_DOCTORS:
        return { ...state, doctors: action.payload };
    default:
      return state;
  }
};

export default RessourceReducer;