import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const PROJECTS_API = 'http://localhost:8000/api/projects/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    return this.http.get(PROJECTS_API, httpOptions)
  }

}
