import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private _loginUrl = 'http://localhost:3123/api/login';
  private _registerUrl = 'http://localhost:3123/api/register';

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // +
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
