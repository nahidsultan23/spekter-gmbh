import { combineReducers } from 'redux';

import postReducer from './postReducer';
import fetchPostsReducer from './fetchPostsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    fetchPostsReducer: fetchPostsReducer,
    postReducer: postReducer,
    loading: loadingReducer,
});
