import React, { Component } from 'react';
import { updateLevel } from '../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Level extends Component {

    handleLevelClick = (level) => {
        this.props.updateLevel(level)
    }

    render() {
        const l = this.props.levelQuestions;
        const l1 = l.level1.length,
            l2 = l.level2.length,
            l3 = l.level3.length;
        const nextQS = this.props.nextQuestionState;
        return (
            <div className="container">
                <p> Изаберите ниво питања </p>
                <div className="row">
                    {(l1 !== nextQS[0])
                        ? <button
                            onClick={() => this.handleLevelClick(1)}
                            className="col-sm btn btn-primary btn-lg mx-1">
                            Лако - {l1 - nextQS[0] }
                          </button>
                        : null}
                    {(l2 !== nextQS[1])
                        ? <button
                            onClick={() => this.handleLevelClick(2)}
                            className="col-sm btn btn-primary btn-lg mx-1">
                            Средње - {l2 - nextQS[1] }
                          </button>
                        : null}
                    {(l3 !== nextQS[2])
                        ? <button
                            onClick={() => this.handleLevelClick(3)}
                            className="col-sm btn btn-primary btn-lg mx-1">
                            Тешко - {l3 - nextQS[2] }
                          </button>
                        : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        levelQuestions: state.levelQuestions,
        nextQuestionState: state.nextQuestion
    };
}


Level.propTypes = {
    levelQuestions: PropTypes.object,
    nextQuestionState: PropTypes.array,
    updateLevel: PropTypes.func
  }

export default connect(mapStateToProps, { updateLevel })(Level);