import React from "react";
import ReactDOM from "react-dom";
import Actions from '../actions/Actions.jsx';
import Navigation from './Navigation.jsx';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav className="header">
                <span className="title">{this.props.header.title}</span>
                <input type="text" className="filter" value={this.props.header.filter} onChange={this.onFilterChange.bind(this)} />
                <Navigation data={this.props.nav} />
            </nav>
        );
    }

    onFilterChange(event) {
        Actions.filterChange(event.target.value || '');
    }

}

export default Header;