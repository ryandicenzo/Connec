import { createStore, combineReducers } from 'redux';

import profile from './profile/reducer';

const store = createStore(
  combineReducers({
    profile
  })
);

export default store;
