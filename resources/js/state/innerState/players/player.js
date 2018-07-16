'use strict';

const Random = require('./../../../random/random.js');

module.exports = class Player {
	constructor(id, state) {
		this._id = id;
		this._position = 0;
		this._money = 2000;
		this._state = state;
	}

	go() {
		let newTurn = Random.getRandomTurn();
		this._state.movePlayer(this._id, this._position + newTurn);
	}

	getPosition() {
		return this._position;
	}

	setPosition(newPosition) {
		this._position = newPosition;
	}

	getId() {
		return this._id;
	}
}