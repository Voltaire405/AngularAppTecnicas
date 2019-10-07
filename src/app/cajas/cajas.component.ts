import { Component, OnInit } from '@angular/core';
import { CajaService } from '../caja.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Caja } from '../caja';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent implements OnInit {
  caja:Caja;
  destino: Cuenta;
  id: number;
  monto: number;

  constructor(
    private cajaService: CajaService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cuentaService: CuentaService
  ) { }

  ngOnInit() {
    this.getCaja();
  }
  getCaja(): void {
    const id = +this.route.snapshot.paramMap.get('id');    
    this.cajaService.getCajaById(id)
      .subscribe(caja => this.caja = caja);
  }

  closeSession():void{
    this.router.navigate(['']);
    
    //console.log(this.cuenta);
  }

  consignar():void{
    if (this.monto < 10000000 && this.monto >= 10000) {
      this.cuentaService.getCuentaById(this.id)
        .subscribe(cuenta => this.destino = cuenta);
        if (this.destino != undefined) {
          if (this.destino.estado) {
          //consigna    
            this.destino.saldo += this.monto;
            alert("Transacción realizada!");    
          }else{
            alert("Cuenta inactiva!");    
          }         
          
        }else{
          alert("Cuenta no encontrada!");
        }
    }else{
      alert("Monto inválido!")
    }
    //limpia
    this.id = 0;
    this.monto = 0;   
  }

  retirar():void{
    if (this.monto >= 10000 && this.monto <= 600000) {
      this.cuentaService.getCuentaById(this.id)
      .subscribe(cuenta => this.destino = cuenta);
      if ((this.destino.saldo - this.monto) >=10000) {
        if (this.destino.estado) {
          //retira    
          this.destino.saldo -= this.monto;
          alert("Transacción realizada!");          
        }else{
          alert("Cuenta inactiva!");          
        }
        
      }else{
        alert("Saldo insuficiente!");
      }  
    }else{
      alert("No se puede retirar la cantidad solicitada.");
    }   
    //limpia
    this.id = 0;
    this.monto = 0;
  }

}
