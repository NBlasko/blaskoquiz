import { GET_PLAYERS, ADD_PLAYERS, UPDATE_POINTS } from '../constants'

const initialstate = [];

const players = (state = initialstate, action) => {
  switch (action.type) {

    case GET_PLAYERS:
      return [
        ...state.players
      ];

    case ADD_PLAYERS:
      return [
        ...action.players
      ];

    case UPDATE_POINTS:
      const { points, id } = action.payload;
      const players = [...state];

      // subtract points only if there is anything to subtract
      // do not work with negative numbers

      (players[id].points + points < 0)
        ? players[id].points = 0
        : players[id].points = players[id].points + points;
      return players;

    default:
      return state
  }
}

export default players;