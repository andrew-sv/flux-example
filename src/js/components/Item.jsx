import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";


class Item extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={classNames('view-item', { 'list': this.props.type == 'list', 'card': this.props.type == 'card' })}>
	            <span className="displayId">{this.props.data.displayid}</span>
	            <span className="title" title={this.props.data.title}>{this.props.data.title}</span>
	            <span className="category label label-info">{this.props.data.category}</span>
            </div>
        );
    }

}

export default Item;