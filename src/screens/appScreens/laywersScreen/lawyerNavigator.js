import React from "react";
import { Button, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconA from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Feedback from "./Feedback";
import Logout from "./Logout";
import Home from "./Home";
import ClientResponse from "./ClientResponse";
import EditProfile from "./LawyerScreen";
import LChat from "./LChat";
import MyChat from "./LChat/MyChat";
import ClientChat from "./ClientResponse/ClientChat";
import LawyerProfile from "./LawyerProfile";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import auth from "@react-native-firebase/auth";
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      drawerContent={(props) => customDrawerContent(props)}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LChat" component={LChat} />
      <Stack.Screen name="ClientResponse" component={ClientResponse} />
      <Stack.Screen name="ClientChat" component={ClientChat} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={{ title: null }}
      />
      <Stack.Screen
        name="LawyerProfile"
        component={LawyerProfile}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

const index = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => customDrawerContent(props)}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Logout" component={Logout} />
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
