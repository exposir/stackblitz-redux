import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { setUsername } from './actions/userActions';

const Counter = ({ count, username, increment, decrement, setUsername }) => {
  return (
    <div>
      <h2>Hello, {username}!</h2>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setUsername('Alice')}>Set Name to Alice</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
  username: state.user.username,
});

const mapDispatchToProps = {
  increment,
  decrement,
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
