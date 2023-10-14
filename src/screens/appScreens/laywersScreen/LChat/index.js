import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import mainStyles from "./MainStyles";
import { Images } from "src/Utils";

import { useNavigation } from "@react-navigation/native";

import { setChatVal } from "src/redux/actions";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
var first,
  last = null;
const index = () => {
  const [show, setShow] = useState(true);
  const chatData = useSelector((state) => state.ChatList.chatListData);
  const dispatch = useDispatch();

  let navigation = useNavigation();
  useEffect(() => {
    //console.log(state);
  }, []);

  console.log(chatData, 'chatDatachatData')

  const renderItem = (item) => {
    return (
      <View style={styles.chatItemView}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            dispatch(setChatVal(item));
            //this.props.setChatVal(item);
            navigation.navigate("MyChat");
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
                color: "grey",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "sans-serif-condensed",
              }}
            >
              {getNum(item.other)}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: "silver",
                  fontFamily: "monospace",
                }}
              >
                {item.lastText}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, marginTop: 3, color: "grey" }}>
                  {getTime(item.timeofText)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, marginTop: 4, color: "black" }}>
                  {getDate(item.timeofText)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const getNum = (num) => {
    var changed = `${num}`;
    changed = changed.substring(3);
    changed = `0${changed}`;
    return changed;
  };
  const getDate = (timestamp) => {
    var date = new Date(timestamp).toLocaleDateString("en-US");
    return date;
  };
  const getTime = (timestamp) => {
    var time = new Date(timestamp).toLocaleTimeString();
    var left = time.substring(time.indexOf(":") + 1); // later
    var hour = time.substring(0, time.indexOf(":"));
    var min = left.substring(0, left.indexOf(":"));

    const val = callThis(hour + ":" + min);
    return val; // hour + ":" + min;
  };
  this;
  function callThis(time) {
    first = last = time;
    first = first.substring(0, first.indexOf(":"));
    last = last.substring(last.indexOf(":") + 1);
    if (first == 0 && last == 0) {
      return "12 (midnight)";
    } else if (first == 0 && last != 0) {
      return "12 : " + last + " AM";
    } else if (first < 12 && first != 0) {
      return first + " : " + last + " AM";
    } else if (first == 12 && last == 0) {
      return "12 (noon)";
    } else if (first == 12 && last != 0) {
      return "12 : " + last + " PM";
    } else if (first == 24 && last == 0) {
      return "12 (midnight)";
    } else if (first > 12 && first != 0) {
      return first - 12 + " : " + last + " PM";
    }
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.listStyles}>
        <FlatList
          // onRefresh={() => {
          //   this.props.getChatList(this.props.userName);
          // }}
          refreshing={false}
          data={chatData}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.overall}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                source={Images.nomessageList}
                style={{
                  marginTop: 100,
                  width: Width,
                  height: Height * 0.5,
                }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  headerView: {
    flex: 1,
    backgroundColor: "red",
  },
  listStyles: {
    flex: 12,
  },
  chatItemView: {
    width: Width * 0.9,
    height: Height * 0.09,
    marginLeft: Width * 0.05,
    marginRight: Width * 0.05,
    borderColor: "white",
    borderRadius: 8,
    marginTop: 28,
    backgroundColor: "white",
  },
});

export default index;
