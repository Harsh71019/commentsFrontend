import { SUCCESS, FAIL, REQUEST } from '../constants/boilerConstants';
import axios from 'axios';

export const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST });
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch({ type: SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};