import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { IPlayer } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'pm-players',
    moduleId: module.id,
    templateUrl: 'player-list.component.html',
    styleUrls: ['player-list.component.css']
})

export class PlayerListComponent implements OnInit {
    private _apiURL = 'http://localhost:7000/api/players';

    pageTitle: string = 'Badminton spelers';
    imageUrl: string = "https://openclipart.org/download/270545/Troll-Face.svg";
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string = '';
    errorMessage: string;
    players: IPlayer[];

    playerFormData: Object;
    name: string = "";
    country: string = "";
    gender: string = "";

    constructor(private _PlayerService: PlayerService, private http: Http) {

    }

    ngOnInit(): void {

        this._PlayerService.getPlayers()
        .subscribe(players => this.players = players,
                                error => this.errorMessage = <any>error);

        console.log('in Onit');
    }

        addPlayer() {
        this.playerFormData = {
            "name": this.name,
            "country": this.country,
            "gender": this.gender,
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this._apiURL, this.playerFormData, headers)
            .subscribe(
            (res: Response) => {
                console.log("Added new player")
                this.players.push(JSON.parse(res["_body"]))
            },
            error => this.errorMessage = <any>error
            );

        // Empty input fields after POST
        this.name = "";
        this.country = "";
        this.gender = "";
    }
}   