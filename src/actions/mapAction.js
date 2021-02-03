import axios from 'axios';
import keys from '../data/keys';

export const getMapDataSuccess = data => {
  return {
    type: keys.GET_MAP_DATA_SUCCESS,
    getMapDataSucess: data,
  };
}

export const getMapDataError = error => {
  return {
    type: keys.GET_MAP_DATA_ERROR,
    getMapDataError: error,
  };
}

export const fetchMapData = () => {
  return async dispatch => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + 'poi');
      dispatch(getMapDataSuccess(res.data));
    } catch (error) {
      dispatch(getMapDataError(error));
    }
  }
}