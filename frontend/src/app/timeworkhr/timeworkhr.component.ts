import { Component, inject } from '@angular/core';
import { TimeSheetService } from '../services/Api/ApiTimeSheet/time-sheet.service';
import { TimeSheetAllEm } from '../models/timesheetallem';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TimeSheetPatch } from '../models/timesheetpatch';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timeworkhr',
  imports: [FormsModule , NgClass],
  templateUrl: './timeworkhr.component.html',
  styleUrl: './timeworkhr.component.css'
})
export class TimeworkhrComponent {

  private request = inject(TimeSheetService)
  listtime : TimeSheetAllEm[] = [] ; 
  val : TimeSheetAllEm = new TimeSheetAllEm() ;
  email : string = ""

  ngOnInit(){
    this.getAllRequest()
  }


  getAllRequest()
  {
    this.request.getallTime().subscribe({
      next : l => this.listtime = l ,
      error : (e) => alert('error all requests'+ e)
    })
  }


  approved(lr : TimeSheetAllEm)
  {
    let newrequest : TimeSheetPatch = new TimeSheetPatch()
    newrequest.date = this.val.date ;
    newrequest.hoursWorked = this.val.hoursWorked ;
    newrequest.description = this.val.description
    newrequest.status = "APPROVED"
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
          this.request.updateTimeSheet(newrequest ,this.val.id ).subscribe({
            next : (l) => this.getAllRequest(),
            error : () =>alert('erreur patch')
          })
        }
      });
    } else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Select a request!",
        confirmButtonColor: "#3E5580"
      });
    }
  }

  rejected(lr : TimeSheetAllEm)
  {
    let newrequest : TimeSheetPatch = new TimeSheetPatch()
    newrequest.date = this.val.date ;
    newrequest.hoursWorked = this.val.hoursWorked ;
    newrequest.description = this.val.description
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
          this.request.updateTimeSheet(newrequest ,this.val.id ).subscribe({
            next : (l) => this.getAllRequest(),
            error : () =>alert('erreur patch')
          })
        }
      });

    }else{
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
