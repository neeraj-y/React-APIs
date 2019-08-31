import * as actions from '../actionTypes/actionConstants';

const intialState = {
    counter: 0
}

const rootReducer = (state = intialState, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            return { counter: state.counter + 1 } 

        case actions.DECREMENT:
                return { counter: state.counter - 1 } 

        case actions.RESET:
            return { counter: intialState.counter } 

        default:
            return state;
    }
}

export default rootReducer;