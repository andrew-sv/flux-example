import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Actions from "../actions/Actions.jsx";


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className="nav navbar-nav">
                {this.menuItems}
            </ul>
        );
    }

    get menuItems() {
        return this.props.data.menus.map((menu, i) => (
            <li key={i} className={classNames({'active': menu.name == this.selectedMenuName})}>
                <a href="#" onClick={this.navigateTo.bind(this, i)}>{menu.name}</a>
            </li>
        ));
    }

    get selectedMenuName() {
        return this.props.data.selectedMenu.name;
    }

    navigateTo(index) {
        Actions.navigateTo(index);
    }

}

export default Navigation;