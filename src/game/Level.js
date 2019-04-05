import React, { Component } from 'react';
import { updateLevel } from '../actions'
import { connect } from 'react-redux';

class Level extends Component {

    handleLevelClick = (level) => {
        this.props.updateLevel(level)
    }

    render() {
        return (
            <div className="container">
                <p> Изаберите ниво питања </p>
                <div className="row">
                    <button
                        onClick={() => this.handleLevelClick(1)}
                        className="col-sm btn btn-primary btn-lg mx-1">
                        Лако
                    </button>
                    <button
                        onClick={() => this.handleLevelClick(2)}
                        className="col-sm btn btn-primary btn-lg mx-1">
                        Средње
                    </button>
                    <button
                        onClick={() => this.handleLevelClick(3)}
                        className="col-sm btn btn-primary btn-lg mx-1">
                        Тешко
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { updateLevel })(Level);