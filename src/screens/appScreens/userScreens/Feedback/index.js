import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  feed_back,
  feedback_submitted,
} from "src/redux/actions/feedbackAction";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconM from "react-native-vector-icons/Feather";
import Button2 from "src/components/Button2";
import { connect } from "react-redux";
import firebase from "@react-native-firebase/app";
import { Header } from "react-native-elements";

console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
console.disableYellowBox = true;
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

class Feedback extends Component {
  state = {
    userId: null,
  };
  async componentDidMount() {
    let val = await firebase.auth().currentUser.uid;
    this.setState({ userId: val });
  }

  navigate = () => {
    if (this.props.check) this.props.navigation.navigate("WelcomeScreen");
    return null;
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          barStyle="dark-content"
          leftComponent={
            <TouchableOpacity
              activeOpacity={1}
              style={{ paddingRight: 50 }}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <IconM name={"menu"} size={20} color={"#000"} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Home",
            style: {
              color: "black",
              fontSize: 17,
              //fontFamily: 'AirbnbCerealApp-Medium',
              alignSelf: "center",
              fontWeight: Platform.OS === "android" ? "bold" : null,
            },
          }}
          containerStyle={{
            margin: 0,
            padding: 0,
            backgroundColor: "#FFF",
            justifyContent: "space-around",
            borderBottomColor: "#ccc",
          }}
          statusBarProps={{
            backgroundColor: "#FFF",
            barStyle: "dark-content",
          }}
        />
        <View style={styles.box1}>
          <Icon
            name="information-outline"
            size={45}
            style={{ justifyContent: "center" }}
          />
          <Text style={{ paddingLeft: Width * 0.015 }}>
            Welcome to 'Legal Way' help & support.Please know all complaints
            will be registered and escalated with the relevant internal team.If
            your request meets our refund requirements,we will also issue an
            instant refund
          </Text>
        </View>
        <View style={{ padding: Height * 0.032 }}>
          <Text style={{ color: "grey" }}>Title</Text>
          <Text style={{ paddingTop: Width * 0.015 }}>Other</Text>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Suggestion"
            placeholderTextColor="rgb(180, 180, 180)"
            style={{ fontSize: 18 }}
            value={this.props.textt}
            onChangeText={(text) => this.props.feed_back(text)}
            multiline={true}
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <Button2
            onPress={() =>
              this.props.feedback_submitted(this.props.textt, this.state.userId)
            }
          >
            Submit
          </Button2>
        </View>
        {this.navigate()}
      </View>
    );
  }
}

const styles = {
  container: {
    // paddingTop: Height * 0.08,
    //flexDirection:'column',
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)",
  },
  box1: {
    marginTop: 30,
    height: Height * 0.18,
    width: Width * 0.9,
    backgroundColor: "#cccccc",
    padding: Width * 0.07,
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  textInputStyle: {
    fontSize: 18,
  },
  textInputContainer: {
    height: Height * 0.23,
    backgroundColor: "white",
    width: Width * 0.9,
    borderRadius: 4,
    alignSelf: "center",
  },
};

const mapStateToProps = ({ feedback_Reducer }) => {
  const { textt, check } = feedback_Reducer;
  return { textt, check };
};

export default connect(mapStateToProps, {
  feed_back,
  feedback_submitted,
})(Feedback);
