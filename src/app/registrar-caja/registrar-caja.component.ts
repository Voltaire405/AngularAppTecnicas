import { Component, OnInit } from '@angular/core';
import { CajaService } from '../caja.service';
import { Caja } from '../caja';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-caja',
  templateUrl: './registrar-caja.component.html',
  styleUrls: ['./registrar-caja.component.css']
})
export class RegistrarCajaComponent implements OnInit {
  identificacion: string;
  password: string;
    
  constructor(private cajaService: CajaService, private router: Router) {
    this.identificacion = "";
    this.password = "";
   }

  ngOnInit() {

  }
  addCaja():void{
    if(this.identificacion.length>0 && this.password.length >= 3){
      let caja:Caja = new Caja(this.identificacion, this.password);
      if(this.cajaService.addCaja(caja)){
        alert("Caja guardada correctamente!");
      }else{
        alert("Registro No almacenado!");
      }      
    }else{
      alert("Campos inválidos.");
    }  
    this.identificacion = "";
    this.password = "";  
  }

  goBack():void{
    this.router.navigate(["/login-caja"]);
  }

}
