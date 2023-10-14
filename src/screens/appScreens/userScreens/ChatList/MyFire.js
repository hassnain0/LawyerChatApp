import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
var ref = "";
class MyFire {
  get uid() {
    return (auth().currentUser || {}).uid;
  }

  get ref() {
    return database().ref("chat/" + ref + "/messages");
  }

  parse = (snapshot) => {
    const { createdAt, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const message = {
      _id,
      createdAt,
      text,
      user,
    };
    return message;
  };

  on = (val, callback) => {
    ref = val.ref;
    this.ref.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };
  get timestamp() {
    return database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message) => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

MyFire.shared = new MyFire();

// const mapStateToProps = ({Main, first}) => {
//   const {userName} = first;
//   const {card_key} = Main;

//   return {
//     userName,
//     card_key,
//   };
// };

export default MyFire;
// connect(
//   mapStateToProps,
//   null,
// )(Fire);
