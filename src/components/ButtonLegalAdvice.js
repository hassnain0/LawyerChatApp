import React from "react";
import { Dimensions, Text, TouchableHighlight, View } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const ButtonLegalAdvice = ({ onPress, children, value }) => {
  return (
    <TouchableHighlight
      // disabled={value}
      underlayColor="null"
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <View>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: "#379F00",
    height: 0.06 * Height,
    width: Width * 0.4,
    margin: 0.02 * Height,
  },
};

export default ButtonLegalAdvice;
