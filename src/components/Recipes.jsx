import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

export class Recipes extends React.Component {
    componentWillMount() {
        this.props.fetchRecipes();
    }

    render() {
        const { recipes, isFetching } = this.props;

        if (isFetching) {
            return (<p>Loading...</p>);
        }

        return (
            <div>
                <h1>RECIPES 2</h1>
                { recipes.map(recipe => 
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.desc}</p>
                    </div>
                )}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
