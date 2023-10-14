import React from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import { Colors, Images } from "src/Utils";
import { Button } from "src/components/index";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native-elements";
const Welcome = () => {
  let navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: Colors.greyColor }]}>
      <Header
        containerStyle={{
          margin: 0,
          padding: 0,
          backgroundColor: Colors.greyColor,
          justifyContent: "space-around",
          borderBottomColor: Colors.greyColor,
        }}
        statusBarProps={{
          backgroundColor: Colors.greyColor,
          barStyle: "dark-content",
        }}
      />
      <View style={styles.logoView}>
        <Image source={Images.mainlogo} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome to Legal Way</Text>
        <Text style={styles.slogan}>Connecting clients to lawyers</Text>
      </View>
      <View style={styles.indexButtonsView}>
        <Button
          buttonStyle={styles.signUpButtonStyle}
          buttonText={"Sign Up"}
          buttonTextStyle={styles.signUpButtonTextStyle}
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          buttonStyle={[
            styles.loginButtonStyle,
            {
              backgroundColor: "#FFF",
              // elevation: 2,
              borderColor: "#ccc",
              borderWidth: StyleSheet.hairlineWidth * 2,
              marginTop: 10,
              borderRadius: 20,
            },
          ]}
          buttonText={"Log In"}
          buttonTextStyle={styles.loginButtonTextStyle}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

export default Welcome;
