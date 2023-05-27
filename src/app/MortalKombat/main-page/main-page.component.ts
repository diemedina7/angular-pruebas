import { Component } from '@angular/core';
import { Personaje } from '../interfaces/mortalKombat.interfaces';
import { MortalKombatService } from '../services/mortalKombat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    constructor(private personajesService: MortalKombatService) {}

    get personajes(): Personaje[] {
      return this.personajesService.personajes;
    }

    onDeletePersonaje(id: string) : void {
      this.personajesService.eliminarPersonajeById(id);
    }

    onNewPersonaje(personaje: Personaje) : void {
      this.personajesService.agregarPersonaje(personaje);
    }
}
