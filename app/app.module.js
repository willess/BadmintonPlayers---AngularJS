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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var player_list_component_1 = require("./players/player-list.component");
var player_detail_component_1 = require("./players/player-detail.component");
var player_filter_pipe_1 = require("./players/player-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'players', component: player_list_component_1.PlayerListComponent },
                { path: 'player/:id', component: player_detail_component_1.PlayerDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'players', pathMatch: 'full' },
                { path: '**', redirectTo: 'players', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            player_list_component_1.PlayerListComponent,
            player_detail_component_1.PlayerDetailComponent,
            player_filter_pipe_1.PlayerFilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map