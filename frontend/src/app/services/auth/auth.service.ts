import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { responseToken } from '../../models/reponseToken';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = 'http://localhost:3000' ;
  private http = inject(HttpClient);

  login(credentials: { email: string, password: string }) {
    return this.http.post<responseToken>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(tap(res => {localStorage.setItem('token', res.access_token)
                        localStorage.setItem('role' , res.role)
                        localStorage.setItem('email' , this.getDecodedToken().email)
                        localStorage.setItem('id' , this.getDecodedToken().sub)

      }));
  }

  profileData():Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/auth/profile`)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
  }

  getRole(): string | null
  {
    return localStorage.getItem('role');
  }

  getEmail(): string | null
  {
    return localStorage.getItem('email');
  }

  private getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (e) {
        console.error('Token invalide', e);
        return null;
      }
    }
    return null;
  }


}

