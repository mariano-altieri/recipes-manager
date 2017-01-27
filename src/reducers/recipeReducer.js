import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function loadRecipesStart (state) {
    //return state.set('isFetching', true);
    return state;
}

export function loadRecipesSuccess (state, recipes) {
    return [...recipes];
    //return state
    //    .set('isFetching', false)
    //    .update('recipes', fromJS(recipes));
}

export function loadRecipesFail (state) {
    return state;
}

export default function recipeReducer (state = initialState.recipes, action) {
    switch(action.type) {
        case types.LOAD_RECIPES_START:
            return loadRecipesStart(state);
        case types.LOAD_RECIPES_SUCCESS:
            return loadRecipesSuccess(state, action.recipes);
        case types.LOAD_RECIPES_FAIL:
            return loadRecipesFail(state);
        default:
            return state;
    }
}
