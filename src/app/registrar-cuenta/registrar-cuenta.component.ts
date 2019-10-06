import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';
import { Cuenta } from '../cuenta';
import { Router } from '@angular/router';

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
    private router:Router) { 
      this.nombre = "";
      this. apellido = "";
      this.usuario = "";
      this.password = "";
    }

  ngOnInit() {
  }
  addCuenta(): void{
    if (this.nombre.length>0 && this.apellido.length>0 && this.usuario.length>0 && this.password.length>=3) {
      let cuenta: Cuenta = new Cuenta(this.nombre, this.apellido, this.usuario, this.password);
      if (this.cuentaService.addCuenta(cuenta)) {
        alert("Cuenta creada Exitosamente!");
      }else{
        alert("No se creó la cuenta!");
      }      
    }else{
      alert("Campos inválidos");
    }  
    this.nombre = "";
    this.apellido = "";
    this.usuario = "";
    this.password = "";  
  }
  goBack():void{
    this.router.navigate(["/login"]);
  }

}
