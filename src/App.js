import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import Signin from './signin/Signin'
import Game from './game/Game'
import { connect } from 'react-redux';
import { shuffleQuestions } from './actions'

import { InlineMath, BlockMath } from 'react-katex';


const singleQuestionData = {
  question: <div> Израчунај дужину кружног лука, полупречника
     <i> r</i> = 5<i>cm</i>, коме одговара централни угао од 12{'\u00b0'}. 
     Дужина кружног лука је: </div>,
  answer: "b",
  a: <InlineMath>
    {String.raw`\frac{\pi}{12}`}
  </InlineMath>,

  b: <InlineMath>
    {String.raw`\frac{\pi}{3}`}
  </InlineMath>,

  c: <InlineMath>
    {String.raw`\frac{\pi}{6}`}
  </InlineMath>,

  d: <InlineMath>
    {String.raw`\frac{\pi}{2}`}
  </InlineMath>,
}


class App extends Component {

  componentDidMount() {
    this.props.shuffleQuestions()
  }
  render() {

      const { a, b, c, d, answer, question } = singleQuestionData;

    return (
      <div className="bg-secondary" style={{ height: "100vh" }}>

        {
          
                  <div className="pl-5 m-5">
                    <div className="py-3">    question. {question}  </div>
                    <div className="py-3"> a. {a} </div>
                    <div className="py-3"> b. {b} </div>
                    <div className="py-3"> c. {c} </div>
                    <div className="py-3"> d. {d} </div>
                    <div className="py-3">    answer. {answer}  </div>
                  </div>
          
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
