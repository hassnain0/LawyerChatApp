import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
const Loading = () => {
  return (
    <View style={[styles.loadingContainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export {Loading};
