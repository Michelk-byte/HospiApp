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

export const GET_CREDENTIALS="GET_CRENDATIALS"//22
export const SET_CREDENTIALS="SET_CREDANTIALS"//23

export const BOOK_DOCTOR="BOOK_DOCTOR"//24
export const BOOK_TEST="BOOK_TEST"//25

export const GET_TEST_DESC="GET_TEST_DESC"//26
export const SET_TEST_DESC="SET_TEST_DESC"//27

export const CHANGE_PASS="CHANGE_PASS"//28

export const GET_APPOINTMENTS="GET_APPOINTMENTS"//29
export const SET_APPOINTMENTS="SET_APPOINTMENTS"//30

export const GET_SPECIALTY_HOSP="GET_SPECIALTY_HOSP"//31
export const SET_SPECIALTY_HOSP="SET_SPECIALTY_HOSP"//32

export const GET_DOCT_SPEC="GET_DOC_SPEC"//33

export const GET_SPEC_TEST="GET_SPEC_TEST"//34
export const SET_SPEC_TEST="SET_SPEC_TEST"//35

export const GET_TEST_BY_SPEC="GET_TEST_BY_SPEC"//36


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

//22
export const getCredentials=(data)=>({
  type:GET_CREDENTIALS,
  payload:data
})

//23
export const setCredentials=(data)=>({
  type:SET_CREDENTIALS,
  payload:data
})

//24
export const bookDoct=(data)=>({
  type:BOOK_DOCTOR,
  payload:data
})

//25
export const bookTest=(data)=>({
  type:BOOK_TEST,
  payload:data
})

//26
export const getTestDesc=(data)=>({
  type:GET_TEST_DESC,
  payload:data
})

//27
export const setTestDesc=(data)=>({
  type:SET_TEST_DESC,
  payload:data
})

//28
export const changePass=(data)=>({
  type:CHANGE_PASS,
  payload:data
})

//29
export const getAppointments=(data)=>({
  type:GET_APPOINTMENTS,
  payload:data
})

//30
export const setAppointments=(data)=>({
  type:SET_APPOINTMENTS,
  payload:data
})

//31
export const getSpecialty=(data)=>({
  type:GET_SPECIALTY_HOSP,
  payload:data
})

//32
export const setSpecialty=(data)=>({
  type:SET_SPECIALTY_HOSP,
  payload:data
})

//33
export const getDoctSpec=(data)=>({
  type:GET_DOCT_SPEC,
  payload:data
})

//34
export const getTestSpec=(data)=>({
  type:GET_SPEC_TEST,
  payload:data
})

//35
export const setTestSpec=(data)=>({
  type:SET_SPEC_TEST,
  payload:data
})

//36
export const getTestBySpec=(data)=>({
  type:GET_TEST_BY_SPEC,
  payload:data
})