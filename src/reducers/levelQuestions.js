import level1 from '../initialStateLevel/level1.js'
import level2 from '../initialStateLevel/level2.js'
import level3 from '../initialStateLevel/level3.js'
import { SHUFFLE_QUESTIONS } from '../constants'

const initialstate ={
    level1: [...level1],
    level2: [...level2],
    level3: [...level3],
} ;

const shuffleArray = (function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
})

const levelQuestions = (state = initialstate, action) => {
    switch (action.type) {

        case SHUFFLE_QUESTIONS:
            let notShuffled1 = [...state.level1],
            notShuffled2 = [...state.level2],
            notShuffled3 = [...state.level3]
            const shuffledArray = {
                level1: shuffleArray(notShuffled1),
                level2: shuffleArray(notShuffled2),
                level3: shuffleArray(notShuffled3),
            } 
            return shuffledArray;

        default:
            return state
    }
}

export default levelQuestions;


