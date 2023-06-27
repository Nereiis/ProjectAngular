import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../models/interfaces';

import {catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  db_url: string = 'http://localhost:5000';
  isclicked:boolean=false;
  constructor(private http: HttpClient) { }

  register(user: UserI){
    return this.http.post(`${this.db_url}/users/register`, user)
  }

  login(user: UserI){
    return this.http.post(`${this.db_url}/users/login`, user)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getRole(){
    let user = JSON.parse(String(localStorage.getItem('user')));

    return user?.role;
  }

  logOut(){
    // localStorage.clear(); //COn este borrariamos todo en localstorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }



  checkSession(){
    return this.http.get(`${this.db_url}/users/checksession`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return throwError(error.error.message)
  }
}