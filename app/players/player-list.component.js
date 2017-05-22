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
var player_service_1 = require("./player.service");
var PlayerListComponent = (function () {
    function PlayerListComponent(_PlayerService, http) {
        this._PlayerService = _PlayerService;
        this.http = http;
        this._apiURL = 'http://localhost:7000/api/players';
        this.pageTitle = 'Badminton spelers';
        this.imageUrl = "https://openclipart.org/download/270545/Troll-Face.svg";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.listFilter = '';
        this.name = "";
        this.country = "";
        this.gender = "";
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PlayerService.getPlayers()
            .subscribe(function (players) { return _this.players = players; }, function (error) { return _this.errorMessage = error; });
        console.log('in Onit');
    };
    PlayerListComponent.prototype.addPlayer = function () {
        var _this = this;
        this.playerFormData = {
            "name": this.name,
            "country": this.country,
            "gender": this.gender,
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this._apiURL, this.playerFormData, headers)
            .subscribe(function (res) {
            console.log("Added new player");
            _this.players.push(JSON.parse(res["_body"]));
        }, function (error) { return _this.errorMessage = error; });
        // Empty input fields after POST
        this.name = "";
        this.country = "";
        this.gender = "";
    };
    return PlayerListComponent;
}());
PlayerListComponent = __decorate([
    core_1.Component({
        selector: 'pm-players',
        moduleId: module.id,
        templateUrl: 'player-list.component.html',
        styleUrls: ['player-list.component.css']
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService, http_1.Http])
], PlayerListComponent);
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map