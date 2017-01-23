import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/App';
import Latest from './components/Latest';
import Recipes from './components/Recipes';
import MenuPlanner from './components/MenuPlanner';
import ShoppingList from './components/ShoppingList';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Latest} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/menu-planner" component={MenuPlanner} />
        <Route path="/shopping-list" component={ShoppingList} />
    </Route>
);
