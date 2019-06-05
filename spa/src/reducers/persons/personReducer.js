import {
    FETCH_PERSON_INIT, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAILURE
} from '../../actions/persons/types';

const initialState = {
    data: null,
    errors: [],
    loaded: false,
};

export const PersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSON_INIT:
            return Object.assign({}, state, {errors: [], data: null});
        case FETCH_PERSON_SUCCESS:
            return Object.assign({}, state, {data: action.payload, loaded: true, errors: []});
        case FETCH_PERSON_FAILURE:
            return Object.assign({}, state, {errors: action.payload, data: null, loaded: true});
        default:
            return state;
    }
};
