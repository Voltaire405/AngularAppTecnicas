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
    //TODO VALIDACIONES
    this.cuentaService.getCuentaById(this.id)
      .subscribe(cuenta => this.destino = cuenta);
    //consigna    
    this.destino.saldo += this.monto;
    //limpia
    this.id = 0;
    this.monto = 0;
  }

  retirar():void{
    //TODO VALIDACIONES
    this.cuentaService.getCuentaById(this.id)
      .subscribe(cuenta => this.destino = cuenta);
    //retira    
    this.destino.saldo -= this.monto;
    //limpia
    this.id = 0;
    this.monto = 0;
  }

}
