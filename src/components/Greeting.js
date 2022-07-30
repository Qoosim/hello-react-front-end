import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomGreetings, getGreetings } from '../redux/greetings/actions/actions';
getGreetings();

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Random Greetings</h1>
      <h4>{greetings}</h4>
      <button onClick={() => dispatch(randomGreetings())}>Click to greet</button>
    </>
  );
};

export default Greeting;
