import React, { Component } from 'react';
import Level from './Level'
import QuestionDataComponent from './QuestionDataComponent'
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    const displayedPlayer = this.props.players[this.props.currentPlayer]
    return (
      <div>

        <div className="container">
          <div className="h1 text-dark">
            {displayedPlayer.name} {" - "}
            <span className="badge badge-dark">{displayedPlayer.points}</span>
          </div>
        </div>

        {(this.props.level === -1)
          ? <Level />
          : <QuestionDataComponent level={this.props.level} />}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    level: state.level,
    players: state.players,
    currentPlayer: state.currentPlayer
  }
}
export default connect(mapStateToProps, null)(Questions);