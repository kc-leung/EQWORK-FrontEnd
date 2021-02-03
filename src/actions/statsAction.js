import axios from 'axios';
import keys from '../data/keys';

export const getStatsHourlyDataSuccess = data => {
  return {
    type: keys.GET_STATS_HOURLY_DATA_SUCCESS,
    getStatsHourlySucess: data,
  };
}

export const getStatsHourlyDataError = error => {
  return {
    type: keys.GET_STATS_HOURLY_DATA_ERROR,
    getStatsHourlyError: error,
  };
}

export const getStatsHourly = () => {
  return async dispatch => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + 'stats/hourly');
      dispatch(getStatsHourlyDataSuccess(res.data));
    } catch (error) {
      dispatch(getStatsHourlyDataError(error));
    }
  }
}

export const getStatsDailyDataSuccess = data => {
  return {
    type: keys.GET_STATS_DAILY_DATA_SUCCESS,
    getStatsDailySucess: data,
  };
}

export const getStatsDailyDataError = error => {
  return {
    type: keys.GET_STATS_DAILY_DATA_ERROR,
    getStatsDailyError: error,
  };
}

export const getStatsDaily = () => {
  return async dispatch => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + 'stats/daily');
      dispatch(getStatsDailyDataSuccess(res.data));
    } catch (error) {
      dispatch(getStatsDailyDataError(error));
    }
  }
}