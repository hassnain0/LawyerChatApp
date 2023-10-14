import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, Constants } from "src/Utils";
import styles from "./styles";
import { Header } from "react-native-elements";

import { useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";
import RNPickerSelect from "react-native-picker-select";
import firestore from "@react-native-firebase/firestore";
const FindLawyer = () => {
  //const user = useSelector((state) => state.auth.userInfo);
  const navigation = useNavigation();

  let route = useRoute();

  useEffect(() => {}, []);
  const { lawyer } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        barStyle="dark-content"
        leftComponent={
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}
          >
            <Icon name={"chevron-left"} size={33} color={"#000"} />
          </TouchableOpacity>
        }
        centerComponent={
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontSize: 22,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              {route.params.lawyer.data().name}
            </Text>
            {/* <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              Way
            </Text> */}
          </View>
        }
        containerStyle={{
          margin: 0,
          padding: 0,
          backgroundColor: Colors.lightG,
          justifyContent: "space-around",
          borderBottomColor: Colors.appGrey,
          borderBottomWidth: 0.8,
        }}
        statusBarProps={{
          backgroundColor: Colors.lightG,
          barStyle: "dark-content",
        }}
      />
      <View style={styles.contentContainer}>
        <View>
          <Image source={{ uri: lawyer.data().Url }} style={styles.avatar} />

          <Text style={styles.textStyle}>Name: {lawyer.data().name}</Text>
          <Text style={styles.textStyle}>Gender: {lawyer.data().gender}</Text>

          <Text style={styles.textStyle}>
            Education: {lawyer.data().education}
          </Text>
          <Text style={styles.textStyle}>
            Experience: {lawyer.data().experience}
          </Text>
          <Text style={styles.textStyle}>License: {lawyer.data().license}</Text>
          <Text style={styles.textStyle}>
            Specializations:{" "}
            {lawyer?.data().specialization
              ? lawyer
                  ?.data()
                  .specialization.map((s, i) =>
                    i < lawyer?.data().specialization.length - 1 ? `${s}, ` : s
                  )
              : null}
          </Text>
          <Text style={styles.textStyle}>Email: {lawyer.data().email}</Text>
          <Text style={styles.textStyle}>Phone: {lawyer.data().phone}</Text>
          <Text style={styles.textStyle}>Address: {lawyer.data().address}</Text>
          <Text style={styles.textStyle}>City: {lawyer.data().city}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("PChat", {
              userUid: auth().currentUser.uid,
              lawyerUid: lawyer.data().userId,
            });
          }}
        >
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FindLawyer;
{
  /* <SafeAreaView style={styles.container}>
<TouchableOpacity
  onPress={() =>
    navigation.navigate("PChat", {
      userUid: auth().currentUser.uid,
      lawyerUid: "gfjcgvbhknlmddnjmhgcvm",
    })
  }
>
  <Text style={{ color: "black" }}>Findssss</Text>
</TouchableOpacity>
</SafeAreaView> */
}
