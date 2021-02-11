import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin_guard';
import { AuthGuard } from './core/guards/auth_guard';
import { LoginComponent } from './modules/login/login/login.component';
import { ContratoComponent } from './modules/menu/menu/components/contrato/contrato.component';
import { EmpleadosContratoComponent } from './modules/menu/menu/components/empleadosContrato/empleadosContrato.component';
import { PersonasComponent } from './modules/menu/menu/components/personas/personas.component';
import { MenuComponent } from './modules/menu/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard], },
  { path: 'contrato', component: ContratoComponent, canActivate: [AdminGuard], },
  { path: 'personas', component: PersonasComponent, },
  { path: 'empleadosContrato', component: EmpleadosContratoComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
