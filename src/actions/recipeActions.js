import * as types from './actionTypes';
import data from '../mockedData/recipes';
import delay from 'lodash/delay';

const loadRecipesBegin = () => ({
    type: types.LOAD_RECIPES_START
});

const loadRecipesSuccess = (recipes) => ({
    type: types.LOAD_RECIPES_SUCCESS,
    recipes: recipes
});

const loadRecipesFailure = (err) => ({
    type: types.LOAD_RECIPES_FAIL,
    err
});

// Thunk
export const fetchRecipes = () => (dispatch) => {
    dispatch(loadRecipesBegin());

    // Emulating Async DB request
    delay(() =>
        dispatch(loadRecipesSuccess(data))
    , 1000);
};
