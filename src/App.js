import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import Signin from './signin/Signin'
import Game from './game/Game'
import { connect } from 'react-redux';
import { shuffleQuestions } from './actions'

//import { InlineMath, BlockMath } from 'react-katex';

/*
const singleQuestionData = {
  question: <div> Изврши одговарајућа скраћивања,
    па израчунај производ <InlineMath>
    {String.raw`\frac{\text{42}}{\text{75}}\cdot
    \frac{\text{15}}{\text{32}}\cdot
    \frac{\text{5}}{\text{28}}
       `}
  </InlineMath>. Производ је </div>,
  answer: "c",
  a: <InlineMath>
    {String.raw`\frac{\text{6}}{\text{25}}`}
  </InlineMath>,

  b: <InlineMath>
    {String.raw`\text{1}`}
  </InlineMath>,

  c: <InlineMath>
    {String.raw`\frac{\text{3}}{\text{64}}`}
  </InlineMath>,

  d: <InlineMath>
    {String.raw`\frac{\text{377}}{\text{2400}}`}
  </InlineMath>,
}
*/

class App extends Component {

  componentDidMount() {
    this.props.shuffleQuestions()
  }
  render() {

    //  const { a, b, c, d, answer, question } = singleQuestionData;

    return (
      <div className="bg-secondary" style={{ height: "100vh" }}>

        {
          /*
                  <div className="pl-5 m-5">
                    <div className="py-3">    question. {question}  </div>
                    <div className="py-3"> a. {a} </div>
                    <div className="py-3"> b. {b} </div>
                    <div className="py-3"> c. {c} </div>
                    <div className="py-3"> d. {d} </div>
                    <div className="py-3">    answer. {answer}  </div>
                  </div>
          */
        }


        {(this.props.playersLength) ? <Game /> : <Signin />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { playersLength: state.players.length }
}

export default connect(mapStateToProps, { shuffleQuestions })(App);
