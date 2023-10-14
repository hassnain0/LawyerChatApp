import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

class ImagePickerr extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.insideView}>
          <TouchableOpacity onPress={this.props.onPress}>
            {this.props.icon}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    borderWidth: 3,
    width: Width * 0.6,
    height: Height * 0.11,
    borderRadius: 5,
    borderColor: "lightgrey",
    flexDirection: "row",
  },
  text: {
    fontSize: 17,
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "bold",
  },
  insideView: {
    margin: Width * 0.02,
  },
};

export default ImagePickerr;
