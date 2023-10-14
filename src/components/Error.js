import React from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const Height= Dimensions.get('window').height;
const Error = ({ text }) => {
  return (
    <View style={styles.errorTextStyle}>
      <Icon name="error" size={27} color="red" />
      <Text style={styles.error}>{text}</Text>
    </View>
  );
};

const styles = {
  errorTextStyle: {
    alignSelf: "center",
    flexDirection: "row",
   // top:Height*0.6,
    //backgroundColor:'red',
    marginTop:20
  },
  error: {
    fontSize: 20,
    color: "red",
    paddingLeft:4
  }
};

export default Error;
