import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get getNombreCap(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

    reiniciarForm(): void {
        this.nombre = "Ironman";
        this.edad = 45;
    }
}