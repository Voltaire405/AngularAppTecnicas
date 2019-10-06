import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';
import { Cuenta } from '../cuenta';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cuenta: Cuenta;
  user: string;
  pass: string;
 
  constructor(
    private cuentaService: CuentaService,
    private router: Router
    ) {     
    this.user = "";
    this.pass = "";
  }

  ngOnInit() {
  }

  login(): void{
    this.cuentaService.getCuenta(this.user, this.pass)
      .subscribe(cuenta => this.cuenta = cuenta);
    this.pass = "";
    this.user = "";
    if (this.cuenta != undefined) {
      this.router.navigate([`/cuenta/${this.cuenta.id}`]);
    }
    //console.log(this.cuenta);
    
  }

  goHome(): void{
    this.router.navigate(['/dashboard']);//dashboard
  }

}
