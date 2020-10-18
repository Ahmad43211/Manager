import { GET_HUMANRESOURCES, DELETE_HUMANRESOURCE, ADD_HUMANRESOURCE, CLEAR_HUMANRESOURCES } from '../actions/types.js';

const initialState = {
  humanresources: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HUMANRESOURCES:
      return {
        ...state,
        humanresources: action.payload,
      };
    case DELETE_HUMANRESOURCE:
      return {
        ...state,
        humanresources: state.humanresources.filter((humanresource) => productd.id !== action.payload),
      };
    case ADD_HUMANRESOURCE:
      return {
        ...state,
        humanresources: [...state.humanresources, action.payload],
      };
    case CLEAR_HUMANRESOURCES:
      return {
        ...state,
        humanresources: [],
      };
    default:
      return state;
  }
}
