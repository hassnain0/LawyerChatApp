import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
// Importing screens in main navigator
import Welcome from 'src/screens/authScreens/welcome';
import SignUp from 'src/screens/authScreens/signUp';
import SignIn from 'src/screens/authScreens/signIn';
import ResetPassword from 'src/screens/authScreens/resetPassword';
import TermsWebView from './termsWebView';
import PrivacyWebView from './privacyWebView';
// Main stack navigator
const MainStack = createStackNavigator();
// Transition configuration values
const config = {
  animation: 'spring',
  config: {
    stiffness: 2000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={({route}) => {
        return {
          cardOverlayEnabled: true,
        };
      }}>
      <MainStack.Screen
        name="Welcome"
        component={Welcome}
        options={{gestureEnabled: false}}
      />
      <MainStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <MainStack.Screen
        name="PrivacyWebView"
        component={PrivacyWebView}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <MainStack.Screen
        name="TermsWebView"
        component={TermsWebView}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <MainStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <MainStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </MainStack.Navigator>
  );
}
