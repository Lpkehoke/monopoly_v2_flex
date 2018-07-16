'use strict';

const Place = require('./innerState/place/place.js');
const Player = require('./innerState/players/player.js');

module.exports = class State {
	constructor(numPlayer, game) {
		this._plase = new Place();
		this._players = [];
		this._game = game;

		for (let i = 0; i < numPlayer; i++) {
			this._players[i] = new Player(i+1, this);
		}
	}

	movePlayer(player, cell) {
		this._plase.sittle(player, cell);
	}
}