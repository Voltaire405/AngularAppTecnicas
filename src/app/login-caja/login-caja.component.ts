import { Component, OnInit } from '@angular/core';
import { Caja } from '../caja';
import { CajaService } from '../caja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-caja',
  templateUrl: './login-caja.component.html',
  styleUrls: ['./login-caja.component.css']
})
export class LoginCajaComponent implements OnInit {
  caja: Caja;
  identificacion: string;
  password: string;

  constructor(
    private cajaService: CajaService,
    private router: Router
    ) { 
    this.caja = new Caja();
    this.identificacion = "";
    this.password = "";
  }

  ngOnInit() {
  }

  login(): void {
    this.cajaService.getCaja(this.identificacion, this.password)
      .subscribe(caja => this.caja = caja);
      this.password = "";
      this.identificacion = "";
      if (this.caja != undefined) {
        this.router.navigate([`/caja/${this.caja.id}`]);
      }
  }

}
