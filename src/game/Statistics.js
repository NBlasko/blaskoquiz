import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
class Statistics extends Component {

  state = {
    chartData: {}
  }

  componentDidMount() {
    const labels = this.props.players.map(player => player.name)
    const points = this.props.players.map(player => player.points)
    this.setState({
      chartData: {
        labels: labels,
        datasets: [{
          label: 'Резултати',
          data: points,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }]
      }
    });
  }


  render() {
    const players = this.props.players
      .map(player =>
        <li key={player.id}>
          {player.name} {" - "}
          <span className="badge badge-secondary">{player.points}</span>
        </li>)

    return (
      <div className="container">
        <ol className="pt-2"> {players} </ol>
        <div>
          <Bar
            height={100}
            data={this.state.chartData}
            options={{
              title: {
                text: "Поени",
                fontSize: 25,
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    min: 0
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps, null)(Statistics);