const INITIAL_STATE = {
  alertConditions: null,
  currentCompanyQuote: null,
  currentCompanyStats: null,
  currentCompanyAdvancedStats: null,
  d1Chart: null,
  w1Chart: null,
  m1Chart: null,
  m3Chart: null,
  m6Chart: null,
  candles: null,
  currentCandle: null,
  currentChartKey: null,
  user: null,
  companies: null,
  privateStock: false,
  noChart: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SetNoChart':
      return {
        ...state,
        noChart: action.payload,
      };
    case 'SetPrivateStock':
      return {
        ...state,
        privateStock: action.payload,
      };
    case 'SetCompanies':
      return {
        ...state,
        companies: action.payload,
      };
    case 'SetUserInfo':
      return {
        ...state,
        user: action.payload,
      };
    case 'SetAlertConditions':
      return {
        ...state,
        alertConditions: action.payload,
      };
    case 'AddAlertCondition':
      return {
        ...state,
        alertConditions: [
          ...state.alertConditions,
          {key: action.payload.name, ...action.payload},
        ],
      };
    case 'RemoveAlertCondition':
      return {
        ...state,
        alertConditions: state.alertConditions.filter(
          (a) => a.key !== action.payload,
        ),
      };
    case 'SetAlertCondition':
      return {
        ...state,
        alertConditions: state.alertConditions.map((a) =>
          a.key === action.payload.key ? action.payload : a,
        ),
      };
    case 'SetCurrentCompanyQuote':
      return {...state, currentCompanyQuote: action.payload};
    case 'SetCurrentCompanyStats':
      return {...state, currentCompanyStats: action.payload};
    case 'SetAdvancedStats':
      return {...state, currentCompanyAdvancedStats: action.payload};
    case 'SetD1Chart':
      return {...state, d1Chart: action.payload};
    case 'SetM1Chart':
      return {...state, m1Chart: action.payload};
    case 'SetW1Chart':
      return {...state, w1Chart: action.payload};
    case 'SetM3Chart':
      return {...state, m3Chart: action.payload};
    case 'SetM6Chart':
      return {...state, m6Chart: action.payload};

    case 'SetY1Chart':
      return {...state, y1Chart: action.payload};
    case 'SetY2Chart':
      return {...state, y2Chart: action.payload};
    case 'SetY5Chart':
      return {...state, y5Chart: action.payload};

    case 'SetCurrentCandle':
      return {...state, currentCandle: action.payload};

    case 'SetCandles':
      switch (action.payload) {
        case 'clear':
          return {
            ...state,
            candles: null,
          };
        case '1W':
          return {
            ...state,
            candles: state.w1Chart,
            currentChartKey: action.payload,
          };
        case '1M':
          return {
            ...state,
            candles: state.m1Chart,
            currentChartKey: action.payload,
          };
        case '3M':
          return {
            ...state,
            candles: state.m3Chart,
            currentChartKey: action.payload,
          };
        case '6M':
          return {
            ...state,
            candles: state.m6Chart,
            currentChartKey: action.payload,
          };
        case '1Y':
          return {
            ...state,
            candles: state.y1Chart,
            currentChartKey: action.payload,
          };
        case '2Y':
          return {
            ...state,
            candles: state.y2Chart,
            currentChartKey: action.payload,
          };
        case '5Y':
          return {
            ...state,
            candles: state.y5Chart,
            currentChartKey: action.payload,
          };
        default:
          return {
            ...state,
            candles: state.d1Chart,
            currentChartKey: action.payload,
          };
      }
    default:
      return state;
  }
}
