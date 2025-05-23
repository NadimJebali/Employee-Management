import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { CalenderComponent } from "../calender/calender.component";
import { FormsModule } from '@angular/forms';
import { ApiRequestService } from '../services/Api/ApiRequestLeave/api-request.service';
import { RequestLeave } from '../models/requestleave';
import { UserRequests } from '../models/userrequests';
import { RequestLeaveAdd } from '../models/requestleaveadd';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-holiday',
  imports: [CommonModule, CalenderComponent , FormsModule ],
  templateUrl: './holiday.component.html',
  styleUrl: './holiday.component.css'
})
export class HolidayComponent {

  day : string = "" ;
  month : string = "" ;
  years : string = ""; 
  dayf : string = "" ;
  monthf : string = "" ;
  yearsf : string = "" ; 
  event1 : string = "" ;
  duration : number = 1 ;
  private requestapi = inject(ApiRequestService) ; 
  requests : UserRequests= new UserRequests() ;


  ngOnInit()
  {
    this.getrequestuser()
  }

  getrequestuser(){
    this.requestapi.getAllRequestbyUserId(Number(localStorage.getItem('id'))).subscribe({
      next : l => { this.requests = l },
      error : () => {  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });}
    })
  }



  addrequest(reason : string)
  {
     let re : RequestLeaveAdd = new RequestLeaveAdd() ;
     re.startDate = `${this.years}-${this.month}-${this.day}`;
     re.endDate = `${this.yearsf}-${this.monthf}-${this.dayf}`;
     re.reason = reason ;
     re.userId = Number(localStorage.getItem('id'));
     //console.log(re)

     if(this.day != "" && reason != "")
      {
        this.requestapi.AddRequest(re).subscribe({
          next : () => {
            this.getrequestuser();

            Swal.fire({
              title: '<span class="alert-title">Info</span>',
              html: '<span class="alert-message">The request is sent</span>',
              icon: 'success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              toast: true,
              customClass: {
                popup: 'custom-toast-popup',
                icon: 'custom-toast-icon'
              }
            });
              
            },
          error : () => {  Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });}
        })
      }else 
      {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Select a date and Give a reason!",
          confirmButtonColor: "#3E5580"
        });
        
      }
  }
 

 recup(event : string) {
     this.years = event.substring(0,4);
     this.month = event.substring(5,7);
     this.day = event.substring(8,10);
     this.dayf = this.getNextDateString(event , this.duration).substring(8,10);
     this.monthf = this.getNextDateString(event , this.duration).substring(5,7);
     this.yearsf = this.getNextDateString(event , this.duration).substring(0,4);
     this.event1 = event ;
 }

 refrech(){
  this.dayf = this.getNextDateString(this.event1 , this.duration).substring(8,10);
  this.monthf = this.getNextDateString(this.event1 , this.duration).substring(5,7);
  this.yearsf = this.getNextDateString(this.event1 , this.duration).substring(0,4);
 }

 
 getNextDateString(startDateStr: string, durationInDays: number): string {
  const startDate = new Date(startDateStr);
  const resultDate = new Date(startDate);
  resultDate.setDate(resultDate.getDate() + durationInDays);

  // Format en yyyy-MM-dd
  const year = resultDate.getFullYear();
  const month = String(resultDate.getMonth() + 1).padStart(2, '0');
  const day = String(resultDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

 

}
