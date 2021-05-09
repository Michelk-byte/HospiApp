import api from "./index";

export const CheckLogIn = async (data) => {
  try {
    const res = await api.post("/user/login", data);
    // console.log(res);
    return res.data;
  } catch (error) {
    return -1;
  }
};

export const SignUp = async (data) => {
  try {
    const res = await api.post("/user/signup", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    const res = await api.post("/user/signout");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHospitals= async () =>{
  try{
    const res=await api.get("/user/hospital");
    return res.data;
  }
  catch(error){
    console.log(error);
  }
}

export const getDoctors=async (data) =>{
  try{
    console.log("data in APIgetDoct : "+ data);
    const id=data
    const res=await api.get(`user/hospital/${id}`);
    return res.data;
  }
  catch(error){
    console.log(error);
  }
}

export const getLabs= async () =>{
  try{
    const res=await api.get("/user/lab");
    return res.data;
  }
  catch(error){
    console.log(error);
  }
}

export const getTestLabs=async (data) =>{
  try{
    console.log("data in GetTestLabs : "+ data);
    const id=data
    const res=await api.get(`user/lab/${id}`);
    return res.data.tests;
  }
  catch(error){
    console.log(error);
  }
}

export const getProfile=async (data) =>{
  try{
    console.log("data in GetProfile : "+ data);
    const id=data
    const res=await api.get(`user/doctor/${id}`);

    return res.data;
  }
  catch(error){
    console.log(error);
  }
}

export const editProfile=async(data)=>{
  try{
    console.log("data in GetProfile : "+ data);
    const id=data
    const res=await api.get(`user/editprofile/${id}`,data);
    return res.data;
  }
  catch(error){
    console.log(error);
  }
}
