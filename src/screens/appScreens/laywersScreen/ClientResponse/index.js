import { useNavigation } from "@react-navigation/native";
import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
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
  const [searchText, setSearchText] = useState("");
  const [advices, setAdvices] = useState(null);

  useEffect(() => {
    loadData();
  }, []);
  let lawyer;
  const loadData = async () => {
    try {
      let results = await firestore().collection("Advices").get();
      setAdvices(results.docs);
    } catch (error) {
      console.log(error);
    }
  };
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
              Client Response
            </Text>
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

      {advices ? (
        advices.length < 0 ? (
          <View style={styles.noLawyerView}>
            <Text style={styles.noLawyer}>No Client Response Found</Text>
          </View>
        ) : (
          <ScrollView style={styles.lawyersView}>
            {advices.map((advice) => (
              <View style={styles.cardStyle}>
                <View>
                  <Text style={styles.nameStyle}>{advice?.data().heading}</Text>
                </View>
                <View>
                  <Text style={styles.textStyle}>
                    {advice?.data().question}
                  </Text>
                  <Text style={styles.textStyle}>
                    {advice.data().topic}
                    {", "}
                    {advice?.data().city}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    navigation.navigate("ClientChat", {
                      userUid: auth().currentUser.uid,
                      clientid: advice.data().user_id,
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Reply</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={"large"} color={"#000"} />
        </View>
      )}
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
