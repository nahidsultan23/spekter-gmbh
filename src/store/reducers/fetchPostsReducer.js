import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions/types';

const initState = {};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state };
        case FETCH_POSTS_SUCCESS:
            return { ...state, payload: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, payload: action.payload };
        default:
            return state;
    }
};

export default reducer;
