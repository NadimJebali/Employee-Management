import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EvaluationAdd } from '../../../models/evaluationadd';
import { Observable } from 'rxjs';
import { EvaluationAll } from '../../../models/evalutionallem';

@Injectable({
  providedIn: 'root'
})
export class ApiEvaluationService {

  private apiUrl = 'http://localhost:3000'
  private http = inject(HttpClient) ;

  AddEvaluation(evaluation : EvaluationAdd): Observable<EvaluationAdd> {
    return this.http.post<EvaluationAdd>(this.apiUrl+'/evaluation' , evaluation);
  }

  getallEvalByUser(id : number) : Observable<EvaluationAll>
  {
    return this.http.get<EvaluationAll>(`${this.apiUrl}/users/evaluation/${id}`);
  }
}
