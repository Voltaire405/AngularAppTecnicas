import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { ActivatedRoute, Router } from '@angular/router';


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
    if (this.monto < 99000000 && this.monto >= 10000) {
      if ((this.cuenta.saldo - this.monto) >= 10000) {
        this.cuentaService.getCuentaById(this.id)
          .subscribe(cuenta => this.destino = cuenta);
        if (this.destino !== undefined) {
            //consigna
          this.cuenta.saldo -= this.monto;
          this.destino.saldo += this.monto;
          alert("Transacción realizada!");
          //limpia
          this.id = 0;
          this.monto = 0;          
        }else{
          alert("Cuenta no encontrada!")
        }
      } else{
        alert("Saldo insuficiente!");
      }
    } else{
      alert("Monto inválido!");
    }   
  }
  eliminarCuenta():void{
    if (this.cuenta.saldo === 10000) {
      this.cuenta.estado = false;  
      this.router.navigate(['/dashboard'])
    }else{
      alert("No se puede eliminar una cuenta con saldo mayor a 10 mil pesos")
    }    
  }
}
