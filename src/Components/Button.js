import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPutBtnStateAC } from '../redux/actionCreators';

function Button() {
  const dispatch = useDispatch();
  const { toggle, text } = useSelector((state) => state);
  const btnClicked = async () => {
    dispatch(fetchPutBtnStateAC({ text, toggle}));
  };
  return (
    <>
      <button
        onClick={btnClicked}
        className="btn"
        style={{ backgroundColor: toggle ? '#3ae6ca' : '#424242' }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
