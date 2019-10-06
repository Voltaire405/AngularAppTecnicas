import { Injectable } from '@angular/core';
import { observable, of, Observable } from "rxjs";
import { Caja } from "./caja";
import { CAJAS } from "./mock-cajas";

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor() { }
  getCaja(identificacion: string, password: string){
    return of(CAJAS.find(caja => caja.identificacion === identificacion && caja.password === password));
  }

  getCajaById(id:number){
    return of(CAJAS.find(caja => caja.id === id));
  }
}
