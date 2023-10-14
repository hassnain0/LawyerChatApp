import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconA from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Feedback from "./Feedback";
import Home from "./Home";
import LegalAdvice from "./LegalAdvice";
import PChat from "./PChat";
import MyChat from "./ChatList/MyChat";
import ChatList from "./ChatList";
import FindLawyer from "./FindLawyer";
import LawyerProfile from "./LawyerProfile";
const StackHome = createStackNavigator();
const Drawer = createDrawerNavigator();
import auth from "@react-native-firebase/auth";
const StackHomeNav = () => {
  return (
    <StackHome.Navigator initialRouteName="Home" headerMode="none">
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome Screen" }}
      />
      <StackHome.Screen
        name="FindLawyer"
        component={FindLawyer}
        options={{ title: null }}
      />
      <StackHome.Screen
        name="MyChat"
        component={MyChat}
        options={{ title: null }}
      />
      <StackHome.Screen
        name="ChatList"
        component={ChatList}
        options={{ title: null }}
      />
      <StackHome.Screen
        name="Legal"
        component={LegalAdvice}
        options={{ title: null }}
      />
      <StackHome.Screen
        name="PChat"
        component={PChat}
        options={{ title: null }}
      />
      <StackHome.Screen
        name="LawyerProfile"
        component={LawyerProfile}
        options={{ title: null }}
      />
    </StackHome.Navigator>
  );
};
const index = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={(props) => customDrawerContent(props)}
    >
      <Drawer.Screen name="HomeStack" component={StackHomeNav} />
      <Drawer.Screen name="Feedback" component={Feedback} />
    </Drawer.Navigator>
  );
};

export default index;

function customDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Icon name="user-circle" color="silver" size={50} />
          <Text style={{ marginLeft: 30, fontSize: 20 }}>
            {auth().currentUser.displayName}
          </Text>
        </View>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="home" color="grey" size={30} />
          )}
          label="Home"
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
        <DrawerItem
          label="Feedback"
          icon={({ color, size }) => (
            <IconA name="feedback" color="grey" size={30} />
          )}
          onPress={() => {
            props.navigation.navigate("Feedback");
          }}
        />
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <IconA name="logout" color="grey" size={30} />
          )}
          onPress={() => {
            auth().signOut();
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}
