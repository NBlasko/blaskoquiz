import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import Signin from './signin/Signin'
import Game from './game/Game'
import { connect } from 'react-redux';
import { shuffleQuestions } from './actions'
import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount() {
    this.props.shuffleQuestions()
  }
  render() {
    return (
      <div className="bg-secondary" style={{ height: "100vh" }}>
        {(this.props.playersLength) ? <Game /> : <Signin />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { playersLength: state.players.length }
}

App.propTypes = {
  playersLength: PropTypes.number,
  shuffleQuestions: PropTypes.func
}

export default connect(mapStateToProps, { shuffleQuestions })(App);
