import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid'
import { Personaje } from "../interfaces/mortalKombat.interfaces";

@Injectable()
export class MortalKombatService {

    private _personajes: Personaje[] = [
        {
            id: uuid(),
            nombre: "Rayden",
            poder: 500
        },
        {
            id: uuid(),
            nombre: "Goro", 
            poder: 1000
        }
    ];

    constructor() {
        console.log("Servicio inicializado");
    }

    get personajes(): Personaje[] {
        return [...this._personajes];
        // rompe la referencia de los objetos (se retornan como copias)
    }

    agregarPersonaje(personaje : Personaje): void {
        //const newPersonaje: Personaje = { id: uuid(), ...personaje }
        personaje.id = uuid();
        this._personajes.push(personaje);
        console.log(this.personajes);
    }
  
    /*eliminarPersonaje(index : number): void {
        console.log(this.personajes[index]);
        this._personajes.splice(index, 1);
    }*/

    eliminarPersonajeById(id: string): void {
        this._personajes = this._personajes.filter(pers => pers.id !== id);
    }
}