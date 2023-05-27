import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/mortalKombat.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //forma de dar un nombre al parametro en la plantilla del componente
  //@Input("data") personajes: Personaje[] = [];

  @Input()
  public personajesList: Personaje[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id? :string): void {
    this.onDelete.emit( id );
  }
}
