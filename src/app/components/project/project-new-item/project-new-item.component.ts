import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-project-new-item',
  templateUrl: './project-new-item.component.html',
  styleUrls: ['./project-new-item.component.scss']
})
export class ProjectNewItemComponent implements OnInit {

  form:any = {
    email: null,
    password: null
  };

  constructor(private regService: RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {email, password} = this.form;
    this.regService.signup(email, password).subscribe({
      next: data => {
        console.log(data);
      }
    })
  }
}
