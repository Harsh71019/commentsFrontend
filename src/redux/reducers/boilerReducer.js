import { REQUEST, SUCCESS, FAIL } from '../constants/boilerConstants';

export const boilerReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case REQUEST:
      return { loading: true, todos: [] };
    case SUCCESS:
      return { loading: false, todos: action.payload };
    case FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};