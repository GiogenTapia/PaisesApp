import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

 termino : string = '';
 hayError : boolean = false;
 paises : Country[] = [];
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }
  
  buscar(){
    this.hayError = false;
    this.paisService.obtenerPais(this.termino).subscribe(
      (paises)=>
      {
        this.paises = paises;
       
      },(err)=>{

        this.hayError = true;
        this.paises = [];

      }
    )
  
  }
}