import React, { Component } from "react";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import database from "@react-native-firebase/database";
import storage from "@react-native-firebase/storage";
import firebase from "@react-native-firebase/app";
import ContentLoader from "react-content-loader";
import LoadingScreen from "../../components/LoadingScreen";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

class FindLawyer extends Component {
  state = {
    userDetails: [],
    array: [],
    check: false,
    userId: null,
  };

  async componentDidMount() {
    let val = firebase.auth().currentUser.uid;
    this.setState({ userId: val });

    await database()
      .ref("/Lawyers")
      .once("value")
      .then((snapshot) => {
        this.setState({ userDetails: snapshot.val() });
      });
    var obj = this.state.userDetails;
    var arr = [];
    for (var i in obj) arr.push(obj[i]);
    this.setState({ array: arr });
    this.setState({ check: true });
  }

  renderCards = () => {
    return this.state.array.map((user) => {
      return (
        <View key={user.mobile_no} style={{ alignItems: "center" }}>
          <View style={styles.cardStyle}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: user.Url }}
                style={{ width: 70, height: 70 }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.nameStyle}>{user.name}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.textStyle}>
                Experience(Years):{user.experience}
              </Text>
              <Text style={styles.textStyle}>City: {user.city}</Text>
              <Text style={styles.textStyle}>
                Specializations: {user.education}
              </Text>
              <Text style={styles.textStyle}>
                Education Details: {user.education}
              </Text>
              <Text style={styles.textStyle}>
                Mobile Number : {user.mobile_no}
              </Text>
            </View>
          </View>
        </View>
      );
    });
  };

  render() {
    console.log(this.state.array);
    return (
      <ScrollView>
        <View>{this.state.check ? this.renderCards() : <LoadingScreen />}</View>
      </ScrollView>
    );
  }
}

const styles = {
  cardStyle: {
    backgroundColor: "white",
    height: Height * 0.35,
    width: Width * 0.88,
    marginTop: 25,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    padding: 15,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "rgb(6,138,249)",
  },
  textStyle: {
    fontSize: 15.5,
    marginTop: 10,
  },
};

export default FindLawyer;
