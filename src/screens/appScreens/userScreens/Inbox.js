import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

const Inbox = () => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Inbox</Text>
    </SafeAreaView>
  );
};

export default Inbox;
