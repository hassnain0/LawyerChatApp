import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ buttonText, buttonStyle, onPress, buttonTextStyle }) => (
	<TouchableOpacity style={buttonStyle} onPress={onPress}>
		<Text style={buttonTextStyle}>{buttonText}</Text>
	</TouchableOpacity>
);

export { Button };
