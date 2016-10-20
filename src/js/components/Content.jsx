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

	get data() {
		if (this.props.type == 'card') {
			return [].concat(this.props.data, new Array(7).fill({fake: true}));
		} else {
			return this.props.data;
		}
	}
	get items() {
		return this.data.map((item, i) => (
			<li className={classNames("content-list-item", this.props.type, {'fake': item.fake})} key={i}>
				<Item type={this.props.type} data={item} fake={Boolean(item.fake)} />
			</li>
		));
	}

}

export default Content;