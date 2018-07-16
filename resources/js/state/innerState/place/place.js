'use strict';

const Cell = require('./cell/cell.js');

const numCell = 40;

module.exports = class Place {
	constructor() {
		for (let i = 0; i < numCell; i++) {
			this._i = new Cell();
		}
	}

	sittle(player, cell) {
		let id = player.getId();
		this['_' + player.getPosition()].deleteViseter(id);
		this.['_' + cell % numCell].sittle(id);
	}
}