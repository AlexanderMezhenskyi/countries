import {ERROR_BOUNDRY_HAS_ERROR} from '../actions/ActionTypes';

const initialState = {
    hasError: false
};

export default function errorBoundryReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_BOUNDRY_HAS_ERROR:
            return {
                hasError: true
            };
        default:
            return state;
    }
}