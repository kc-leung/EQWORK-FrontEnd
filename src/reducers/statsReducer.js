import keys from "../data/keys";

const INITIAL_STATS_STATE = {
  getStatsHourlyData: [],
  getStatsDailyData: [],
  statsError: '',
};

export const statsReducer = (
  state = INITIAL_STATS_STATE,
  action
) => {
  switch (action.type) {
    case keys.GET_STATS_HOURLY_DATA_SUCCESS:
      return { ...state, getStatsHourlyData: action.getStatsHourlySucess };
    case keys.GET_STATS_HOURLY_DATA_ERROR:
      return { ...state, statsError: action.getstatsHourlyError };
    case keys.GET_STATS_DAILY_DATA_SUCCESS:
      return { ...state, getStatsDailyData: action.getStatsDailySucess };
    case keys.GET_STATS_DAILY_DATA_ERROR:
      return { ...state, statsError: action.getStattsDailyError };
    default:
      return state;
  }
};
