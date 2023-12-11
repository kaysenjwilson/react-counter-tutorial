import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';
import './styling.css';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className='header'>Counter {counter}</h1>
      <div className='button-container'>
      <button className='custom-button'onClick={() => dispatch(increment(10))}>+</button>
      <button className='custom-button' onClick={() => dispatch(decrement())}>-</button>
      </div>
      {isLogged ? <h3>Valuable info i shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
