import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter'

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.counter.value
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
