import { combineReducers } from 'redux';

import { routerReducer } from './routerReducer';

export const combinedReducer = combineReducers({
  routing : routerReducer,
});

export default combinedReducer;
