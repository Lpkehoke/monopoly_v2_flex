'use strict';

const State = require('../state/state.js');

module.exports = class Game {
	constructor(numPlayer) {
		this._state = new State(numPlayer, game);
		this._gameIsAlive = true;
		this._numPlayer = numPlayer;
	}

	start() {
		let players = this._state.getPlayers()
		let i = 0;

		while (this._gameIsAlive) {
			players[i++ % this._numPlayer].go();
		}
	}

	end() {
		this._gameIsAlive = false;
	}
}