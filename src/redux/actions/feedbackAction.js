import database from "@react-native-firebase/database";
import Toast from "react-native-simple-toast";

export const feed_back = (value) => {
  return {
    type: "Feedback",
    payload: value,
  };
};

export const feedback_submitted = (textt, id) => async (dispatch) => {
  database()
    .ref(`Feedback/${id}`)
    .push()
    .set({
      feedback: textt,
    })
    .then(() => {
      Toast.show("Submitted Successfully");
    });
  dispatch({ type: "submit" });
};
