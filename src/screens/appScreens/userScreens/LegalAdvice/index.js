import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import database from "@react-native-firebase/database";
import Toast from "react-native-simple-toast";
import ButtonLegalAdvice from "src/components/ButtonLegalAdvice";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import { KeyboardAvoidingView } from "react-native";
import { Colors } from "src/Utils";
import RNPickerSelect from "react-native-picker-select";
import { Constants } from "src/Utils";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import SelectMultiple from "react-native-select-multiple";
import { connect } from "react-redux";
class LegalAdvice extends Component {
  state = {
    QuestionInput: "",
    HeadingInput: "",
    TopicInput: Constants.types[0],
    CityInput: Constants.cities[0],

    id: null,
  };
  componentDidMount() {
    let val = firebase.auth().currentUser.uid;
    console.log("id", val);
    this.setState({ id: val });
    firestore()
      .collection("Users")
      .doc(`${val}`)
      .get()
      .then((snapshot) => this.setState({ userData: snapshot.data() }));
  }
  onButtonPress = () => {
    firestore().collection("Advices").add({
      question: this.state.QuestionInput,
      heading: this.state.HeadingInput,
      topic: this.state.TopicInput,
      city: this.state.CityInput,
      user_id: firebase.auth().currentUser.uid,
    });
    this.props.navigation.goBack();
    Alert.alert("Success", "Question posted successfully", [{ text: "ok" }]);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          barStyle="dark-content"
          leftComponent={
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name={"chevron-left"} size={33} color={"#000"} />
            </TouchableOpacity>
          }
          centerComponent={
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "black",
                  fontSize: 22,
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                Legal Advice
              </Text>
            </View>
          }
          containerStyle={{
            margin: 0,
            padding: 0,
            backgroundColor: Colors.lightG,
            justifyContent: "space-around",
            borderBottomColor: Colors.charcoalGrey,
            borderBottomWidth: 1,
          }}
          statusBarProps={{
            backgroundColor: Colors.lightG,
            barStyle: "dark-content",
          }}
        />

        {/* <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}> */}
        <ScrollView
          style={styles.containerStyle}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={styles.textInputContainerLarge}>
            <TextInput
              placeholder="Ask Question/Problem"
              placeholderTextColor="rgb(180, 180, 180)"
              style={{ fontSize: 16 }}
              value={this.state.QuestionInput}
              onChangeText={(text) => this.setState({ QuestionInput: text })}
              multiline={true}
            />
          </View>
          <View style={styles.textInputContainerSmall}>
            <TextInput
              placeholder="Heading"
              placeholderTextColor="rgb(180, 180, 180)"
              style={{ fontSize: 16 }}
              value={this.state.HeadingInput}
              onChangeText={(text) => this.setState({ HeadingInput: text })}
              multiline={true}
              maxLength={40}
            />
          </View>
          <View style={styles.picker}>
            <RNPickerSelect
              onValueChange={(value) => this.setState({ TopicInput: value })}
              items={Constants.types.map((v) => ({ label: v, value: v }))}
              value={this.state.TopicInput}
              style={styles.picker}
            />
          </View>
          <View style={styles.textInputContainerSmall}>
            <RNPickerSelect
              onValueChange={(value) => this.setState({ CityInput: value })}
              items={Constants.cities.map((v) => ({ label: v, value: v }))}
              value={this.state.CityInput}
              style={styles.picker}
            />
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <ButtonLegalAdvice onPress={() => this.onButtonPress()}>
              Submit
            </ButtonLegalAdvice>
            <ButtonLegalAdvice onPress={() => this.props.navigation.goBack()}>
              Cancel
            </ButtonLegalAdvice>
          </View>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    // alignItems: "center",
  },
  textInputContainerLarge: {
    height: Height * 0.21,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,
    marginTop: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  textInputContainerSmall: {
    height: Height * 0.08,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,
    marginTop: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  picker: {
    height: Height * 0.08,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,
    marginTop: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
};

export default connect((state) => ({ user: state.app.user }))(LegalAdvice);
