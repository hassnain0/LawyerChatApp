import { combineReducers } from "redux";
import authReducer from "src/redux/reducers/authReducer";
import appReducer from "src/redux/reducers/appReducer";
import lawyerReducer from "./lawyerReducer";
import feedbackReducer from "./feedbackReducer";
import chatReducer from "./chatReducer";
export default combineReducers({
  auth: authReducer,
  app: appReducer,
  ChatList: chatReducer,
  lawyerdata: lawyerReducer,
  feedback_Reducer: feedbackReducer,
});
