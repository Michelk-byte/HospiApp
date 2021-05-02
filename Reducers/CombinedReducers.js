import { combineReducers } from "redux";
import Login from "./LogInReducer";
import Signup from "./SignupReducer";
import Ressource from "./RessourceReducer"

const allReducers = combineReducers({
  Login: Login,
  Signup: Signup,
  Ressource:Ressource,
});

export default allReducers;
