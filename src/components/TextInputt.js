import React, { Component } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

class TextInputt extends Component {
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        placeholderTextColor="rgb(180, 180, 180)"
        style={{
          fontSize: 16,
          borderColor: "black",
          borderWidth: 0.5,
          width: Width * this.props.length,
          height: Height * 0.06,
          paddingLeft: Width * 0.04,
          borderColor: this.props.state ? "red" : "black",
        }}
        placeholderTextColor="grey"
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        value={this.props.val}
        onChangeText={(text) => this.props.action(text)}
      />
    );
  }
}

export default TextInputt;
