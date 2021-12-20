import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    heroes: string[] = ["Spiderman", "Ironman", "hulk", "Thanos"];
    heroeBorrado: string = "";

    borrarHeroe(): void {
        console.log("borrando...");
        this.heroeBorrado = this.heroes.pop() || "";    
        //si es UNDEFINED le asignamos vacio
    }
}
