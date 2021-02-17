import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getButtonStateAC } from '../redux/actionCreators';

function Button() {
  const dispatch = useDispatch();
  const { toggle, text} = useSelector((state) => state);
  const btnClicked = async () => {
    const text = toggle? "OFF":"ON"
    await fetch('https://602d7e3096eaad00176dc7d1.mockapi.io/btnswitch/1', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text, toggle:!toggle}),
    })
    await fetch('https://602d7e3096eaad00176dc7d1.mockapi.io/btnswitch')
    .then(res => res.json())
    .then(res => dispatch(getButtonStateAC(res[0])))
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
