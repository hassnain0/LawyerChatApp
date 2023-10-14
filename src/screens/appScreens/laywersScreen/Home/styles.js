import { StyleSheet, Dimensions } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFF",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    height: 50,
    width: Width * 0.8,
    margin: 0.05 * Height,
    flexDirection: "row",
  },
  buttonIcon: {
    marginRight: 10,
  },
});
