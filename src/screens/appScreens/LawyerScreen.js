import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  ScrollView,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import storage from "@react-native-firebase/storage";
//import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import RNPickerSelect from "react-native-picker-select";
import DropDownPicker from "react-native-dropdown-picker";
import {
  setName,
  setGender,
  setNumber,
  setAddress,
  setCity,
  setLicense,
  setExperience,
  setEducation,
  submit,
  setSpecialization,
} from "../../redux/actions/lawyerAction";
import SelectMultiple from "react-native-select-multiple";
import { connect } from "react-redux";
import RadioGroup, { Radio } from "react-native-radio-input";
import MinusIcon from "react-native-vector-icons/AntDesign";
import PlusIcon from "react-native-vector-icons/AntDesign";
import firebase from "@react-native-firebase/app";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import TextInputt from "../../components/TextInputt";
import ImagePickerr from "../../components/ImagePickerr";
import Button3 from "../../components/Button3";
import { ThemeConsumer } from "react-native-elements";
import { StatusBar } from "react-native";
import { Constants } from "src/Utils";
class LawyerScreen extends Component {
  state = {
    isFocused1: false,
    isFocused2: false,
    isFocused3: false,
    isFocused4: false,
    isFocused5: false,
    isFocused6: false,
    isFocused7: false,
    localUri: null,
    userId: null,
    imageName: "Picture",
    loading: false,
  };

  componentDidMount() {
    let val = firebase.auth().currentUser.uid;
    this.setState({ userId: val });
  }

  onFocus1 = () => {
    this.setState({ isFocused1: true });
  };

  onFocus2 = () => {
    this.setState({ isFocused2: true });
  };

  onFocus3 = () => {
    this.setState({ isFocused3: true });
  };

  onFocus4 = () => {
    this.setState({ isFocused4: true });
  };

  onFocus5 = () => {
    this.setState({ isFocused5: true });
  };

  onFocus6 = () => {
    this.setState({ isFocused6: true });
  };

  onFocus7 = () => {
    this.setState({ isFocused7: true });
  };

  onBlur1 = () => {
    this.setState({ isFocused1: false });
  };

  onBlur2 = () => {
    this.setState({ isFocused2: false });
  };

  onBlur3 = () => {
    this.setState({ isFocused3: false });
  };

  onBlur4 = () => {
    this.setState({ isFocused4: false });
  };

  onBlur5 = () => {
    this.setState({ isFocused5: false });
  };

  onBlur6 = () => {
    this.setState({ isFocused6: false });
  };

  onBlur7 = () => {
    this.setState({ isFocused7: false });
  };

  getChecked = (value) => {
    this.props.setGender(value);
  };

  selectImage = () => {
    if (this.state.localUri === null) {
      // launchCamera({ mediaType: "photo" }, (response) => {
      //   console.log("Response = ", response);
      //   if (response.didCancel) {
      //     console.log("User cancelled image picker");
      //     this.setState({ localUri: null });
      //   } else {
      //     this.setState({
      //       localUri: response.uri,
      //     });
      //   }
      // });

      launchImageLibrary({ mediaType: "photo" }, (response) => {
        console.log("Response = ", response);
        if (response.didCancel) {
          console.log("User cancelled image picker");
          this.setState({ localUri: null });
        } else {
          this.setState({
            localUri: response.uri,
          });
        }
      });
    } else {
      this.setState({ localUri: null });
    }
  };

  async uriToBlob(uri) {
    try {
      let blob = await fetch(uri).then((response) => response.blob());
      return await this.uploadImageToStorage(blob);
    } catch (error) {}
  }

  uploadImageToStorage = async (blob) => {
    let reference = storage().ref("Images/" + this.state.userId + "/");
    let task = await reference.put(blob);
    return await reference.getDownloadURL();
  };

  renderButton = () => {
    <Button3
      onPress={() => {
        this.props.submit(
          this.props.textt,
          this.state.userId,
          this.props.gender,
          this.props.number,
          this.props.address,
          this.props.city,
          this.props.license,
          this.props.education,
          this.props.experience,
          this.props.specialization
        );
        this.uriToBlob(this.state.localUri);
      }}
    >
      Submit
    </Button3>;
  };

