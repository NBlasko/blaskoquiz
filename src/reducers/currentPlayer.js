import { CURRENT_PLAYER } from '../constants'

const initialstate = 0;

const currentPlayer = (state = initialstate, action) => {
    switch (action.type) {

        case CURRENT_PLAYER:
            return action.id;

        default:
            return state
    }
}

export default currentPlayer;