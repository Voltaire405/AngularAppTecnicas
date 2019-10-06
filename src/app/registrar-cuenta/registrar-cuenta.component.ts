import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';
import { Cuenta } from '../cuenta';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-cuenta',
  templateUrl: './registrar-cuenta.component.html',
  styleUrls: ['./registrar-cuenta.component.css']
})
export class RegistrarCuentaComponent implements OnInit {
  nombre: string;
  apellido: string;
  usuario:string;
  password:string;

  constructor(
    private cuentaService: CuentaService,
    private location: Location) { }

  ngOnInit() {
  }
  addCuenta(): void{
    if (this.nombre.length>0 && this.apellido.length>0 && this.usuario.length>0 && this.password.length>=3) {
      let cuenta: Cuenta = new Cuenta(this.nombre, this.apellido, this.usuario, this.password);
      this.cuentaService.addCuenta(cuenta);//this return boolean value
      this.nombre = "";
      this.apellido = "";
      this.usuario = "";
      this.password = "";
    }    
  }
  goBack():void{
    this.location.back();
  }

}
