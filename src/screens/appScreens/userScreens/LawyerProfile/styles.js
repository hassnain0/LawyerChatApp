import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textStyle: {
    fontSize: 15.5,
    marginTop: 10,
    color: "rgba(0,0,0,0.6)",
    textAlign: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 70,
    resizeMode: "cover",
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "90%",
    alignSelf: "center",
    height: 55,
    borderRadius: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
