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
  const [city, setCity] = useState("Lahore");
  const [specialization, setSpecialization] = useState("Criminal");
  const [lawyers, setLawyers] = useState(null);

  useEffect(() => {
    loadData(city, specialization);
  }, []);
  let lawyer;
  const loadData = async (city, specialization) => {
    try {
      if (!city || !specialization) return;
      let results = await firestore()
        .collection("Users")
        .where("role", "==", "lawyer")
        .where("city", "==", city)
        .where("specialization", "array-contains", specialization)
        .get();
      setLawyers(results.docs);
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
              Find Lawyer
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
      <Text style={styles.chooseTitle}>Choose City</Text>

      <View style={styles.picker}>
        <RNPickerSelect
          onValueChange={(value) => {
            setCity(value);
            loadData(value, specialization);
          }}
          items={Constants.cities.map((v) => ({ label: v, value: v }))}
          value={city}
          style={styles.picker}
          key={1}
        />
      </View>
      <Text style={styles.chooseTitle}>Choose Specialization</Text>
      <View style={styles.picker}>
        <RNPickerSelect
          onValueChange={(value) => {
            setSpecialization(value);
            loadData(city, value);
          }}
          items={Constants.types.map((v) => ({ label: v, value: v }))}
          value={specialization}
          style={styles.picker}
          key={2}
        />
      </View>

      {!city || !specialization ? (
        <View style={styles.noLawyerView}>
          <Text style={styles.noLawyer}>
            Please choose both city and specialization
          </Text>
        </View>
      ) : lawyers && lawyers.length > 0 ? (
        <ScrollView style={styles.lawyersView}>
          {lawyers.map((lawyer) => (
            <TouchableOpacity
              style={styles.cardStyle}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("LawyerProfile", { lawyer })}
            >
              <View>
                <Image
                  source={{ uri: lawyer.data().Url }}
                  style={styles.avatar}
                />
                <Text style={styles.nameStyle}>{lawyer?.data().name}</Text>
              </View>
              <View>
                <Text style={styles.textStyle}>
                  Experience(Years):{lawyer?.data().experience}
                </Text>
                <Text style={styles.textStyle}>
                  City: {lawyer?.data().city}
                </Text>
                <Text style={styles.textStyle}>
                  Specializations:{" "}
                  {lawyer?.data().specialization
                    ? lawyer
                        ?.data()
                        .specialization.map((s, i) =>
                          i < lawyer?.data().specialization.length - 1
                            ? `${s}, `
                            : s
                        )
                    : null}
                </Text>
                <Text style={styles.textStyle}>
                  Education Details: {lawyer?.data().education}
                </Text>
                <Text style={styles.textStyle}>
                  Mobile Number : {lawyer?.data().mobile_no}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noLawyerView}>
          <Text style={styles.noLawyer}>No Lawyers Found</Text>
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
