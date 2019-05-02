import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import Signin from './signin/Signin'
import Game from './game/Game'
import { connect } from 'react-redux';
import { shuffleQuestions } from './actions'

//import { InlineMath, BlockMath } from 'react-katex';

/*
const singleQuestionData = {
  question: <div> Намеснички устав из 1869. је познат и као</div>,
  answer: "d",
  a: <span>Гарашанинов</span>,

  b: <span>Пашићев</span>,

  c: <span>Краљев</span>,

  d: <span>Тројички</span>,
}

*/
class App extends Component {

  componentDidMount() {
    this.props.shuffleQuestions()
  }
  render() {

   //   const { a, b, c, d, answer, question } = singleQuestionData;

    return (
      <div className="bg-secondary" style={{ height: "100vh" }}>

        {/*
          
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
