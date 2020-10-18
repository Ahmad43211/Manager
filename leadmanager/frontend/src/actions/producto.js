import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PRODUCTOS, DELETE_PRODUCTO, ADD_PRODUCTO } from './types';

// GET product_development
export const getProductos = () => (dispatch, getState) => {
  axios
    .get('/api/pos/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PRODUCTOS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE product_development
export const deleteProducto = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/pos/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProducto: 'Product Deleted' }));
      dispatch({
        type: DELETE_PRODUCTO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD product_development
export const addProducto = (producto) => (dispatch, getState) => {
  axios
    .post('/api/pos/', producto, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addProducto: 'Product Added' }));
      dispatch({
        type: ADD_PRODUCTO,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
