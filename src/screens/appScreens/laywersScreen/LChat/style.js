import { StyleSheet, Dimensions } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
export default StyleSheet.create({
  main: {
    flex: 1,
  },
  routeView: {
    flex: 2,
  },
  vechileView: {
    flex: 2.5,
  },
  lowerPart: {
    flex: 4,
  },
  displacement: { marginTop: 10 },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonT: {
    backgroundColor: "#D72439",
    marginLeft: Width * 0.18,
    marginRight: Width * 0.18,
    marginTop: Height * 0.015,
    marginBottom: Height * 0.015,
    borderWidth: 0.001,
    borderRadius: 15,
  },
  recieptButtons: {
    flexDirection: "row",
    backgroundColor: "green",
    margin: 20,
    borderWidth: 0.001,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  bottomText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    color: "grey",
    alignSelf: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: Width,
    height: Height * 0.099,
  },
  bottomBar1: {
    flexDirection: "row",
    width: Width * 0.9,
    marginLeft: Width * 0.05,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.22,
    elevation: 3,
  },
  recieptImage: {
    width: Width * 0.7,
    marginLeft: Width * 0.15,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.22,
    elevation: 3,
  },
  bottomBar11: {
    flexDirection: "column",
  },
});
