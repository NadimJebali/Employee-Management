import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CalenderComponent } from "../calender/calender.component";
import { TimeSheetService } from '../services/Api/ApiTimeSheet/time-sheet.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TimeSheetAdd } from '../models/timesheetadd';
import { TimeSheetAll } from '../models/timesheetall';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timework',
  imports: [CommonModule, CalenderComponent , FormsModule],
  templateUrl: './timework.component.html',
  styleUrl: './timework.component.css'
})
export class TimeworkComponent {

   day : string = "" ;
   month : string = "" ;
   years : string = "" ; 
   duration : number = 1 ;
   desc : string = ""
   timesh : TimeSheetAdd = new TimeSheetAdd();

   private timeservice = inject(TimeSheetService);

  requests : TimeSheetAll = new TimeSheetAll()

  ngOnInit(){
    this.getAll()
  }

  getAll()
  {
    this.timeservice.getallTimeByUser(Number(localStorage.getItem('id'))).subscribe({
      next : l => this.requests = l ,
      error : () => {  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });}
    })
  }
  
  getcor(d : string , m : string , y : string , du : string , de : string)
  {
    this.timesh.date = `${y}-${m}-${d}`
    this.timesh.hoursWorked = Number(du) 
    this.timesh.userId = Number(localStorage.getItem('id'))
    this.timesh.description = de
    this.timesh.status = "PENDING"

    if(this.timesh.date != "" && this.timesh.hoursWorked >= 1 && this.timesh.hoursWorked <= 10 ){

    this.timeservice.addTimesheet(this.timesh).subscribe({
      next : l => {this.getAll();

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
      } ,
      error : () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
    }
    else
    {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Select a date and Give a duration (between 1 and 10)!",
        confirmButtonColor: "#3E5580"
      });
    }
  }



  recup(event : string) {
      this.years = event.substring(0,4);
      this.month = event.substring(5,7);
      this.day = event.substring(8,10);
  }

}

