import database from "@react-native-firebase/database";
export const getChatList = (userInfo) => async (dispatch) => {
  var dataFire = [];
  var nameOfOther = "";
  console.log('outttttttt')
  const ref = database().ref("chat");
  ref.on("value", funSuccess, funErr);
  function funSuccess(snap) {
    console.log('innnnnnnnnn')
    console.log(snap);
    dataFire = [];
    nameOfOther = "";
    snap.forEach((element) => {
      var overall = `${element.key}`;
      var stringArray = overall.split(/(\s+)/);
      var user1 = stringArray[0];
      var user2 = stringArray[2];
      const responseData = element.val();
      const further = responseData["messages"];
      var text,
        time = "";
      if (user1 == userInfo) {
        for (var key in further) {
          if (further.hasOwnProperty(key)) {
            text = further[key].text;
            time = further[key].createdAt;
          }
        }
        dataFire.push({
          overall,
          me: user1,
          other: user2,
          lastText: text,
          timeofText: time,
        });
      }
      if (user2 == userInfo) {
        for (var key in further) {
          if (further.hasOwnProperty(key)) {
            text = further[key].text;
            time = further[key].createdAt;
          }
        }
        dataFire.push({
          overall,
          me: user2,
          other: user1,
          lastText: text,
          timeofText: time,
        });
      }
    });
    dispatch({ type: "ChatListSuccess", payload: dataFire });
  }
  function funErr(e) {
    console.log(e,'eeeeeeeeeeee');
    dispatch({ type: "ChatListFail" });
  }
  console.log(ref)
};
export const setChatVal = (item) => async (dispatch) => {
  dispatch({ type: "setVal", payload: item });
};
export const resetData = () => async (dispatch) => {
  dispatch({ type: "reset" });
};
