import { CURRENT_FIRST_PLAYER } from '../constants'

const initialstate = 0;

const currentFirstPlayer = (state = initialstate, action) => {
    switch (action.type) {

        case CURRENT_FIRST_PLAYER:
            return action.id;

        default:
            return state
    }
}

export default currentFirstPlayer;