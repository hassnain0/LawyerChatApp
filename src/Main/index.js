import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import AuthNav from "src/screens/authScreens/authNav";
import AppScreen from "src/screens/appScreens";
import firestore from "@react-native-firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "src/redux/actions/appActions.js";
import { ActivityIndicator, View } from "react-native";
const Main = () => {
  // User status in state
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [listener, setListener] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.app.user);
  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    //Listen state changes
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  useEffect(() => {
    const load = async () => {
      if (user) {
        firestore()
          .collection("Users")
          .doc(user.uid)
          .onSnapshot((result) => {
            dispatch(setUserInfo({ ...result.data(), uid: result.id }));
          });
      }
    };
    load();
  }, [user]);
  if (initializing) {
    return null;
  }
  //Return navigator on loggged state
  return user ? (
    userData ? (
      <AppScreen />
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator color={"#000"} size="large" />
      </View>
    )
  ) : (
    <AuthNav />
  );
};

export default Main;
