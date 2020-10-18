import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PROFITLS, DELETE_PROFITL, ADD_PROFITL } from './types';

// GET PROFITLS
export const getProfitls = () => (dispatch, getState) => {
  axios
    .get('/api/pls/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROFITLS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE PROFITL
export const deleteProfitl = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/pls/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProfitl: 'Profitl Deleted' }));
      dispatch({
        type: DELETE_PROFITL,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PROFITL
export const addProfitl = (profitl) => (dispatch, getState) => {
  axios
    .post('/api/pls/', profitl, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addProfitl: 'Profitl Added' }));
      dispatch({
        type: ADD_PROFITL,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
