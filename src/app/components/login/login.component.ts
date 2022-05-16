import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const { email, password} = this.form;
    this.loginService.login(email, password).subscribe({
      next: data => {
        console.log(data);
        localStorage.setItem('userId', data.user['id']);
        localStorage.setItem('userEmail', data.user['email']);
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        this.router.navigate(['/projects']);
      }
    })
  }
}
