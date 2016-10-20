import EventEmitter from "events";
import AppDispatcher from "../dispatchers/Dispatcher.jsx";
import { REPORTDATA } from "../models/Data.jsx";

class Store extends EventEmitter {

	constructor() {
		super();
		this.dispatcherIndex = AppDispatcher.register(payload => {
			var action = payload.action;
			switch (action.actionType) {
				case 'FILTER_CARDS':
					this.filterCards(action);
					break;
				case 'NAVIGATE_TO':
					this.navigateTo(action);
					break;
			}
			return true;
		});

		this.data = this.initialData;

	}

	get initialData() {
		return {
			header: {
				title: 'Cards Application',
				filter: '',
				categories: [
					{name: '(None)'},
					{name: 'User Interface'},
					{name: 'Help'},
					{name: 'Administrator'},
					{name: 'Setup'}
				],
				selectedCategory: {name: 'User Interface'}
			},
			navigation: {
				menus: [
					{name: 'List'},
					{name: 'Cards'}
				],
				selectedMenu: {name: 'Cards'}
			},
			cards: REPORTDATA
		}
	};

	// reducers

	get header() {
		return this.data.header;
	}

	get navigation() {
		return this.data.navigation;
	}

	get content() {
		return this.data.cards.filter(this.textFilter.bind(this));
	}

	get type() {
		if (this.data.navigation.selectedMenu.name == 'Cards') {
			return 'card';
		} else {
			return 'list';
		}
	}

	// filters

	textFilter(item) {
		console.log(item);
		let reg = new RegExp(this.data.header.filter, 'i');
		return item.title.search(reg) !== -1;
	}

	categoryFilter(item) {

	}

	// handlers

	filterCards(action) {
		this.data.header.filter = action.data;
		this.emitChange();
	}

	navigateTo(action) {
		this.data.navigation.selectedMenu = this.data.navigation.menus[action.data];
		this.emitChange();
	}

	// StoreChange events

	emitChange() {
		this.emit(Store.CHANGE_VIEW_EVENT);
	}

	addChangeViewListener(callback) {
		this.on(Store.CHANGE_VIEW_EVENT, callback);
	}

	removeChangeViewListener(callback) {
		this.removeListener(Store.CHANGE_VIEW_EVENT, callback);
	}

}

Store.CHANGE_VIEW_EVENT = 'CHANGE_VIEW';

export default new Store;