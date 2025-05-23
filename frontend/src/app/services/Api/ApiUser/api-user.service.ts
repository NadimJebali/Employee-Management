import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserUpdate } from '../../../models/userupdate';


@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  private apiUrl = 'http://localhost:3000'
  private http = inject(HttpClient) ;

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+'/users');
  }

  AddUser(user : User): Observable<User> {
    return this.http.post<User>(this.apiUrl+'/users' , user);
  }

  DeleteUser(id : number) : Observable<void>
  {
    return this.http.delete<void>(this.apiUrl+'/users/'+id);
  }

  getUserById(id : number) : Observable<User> 
  {
    return this.http.get<User>(this.apiUrl+'/users/'+id);
  }

  UpdateUser(id : number , user : UserUpdate ) : Observable<User>
  {
    return this.http.put<User>(`${this.apiUrl}/users/${id}` , user)
  }
  
}
