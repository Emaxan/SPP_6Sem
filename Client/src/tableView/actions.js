import { createActions } from 'redux-actions';

import {
  GET_DATA_FAIL,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_HEADER_FAIL,
  GET_HEADER_START,
  GET_HEADER_SUCCESS,
} from './actionTypes';

export const {
  getDataFail,
  getDataSuccess,
  getDataStart,
  getHeaderFail,
  getHeaderSuccess,
  getHeaderStart,
} = createActions({
  [GET_DATA_FAIL]: () => {},
  [GET_DATA_SUCCESS]: (data) => ({ data }),
  [GET_DATA_START]: () => {},
  [GET_HEADER_FAIL]: () => {},
  [GET_HEADER_SUCCESS]: (tableNames) => ({ tableNames }),
  [GET_HEADER_START]: () => {},
});

export const getTableNames = () => (dispatch) => {
  dispatch(getHeaderStart());
  return fetch('./mock/tableNames.json').then((response) => {
    if(response.status != 200){
      dispatch(getHeaderFail());
    } else {
      response.json().then((data) => {
        dispatch(getHeaderSuccess(data));
      });
    }
  });
};

export const getData = (tableName) => (dispatch) => {
  dispatch(getDataStart());
  return fetch('./mock/tables/' + tableName + '.json').then((response) => {
    if(response.status != 200){
      dispatch(getDataFail());
    } else {
      response.json().then((data) => {
        dispatch(getDataSuccess(data));
      });
    }
  });
};
