import { combineReducers } from 'redux';

import { routerReducer } from './routerReducer';
import { dataReducer , tableReducer } from '../tableView';

export const combinedReducer = combineReducers({
  routing : routerReducer,
  data: dataReducer,
  tableNames: tableReducer,
});

export default combinedReducer;
