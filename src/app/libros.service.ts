import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  
  // url = "https://still-reef-30402.herokuapp.com/";
  url = "https://aqueous-spire-30568.herokuapp.com/";

   constructor(private http: HttpClient) { }

  async guardarLibro(libro){
    try{
      var resultado: any;
      // resultado =  await this.http.post(this.url+"libro", unLibro).toPromise();
      resultado =  await this.http.post(this.url+"libro", libro).toPromise();
      console.log(resultado);
      return(resultado);
    }
    catch(error) { 
      console.log("el error es: "+error);
    }
  }
  async listaLibro(){
    try{
      var resultado: any;
      resultado = await this.http.get(this.url+"libro").toPromise();
      return(resultado);
    }
    catch(error) {
      console.log(error);
    }
  }
  async prestarLibro(unLibro){
    try{
      var resultado: any;
      resultado =  await this.http.put(this.url+"libro//:"+unLibro.id, unLibro.lended).toPromise();
      console.log("resultado de prestamo:"+resultado);
      return(resultado);
    }
    catch(error) { 
      console.log("el error es: "+error);
    }
  }
}
