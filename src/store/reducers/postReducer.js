import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS,
    FETCH_POST_DETAILS_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
} from '../actions/types';

const initState = {};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state };
        case FETCH_POSTS_SUCCESS:
            return { ...state, payload: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, payload: action.payload };
        case FETCH_POST_DETAILS_REQUEST:
            return { ...state };
        case FETCH_POST_DETAILS_SUCCESS:
            return { ...state, payload: action.payload };
        case FETCH_POST_DETAILS_FAILURE:
            return { ...state, payload: action.payload };
        case DELETE_POST_REQUEST:
            return { ...state };
        case DELETE_POST_SUCCESS:
            return { ...state, payload: action.payload };
        case DELETE_POST_FAILURE:
            return { ...state, payload: action.payload };
        case CREATE_POST_REQUEST:
            return { ...state };
        case CREATE_POST_SUCCESS:
            return { ...state, payload: action.payload };
        case CREATE_POST_FAILURE:
            return { ...state, payload: action.payload };
        default:
            return state;
    }
};

export default reducer;
