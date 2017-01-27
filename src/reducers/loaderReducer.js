import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loaderReducer (state = initialState.isFetching, action) {
    switch(action.type) {
        case types.LOAD_RECIPES_START:
            return true;
        case types.LOAD_RECIPES_SUCCESS:
        case types.LOAD_RECIPES_FAIL:
            return false;
        default:
            return state;
    }
}
