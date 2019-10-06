import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CajasComponent } from './cajas/cajas.component';
import { LoginCajaComponent } from './login-caja/login-caja.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { RegistrarCajaComponent } from './registrar-caja/registrar-caja.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-caja', component: LoginCajaComponent },
  { path: 'cuenta/:id', component: CuentasComponent },
  { path: 'caja/:id', component: CajasComponent },
  {path: 'registrar-cuenta', component: RegistrarCuentaComponent},
  {path: 'registrar-caja', component: RegistrarCajaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
