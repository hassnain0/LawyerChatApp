// import React, { Component } from "react";
// import { View, Text } from "react-native";
// import firebase from "firebase";
// import ButtonSmall from "../components/ButtonSmall";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";

// class SelectImage extends Component {
//   state = {
//     localUri: null,
//   };

//   selectImage = () => {
//     ImagePicker.showImagePicker(
//       { noData: true, mediaType: "photo" },
//       (response) => {
//         console.log("Response = ", response);
//         this.setState({
//           localUri: response.uri,
//         });
//       }
//     );
//   };

//   uriToBlob = async (uri) => {
//     await fetch(uri)
//       .then((response) => response.blob())
//       .then((blob) => {
//         this.uploadToFirebase(blob);
//       });
//   };

//   async uploadToFirebase(blob) {
//     var storage = firebase.storage();
//     var storageRef = storage.ref();
//     var imagesRef = storageRef.child("notificationImages/image3.jpg");
//     await imagesRef.put(blob).then((snapshot) => console.log("Uploaded1"));
//   }

//   render() {
//     return (
//       <View>
//         <ButtonSmall onPress={this.selectImage}>Select Image</ButtonSmall>
//         <ButtonSmall onPress={this.uriToBlob(this.state.localUri)}>
//           Submit
//         </ButtonSmall>
//       </View>
//     );
//   }
// }
// export default SelectImage;
