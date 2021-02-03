import keys from "../data/keys";

const INITIAL_MAP_STATE = {
  getMapData: [],
  mapError: '',
};

export const mapReducer = (
  state = INITIAL_MAP_STATE,
  action
) => {
  switch (action.type) {
    case keys.GET_MAP_DATA_SUCCESS:
      return { ...state, getMapData: action.getMapDataSucess };
    case keys.GET_MAP_DATA_ERROR:
      return { ...state, mapError: action.getMapDataError };
    default:
      return state;
  }
};
