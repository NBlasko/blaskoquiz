import { combineReducers } from 'redux';

import players from './players';
import level from './level';
import currentPlayer from './currentPlayer';
import currentFirstPlayer from './currentFirstPlayer';
import skipPlayer from './skipPlayer';
import levelQuestions from './levelQuestions';
import nextQuestion from './nextQuestion'

export default combineReducers(
    {
        players,
        level,
        currentPlayer,
        currentFirstPlayer,
        skipPlayer,
        levelQuestions,
        nextQuestion
    }
);