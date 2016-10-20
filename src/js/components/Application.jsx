import React from "react";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Store from "../stores/Store.jsx";

class Applicaiton extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.state = Store.data;
	}

	componentDidMount() {
		Store.addChangeViewListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		Store.removeChangeViewListener(this._onChange.bind(this));
	}

	render() {
		return (
			<div className="base-component">
				<Header header={Store.header} nav={Store.navigation} />
				<Content data={Store.content} type={Store.type} />
			</div>
		);
	}

	_onChange() {
		this.setState(Store.data);
	}

}

export default Applicaiton;