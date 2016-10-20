import AppDispatcher from "../dispatchers/Dispatcher.jsx";

class Actions {

	static filterChange(data) {
		AppDispatcher.handleViewAction({
			actionType: 'FILTER_CARDS',
			data
		});
	}

	static navigateTo(data) {
		AppDispatcher.handleViewAction({
			actionType: 'NAVIGATE_TO',
			data
		});
	}

}

export default Actions;