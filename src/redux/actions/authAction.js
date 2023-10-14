export const setUserInfo = (data) => async (dispatch) => {
  dispatch({type: 'UserInfo', payload: data});
};
