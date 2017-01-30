import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>My Recipes</h1>
                <nav className="main-menu row">
                    <Link to="/" className="col-xs-12 col-sm-3">Latest</Link>
                    <Link to="/recipes" className="col-xs-12 col-sm-3">Recipes</Link>
                    <Link to="/menu-planner" className="col-xs-12 col-sm-3">Menu Planner</Link>
                    <Link to="/shopping-list" className="col-xs-12 col-sm-3">Shopping List</Link>
                </nav>
            </header>
        );
    }
};
