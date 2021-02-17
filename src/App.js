import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Button from './Components/Button';
import { fetchPutBtnStateAC } from './redux/actionCreators';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPutBtnStateAC({toggle: true}));
  }, [dispatch]);

  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
