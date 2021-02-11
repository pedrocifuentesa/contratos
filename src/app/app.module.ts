import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login/login.component';
import { MenuComponent } from './modules/menu/menu/menu.component';
import { ContratoComponent } from './modules/menu/menu/components/contrato/contrato.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { PersonasComponent } from './modules/menu/menu/components/personas/personas.component';
import { EmpleadosContratoComponent } from './modules/menu/menu/components/empleadosContrato/empleadosContrato.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ContratoComponent,
    NavbarComponent,
    PersonasComponent,
    EmpleadosContratoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
