import React, { Component } from 'react';
import Questions from './Questions';
import Statistics from './Statistics';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Game extends Component {

  state = {
    questions: true
  }

  handleClick = (value) => {
    this.setState({
      questions: value
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {(this.props.showStatisticsButton)
              ? <button className="col-sm btn-primary btn-lg "
                onClick={() => this.handleClick(false)}>
                Статистика
                  </button>
              : null}

            <button className="col-sm btn-primary btn-lg "
              onClick={() => this.handleClick(true)}>
              Питања
            </button>
          </div>
        </div>
        <div >
          {(this.state.questions) ? <Questions /> : <Statistics />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlayerId: state.currentPlayer,
    currentFirstPlayerId: state.currentFirstPlayer,
    showStatisticsButton: state.showStatisticsButton
  };
}

Game.propTypes = {
  currentPlayerId: PropTypes.number,
  currentFirstPlayerId: PropTypes.number,
  showStatisticsButton: PropTypes.bool,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps, null)(Game);