import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Item from './Item.jsx';


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className={classNames("content-list", this.props.type)}>
	            {this.items}
            </ul>
        );
    }

	get items() {
		return this.props.data.map((item, i) => (
			<li className={classNames("content-list-item", this.props.type)} key={i}>
				<Item type={this.props.type} data={item} />
			</li>
		));
	}

}

export default Content;