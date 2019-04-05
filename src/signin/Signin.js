import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayers } from '../actions'

class Signin extends Component {

  state = {
    players: [],
    name: "",
    id: 0
  }

  setNewPlayer = () => {
    let players = [...this.state.players]
    players.push({ name: this.state.name, id: this.state.id, points: 0, iop: 0 });
    this.setState(function (state) {
      return {
        players: players,
        name: "",
        id: state.id + 1
      }
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddPlayerClick = () => {
    this.setNewPlayer();
  }

  handleAddPlayerKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.name !== '')
      this.setNewPlayer();
  }

  // it's important to have at least 2 players
  handleStartGameClick = () => {
    if (this.state.players.length > 1)
      this.props.addPlayers(this.state.players)
  }

  render() {
    const listPlayers = this.state.players.map(player =>
      <li key={player.id}>  {player.name} </li>);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3"> </div>
          <div className="col-lg-6">
            <div className="pt-5">

              <h2 className="text-dark text-center"> Математичар </h2>
              <br />

              <div>
                <div className="input-group mb-3">
                  <input type='text'
                    className="form-control"
                    value={this.state.name}
                    name="name"
                    onKeyPress={this.handleAddPlayerKeyPress}
                    onChange={this.handleChange}
                    placeholder="Напиши име такмичара..."
                    aria-label="Ime takmicara"
                    aria-describedby="add-player" />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={this.handleAddPlayerClick}>
                      Додај такмичара
                    </button>
                  </div>
                </div>

                {(this.state.players.length > 1)
                  ? <button
                    onClick={this.handleStartGameClick}
                    className="btn btn-primary mt-2 btn-block">
                    Започни игру
                    </button>
                  : null
                }
              </div>

              <ol className="mt-3">
                {listPlayers}
              </ol>

            </div>
          </div>
          <div className="col-lg-3"> </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPlayers })(Signin);