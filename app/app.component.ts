import { Component } from '@angular/core';

import { PlayerService } from './players/player.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a [routerLink]="['/players']" class='navbar-brand'>{{pageTitle}}</a>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    providers: [ PlayerService ]
})

export class AppComponent {
    pageTitle: string = "Badminton Spelers"
}
    