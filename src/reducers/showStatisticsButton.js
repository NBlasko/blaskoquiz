
import { RERENDER_STATISTICS } from '../constants'

const initialstate = true;

const showStatisticsButton = (state = initialstate, action) => {
    switch (action.type) {

        case RERENDER_STATISTICS:
            return action.payload;

        default:
            return state
    }
}

export default showStatisticsButton;