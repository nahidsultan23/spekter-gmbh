import { combineReducers } from 'redux';

import postReducer from './postReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    postReducer: postReducer,
    loading: loadingReducer,
});
