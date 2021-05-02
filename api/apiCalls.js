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
    const res = await api.get(".../...");
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