import { Injectable } from '@angular/core';
import { observable, of, Observable } from "rxjs";
import { Cuenta } from './cuenta';
import { CUENTAS } from "./mock-cuentas";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }
  getCuenta(usuario: string, password: string): Observable<Cuenta>{
    return of(CUENTAS.find(cuenta => cuenta.usuario === usuario && cuenta.password === password ));
  }

  getCuentaById(id: number): Observable<Cuenta>{
    return of(CUENTAS.find(cuenta => cuenta.id === id ));
  }

  addCuenta(cuenta: Cuenta):boolean{
    let registroDuplicado:boolean = CUENTAS.find(account =>cuenta.usuario === account.usuario) !== undefined;
    if (!registroDuplicado) {
      let id:number = CUENTAS.length + 1;
      cuenta.id = id;
      CUENTAS.push(cuenta); 
      console.log(CUENTAS);
      return true;
    }
    console.log("problema!");
    return false;    
  }
}
