import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { Header } from "react-native-elements";
import { Button, Loading } from "src/components/index";
import { Colors, Images, Validation } from "src/Utils";
import styles from "./styles";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailEmpty: false,
      passwordEmpty: false,
      invalidEmail: false,
      showIndicator: false,
    };
  }

  login = () => {
    const { email, password } = this.state;
    if (email.length == 0) {
      this.setState({ emailEmpty: true });
    }
    if (Validation.Email(email) === "Invalid email format") {
      this.setState({ invalidEmail: true });
    }
    if (password.length == 0) {
      this.setState({ passwordEmpty: true });
    }
    if (email.length !== 0 && password.length !== 0) {
      this.setState({ showIndicator: true });
      return auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log("Logged in");
          if (response.user.emailVerified === true) {
            this.setState({ email: "", password: "", showIndicator: false });
          } else {
            Alert.alert(
              "Email Not Verified",
              "Please check your inbox for a verification link.",
              [
                {
                  text: "Resend Email",
                  onPress: () => response.user.sendEmailVerification(),
                  style: "cancel",
                },
                {
                  text: "Done",
                  onPress: console.log("Done"),
                  style: "default",
                },
              ],
              { cancelable: false }
            );
          }
        })
        .catch((error) => {
          this.setState({ showIndicator: false });
          if (error.code === "auth/user-not-found") {
            alert("That Bolt account does not exist.");
            this.setState({ showIndicator: false });
          }
          if (error.code === "auth/invalid-email") {
            alert("Invalid email");
            this.setState({ showIndicator: false });
          }
          if (error.code === "auth/wrong-password") {
            alert("Your password is incorrect.");
            this.setState({ showIndicator: false });
          }
        });
    }
  };

  emptyFieldWarning = () => {
    return (
      <View style={styles.warningView}>
        <Image source={Images.warn} style={styles.warnImage} />
        <Text style={styles.warnText}> Input required</Text>
      </View>
    );
  };

  invalidEmail() {
    return (
      <View style={styles.warningView}>
        <Image source={Images.warn} style={styles.warnImage} />
        <Text style={styles.warnText}> Invalid Email</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.lightG }}>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <Header
          leftComponent={
            <TouchableOpacity
              activeOpacity={1}
              style={{ paddingRight: 50 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={Images.back}
                style={{
                  height: 17,
                  width: 17,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Login",
            style: {
              color: Colors.appBlack,
              fontSize: 17,
              //fontFamily: 'AirbnbCerealApp-Medium',
              alignSelf: "center",
              fontWeight: Platform.OS === "android" ? "bold" : null,
            },
          }}
          containerStyle={{
            margin: 0,
            padding: 0,
            backgroundColor: Colors.lightG,
            justifyContent: "space-around",
            borderBottomColor: Colors.appGrey,
            borderBottomWidth: 0.8,
          }}
          statusBarProps={{
            backgroundColor: Colors.lightG,
            barStyle: "dark-content",
          }}
        />
        <ScrollView keyboardDismissMode="on-drag">
          <Text style={styles.loginWelcomeText}>Welcome back!</Text>
          <TextInput
            placeholder={"Email"}
            autoCapitalize={"none"}
            placeholderTextColor="grey"
            style={styles.textInputStyle}
            maxLength={40}
            keyboardType={"email-address"}
            onChangeText={(text) => {
              this.setState({ email: text });
              if (this.state.email.length > 1) {
                this.setState({ emailEmpty: false });
              }
              if (Validation.Email(this.state.email) === "") {
                this.setState({ invalidEmail: false });
              }
            }}
            value={this.state.email}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.password.focus();
            }}
          />
          {this.state.emailEmpty && this.emptyFieldWarning()}
          {this.state.invalidEmail && this.invalidEmail()}

          <TextInput
            ref={(ref) => {
              this.password = ref;
            }}
            placeholder={"Password"}
            autoCapitalize={"none"}
            placeholderTextColor="grey"
            style={styles.textInputStyle}
            maxLength={40}
            secureTextEntry={true}
            onChangeText={(text) => {
              {
                this.setState({ password: text });
                if (this.state.password.length > 1) {
                  this.setState({ passwordEmpty: false });
                }
              }
            }}
            value={this.state.password}
            returnKeyType={"go"}
            onSubmitEditing={() => this.login()}
          />
          {this.state.passwordEmpty && this.emptyFieldWarning()}

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate("ResetPassword")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardAvoidingView
          style={{ flex: Platform.OS === "ios" ? 0 : 1 }}
          behavior={Platform.OS === "ios" ? "position" : null}
        >
          <View style={styles.bottomButtonsView}>
            {this.state.showIndicator === true ? (
              <View style={styles.loadingView}>
                <Loading />
              </View>
            ) : (
              <Button
                buttonText={"Sign In"}
                buttonStyle={styles.singleButtonStyle}
                buttonTextStyle={styles.signUpButtonTextStyle}
                onPress={() => this.login()}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
