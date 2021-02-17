import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Button from './Components/Button';
import { getButtonStateAC } from './redux/actionCreators';


function App() {
  const dispatch = useDispatch()
useEffect(()=> {
  fetch('https://602d7e3096eaad00176dc7d1.mockapi.io/btnswitch')
  .then(res => res.json())
  .then(res => dispatch(getButtonStateAC(res[0])))
},[dispatch])

  return <div className="App">
    <Button/>
  </div>;
}

export default App;
