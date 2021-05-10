import axios from "axios";
import { TextPropTypes } from "react-native";
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

export const getHospitals = async () => {
  try {
    const res = await api.get("/user/hospital");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDoctors = async (data) => {
  try {
    console.log("data in APIgetDoct : " + data);
    const id = data;
    const res = await api.get(`user/hospital/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLabs = async () => {
  try {
    const res = await api.get("/user/lab");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTestLabs = async (data) => {
  try {
    console.log("data in GetTestLabs : " + data);
    const id = data;
    const res = await api.get(`user/lab/${id}`);
    return res.data.tests;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (data) => {
  try {
    console.log("data in GetProfile : " + data);
    const id = data;
    const res = await api.get(`user/doctor/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (data) => {
  try {
    console.log("data in editProfile : " + data.id);
    const id = data.id;
    const res = await api.put(`user/editprofile/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCredentials = async (data) => {
  try {
    const id = data;
    const res = await api.get(`user/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const bookDoctor=async(data)=>{
  try{
    console.log("data in book : "+ data);
    const res=await api.post("/appointment/hospital",data);
    return res.data;
    
  }
  catch(error){
  console.log(error);
  }
};

export const getTestDesc = async (data) => {
  try {
    console.log("data in TestDesc: " + data);
    const res = await api.get(`user/test/${data}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const bookTestLab = async (data) => {
  try {
    console.log("data in book test : ");
    console.log(data);
    const res = await api.post("/appointment/lab", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changePass = async (data) => {
  try {
    const id = data.sid;
    console.log(id + " in chanfepass");
    console.log(data);
    const res = await api.put(`/user/changepassword/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAppointments = async (data) => {
  try {
    console.log("in appointemnet " + data);
    const res = await api.get(`/appointment/${data}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecialties = async (data) => {
  try {
    const res = await api.get(`user/doctor/specialty/${data}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDoctorSpec = async (data) => {
  try {
    const id = data.id;
    const spec = data.spec;
    const res = await api.get(
      `user/doctorbyspecialty?id=${id}&specialty=${spec}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecTest = async (data) => {
  try {
    const res = await api.get(`user/test/type/${data}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTestBySpec = async (data) => {
  try {
    const id = data.id;
    const type = data.type;
    const res = await api.get(`user/testbytype?id=${id}&type=${type}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword=async(data)=>{
  try{
    const res=await api.post('/send/mail/link',data)
    return res.data;
  }catch(error){
    console.log(error);
  }
}