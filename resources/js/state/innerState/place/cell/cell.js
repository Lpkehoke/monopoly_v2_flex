'use strict';

module.exports = class Cell {
	constructor() {
		this._owner = 'country';
		this._visiters = [];
	}

	deleteViseter(id) {
		delete this._visiters[id];
	}

	sittle(id) {
		this._visiters[id] = true;
	}
}