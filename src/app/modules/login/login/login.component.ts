import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message=null;

  public loginForm = this.fb.group({
    usuario: ['',[ Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){}

  login(){
    console.log(this.loginForm.value);
    this.loginservice.login(this.loginForm.value.usuario, this.loginForm.value.password)
      .subscribe(item =>{
        
        this.router.navigateByUrl('/');
    }, (err) => {
          console.log(err);
      this.message = err.error.message;
      
    });
  }
}
