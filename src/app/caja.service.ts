import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { Caja } from "./caja";
import { CAJAS } from "./mock-cajas";

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor() { }
  getCaja(identificacion: string, password: string):Observable<Caja>{
    return of(CAJAS.find(caja => caja.identificacion === identificacion && caja.password === password));
  }

  getCajaById(id:number):Observable<Caja>{
    return of(CAJAS.find(caja => caja.id === id));
  }

  addCaja(caja: Caja):boolean{
    let registroDuplicado:boolean = CAJAS.find(cj => caja.identificacion === cj.identificacion) !== undefined;
    if (!registroDuplicado) {
      let id:number = CAJAS.length + 1;
      caja.id = id;
      CAJAS.push(caja); 
      console.log(CAJAS);
      return true;
    }
    return false;
  }
}
