import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
  }
  constructor() { }

  ngOnInit(): void {
    this.form.firstName="John",
    this.form.lastName="Doe",
    this.form.email="j.doe@test.com"
  }

}
