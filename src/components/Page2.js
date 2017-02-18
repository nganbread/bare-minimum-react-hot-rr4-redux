import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state: state }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: amount => dispatch({ type: 'INCREMENT' }),
  }
}


class Page2 extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      Page 2!
      <button onClick={this.props.increment}>Increment {this.props.state}</button>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2)