import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../libros.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
   
  @Input() libro=[];
  @Output() prestaUnLibro = new EventEmitter();
  lended = "";
  id = "";
  elLibro = {
    id: this.id,
    lended: this.lended,
  };
  constructor(private librosService: LibrosService) {
    var respuesta: any;
    respuesta =   this.librosService.prestarLibro(this.libro);
    this.prestaUnLibro.emit();
   }

  ngOnInit(): void {
  }
  prestarLibro(){
    alert('Libro Prestado');
    var libro ={
      id : this.id,
      lended: this.lended
    };
      //
    this.prestaUnLibro.emit(libro);
   
  }

}
