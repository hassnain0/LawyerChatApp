import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Button3 from "../../components/Button3";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/FontAwesome";

class UserScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Button3
          icon={
            <Icon1
              name="search"
              size={26}
              color="white"
              style={{ right: 10 }}
            />
          }
          onPress={() => {
            this.props.navigation.navigate("FindLawyer");
          }}
        >
          Find a lawyer
        </Button3>
        <Button3
          icon={
            <Icon3 name="legal" size={22} color="white" style={{ right: 13 }} />
          }
          onPress={() => {
            this.props.navigation.navigate("LegalAdvice");
          }}
        >
          Online Legal
        </Button3>
        <Button3
          icon={
            <Icon2
              name="three-bars"
              size={22}
              color="white"
              style={{ right: 17 }}
            />
          }
          onPress={() => {
            alert("Hello");
          }}
        >
          Inbox
        </Button3>
        <Button3
          onPress={() => {
            alert("Hello");
          }}
        >
          Register as Lawyer
        </Button3>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default UserScreen;
