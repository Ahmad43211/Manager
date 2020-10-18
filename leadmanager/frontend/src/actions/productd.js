import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PRODUCTDS, DELETE_PRODUCTD, ADD_PRODUCTD } from './types';

// GET product_development
export const getProductds = () => (dispatch, getState) => {
  axios
    .get('/api/pds/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PRODUCTDS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE product_development
export const deleteProductd = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/pds/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProductd: 'Product Deleted' }));
      dispatch({
        type: DELETE_PRODUCTD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD product_development
export const addProductd = (productd) => (dispatch, getState) => {
  axios
    .post('/api/pds/', productd, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addProductd: 'Product Added' }));
      dispatch({
        type: ADD_PRODUCTD,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
