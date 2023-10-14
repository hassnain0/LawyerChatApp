import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, Image } from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
class LoadingCard extends Component {
  rendercards() {
    return this.props.data.map(card => {
      return (
        <View style={styles.cardStyle} key={card.title}>
          <Placeholder Animation={Fade}>
            <PlaceholderMedia
              style={{
                width: Width * 0.83,
                height: Height * 0.3,
                margin: Width * 0.03
              }}
            >
              <Image
                source={card.image}
                style={{
                  width: Width * 0.83,
                  height: Height * 0.3,
                  margin: Width * 0.03
                }}
              />
            </PlaceholderMedia>
            <PlaceholderLine width={30} style={{marginLeft:Width * 0.03}}>
              <Text style={styles.titleStyle}>{card.title}</Text>
            </PlaceholderLine>

            <PlaceholderLine width={90} style={{marginLeft:Width*0.03}}>
            <Text style={styles.textStyle}>{card.description}</Text>
            </PlaceholderLine>
            <PlaceholderLine width={90} style={{marginLeft:Width*0.03}}></PlaceholderLine>
            <PlaceholderLine width={90} style={{marginLeft:Width*0.03}}></PlaceholderLine>
          </Placeholder>
        </View>
      );
    });
  }

  render() {
    return <View style={{ flex: 1 }}>{this.rendercards()}</View>;
  }
}

const styles = {
  cardStyle: {
    backgroundColor: "white",
    height: Height * 0.5,
    margin: 20,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey"
  },
  titleStyle: {
    paddingLeft: Width * 0.03,
    fontSize: 20,
    fontWeight: "bold"
  },
  textStyle: {
    paddingHorizontal: Width * 0.03,
    paddingVertical: Width * 0.01
  }
};

export default LoadingCard;
