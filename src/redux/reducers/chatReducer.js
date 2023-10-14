const INITIAL_STATE = {
  chatListData: [],
  oneChat: [],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ChatListSuccess":
      return { ...state, chatListData: action.payload };
    case "ChatListFail":
      return { ...state };
    case "setVal":
      return { ...state, oneChat: action.payload };
    case "reset":
      console.log("Un");
      return { ...state, chatListData: null };
    default:
      return state;
  }
}