  render() {
    const {
      textt,
      setName,
      number,
      setNumber,
      address,
      setAddress,
      city,
      setCity,
      license,
      setLicense,
      education,
      setEducation,
      experience,
      setExperience,
      setSpecialization,
      submit,
      gender,
      specialization,
    } = this.props;

    console.log(specialization);
    return (
      <ScrollView>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
        <View style={styles.containerStyle}>
          <TextInputt
            placeholder="Name"
            length="0.8"
            onFocus={this.onFocus1}
            onBlur={this.onBlur1}
            val={textt}
            action={setName}
            state={this.state.isFocused1}
          />
          <RadioGroup
            getChecked={this.getChecked}
            RadioGroupStyle={{ flexDirection: "row" }}
            RadioStyle={{
              margin: Width * 0.04,
              marginTop: Width * 0.03,
              marginBottom: Width * 0.03,
            }}
          >
            <Radio iconName={"lens"} label={"Male"} value={"male"} />
            <Radio iconName={"lens"} label={"Female"} value={"female"} />
            <Radio iconName={"lens"} label={"Other"} value={"other"} />
          </RadioGroup>
          <TextInputt
            placeholder="Mobile Number"
            length="0.4"
            onFocus={this.onFocus2}
            onBlur={this.onBlur2}
            val={number}
            action={setNumber}
            state={this.state.isFocused2}
          />
          <View style={{ marginTop: 20 }}>
            <TextInputt
              placeholder="Address"
              length="0.8"
              onFocus={this.onFocus3}
              onBlur={this.onBlur3}
              val={address}
              action={setAddress}
              state={this.state.isFocused3}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              width: "100%",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: "black",
            }}
          >
            <RNPickerSelect
              onValueChange={(value) => setCity(value)}
              items={Constants.cities.map((v) => ({ label: v, value: v }))}
              value={city}
              style={styles.picker}
            />
            {/* <TextInputt
              placeholder="City"
              length="0.4"
              onFocus={this.onFocus4}
              onBlur={this.onBlur4}
              val={city}
              action={setCity}
              state={this.state.isFocused4}
            /> */}
          </View>
          <Text style={{ fontSize: 16, color: "black", marginTop: 20 }}>
            Select Specialization
          </Text>
          <ScrollView
            style={{
              marginTop: 10,
              width: "100%",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: "black",
              maxHeight: 150,
            }}
            nestedScrollEnabled={true}
          >
            <SelectMultiple
              items={Constants.types.map((v) => ({
                label: v,
                value: v,
              }))}
              selectedItems={specialization.map((v) => ({
                label: v,
                value: v,
              }))}
              onSelectionsChange={
                (v) => setSpecialization([...v.map((a) => a.value)])
                // console.log(v)
              }
            />
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <TextInputt
              placeholder="License Number"
              length="0.4"
              onFocus={this.onFocus5}
              onBlur={this.onBlur5}
              val={license}
              action={setLicense}
              state={this.state.isFocused5}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInputt
              placeholder="Educational Details"
              length="0.8"
              onFocus={this.onFocus6}
              onBlur={this.onBlur6}
              val={education}
              action={setEducation}
              state={this.state.isFocused6}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInputt
              placeholder="Experience(years)"
              length="0.5"
              onFocus={this.onFocus7}
              onBlur={this.onBlur7}
              val={experience}
              action={setExperience}
              state={this.state.isFocused7}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <ImagePickerr
              text="Upload Picture"
              icon={
                this.state.localUri === null ? (
                  <PlusIcon
                    name="pluscircle"
                    size={60}
                    color="#008ECC"
                    // style={{ marginTop: Height * 0.021 }}
                  />
                ) : (
                  <MinusIcon
                    name="minuscircle"
                    size={60}
                    color="red"
                    // style={{ marginTop: Height * 0.021 }}
                  />
                )
              }
              onPress={this.selectImage}
            />
          </View>

          <View style={{ right: 21 }}>
            <Button3
              onPress={async () => {
                let uploadUrl = await this.uriToBlob(this.state.localUri);
                this.props.submit(
                  this.props.textt,
                  this.state.userId,
                  this.props.gender,
                  this.props.number,
                  this.props.address,
                  this.props.city,
                  this.props.license,
                  this.props.education,
                  this.props.experience,
                  uploadUrl,
                  this.props.specialization
                );
              }}
            >
              Submit
            </Button3>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "pink",
    margin: Width * 0.08,
  },
  picker: {
    width: 300,
    height: 100,
    backgroundColor: "blue",
  },
});

const mapStatetoProps = ({ lawyerdata }) => {
  const {
    textt,
    gender,
    number,
    address,
    city,
    license,
    education,
    experience,
    user,
    specialization,
  } = lawyerdata;
  return {
    textt,
    gender,
    number,
    address,
    city,
    license,
    education,
    experience,
    specialization,
  };
};

export default connect(mapStatetoProps, {
  setName,
  setGender,
  setNumber,
  setAddress,
  setCity,
  setLicense,
  submit,
  setEducation,
  setExperience,
  setSpecialization,
})(LawyerScreen);
