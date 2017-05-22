import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { PlayerListComponent } from './players/player-list.component';
import { PlayerDetailComponent } from './players/player-detail.component';
import { PlayerFilterPipe } from './players/player-filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'players', component: PlayerListComponent },
      { path: 'player/:id', component: PlayerDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'players', pathMatch: 'full' },
      { path: '**', redirectTo: 'players', pathMatch: 'full' }
    ])
   ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerFilterPipe
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
