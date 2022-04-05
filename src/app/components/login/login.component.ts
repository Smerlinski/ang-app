import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    const { email, password} = this.form;
    this.loginService.login(email, password).subscribe({
      next: data => {
        console.log(data)
      }
    })
  }
}
