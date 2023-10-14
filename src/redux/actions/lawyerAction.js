import database from "@react-native-firebase/database";

import firebase from "@react-native-firebase/app";
import { exp } from "react-native-reanimated";
import firestore from "@react-native-firebase/firestore";
export const setName = (text) => {
  return {
    type: "SetName",
    payload: text,
  };
};

export const setGender = (value) => {
  return {
    type: "SetGender",
    payload: value,
  };
};
export const setNumber = (value) => {
  return {
    type: "SetNumber",
    payload: value,
  };
};

export const setAddress = (value) => {
  return {
    type: "SetAddress",
    payload: value,
  };
};

export const setCity = (value) => {
  return {
    type: "SetCity",
    payload: value,
  };
};

export const setLicense = (value) => {
  return {
    type: "SetLicense",
    payload: value,
  };
};

export const setEducation = (value) => {
  return {
    type: "SetEducation",
    payload: value,
  };
};

export const setExperience = (value) => {
  return {
    type: "SetExperience",
    payload: value,
  };
};
export const setSpecialization = (value) => {
  return {
    type: "SetSpecialization",
    payload: value,
  };
};

export const submit = (
  name,
  userId,
  gender,
  number,
  address,
  city,
  license,
  education,
  experience,
  Url,
  specialization
) => async (dispatch) => {
  if (name.length < 1) {
    return alert("Please enter name");
  } else if (gender == "not specified") {
    return alert("Please enter name");
  } else {
    if (Url) {
      firestore()
        .collection("Users")
        .doc(userId)
        .update({
          name: name,
          gender: gender,
          mobile_no: number,
          address: address,
          city: city,
          license: license,
          education: education,
          experience: experience,
          userId: userId,
          Url: Url,
          registrationComplete: true,
          specialization,
        })
        .then(() => {
          console.log("Data set.");
          dispatch({ type: "Submit" });
        });
    } else {
      firestore()
        .collection("Users")
        .doc(userId)
        .update({
          name: name,
          gender: gender,
          mobile_no: number,
          address: address,
          city: city,
          license: license,
          education: education,
          experience: experience,
          userId: userId,
          registrationComplete: true,
          specialization,
        })
        .then(() => {
          console.log("Data set.");
          dispatch({ type: "Submit" });
        });
    }
  }
};
