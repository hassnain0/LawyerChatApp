import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ChooseRole from "./chooseRole";
import LawyerScreen from "./LawyerScreen";
import LawyerNav from "src/screens/appScreens/laywersScreen/lawyerNavigator.js";
import UserNav from "src/screens/appScreens/userScreens/userNavigator.js";
const App = () => {
  const user = useSelector((state) => state.app.user);

  switch (user.role) {
    case "lawyer":
      if (user.registrationComplete) return <LawyerNav />;
      return <LawyerScreen />;
    case "user":
      return <UserNav />;
    default:
      return <ChooseRole />;
  }
};

export default App;
