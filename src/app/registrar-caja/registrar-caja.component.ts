import { Component, OnInit } from '@angular/core';
import { CajaService } from '../caja.service';
import { Location } from '@angular/common';
import { Caja } from '../caja';

@Component({
  selector: 'app-registrar-caja',
  templateUrl: './registrar-caja.component.html',
  styleUrls: ['./registrar-caja.component.css']
})
export class RegistrarCajaComponent implements OnInit {
  identificacion: string;
  password: string;
    
  constructor(private cajaService: CajaService, private location: Location) { }

  ngOnInit() {

  }
  addCaja():void{
    if(this.identificacion.length>0 && this.password.length >= 3){
      let caja:Caja = new Caja(this.identificacion, this.password);
      this.cajaService.addCaja(caja);  
      this.identificacion = "";
      this.password = "";
    }else{
      //todo alert id o pass no validos
    }    
  }

  goBack():void{
    this.location.back();
  }

}
