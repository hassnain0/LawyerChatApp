import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import CheckBox from "@react-native-community/checkbox";
import { Button, Loading } from "src/components/index";
import { Colors, Images, Theme, Validation } from "src/Utils";
import styles from "./styles";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      firstNameEmpty: false,
      lastNameEmpty: false,
      emailEmpty: false,
      passwordEmpty: false,
      invalidEmail: false,
      agreeCondition: false,
      showIndicator: false,
    };
  }

  signUp = async () => {
    // console.log('A');
    const { firstName, lastName, email, password, agreeCondition } = this.state;
    if (firstName.length == 0) {
      this.setState({ firstNameEmpty: true });
    }
    if (lastName.length == 0) {
      this.setState({ lastNameEmpty: true });
    }
    if (email.length == 0) {
      this.setState({ emailEmpty: true });
    }
    if (Validation.Email(email) === "Invalid email format") {
      this.setState({ invalidEmail: true });
    }
    if (password.length == 0) {
      this.setState({ passwordEmpty: true });
    }
    if (
      firstName.length !== 0 &&
      lastName.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      agreeCondition === true
    ) {
      this.setState({ showIndicator: true });
      return auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: firstName + " " + lastName,
          });

          response.user.sendEmailVerification().then(() => {
            firestore()
              .collection("Users")
              .doc(response.user.uid)
              .set({
                firstName: firstName,
                lastName: lastName,
                email: email,
              })
              .then(() => {
                Alert.alert(
                  "Account Created",
                  "Please check your email for a confirmation link.",
                  [
                    {
                      text: "Done",
                      onPress: console.log("Done"),
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                );
              });
          });
        })
        .catch((error) => {
          this.setState({ showIndicator: false });
          if (error.code === "auth/email-already-in-use") {
            alert("A Bolt account with this email already exists.");
            this.setState({ showIndicator: false });
          }
          if (error.code === "auth/invalid-email") {
            alert("Invalid email");
            this.setState({ showIndicator: false });
          }
          console.error(error);
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
      <View style={{ backgroundColor: Colors.lightG, flex: 1 }}>
        <Header
          barStyle="dark-content"
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
            text: "Sign Up",
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
        <ScrollView keyboardDismissMode={"on-drag"}>
          <TextInput
            placeholder={"First Name"}
            placeholderTextColor="grey"
            maxLength={40}
            returnKeyType={"next"}
            value={this.state.firstName}
            style={styles.textInputStyle}
            onChangeText={(text) => {
              this.setState({ firstName: text });
              if (this.state.firstName.length > 1) {
                this.setState({ firstNameEmpty: false });
              }
            }}
            onSubmitEditing={() => {
              this.lastName.focus();
            }}
          />
          {this.state.firstNameEmpty && this.emptyFieldWarning()}

          <TextInput
            ref={(ref) => {
              this.lastName = ref;
            }}
            placeholder={"Last Name"}
            placeholderTextColor="grey"
            maxLength={40}
            returnKeyType={"next"}
            value={this.state.lastName}
            style={styles.textInputStyle}
            onChangeText={(text) => {
              this.setState({ lastName: text });
              if (this.state.lastName.length > 1) {
                this.setState({ lastNameEmpty: false });
              }
            }}
            onSubmitEditing={() => {
              this.email.focus();
            }}
          />
          {this.state.lastNameEmpty && this.emptyFieldWarning()}

          <TextInput
            ref={(ref) => {
              this.email = ref;
            }}
            placeholder={"Email"}
            autoCapitalize={"none"}
            placeholderTextColor="grey"
            style={styles.textInputStyle}
            keyboardType={"email-address"}
            maxLength={30}
            returnKeyType={"next"}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({ email: text });
              if (this.state.email.length > 1) {
                this.setState({ emailEmpty: false });
              }
              if (Validation.Email(this.state.email) === "") {
                this.setState({ invalidEmail: false });
              }
            }}
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
            maxLength={30}
            returnKeyType={"go"}
            onSubmitEditing={() => this.signUp()}
            secureTextEntry={true}
            style={styles.textInputStyle}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({ password: text });
              if (this.state.password.length > 1) {
                this.setState({ passwordEmpty: false });
              }
            }}
          />
          {this.state.passwordEmpty && this.emptyFieldWarning()}

          <View style={styles.checkBoxView}>
            <CheckBox
              style={{ margin: 5, width: 30, height: 30 }}
              disabled={false}
              boxType="square"
              lineWidth={1}
              // Android config
              tintColors={{ true: "#377DFF", false: "#ccc" }}
              // iOS config
              tintColor="#cccccc"
              onCheckColor="#FFF"
              onFillColor="#377DFF"
              onTintColor="#377DFF"
              // End iOS config
              value={this.state.agreeCondition}
              onValueChange={() =>
                this.setState({ agreeCondition: !this.state.agreeCondition })
              }
            />
            <Text style={styles.agreeCondition}>
              I agree to the{" "}
              <Text
                style={styles.legalLinks}
                onPress={() => console.log("Terms")}
              >
                Terms
              </Text>{" "}
              and{" "}
              <Text
                style={styles.legalLinks}
                onPress={() => console.log("Privacy")}
              >
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
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
                buttonText={"Sign Up"}
                onPress={() => this.signUp()}
                buttonStyle={styles.singleButtonStyle}
                buttonTextStyle={styles.signUpButtonTextStyle}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
