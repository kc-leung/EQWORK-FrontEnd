import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { statsReducer } from './statsReducer';
import { mapReducer } from './mapReducer';

export default combineReducers({
  eventsReducer,
  statsReducer,
  mapReducer
});
