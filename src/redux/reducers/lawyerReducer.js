const INITIAL_STATE = {
  textt: "",
  gender: "Not provided",
  number: "",
  address: "",
  city: "Lahore",
  license: "",
  submit: false,
  education: "",
  experience: "",
  specialization: [],
  id: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SetName":
      return { ...state, textt: action.payload };
    case "SetGender":
      return { ...state, gender: action.payload };
    case "SetNumber":
      return { ...state, number: action.payload };
    case "SetAddress":
      return { ...state, address: action.payload };
    case "SetCity":
      return { ...state, city: action.payload };
    case "SetLicense":
      return { ...state, license: action.payload };
    case "Submit":
      return { ...state, submit: true };
    case "SetEducation":
      return { ...state, education: action.payload };
    case "SetExperience":
      return { ...state, experience: action.payload };
    case "SetSpecialization":
      return { ...state, specialization: action.payload };
    case "UserID":
      return { ...state, id: action.payload };

    default:
      return state;
  }
};
