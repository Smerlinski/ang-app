import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8000/dj-rest-auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http: HttpClient ) { }

  signup(email: string, password1: string, password2: string): Observable<any> {
    return this.http.post(AUTH_API + 'registration/', {email, password1, password2}, httpOptions);
  }
}
