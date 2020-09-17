import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
  lista = [];
  listaGenero = [];
  prestamo = [];

  constructor(private librosService: LibrosService, private generoService: GeneroService) { }

  async ngOnInit() {
    this.lista = await this.librosService.listaLibro();
    this.listaGenero = await this.generoService.ListaGenero();

  }
  async agregarLibroALista(unLibro){
      this.librosService.guardarLibro(unLibro);
      //  this.lista = await this.librosService.listaLibro();
    
    // this.lista.push(unLibro);
  }
  async registrarPrestamo(libro){
    this.prestamo = await this.librosService.prestarLibro(libro);
  }

}
