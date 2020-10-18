import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_HUMANRESOURCES, DELETE_HUMANRESOURCE, ADD_HUMANRESOURCE } from './types';

// GET 
export const getHumanresources = () => (dispatch, getState) => {
  axios
    .get('/api/hrs/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_HUMANRESOURCES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE
export const deleteHumanresource = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/hrs/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteHumanresource: 'Deleted' }));
      dispatch({
        type: DELETE_HUMANRESOURCE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD
export const addHumanresource = (hr) => (dispatch, getState) => {
  axios
    .post('/api/hrs/', hr, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addHumanresource: 'Added' }));
      dispatch({
        type: ADD_HUMANRESOURCE,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
