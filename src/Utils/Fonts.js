import {Dimensions} from 'react-native';


const size = {
  large: 18,
  regular: 16,
  default: 15,
  medium: 14,
  small: 12,
  tiny: 10,
  heading: 22,
};

const style = {
  description: {
    fontFamily: type.base,
    fontSize: size.default,
  },
  caption: {
    fontFamily: type.base,
    fontSize: 13,
  },
  productName: {
    fontFamily: type.bold,
    fontSize: size.large,
  },
  input: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  inputBold: {
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  heading: {
    fontSize: size.heading,
    fontFamily: type.bold,
  },
  subHeading: {
    fontFamily: type.medium,
    fontSize: size.medium,
  },
  leadText: {
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  titleText: {
    fontSize: size.regular,
    fontFamily: type.base,
  },
  stockSymbolLarge: {
    fontSize: size.heading,
    fontFamily: type.extraBold,
  },
};

export default {
  size,
  style,
};
