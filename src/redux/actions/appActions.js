// import Axios from 'axios';
import firestore from "@react-native-firebase/firestore";
// import moment from "moment-timezone";
export const setUserInfo = (data) => async (dispatch) => {
  dispatch({ type: "SetUserInfo", payload: data });
};

export const setCurrentCandle = (candle) => async (dispatch) => {
  dispatch({ type: "SetCurrentCandle", payload: candle });
};

export const setCandles = (key) => async (dispatch) => {
  dispatch({
    type: "SetCandles",
    payload: key,
  });
};

export const addAlertCondition = (data) => async (dispatch) => {
  dispatch({ type: "AddAlertCondition", payload: data });
};

export const setAlertCondition = (data) => async (dispatch) => {
  dispatch({ type: "SetAlertCondition", payload: data });
};

export const removeAlertCondition = (key) => async (dispatch) => {
  dispatch({ type: "RemoveAlertCondition", payload: key });
};

export const setAlertConditions = (data) => async (dispatch) => {
  dispatch({ type: "SetAlertConditions", payload: data });
};

export const setCompanies = (companies) => async (dispatch) => {
  try {
    // dispatch({type: 'SetCompanies', payload: null});
    for (let index = 0; index < companies.length; index++) {
      const company = companies[index];

      let quoteRes = await Axios.get(
        `https://cloud.iexapis.com/beta/stock/${company.symbol}/batch?types=quote,&range=1m&last=10&token=pk_67ae58d55d9347879023d952c2f5c380`
      );
      companies[index].quote = quoteRes.data.quote;
      // let w1ChartRes = await Axios.get(
      //   `https://cloud.iexapis.com/stable/stock/${company.symbol}/chart/5dm?token=pk_67ae58d55d9347879023d952c2f5c380`,
      // );
      let w1ChartRes = await Axios.get(
        `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${company.symbol}/1W?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
      );
      w1ChartRes.data = filterNullValues(w1ChartRes.data);
      companies[index].chart = w1ChartRes.data;
    }
    dispatch({ type: "SetCompanies", payload: companies });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompanies = (uid) => async (dispatch) => {
  try {
    let user = await firestore().collection("Users").doc(uid).get();
    if (!user || !user.data()) {
      console.log("user not found");
      return;
    }
    let companies = user.data().companies;
    for (let index = 0; index < companies.length; index++) {
      const company = companies[index];

      let quoteRes = await Axios.get(
        `https://cloud.iexapis.com/beta/stock/${company.symbol}/batch?types=quote,&range=1m&last=10&token=pk_67ae58d55d9347879023d952c2f5c380`
      );
      let w1ChartRes = await Axios.get(
        `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${company.symbol}/1W?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
      );
      w1ChartRes.data = filterNullValues(w1ChartRes.data);
      companies[index].chart = w1ChartRes.data;
      companies[index].quote = quoteRes.data.quote;
    }
    dispatch({ type: "SetCompanies", payload: companies });
  } catch (error) {
    console.log(error);
  }
};

export const updateQuote = (symbol) => async (dispatch) => {
  let quoteRes = await Axios.get(
    `https://cloud.iexapis.com/beta/stock/${symbol}/batch?types=quote,&range=1m&last=10&token=pk_67ae58d55d9347879023d952c2f5c380`
  );

  dispatch({
    type: "SetCurrentCompanyQuote",
    payload: { ...quoteRes.data.quote, symbol },
  });
};

export const updateStats = (symbol, premiumUser) => async (dispatch) => {
  // Load Company Stats
  let statsRes = await Axios.get(
    `https://cloud.iexapis.com/beta/stock/${symbol}/stats?token=pk_67ae58d55d9347879023d952c2f5c380`
  );
  if (premiumUser) {
    // Load Advanced Stats
    let advancedStatsRes = await Axios.get(
      `https://cloud.iexapis.com/beta/stock/${symbol}/advanced-stats?token=pk_67ae58d55d9347879023d952c2f5c380`
    );
    dispatch({
      type: "SetAdvancedStats",
      payload: advancedStatsRes.data,
    });
  }
  dispatch({
    type: "SetCurrentCompanyStats",
    payload: { ...statsRes.data, symbol },
  });
};

export const setCurrentCompanyQuote = (symbol, premiumUser) => async (
  dispatch
) => {
  console.log("set current company quote");
  try {
    dispatch({
      type: "SetNoChart",
      payload: false,
    });
    dispatch({
      type: "SetPrivateStock",
      payload: false,
    });
    dispatch({
      type: "SetCurrentCompanyStats",
      payload: null,
    });
    dispatch({
      type: "SetCurrentCompanyQuote",
      payload: null,
    });
    dispatch({
      type: "SetAlertConditions",
      payload: null,
    });
    dispatch({
      type: "SetW1Chart",
      payload: null,
    });
    dispatch({
      type: "SetM1Chart",
      payload: null,
    });
    dispatch({
      type: "SetM2Chart",
      payload: null,
    });
    dispatch({
      type: "SetM3Chart",
      payload: null,
    });
    dispatch({
      type: "SetM6Chart",
      payload: null,
    });
    dispatch({
      type: "SetY1Chart",
      payload: null,
    });
    dispatch({
      type: "SetY2Chart",
      payload: null,
    });
    dispatch({
      type: "SetY5Chart",
      payload: null,
    });
    dispatch({
      type: "SetCurrentCandle",
      payload: null,
    });

    // Load company Quote
    let quoteRes = await Axios.get(
      `https://cloud.iexapis.com/beta/stock/${symbol}/batch?types=quote,&range=1m&last=10&token=pk_67ae58d55d9347879023d952c2f5c380`
    );
    // Load Company Stats
    let statsRes = await Axios.get(
      `https://cloud.iexapis.com/beta/stock/${symbol}/stats?token=pk_67ae58d55d9347879023d952c2f5c380`
    );
    if (premiumUser) {
      // Load Advanced Stats
      let advancedStatsRes = await Axios.get(
        `https://cloud.iexapis.com/beta/stock/${symbol}/advanced-stats?token=pk_67ae58d55d9347879023d952c2f5c380`
      );
      dispatch({
        type: "SetAdvancedStats",
        payload: advancedStatsRes.data,
      });
    }

    // Load 1W Chart
    let w1ChartRes = await Axios.get(
      `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/1W?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
    );
    if (!w1ChartRes.data) {
      dispatch({
        type: "SetNoChart",
        payload: true,
      });
    } else {
      w1ChartRes.data = filterNullValues(w1ChartRes.data);
    }

    dispatch({
      type: "SetW1Chart",
      payload: w1ChartRes.data,
    });

    dispatch({
      type: "SetCandles",
      payload: "1W",
    });
    dispatch({
      type: "SetCurrentCompanyStats",
      payload: { ...statsRes.data, symbol },
    });
    dispatch({
      type: "SetCurrentCompanyQuote",
      payload: { ...quoteRes.data.quote, symbol },
    });
  } catch (error) {
    if (error.response.status == 451) {
      dispatch({
        type: "SetPrivateStock",
        payload: true,
      });
      dispatch({
        type: "SetCurrentCompanyQuote",
        payload: { symbol },
      });
    }
    console.log(error);
  }
};

export const setm1ChartData = (symbol) => async (dispatch) => {
  let m1ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/1M?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!m1ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    m1ChartRes.data = filterNullValues(m1ChartRes.data);
  }
  dispatch({
    type: "SetM1Chart",
    payload: m1ChartRes.data,
  });
};

export const setm3ChartData = (symbol) => async (dispatch) => {
  // Load 3M Chart
  let m3ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/3M?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!m3ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    m3ChartRes.data = filterNullValues(m3ChartRes.data);
  }
  dispatch({
    type: "SetM3Chart",
    payload: m3ChartRes.data,
  });
};

export const setm6ChartData = (symbol) => async (dispatch) => {
  // Load 6M Chart
  let m6ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/6M?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!m6ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    m6ChartRes.data = filterNullValues(m6ChartRes.data);
  }
  dispatch({
    type: "SetM6Chart",
    payload: m6ChartRes.data,
  });
};

export const sety1ChartData = (symbol) => async (dispatch) => {
  // Load 1Y Chart
  let y1ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/1Y?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!y1ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    y1ChartRes.data = filterNullValues(y1ChartRes.data);
  }
  dispatch({
    type: "SetY1Chart",
    payload: y1ChartRes.data,
  });
};

export const sety2ChartData = (symbol) => async (dispatch) => {
  // Load 2Y Chart
  let y2ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/2Y?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!y2ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    y2ChartRes.data = filterNullValues(y2ChartRes.data);
  }
  dispatch({
    type: "SetY2Chart",
    payload: y2ChartRes.data,
  });
};

export const sety5ChartData = (symbol) => async (dispatch) => {
  // Load 5Y Chart
  let y5ChartRes = await Axios.get(
    `https://bolt-api-lmdky5cfpq-uc.a.run.app/chart/${symbol}/5Y?token=74369c38-e4aa-4e17-a9ec-545de56dbfbe`
  );
  if (!y5ChartRes.data) {
    dispatch({
      type: "SetNoChart",
      payload: true,
    });
  } else {
    y5ChartRes.data = filterNullValues(y5ChartRes.data);
  }

  dispatch({
    type: "SetY5Chart",
    payload: y5ChartRes.data,
  });
};

const filterNullValues = (array) => {
  if (!array || array == null) return null;
  return array.filter(
    (c) =>
      c.open != null &&
      c.close != null &&
      c.high != null &&
      c.low != null &&
      c.volume != null
  );
};

const currentDay = () => {
  let dateString = "";
  let date = new Date(Date.now());
  let weekDay = date.getDay();

  if (weekDay == 6) {
    // substract one weekDay
    date.setDate(date.getDate() - 1);
  } else if (weekDay == 7) {
    date.setDate(date.getDate() - 2);
    // substract two days
  }

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month.toString();
  }
  if (day < 10) {
    day = "0" + day.toString();
  }

  return `${year}${month}${day}`;
};

export const shouldTimerUpdate = () => {
  var d = moment();
  console.log(d.tz("America/New_York").day());
  if (
    d.tz("America/New_York").day() < 6 &&
    d.tz("America/New_York").hours() < 17
  ) {
    console.log("update");
    return true;
  }
  console.log("do not update");
  return false;
};
