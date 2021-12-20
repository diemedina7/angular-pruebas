import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './Listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}

/*
declarations: son los componentes que van a pertenecer al modulo a crear
exports: son los componentes exportables 
         para que puedan ser utilizados en cualquier parte de la app fuera del modulo
imports: son los modulos (solo modulos) 
        CommonModule: importa directivas ng tipo logicas (if/for/else)
*/