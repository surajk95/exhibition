import { combineReducers } from 'redux';

import ImgurReducer from './components/imgur-management/imgur-reducer.js';

const rootReducer = combineReducers({
    ImgurReducer,
})

export default rootReducer;