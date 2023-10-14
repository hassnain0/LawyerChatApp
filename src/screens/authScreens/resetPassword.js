import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import auth from "@react-native-firebase/auth";

import styles from "./styles";
import { Button, Loading } from "src/components/index";
import { Colors, Images, Theme, Validation } from "src/Utils";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailEmpty: false,
      loading: false,
    };
  }
  forgotPassword = () => {
    const { email } = this.state;
    if (email.length == 0) {
      this.setState({ emailEmpty: true });
    }
    if (Validation.Email(email) === "Invalid email format") {
      this.setState({ invalidEmail: true });
    }
    if (email.length !== 0) {
      this.setState({ loading: true });
      return auth()
        .sendPasswordResetEmail(this.state.email)
        .then((response) => {
          this.setState({ loading: false });
          Alert.alert(
            "Password Reset",
            "Check your email for password reset instructions.",
            [
              {
                text: "Done",
                onPress: this.props.navigation.navigate("Welcome"),
                style: "cancel",
              },
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            alert("That Bolt account does not exist.");
          }
          this.setState({ loading: false });
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
            text: "Password Reset",
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
        <ScrollView
          keyboardDismissMode={"on-drag"}
          style={{ backgroundColor: Colors.lightG }}
        >
          <Text style={styles.resetInstructionsText}>
            Enter your email to receive password reset instructions.
          </Text>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="grey"
            style={styles.textInputStyle}
            keyboardType={"email-address"}
            maxLength={30}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            returnKeyType={"go"}
            onSubmitEditing={() => this.forgotPassword()}
          />
          {this.state.emailEmpty && this.emptyFieldWarning()}
          {this.state.invalidEmail && this.invalidEmail()}
        </ScrollView>
        <KeyboardAvoidingView
          style={{ flex: Platform.OS === "ios" ? 0 : 1 }}
          behavior={Platform.OS === "ios" ? "position" : null}
        >
          <View style={styles.bottomButtonsView}>
            {this.state.loading ? (
              <View style={styles.loadingView}>
                <Loading />
              </View>
            ) : (
              <Button
                buttonStyle={styles.singleButtonStyle}
                buttonText={"Reset Password"}
                buttonTextStyle={styles.signUpButtonTextStyle}
                onPress={() => this.forgotPassword()}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
