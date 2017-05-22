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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var player_service_1 = require("./player.service");
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(_route, _router, _playerService, http) {
        this._route = _route;
        this._router = _router;
        this._playerService = _playerService;
        this.http = http;
        this._apiURL = 'http://localhost:7000/api/players';
        this.pageTitle = 'Speler detail pagina';
        this.name = "";
        this.country = "";
        this.gender = "";
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.getPlayer(id);
        });
    };
    PlayerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlayerDetailComponent.prototype.getPlayer = function (id) {
        var _this = this;
        this._playerService.getPlayer(id).subscribe(function (player) { return _this.player = player; }, function (error) { return _this.errorMessage = error; });
    };
    PlayerDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/players']);
    };
    PlayerDetailComponent.prototype.editPlayer = function () {
        var _this = this;
        this.playerFormData = {
            "name": this.player.name,
            "country": this.player.country,
            "gender": this.player.gender,
        };
        var id = this.player._id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(this._apiURL + this.player._id, this.playerFormData, headers)
            .subscribe(function (res) {
            console.log("You've edited a game");
            _this.player.push(JSON.parse(res._body));
        }, function (error) { return _this.errorMessage = error; });
    };
    PlayerDetailComponent.prototype.deletePlayer = function (id) {
        var _this = this;
        if (confirm('Zeker weten???')) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this.http.delete(this._apiURL + this.player._id, headers)
                .subscribe(function (res) {
                _this.player._id;
                _this._router.navigate(['/players']);
            });
        }
        else {
        }
    };
    return PlayerDetailComponent;
}());
PlayerDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/players/player-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        player_service_1.PlayerService,
        http_1.Http])
], PlayerDetailComponent);
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map