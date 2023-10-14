import {Platform, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const theme = {
  // Bottom Tab Navigation //
  tabBarStyle: {
    height: Platform.OS === 'ios' ? ifIphoneX(83, 49) : 48,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#fff',
    position: 'absolute',
    borderTopColor: '#CCCCCC',
  },
  tabBarIcons: {height: 25, width: 25, resizeMode: 'contain'},

  // iOS 13 Modal //
  modalHeaderStyle: {
    height: 56,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalHeaderStyleNoLine: {
    height: 56,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalHeaderTitle: {
    textAlign: 'center',
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Bold',
    alignSelf: 'center',
    color: '#0E141E',
  },
  modalCloseButton: {
    height: 18,
    width: 18,
    paddingHorizontal: 15,
    paddingVertical: 9,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  modalCloseButtonOnPress: {
    alignSelf: 'center',
    position: 'absolute',
    right: 15,
  },
  modalBackButton: {
    height: 20,
    width: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  modalBackButtonOnPress: {
    alignSelf: 'center',
    position: 'absolute',
    left: 15,
  },
  modalFilterButtonOnPress: {
    alignSelf: 'center',
    position: 'absolute',
    right: 15,
  },
  modalFilterResetText: {
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Book',
    alignSelf: 'center',
    color: '#0E141E',
  },
  modalWriteReviewSendText: {
    fontSize: 17,
    //fontFamily: 'AirbnbCerealApp-Book',
    alignSelf: 'center',
    color: '#FF2D55',
  },
};

export default theme;
