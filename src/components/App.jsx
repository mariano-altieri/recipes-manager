import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
