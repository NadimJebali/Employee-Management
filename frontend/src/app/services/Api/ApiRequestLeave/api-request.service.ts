import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRequests } from '../../../models/userrequests';
import { RequestLeaveAdd } from '../../../models/requestleaveadd';
import { RequestLeaveAll } from '../../../models/requestleaveall';
import { RequestLeavePatch } from '../../../models/requestleavepatch';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private apiUrl = 'http://localhost:3000' ;
  private http = inject(HttpClient) ;

  AddRequest(leave : RequestLeaveAdd) : Observable<any>
  {
     return this.http.post<any>(this.apiUrl+'/leave-request' , leave) ;
  }

  getAllRequestbyUserId(id : number) : Observable<UserRequests>
  {
    return this.http.get<UserRequests>(`${this.apiUrl}/users/leave-requests/${id}`);
  }

  getAllRequest() : Observable<RequestLeaveAll[]>
  {
    return this.http.get<RequestLeaveAll[]>(this.apiUrl+'/leave-request');
  }

  updateStatusRequest(request : RequestLeavePatch , id : number) : Observable<any>
  {
    return this.http.patch<any>(`${this.apiUrl}/leave-request/${id}` , request);
  }
}
