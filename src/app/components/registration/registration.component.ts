import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    email: null,
    password:null,
    password2: null
  }

  constructor(private registrationService: RegistrationService) { }

  ngOnInit( ): void {
  }

  signup(): void {
    const { email, password, password2} = this.form;
    this.registrationService.signup(email, password, password2).subscribe({
      next: data => {
        console.log(data)
      }
    })
  }
}
