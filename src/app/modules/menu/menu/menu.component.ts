import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  usuario;
  tipoUsuario= String;
  constructor(
    private loginService: LoginService,
  ) {
    this.tipoUsuario = this.loginService.getUsuario().tipoUsuario;
   }

  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario().usuario;
    

  }

}
