"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var PlayerService = (function () {
    function PlayerService(_http) {
        this._http = _http;
        this._playerURL = 'http://localhost:7000/api/players';
    }
    PlayerService.prototype.getPlayers = function () {
        return this._http.get(this._playerURL)
            .map(function (response) { return response.json().items; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    PlayerService.prototype.getPlayer = function (id) {
        return this.getPlayers()
            .map(function (players) { return players.find(function (p) { return p._id === id; }); });
    };
    PlayerService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map