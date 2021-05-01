import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(payload: any){
    return this.http.post('http://localhost:3000/users', payload).toPromise()
  }

  login(payload: any){
    return this.http.post('http://localhost:3000/users/login', payload).toPromise()
  }
}
