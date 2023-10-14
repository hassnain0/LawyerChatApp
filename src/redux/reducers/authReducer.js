const INITIAL_STATE = {
  userInfo: null,
  user: null,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UserInfo':
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
}
