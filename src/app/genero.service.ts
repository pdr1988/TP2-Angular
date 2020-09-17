import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url="https://aqueous-spire-30568.herokuapp.com/";
  constructor(private http: HttpClient) { }
  async ListaGenero(){
    try{
      var resultado: any;
      resultado = await this.http.get(this.url+"genero").toPromise();
      return(resultado);
    }
    catch(error){
      console.log("El error en el listado de genero es: "+error);
    }
  }
}
