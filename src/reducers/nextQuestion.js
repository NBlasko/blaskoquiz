import {NEXT_QUESTION} from '../constants'

const initialstate = [0, 0, 0];

const nextQuestion = (state = initialstate, action) => {
    switch (action.type) {

        case NEXT_QUESTION:
              let nextOrder = [...state]
              nextOrder[action.payload]++;
            return nextOrder;

        default:
            return state
    }
}

export default nextQuestion;