import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REG_AUTH = 'http://localhost:3000/users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http: HttpClient ) { }

  signup(email: string, password: string): Observable<any> {
    return this.http.post(REG_AUTH, {email, password}, httpOptions);
  }
}
