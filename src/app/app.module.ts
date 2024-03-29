import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CajasComponent } from './cajas/cajas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginCajaComponent } from './login-caja/login-caja.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { RegistrarCajaComponent } from './registrar-caja/registrar-caja.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentasComponent,
    CajasComponent,
    DashboardComponent,
    LoginComponent,
    LoginCajaComponent,
    RegistrarCuentaComponent,
    RegistrarCajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
