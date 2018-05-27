// https://github.com/notrab/create-react-app-redux/blob/master/src/containers/home/index.js
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Counter = props => (
  <section>
    <h2>Counter Section</h2>
    <p>Count: {props.count}</p>

    <div>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>

      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </div>

    <div>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>

      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </div>
  </section>
);

Counter.propTypes = {
  count: propTypes.number,
  isDecrementing: propTypes.bool,
  isIncrementing: propTypes.bool,
  increment: propTypes.func,
  incrementAsync: propTypes.func,
  decrement: propTypes.func,
  decrementAsync: propTypes.func,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
