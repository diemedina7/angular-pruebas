import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';
import { MortalKombatModule } from "./MortalKombat/mortal-kombat.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    MortalKombatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
