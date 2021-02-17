import { GET_BUTTON_STATE } from './actionTypes';

export const getButtonStateAC = (payload) => ({
  type: GET_BUTTON_STATE,
  payload,
});

export const fetchGetBtnStateAC = (payload) => {
  return (dispatch) => {
    fetch('https://602d7e3096eaad00176dc7d1.mockapi.io/btnswitch')
      .then((res) => res.json())
      .then((res) => dispatch(getButtonStateAC(res[0])));
  };
};

export const fetchPutBtnStateAC = (payload) => {
  return (dispatch) => {
    const btn = {
      text: payload.toggle ? 'OFF' : 'ON',
      toggle: !payload.toggle,
    };
    fetch('https://602d7e3096eaad00176dc7d1.mockapi.io/btnswitch/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(btn),
    })
      .then((res) => res.json())
      .then((res) => dispatch(getButtonStateAC(res)));
  };
};
