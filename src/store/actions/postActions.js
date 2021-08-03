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
} from './types';

import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_REQUEST,
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (response.data && response.data.success) {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: response.data,
            });
        } else {
            dispatch({
                type: FETCH_POSTS_FAILURE,
                payload: response.data,
            });
        }
    } catch {
        dispatch({
            type: FETCH_POSTS_FAILURE,
        });
    }
};

export const fetchPostDetails = (postId) => async (dispatch) => {
    dispatch({
        type: FETCH_POST_DETAILS_REQUEST,
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
        if (response.data && response.data.success) {
            dispatch({
                type: FETCH_POST_DETAILS_SUCCESS,
                payload: response.data,
            });
        } else {
            dispatch({
                type: FETCH_POST_DETAILS_FAILURE,
                payload: response.data,
            });
        }
    } catch {
        dispatch({
            type: FETCH_POST_DETAILS_FAILURE,
        });
    }
};

export const deletePost = (postId) => async (dispatch) => {
    dispatch({
        type: DELETE_POST_REQUEST,
    });

    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId);
        if (response.data && response.data.success) {
            dispatch({
                type: DELETE_POST_SUCCESS,
                payload: response.data,
            });
        } else {
            dispatch({
                type: DELETE_POST_FAILURE,
                payload: response.data,
            });
        }
    } catch {
        dispatch({
            type: DELETE_POST_FAILURE,
        });
    }
};

export const createPost = (obj) => async (dispatch) => {
    dispatch({
        type: CREATE_POST_REQUEST,
    });

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', obj);
        if (response.data && response.data.success) {
            dispatch({
                type: CREATE_POST_SUCCESS,
                payload: response.data,
            });
        } else {
            dispatch({
                type: CREATE_POST_FAILURE,
                payload: response.data,
            });
        }
    } catch {
        dispatch({
            type: CREATE_POST_FAILURE,
        });
    }
};
