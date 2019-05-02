import {
  ADD_PLAYERS,
  UPDATE_LEVEL,
  CURRENT_PLAYER,
  CURRENT_FIRST_PLAYER,
  UPDATE_POINTS,
  SKIP_PLAYER,
  SHUFFLE_QUESTIONS,
  NEXT_QUESTION,
  RERENDER_STATISTICS
} from '../constants';


export const addPlayers = (players) => ({
  type: ADD_PLAYERS,
  players
});


//updateLevel

export const updateLevel = (level) => ({
  type: UPDATE_LEVEL,
  level
});

//current player, always the next one
// we change them no matter the right or wrong answer
export const currentPlayer = (id) => ({
  type: CURRENT_PLAYER,
  id
});

//current first question asking player, after the right answer
// this is reseting the order of players
export const currentFirstPlayer = (id) => ({
  type: CURRENT_FIRST_PLAYER,
  id
});


/* 
  skip player, when row goes back to the first player
we add +1 so the next player who goes wrong is not going to be followed
by the answer of player from the last row

example 
1st row
if player A goes wrong, then goes player B,
2nd row
if player A goes wrong, then goes player C
*/

export const skipPlayer = (playersLength) => ({
  type: SKIP_PLAYER,
  playersLength
});

//update points

export const updatePoints = (payload) => ({
  type: UPDATE_POINTS,
  payload
});



export const shuffleQuestions = () => ({
  type : SHUFFLE_QUESTIONS
})

export const nextQuestion = (payload) => ({
  type : NEXT_QUESTION,
  payload
})


// rerender button statistics

export const showStatisticsButton = (payload) => ({
  type: RERENDER_STATISTICS,
  payload
})