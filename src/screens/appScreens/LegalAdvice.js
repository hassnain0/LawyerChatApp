import React, { Component } from "react";
import { View, Text, TextInput, Dimensions, Button } from "react-native";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import database from "@react-native-firebase/database";
import Toast from "react-native-simple-toast";
import ButtonLegalAdvice from "../../components/ButtonLegalAdvice";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

class LegalAdvice extends Component {
  state = {
    QuestionInput: "",
    HeadingInput: "",
    TopicInput: "",
    CityInput: "",
    userData: {},
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
    database()
      .ref(`Legal Advice/${this.state.id}`)
      .push()
      .set({
        question: this.state.QuestionInput,
        heading: this.state.HeadingInput,
        topic: this.state.TopicInput,
        city: this.state.CityInput,
        email: this.state.userData.email,
        name: this.state.userData.firstName.concat(
          ` ${this.state.userData.lastName}`
        ),
      })
      .then(() => {
        Toast.show("Submitted Successfully");
        this.props.navigation.navigate("UserScreen");
      });
  };
  render() {
    return (
      <View style={styles.containerStyle}>
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
        <View style={styles.textInputContainerSmall}>
          <TextInput
            placeholder="Choose Topic"
            placeholderTextColor="rgb(180, 180, 180)"
            style={{ fontSize: 16 }}
            value={this.state.TopicInput}
            onChangeText={(text) => this.setState({ TopicInput: text })}
            multiline={true}
          />
        </View>
        <View style={styles.textInputContainerSmall}>
          <TextInput
            placeholder="Type Nearest City "
            placeholderTextColor="rgb(180, 180, 180)"
            style={{ fontSize: 16 }}
            value={this.state.CityInput}
            onChangeText={(text) => this.setState({ CityInput: text })}
            multiline={true}
            maxLength={40}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <ButtonLegalAdvice onPress={() => this.onButtonPress()}>
            Submit
          </ButtonLegalAdvice>
          <ButtonLegalAdvice
            onPress={() => this.props.navigation.navigate("UserScreen")}
          >
            Cancel
          </ButtonLegalAdvice>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textInputContainerLarge: {
    height: Height * 0.21,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,

    borderColor: "lightgrey",
    borderWidth: 1,
  },
  textInputContainerSmall: {
    height: Height * 0.08,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,

    borderColor: "lightgrey",
    borderWidth: 1,
  },
};

export default LegalAdvice;
