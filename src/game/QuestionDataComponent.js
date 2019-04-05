import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  currentPlayer,
  updateLevel,
  updatePoints,
  currentFirstPlayer,
  skipPlayer,
  nextQuestion
} from '../actions'

class QuestionDataComponent extends Component {

  state = {
    correctAnswer: false,
    tryToAnswer: 2,
    a: "btn-primary",
    b: "btn-primary",
    c: "btn-primary",
    d: "btn-primary",
  }

  handleAnswerClick = (e) => {
    if (this.state.correctAnswer || this.state.tryToAnswer === 0) return;
    if (e.target.name === "surrender") {
      // if this is the last try, sending action 
      // to reducer will update the "fake next player"
      if (this.state.tryToAnswer === 2)
        this.props.currentPlayer(
          (this.props.currentPlayerId + this.props.skipPlayerJump) % this.props.players.length);
      this.setState(function (state) {
        return { tryToAnswer: state.tryToAnswer - 1 }
      })
    }
  }

  // possible answer buttons
  handlePossibleAnswer = (name) => {

    if (this.state.correctAnswer || this.state.tryToAnswer === 0) return;

    const { level, levelQuestions, nextQuestionState } = this.props;
    const questionArrayLength = levelQuestions["level" + level].length;
    const singleQuestionData =
      levelQuestions["level" + level][nextQuestionState[level - 1] % questionArrayLength]

    //correct answer
    if (name === singleQuestionData.answer) {
      this.setState({
        correctAnswer: true,
        [name]: "btn-success"
      });
      this.props.updatePoints({
        points: this.props.level * 5,
        id: this.props.currentPlayerId,
      })
      return;
    }

    // wrong answer
    this.props.updatePoints({
      points: - this.props.level * 5,
      id: this.props.currentPlayerId,
    })

    //if this is the last try, sending action to reducer will update
    // the "fake next player"
    if (this.state.tryToAnswer === 2)
      this.props.currentPlayer((
        this.props.currentPlayerId + this.props.skipPlayerJump)
        % this.props.players.length)
    this.setState(function (state) {
      return {
        tryToAnswer: state.tryToAnswer - 1,
        [name]: "btn-danger"
      }
    })
  }

  nextQuestion = () => {
    const nextPlayerID = (this.props.currentFirstPlayerId + 1)
    % this.props.players.length;
    if (nextPlayerID === 0) this.props.skipPlayer(this.props.players.length);
    this.props.currentPlayer(nextPlayerID)
    this.props.currentFirstPlayer(nextPlayerID)
    this.props.updateLevel(-1);
    this.props.nextQuestion(this.props.level - 1)
  }

  render() {
    const { level, levelQuestions, nextQuestionState } = this.props;
    const questionArrayLength = levelQuestions["level" + level].length;
    const singleQuestionData =
      levelQuestions["level" + level][nextQuestionState[level - 1]
       % questionArrayLength]
    const { a, b, c, d, question } = singleQuestionData;
    return (
      <div className="container pt-2">
        <div >
          <div
            className="jumbotron jumbotron-fluid border 
            border-bottom bg-white rounded shadow-lg">
            <div className="ml-3 h2 text-dark">
              {question}
            </div>
          </div>
        </div>
        <div className="row">
          <button className={`col-sm ${this.state.a} btn-lg px-2`}
            value={a} name="a"
            onClick={() => this.handlePossibleAnswer("a")}>
            <kbd className="sm float-left">A</kbd> {a}
          </button>
          <button className={`col-sm ${this.state.b} btn-lg px-2`}
            value={b} name="b"
            onClick={() => this.handlePossibleAnswer("b")}>
            <kbd className="sm float-left">Б</kbd>  {b}
          </button>
        </div>
        <div className="row">
          <button className={`col-sm ${this.state.c} btn-lg px-2`}
            value={c} name="c"
            onClick={() => this.handlePossibleAnswer("c")}>
            <kbd className="sm float-left">В</kbd> {c}
          </button>
          <button className={`col-sm ${this.state.d} btn-lg px-2`}
            value={d} name="d"
            onClick={() => this.handlePossibleAnswer("d")}>
            <kbd className="sm float-left">Г</kbd>  {d}
          </button>
        </div>
        <div>

        </div>
        <div className="my-1">
          {(this.state.correctAnswer === true)
            ? <button
              className="btn btn-success btn-block btn-lg"
              onClick={this.nextQuestion}>
              Браво
            </button>
            : <button name="surrender"
              className="btn-dark btn-lg float-right"
              onClick={this.handleAnswerClick}>
              Не знам
            </button>
          }
        </div>
        <div style = {{clear: "right"}}> </div>
        <div className="mt-1">
          {(this.state.tryToAnswer === 0)
            ? <button
              className="btn btn-danger btn-block btn-lg"
              onClick={this.nextQuestion}>
              Изаберите друго питање
            </button>
            : null
          }
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.players,
    currentPlayerId: state.currentPlayer,
    currentFirstPlayerId: state.currentFirstPlayer,
    skipPlayerJump: state.skipPlayer,
    levelQuestions: state.levelQuestions,
    level: state.level,
    nextQuestionState: state.nextQuestion
  };
}

export default connect(
  mapStateToProps,
  {
    currentPlayer,
    updateLevel,
    updatePoints,
    currentFirstPlayer,
    skipPlayer,
    nextQuestion
  })(QuestionDataComponent);