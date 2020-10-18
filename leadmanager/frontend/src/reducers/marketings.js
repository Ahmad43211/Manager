import { GET_MARKETINGS, DELETE_MARKETING, ADD_MARKETING, CLEAR_MARKETINGS } from '../actions/types.js';

const initialState = {
  marketings: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MARKETINGS:
      return {
        ...state,
        marketings: action.payload,
      };
    case DELETE_MARKETING:
      return {
        ...state,
        marketings: state.marketings.filter((marketing) => marketing.id !== action.payload),
      };
    case ADD_MARKETING:
      return {
        ...state,
        marketings: [...state.marketings, action.payload],
      };
    case CLEAR_MARKETINGS:
      return {
        ...state,
        marketings: [],
      };
    default:
      return state;
  }
}
