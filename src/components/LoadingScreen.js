import React from "react";
import { Dimensions, ScrollView } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from "rn-placeholder";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const LoadingScreen = () => (
  <ScrollView>
    <Placeholder
      Animation={ShineOverlay}
      style={{ marginBottom: Height * 0.017 }}
    >
      <PlaceholderMedia
        style={{
          alignSelf: "center",
          width: Width * 0.8,
          height: Height * 0.13,
          marginBottom: Height * 0.017,
        }}
      />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
    </Placeholder>
    <Placeholder
      Animation={ShineOverlay}
      style={{ marginBottom: Height * 0.017 }}
    >
      <PlaceholderMedia
        style={{
          alignSelf: "center",
          width: Width * 0.8,
          height: Height * 0.13,
          marginBottom: Height * 0.017,
        }}
      />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
    </Placeholder>
    <Placeholder
      Animation={ShineOverlay}
      style={{ marginBottom: Height * 0.017 }}
    >
      <PlaceholderMedia
        style={{
          alignSelf: "center",
          width: Width * 0.8,
          height: Height * 0.13,
          marginBottom: Height * 0.017,
        }}
      />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
    </Placeholder>
    <Placeholder
      Animation={ShineOverlay}
      style={{ marginBottom: Height * 0.017 }}
    >
      <PlaceholderMedia
        style={{
          alignSelf: "center",
          width: Width * 0.8,
          height: Height * 0.13,
          marginBottom: Height * 0.017,
        }}
      />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
      <PlaceholderLine width={Width * 0.19} style={{ alignSelf: "center" }} />
    </Placeholder>
  </ScrollView>
);

export default LoadingScreen;
