import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Application from "./components/Application.jsx";

$(() => {

	ReactDOM.render( <Application />, document.getElementById('app-container') );

});