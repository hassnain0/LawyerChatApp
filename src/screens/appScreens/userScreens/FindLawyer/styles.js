import { StyleSheet, Dimensions } from "react-native";
const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  picker: {
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
  },
  chooseTitle: {
    fontSize: 18,
    marginLeft: "5%",
    marginVertical: 6,
    marginTop: 12,
  },
  cardStyle: {
    backgroundColor: "white",
    width: Width * 0.88,
    marginTop: 25,
    borderRadius: 5,
    alignSelf: "center",
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
    textAlign: "center",
    color: "rgb(6,138,249)",
  },
  textStyle: {
    fontSize: 15.5,
    marginTop: 10,
  },
  noLawyer: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 40,
  },
  noLawyerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  lawyersView: {
    flex: 1,
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    alignSelf: "center",
    borderRadius: 70,
    resizeMode: "cover",
    marginBottom: 10,
  },
});
