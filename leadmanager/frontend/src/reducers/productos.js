import { GET_PRODUCTOS, DELETE_PRODUCTO, ADD_PRODUCTO, CLEAR_PRODUCTOS } from '../actions/types.js';

const initialState = {
  productos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case DELETE_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter((productd) => productd.id !== action.payload),
      };
    case ADD_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case CLEAR_PRODUCTOS:
      return {
        ...state,
        productos: [],
      };
    default:
      return state;
  }
}
