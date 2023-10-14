import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "src/redux/actions";
import LottieView from "lottie-react-native";
import mainStyles from "src/assets/styles/OnePostRecieptStyles";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
var first,
  last = null;
class ChatList extends Component {
  state = { show: true };
  async componentWillMount() {
    await this.props.chatListData;
    const obj = await this.props.userName;
    await this.props.getChatList(obj);
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate("PHome");
  };
  renderItem = (item) => {
    return (
      <View style={styles.chatItemView}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            this.props.setChatVal(item);
            this.props.navigation.navigate("MyChat");
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
              {this.getNum(item.other)}
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
                  {this.getTime(item.timeofText)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, marginTop: 4, color: "black" }}>
                  {this.getDate(item.timeofText)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  getNum = (num) => {
    var changed = `${num}`;
    changed = changed.substring(3);
    changed = `0${changed}`;
    return changed;
  };
  getDate = (timestamp) => {
    var date = new Date(timestamp).toLocaleDateString("en-US");
    return date;
  };
  getTime = (timestamp) => {
    var time = new Date(timestamp).toLocaleTimeString();
    var left = time.substring(time.indexOf(":") + 1); // later
    var hour = time.substring(0, time.indexOf(":"));
    var min = left.substring(0, left.indexOf(":"));

    const val = this.callThis(hour + ":" + min);
    return val;
  };
  callThis(time) {
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
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.listStyles}>
          <FlatList
            onRefresh={() => {
              this.props.getChatList(this.props.userName);
            }}
            refreshing={false}
            data={this.props.chatListData}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => item.overall}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LottieView
                  source={require("./chat.json")}
                  autoPlay
                  loop
                  speed={0.3}
                  style={{ width: Width * 0.8, height: Height * 0.3 }}
                />
                <Text style={mainStyles.bottomText}>No Chat yet !!!</Text>
                <Text style={mainStyles.bottomText}>
                  Book a ride and chat with driver
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
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
    marginTop: 8,
    backgroundColor: "white",
  },
});

const mapStateToProps = ({ first, ChatList }) => {
  const { userName } = first;
  const { chatListData } = ChatList;
  return {
    userName,
    chatListData,
  };
};
export default connect(mapStateToProps, actions)(ChatList);
