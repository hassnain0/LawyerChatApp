const INITIAL_STATE = {
  textt: "",
  check: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Feedback":
      return { ...state, textt: action.payload, check: false };
    case "submit":
      return { ...state, check: true, textt: "" };
    default:
      return state;
  }
};
