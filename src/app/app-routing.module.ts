import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin_guard';
import { AuthGuard } from './core/guards/auth_guard';
import { LoginComponent } from './modules/login/login/login.component';
import { MenuComponent } from './modules/menu/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard], },
  { path: 'contrato', component: MenuComponent, canActivate: [AdminGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
