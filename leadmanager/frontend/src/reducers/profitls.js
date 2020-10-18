import { GET_PROFITLS, DELETE_PROFITL, ADD_PROFITL, CLEAR_PROFITLS } from '../actions/types.js';

const initialState = {
  profitls: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFITLS:
      return {
        ...state,
        profitls: action.payload,
      };
    case DELETE_PROFITL:
      return {
        ...state,
        profitls: state.profitls.filter((profitl) => profitl.id !== action.payload),
      };
    case ADD_PROFITL:
      return {
        ...state,
        profitls: [...state.profitls, action.payload],
      };
    case CLEAR_PROFITLS:
      return {
        ...state,
        profitls: [],
      };
    default:
      return state;
  }
}
