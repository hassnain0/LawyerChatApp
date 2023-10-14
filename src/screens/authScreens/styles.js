import { Platform, StyleSheet } from "react-native";
import { Colors, Metrics } from "src/Utils";
import { ifIphoneX } from "react-native-iphone-x-helper";
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 17,
    color: "#333E43",
    //fontFamily: 'SFProDisplay-Bold',
  },

  // INDEX //
  container: {
    flex: 1,
    backgroundColor: "#FFF",

    // Colors.greyColor
  },
  logoView: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  },
  logo: {
    height: Metrics.screenHeight * 0.4,
    width: Metrics.screenWidth * 0.8,
    resizeMode: "contain",
    bottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    //fontFamily: 'AirbnbCerealApp-Bold',
    color: "#0E141E",
    fontWeight: "bold",
  },
  slogan: {
    paddingTop: 5,
    fontSize: 16,
    //fontFamily: 'AirbnbCerealApp-Book',
    color: "white",
  },
  bottomButtonsView: {
    position: "absolute",
    bottom: 15,
    flex: 1,
    width: "100%",
  },
  indexButtonsView: {
    position: "absolute",
    bottom: 40,
    flex: 1,
    width: "100%",
  },
  signUpButtonStyle: {
    width: "80%",
    height: 44,
    backgroundColor: Colors.Black,
    borderRadius: 22,
    alignSelf: "center",
    justifyContent: "center",
  },
  singleButtonStyle: {
    width: "80%",
    height: 44,
    backgroundColor: Colors.Black,
    borderRadius: 22,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signUpButtonTextStyle: {
    textAlign: "center",
    alignSelf: "center",
    color: "#FFF",
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Bold',

    fontWeight: "bold",
  },
  loginButtonStyle: {
    width: "80%",
    height: 44,
    backgroundColor: Colors.greyColor,
    alignSelf: "center",
    justifyContent: "center",
    top: 10,
  },
  loginButtonTextStyle: {
    textAlign: "center",
    alignSelf: "center",
    color: "#0E141E",
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Bold',

    fontWeight: "bold",
  },

  // TEXTINPUT STYLE //
  textInputStyle: {
    borderBottomColor: Colors.charcoalGrey,
    borderBottomWidth: 1,
    width: "92%",
    height: 50,
    alignSelf: "center",
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Book',
    color: "#000",
  },

  // SIGN UP SCREEN //
  checkBoxView: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
  },
  agreeCondition: {
    alignSelf: "center",
    //fontFamily: 'AirbnbCerealApp-Book',
    fontSize: 16,
    color: Colors.appBlack,
    paddingLeft: 10,
  },

  legalLinks: {
    //fontFamily: 'AirbnbCerealApp-Book',
    fontSize: 16,
    color: Colors.appBlack,
    textDecorationLine: "underline",
  },

  // LOG IN SCREEN //
  loginWelcomeText: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    //fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 17,
    color: "#0E141E",
    fontWeight: Platform.OS === "android" ? "bold" : null,
  },
  forgotPasswordText: {
    padding: 20,
    textDecorationLine: "underline",
    fontSize: 16,
    //fontFamily: 'AirbnbCerealApp-Book',

    color: "#0E141E",
  },
  warningView: {
    flexDirection: "row",
    padding: 10,
    left: 10,
  },
  warnImage: {
    height: 20,
    width: 20,
    alignSelf: "center",
    resizeMode: "contain",
  },
  warnText: {
    color: Colors.appGrey,
    //fontFamily: 'AirbnbCerealApp-Book',
    fontSize: 16,
    marginLeft: 5,
  },
  underline: {
    textDecorationLine: "underline",
  },

  // FORGOT PASSWORD SCREEN //
  resetInstructionsText: {
    width: "92%",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    //fontFamily: 'AirbnbCerealApp-Book',
    marginBottom: 60,
    marginTop: 50,
    color: "#0E141E",
  },
  headerView: {
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    paddingRight: 30,
    paddingLeft: 10,
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
  loadingView: {
    marginBottom: 30,
    backgroundColor: Colors.lightG,
  },
});

export default styles;
