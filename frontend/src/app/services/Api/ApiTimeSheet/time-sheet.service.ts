import { inject, Injectable } from '@angular/core';
import { TimeSheetAdd } from '../../../models/timesheetadd';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimeSheetAll } from '../../../models/timesheetall';
import { TimeSheetAllEm } from '../../../models/timesheetallem';
import { TimeSheetPatch } from '../../../models/timesheetpatch';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  url : string = "http://localhost:3000" ;
  private http = inject(HttpClient)

  addTimesheet(timeadd : TimeSheetAdd) : Observable<any>
  {
    return this.http.post<any>(this.url+"/timesheets" , timeadd);
  }
  
  getallTimeByUser(id : number) : Observable<TimeSheetAll>
  {
    return this.http.get<TimeSheetAll>(`${this.url}/users/timesheet/${id}`);
  }

  getallTime() : Observable<TimeSheetAllEm[]>
  {
    return this.http.get<TimeSheetAllEm[]>(this.url+"/timesheets")
  }

  updateTimeSheet(request : TimeSheetPatch , id : number) : Observable<any>
  {
    return this.http.patch<any>(`${this.url}/timesheets/${id}` , request);
  }
}
