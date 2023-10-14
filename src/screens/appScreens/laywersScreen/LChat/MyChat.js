import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat"; // 0.3.0
import { Image, Dimensions, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import MyFire from "./MyFire";
const MyChat = () => {
  const [messages, setMessages] = useState([]);
  const oneChat = useSelector((state) => state.ChatList.oneChat);
  useEffect(() => {
    MyFire.shared.on(
      {
        ref: oneChat.overall,
      },
      (messages) =>
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, messages)
        )
    );
    return () => {
      MyFire.shared.off();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GiftedChat
        messages={messages}
        onSend={MyFire.shared.send}
        user={{
          _id: oneChat.me,
        }}
        isTyping={true}
        alwaysShowSend={true}
        renderLoading={() => (
          <View style={{ flex: 1 }}>
            <ActivityIndicator />
          </View>
        )}
      />
    </View>
  );
};

export default MyChat;
