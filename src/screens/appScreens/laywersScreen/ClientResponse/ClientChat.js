import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  Image,
  View,
  Dimensions,
  ActivityIndicator,
  Text,
  StatusBar,
} from "react-native";
import { Images } from "src/Utils";
import Fire from "./Fire";

const ClientChat = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const { userUid, clientid } = route.params;
  useEffect(() => {
    Fire.shared.on(
      {
        user: userUid,
        lawyer: clientid,
      },
      (messages) =>
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, messages)
        )
    );
    return () => {
      Fire.shared.off();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <GiftedChat
        messages={messages}
        onSend={Fire.shared.send}
        user={{
          _id: userUid,
        }}
        isTyping={true}
        alwaysShowSend={true}
        renderLoading={() => (
          <View style={{ flex: 1 }}>
            <ActivityIndicator />
          </View>
        )}
        renderChatEmpty={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={Images.nomessages}
              style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height * 0.5,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ClientChat;
