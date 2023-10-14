import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  loading: {
    height: 30,
    width: 30,
  },
  headerView: {
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingRight: 30,
    paddingLeft: 5,
  },
  headerTitleView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleText: {
    color: "#0E141E",
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Medium',
    alignSelf: "center",
  },
});
