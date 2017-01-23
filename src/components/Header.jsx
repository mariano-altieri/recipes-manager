import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>My Recipes</h1>
                <nav>
                    <Link to="/">Latest</Link> |
                    <Link to="/recipes">Recipes</Link> |
                    <Link to="/menu-planner">Menu Planner</Link> |
                    <Link to="/shopping-list">Shopping List</Link>
                </nav>
            </header>
        );
    }
};
