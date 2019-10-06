import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuenta: Cuenta;
  destino: Cuenta;//Cuenta objeto de transacción
  id: number;
  monto: number;

  constructor(
    private cuentaService: CuentaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) { 
      this.id = 0;
      this.monto = 0;
    }

  ngOnInit() {
    this.getCuenta();
  }

  getCuenta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.cuentaService.getCuentaById(id)
      .subscribe(cuenta => this.cuenta = cuenta);
  }

  closeSession():void{
    this.router.navigate(['']);
    
    //console.log(this.cuenta);
  }

  consignar():void{
    if (this.monto < 99000000 && this.monto > 0) {
      if ((this.cuenta.saldo - this.monto) >= 10000) {
        this.cuentaService.getCuentaById(this.id)
          .subscribe(cuenta => this.destino = cuenta);
        if (this.destino !== undefined) {
            //consigna
          this.cuenta.saldo -= this.monto;
          this.destino.saldo += this.monto;
          //limpia
          this.id = 0;
          this.monto = 0;          
        }else{
          //todo undefined alert
        }
      } else{
        //todo insuf. ammount
      }
    } else{
      //todo invalid ammount
    }   
  }
}
