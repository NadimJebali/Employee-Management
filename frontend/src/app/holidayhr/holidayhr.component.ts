import { Component, inject } from '@angular/core';
import { ApiRequestService } from '../services/Api/ApiRequestLeave/api-request.service';
import { RequestLeaveAll } from '../models/requestleaveall';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestLeavePatch } from '../models/requestleavepatch';
import Swal from 'sweetalert2';
import { ApiUserService } from '../services/Api/ApiUser/api-user.service';
import { UserUpdate } from '../models/userupdate';

@Component({
  selector: 'app-holidayhr',
  imports: [NgClass , FormsModule],
  templateUrl: './holidayhr.component.html',
  styleUrl: './holidayhr.component.css'
})
export class HolidayhrComponent {
  private request = inject(ApiRequestService)
  private apiUser = inject(ApiUserService);
  listrequest : RequestLeaveAll[] = [] ; 
  val : RequestLeaveAll = new RequestLeaveAll() ;
  email : string = ""


  ngOnInit(){
    this.getAllRequest()
  }

  updatesolde( eq : RequestLeaveAll , nj : number)
  {
    let userup : UserUpdate = new UserUpdate()
    userup.firstName = eq.user.firstName ;
    userup.lastName = eq.user.lastName ;
    userup.age = eq.user.age ;
    userup.department = eq.user.department
    userup.email = eq.user.email
    userup.phoneNumber = eq.user.phoneNumber
    userup.soldconge = nj ;
    userup.role = eq.user.role 
    
    this.apiUser.UpdateUser(eq.user.id , userup).subscribe({
      next : l => {console.log(l)
          this.getAllRequest()
          
      },
      error : ()=> alert("errer solde")
    })
  }


  getAllRequest()
  {
    this.request.getAllRequest().subscribe({
      next : l => this.listrequest = l ,
      error : () => alert('error all requests')
    })
  }

  getDaysBetweenDates(start: string, end: string): number {
    return Math.round((new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24)) +1;
  }


  approved(lr : RequestLeaveAll)
  {
    let newrequest : RequestLeavePatch = new RequestLeavePatch()
    newrequest.startDate = this.val.startDate ;
    newrequest.endDate = this.val.endDate ;
    newrequest.reason = this.val.reason
    newrequest.status = "APPROVED"
    if(this.val.status != "APPROVED"){
    if(this.val.id != 0){
      if(this.val.user.soldconge>= this.getDaysBetweenDates(this.val.startDate , this.val.endDate)){
      Swal.fire({
        title: "Are You Sure ?",
        icon: "question",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        confirmButtonColor : "#3E5580",
        cancelButtonColor : "#F00020"
      }).then((result) => {
        if (result.isConfirmed) {

          this.updatesolde(this.val , this.val.user.soldconge-this.getDaysBetweenDates(this.val.startDate , this.val.endDate));
          
          this.request.updateStatusRequest(newrequest, this.val.id).subscribe({
            next: () => this.getAllRequest(),
            error: () => alert('Erreur patch')
          });
          
          

        }
      });
    }else
    {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "the vacancy period is less than the requested vacancy period",
        confirmButtonColor: "#3E5580"
      });
    } 
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Select a request!",
        confirmButtonColor: "#3E5580"
      });
    }
  }
  else 
  {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "This Request is Approved!",
      confirmButtonColor: "#3E5580"
    });
  }
  }

  rejected(lr : RequestLeaveAll)
  {
    let newrequest : RequestLeavePatch = new RequestLeavePatch()
    newrequest.startDate = this.val.startDate ;
    newrequest.endDate = this.val.endDate ;
    newrequest.reason = this.val.reason
    newrequest.status = "REJECTED"
    if(this.val.id != 0){
      Swal.fire({
        title: "Are You Sure ?",
        icon: "question",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        confirmButtonColor : "#3E5580",
        cancelButtonColor : "#F00020"
      }).then((result) => {
        if (result.isConfirmed) {
          this.request.updateStatusRequest(newrequest ,this.val.id ).subscribe({
            next : (l) => this.getAllRequest(),
            error : () =>alert('erreur patch')
          })
        }
      });


 
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Select a request!",
        confirmButtonColor: "#3E5580"
      });
    }
  }


  search(emu:string)
  {
    this.email = emu ;
  }

  all(){
    this.email = ""
  }

}
