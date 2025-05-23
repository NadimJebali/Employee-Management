import { Component, inject } from '@angular/core';
import { User } from '../models/user';
import { ApiUserService } from '../services/Api/ApiUser/api-user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiEvaluationService } from '../services/Api/ApiEvaluation/api-evaluation.service';
import { EvaluationAdd } from '../models/evaluationadd';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assessmenthr',
  imports: [FormsModule],
  templateUrl: './assessmenthr.component.html',
  styleUrl: './assessmenthr.component.css'
})
export class AssessmenthrComponent {

  val : number = -1 ; 
  val2 : number = -1 ;
  email : string = "" ;
  listUsers : User[] = [] ;

  evaluation : EvaluationAdd = new EvaluationAdd()

  private apiEvaluation = inject(ApiEvaluationService);
  private apiUser = inject(ApiUserService);

  task = {
    description: '',
    date: ''
  };

  submitTask() {
    console.log('Tâche soumise :', this.task);
    alert('Tâche enregistrée avec succès !');
  }


  

  submitEvaluation() {
    //console.log('Évaluation soumise :', this.evaluation);
    if(this.val2 > -1){
      this.evaluation.employeeId = this.val
      this.AddEvaluation(this.evaluation);
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You must select a User!",
        confirmButtonColor: "#3E5580"
      });
    }
    //alert('Évaluation envoyée avec succès !');
  }


  AddEvaluation(eva : EvaluationAdd)
  {
      this.apiEvaluation.AddEvaluation(eva).subscribe({
        next : l =>{
          Swal.fire({
            title: '<span class="alert-title">Info</span>',
            html: '<span class="alert-message">The request is success</span>',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            customClass: {
              popup: 'custom-toast-popup',
              icon: 'custom-toast-icon'
            }
          });
        },
        error : (e) => alert("erreur add Evaluation" + e)
      })
  }



  ngOnInit(){
    this.fetchUsers();
    
  }

  rr(v : number)
  {
    this.val2 = v ;
    //console.log(this.val)
  }


  fetchUsers(){
    this.apiUser.getAllUsers().subscribe({
      next : l => this.listUsers = l ,  
      error : () => alert("probleme listuser!")
    })
  }

  search(emu:string)
  {
    this.email = emu ;
  }

  all(){
    this.email = ""
  }
}
