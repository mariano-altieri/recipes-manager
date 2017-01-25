import { combineReducers } from 'redux';
import recipes from './recipeReducer';
import isFetching from './loaderReducer';

const rootReducer = combineReducers({
    recipes,
    isFetching
});

export default rootReducer;
