import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Image, Text, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';
import {Colors, Images} from 'src/Utils';
import styles from './styles';

const MenuHeader = ({title, goBack}) => {
  let navigation = useNavigation();

  return (
    <View>
      {goBack ? (
        <Header
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
              fontFamily: 'AirbnbCerealApp-Medium',
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
      ) : (
        <></>
      )}
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.app.user,
});
export default MenuHeader;
