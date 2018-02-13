import { handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

import {
  GET_HEADER_FAIL,
  GET_HEADER_START,
  GET_HEADER_SUCCESS,
} from './actionTypes';

const dataInitialState = Record({
  isFetching: false,
  tableNames: List(),
});

const initialState = new dataInitialState();

export const tableReducer = handleActions({
  [GET_HEADER_START] : (state) =>
    state.set('isFetching', true),

  [GET_HEADER_SUCCESS] : (state, action) =>
    state.set('isFetching', false)
      .set('tableNames', state.get('tableNames')
        .merge(List(action.payload.tableNames))),

  [GET_HEADER_FAIL] : (state) =>
    state.set('isFetching', false),
}, initialState);