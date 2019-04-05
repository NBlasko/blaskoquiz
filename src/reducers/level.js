import { UPDATE_LEVEL } from '../constants'

const initialstate = -1;

const level = (state = initialstate, action) => {
    switch (action.type) {

        case UPDATE_LEVEL:
            return action.level;

        default:
            return state
    }
}

export default level;