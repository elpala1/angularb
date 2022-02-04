import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk','Shrek', 'Goku', 'Thor'];
  heroeborrado : string = '';

  borrarH(){

    //console.log('Borrando...')
    //this.heroes = ['Ironman', 'Hulk', 'Shrek', 'Goku', 'Thor' ];

    this.heroeborrado = this.heroes.shift() || '' ;
  }

}
