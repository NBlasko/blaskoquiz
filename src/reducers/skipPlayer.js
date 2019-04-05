import { SKIP_PLAYER } from '../constants'

const initialstate = 1;

const skipPlayer = (state = initialstate, action) => {
    switch (action.type) {

        case SKIP_PLAYER:
            const { playersLength } = action;
            const newState = (state + 1 === playersLength)
                ? 1
                : state % playersLength + 1;
            return newState;

        default:
            return state
    }
}

export default skipPlayer;