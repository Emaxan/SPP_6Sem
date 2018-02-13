import { handleActions } from 'redux-actions';
import { Record } from 'immutable';

import {
  GET_DATA_FAIL,
  GET_DATA_START,
  GET_DATA_SUCCESS,
} from './actionTypes';

const dataInitialState = Record({
  isFetching: false,
  data: new Object(),
});

const initialState = new dataInitialState();

export const dataReducer = handleActions({
  [GET_DATA_START] : (state) =>
    state.set('isFetching', true),

  [GET_DATA_SUCCESS] : (state, action) =>
    state.set('isFetching', false)
      .set('data', action.payload.data),

  [GET_DATA_FAIL] : (state) =>
    state.set('isFetching', false),
}, initialState);