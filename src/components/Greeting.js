import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomGreetings } from '../redux/greetings/actions/actions';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Random Greetings</h1>
      <p>{greetings}</p>
      <button onClick={() => dispatch(randomGreetings())}>Click to greet</button>
    </>
  );
};

export default Greeting;
