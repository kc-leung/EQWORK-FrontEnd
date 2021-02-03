import axios from 'axios';
import keys from '../data/keys';

export const getEventsHourlyDataSuccess = data => {
  return {
    type: keys.GET_EVENTS_HOURLY_DATA_SUCCESS,
    getEventsHourlySucess: data,
  };
}

export const getEventsHourlyDataError = error => {
  return {
    type: keys.GET_EVENTS_HOURLY_DATA_ERROR,
    getEventsHourlyError: error,
  };
}

export const getEventsHourly = () => {
  return async dispatch => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + 'events/hourly');
      dispatch(getEventsHourlyDataSuccess(res.data));
    } catch (error) {
      dispatch(getEventsHourlyDataError(error));
    }
  }
}

export const getEventsDailyDataSuccess = data => {
  return {
    type: keys.GET_EVENTS_DAILY_DATA_SUCCESS,
    getEventsDailySucess: data,
  };
}

export const getEventsDailyDataError = error => {
  return {
    type: keys.GET_EVENTS_DAILY_DATA_ERROR,
    getEventsDailyError: error,
  };
}

export const getEventsDaily = () => {
  return async dispatch => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + 'events/daily');
      dispatch(getEventsDailyDataSuccess(res.data));
    } catch (error) {
      dispatch(getEventsDailyDataError(error));
    }
  }
}