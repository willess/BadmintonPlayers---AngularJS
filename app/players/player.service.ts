import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import { IPlayer } from './player';

@Injectable()
export class PlayerService {

    private _playerURL = 'http://localhost:7000/api/players';

    constructor(private _http: Http){}

    getPlayers(): Observable<IPlayer[]> {
        return this._http.get(this._playerURL)
            .map((response: Response) => <IPlayer[]> response.json().items)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPlayer(id: string): Observable<IPlayer> {
    return this.getPlayers()
        .map((players: IPlayer[]) => players.find(p => p._id === id));
    }


    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}