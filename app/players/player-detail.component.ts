import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { Subscription }       from 'rxjs/Subscription';

import { IPlayer } from './player';
import { PlayerService } from './player.service';

@Component({
    templateUrl: 'app/players/player-detail.component.html'
})
export class PlayerDetailComponent {

    private _apiURL = 'http://localhost:7000/api/players';

    pageTitle: string = 'Speler detail pagina';
    // player: IPlayer;
    player: any;
    errorMessage: string;
    private sub: Subscription;

    playerFormData: Object;
    name: string = "";
    country: string = "";
    gender: string = "";

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _playerService: PlayerService,
                private http: Http) {
    }
    ngOnInit(): void {

        this.sub = this._route.params.subscribe(
        params => {
            let id = params['id'];
            console.log(id);
            this.getPlayer(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPlayer(id: string) {
        this._playerService.getPlayer(id).subscribe(
            player => this.player = player,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/players']);
    }

    editPlayer() {
        this.playerFormData = {
            "name": this.player.name,
            "country": this.player.country,
            "gender": this.player.gender,
        };
        var id = this.player._id;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(this._apiURL + this.player._id, this.playerFormData, headers)
            .subscribe(
            (res: any) => {
                console.log("You've edited a game");
                this.player.push(JSON.parse(res._body))
            },
            error => this.errorMessage = <any>error
            );
    }

    deletePlayer(id: string) {
        if (confirm('Zeker weten???')) {

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.delete(this._apiURL + this.player._id, headers)
                .subscribe(
                (res: Response) => {
                    this.player._id;
                    this._router.navigate(['/players']);
                }
                );
        } else {
        }
    }

}