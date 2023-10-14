import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';
import {Colors, Images} from '../../Utils';
import {Header} from 'react-native-elements';

export default class PrivacyWebView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          barStyle="dark-content"
          leftComponent={
            <TouchableOpacity
              activeOpacity={1}
              style={{paddingRight: 50}}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={Images.back}
                style={{
                  height: 17,
                  width: 17,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: '',
            style: {
              color: Colors.appBlack,
              fontSize: 17,
              //fontFamily: 'AirbnbCerealApp-Medium',
              alignSelf: 'center',
            },
          }}
          containerStyle={{
            margin: 0,
            padding: 0,
            backgroundColor: '#FFF',
            justifyContent: 'space-around',
            borderBottomColor: '#ccc',
          }}
        />
        <WebView
          scrollEnabled
          source={{uri: 'https://boltalerts.co/privacy.html'}}
          style={{width: '100%', alignSelf: 'center'}}
        />
      </View>
    );
  }
}
