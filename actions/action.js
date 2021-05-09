// login actions

export const CHECK_IN = "CHECK_IN"; //1
export const SIGN_UP = "SIGN_UP"; //2
export const ERROR_IN = "ERROR_IN"; //3
export const DATA_IN = "DATA_IN"; //4
export const MESSAGE_UP = "MESSAGE_UP"; //5
export const STATUS = "STATUS"; //6
export const REGISTER = "REGISTER"; //7
export const ERROR_CRED = "ERROR_CRED"; //8

export const LOGGED_IN = "LOGGED_IN"; //9
export const LOG_OUT="LOG_OUT" //10

export const GET_HOSPITALS="GET_HOSPITALS"//11
export const SET_HOSPITALS="SET_HOSPITALS"//12

export const GET_DOCTORS="GET_DOCTORS"//13
export const SET_DOCTORS="SET_DOCTORS"//14

export const GET_LABS="GET_LABS"//15
export const SET_LABS="SET_LABS"//16

export const GET_TEST_LABS="GET_TEST_LABS"//17
export const SET_TEST_LABS="SET_TEST_LABS"//18

export const GET_DOCTOR_PROFILE="GET_DOCTOR_PROFILE"//19
export const SET_DOCTOR_PROFILE="SET_DOCTOR_PROFILE"//20

export const EDIT_PROFILE="EDIT_PROFILE"//21

//1
export const checkIn = (data) => ({
  type: CHECK_IN,
  payload: data,
});

//2
export const signUp = (data) => ({
  type: SIGN_UP,
  payload: data,
});

//3
export const errorin = (data) => ({
  type: ERROR_IN,
  payload: data,
});

//4
export const datain = (data) => ({
  type: DATA_IN,
  payload: data,
});

//5
export const messageup = (data) => ({
  type: MESSAGE_UP,
  payload: data,
});

//6
export const status = (data) => ({
  type: STATUS,
  payload: data,
});

//7
export const register = (data) => ({
  type: REGISTER,
  payload: data,
});

//8
export const errorcred = (data) => ({
  type: ERROR_CRED,
  payload: data,
});

//9
export const loggedin = (data) => ({
  type: LOGGED_IN,
  payload: data,
});

//10
export const loggedOut = (data) => ({
  type: LOG_OUT,
  payload: data,
});

//11
export const getHospitals = () => ({
  type: GET_HOSPITALS,

});


//12
export const setHospitals = (data) => ({
  type: SET_HOSPITALS,
  payload: data,
});

//13
export const getDoctors = (data) => ({
  type: GET_DOCTORS,
  payload: data,
});

//14
export const setDoctors = (data) => ({
  type: SET_DOCTORS,
  payload: data,
});

//15
export const getLabs = () => ({
  type: GET_LABS,

});


//16
export const setLabs = (data) => ({
  type: SET_LABS,
  payload:data
})

//17
export const getTestLabs=(data)=>({
  type:GET_TEST_LABS,
  payload:data
})

//18
export const setTestLabs=(data)=>({
  type:SET_TEST_LABS,
  payload:data
})

//19
export const getProfileD=(data)=>({
  type:GET_DOCTOR_PROFILE,
  payload:data
})

//20
export const setProfileD=(data)=>({
  type:SET_DOCTOR_PROFILE,
  payload:data
})

//21
export const editProfile=(data)=>({
  type:EDIT_PROFILE,
  payload:data
})
