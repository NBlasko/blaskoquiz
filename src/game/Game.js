import React, { Component } from 'react';
import Questions from './Questions';
import Statistics from './Statistics';
import { connect } from 'react-redux';

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
  console.log("state u game", state)
  return {
    currentPlayerId: state.currentPlayer,
    currentFirstPlayerId: state.currentFirstPlayer,
    showStatisticsButton: state.showStatisticsButton
  };
}

export default connect(mapStateToProps, null)(Game);