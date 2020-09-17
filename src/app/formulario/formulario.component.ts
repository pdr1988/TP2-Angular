import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LibrosService } from '../libros.service';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre="";
  autor = "";
  lended = "";
  genero = "";
  
  libro = {
     name: this.nombre,
     author: this.autor,
     lended: this.lended,
     gender: this.genero,
   
   }
  @Output() hayNuevoLibro = new EventEmitter();
  @Input() generoLibro=[];
  
  constructor(private librosService: LibrosService, private generoService: GeneroService) {
    var respuesta: any;
    respuesta =   this.librosService.guardarLibro(this.libro);
   
   }

  ngOnInit(): void {
    
  }
  agregarLibro(){
    alert('Libro Agregado');
    var libro ={
      name : this.nombre,
      author : this.autor,
      lended : this.lended,
      gender: this.genero
     
    };
    this.hayNuevoLibro.emit(libro);
   
  }

}
