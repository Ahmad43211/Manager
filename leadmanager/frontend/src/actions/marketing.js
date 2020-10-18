import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_MARKETINGS, DELETE_MARKETING, ADD_MARKETING } from './types';

// GET MARKETINGS
export const getMarketings = () => (dispatch, getState) => {
  axios
    .get('/api/marketings/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MARKETINGS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE MARKETING
export const deleteMarketing = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/marketings/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteMarketing: 'Marketing Deleted' }));
      dispatch({
        type: DELETE_MARKETING,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD MARKETING
export const addMarketing = (marketing) => (dispatch, getState) => {
  axios
    .post('/api/marketings/', marketing, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addMarketing: 'Marketing Added' }));
      dispatch({
        type: ADD_MARKETING,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
