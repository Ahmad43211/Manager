import { GET_PRODUCTDS, DELETE_PRODUCTD, ADD_PRODUCTD, CLEAR_PRODUCTDS } from '../actions/types.js';

const initialState = {
  productds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTDS:
      return {
        ...state,
        productds: action.payload,
      };
    case DELETE_PRODUCTD:
      return {
        ...state,
        productds: state.productds.filter((productd) => productd.id !== action.payload),
      };
    case ADD_PRODUCTD:
      return {
        ...state,
        productds: [...state.productds, action.payload],
      };
    case CLEAR_PRODUCTDS:
      return {
        ...state,
        productds: [],
      };
    default:
      return state;
  }
}
