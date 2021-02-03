import keys from "../data/keys";

const INITIAL_EVENTS_STATE = {
  getEventsHourlyData: [],
  getEventsDailyData: [],
  eventsError: '',
};

export const eventsReducer = (
  state = INITIAL_EVENTS_STATE,
  action
) => {
  switch (action.type) {
    case keys.GET_EVENTS_HOURLY_DATA_SUCCESS:
      return { ...state, getEventsHourlyData: action.getEventsHourlySucess };
    case keys.GET_EVENTS_HOURLY_DATA_ERROR:
      return { ...state, eventsError: action.getEventsHourlyError };
    case keys.GET_EVENTS_DAILY_DATA_SUCCESS:
      return { ...state, getEventsDailyData: action.getEventsDailySucess };
    case keys.GET_EVENTS_DAILY_DATA_ERROR:
      return { ...state, eventsError: action.getEventsDailyError };
    default:
      return state;
  }
};
