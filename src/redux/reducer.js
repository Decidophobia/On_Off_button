import { GET_BUTTON_STATE } from './actionTypes';
const initialState = { text: 'OFF', toggle: false };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BUTTON_STATE:
      const { text, toggle } = action.payload;
      return { ...state, text, toggle };
    default:
      return state;
  }
}
