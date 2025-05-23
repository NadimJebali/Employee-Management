import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiUserService } from '../services/Api/ApiUser/api-user.service';
import { User } from '../models/user';
import { UserUpdate } from '../models/userupdate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-employe',
  imports: [CommonModule , FormsModule],
  templateUrl: './gestion-employe.component.html',
  styleUrl: './gestion-employe.component.css'
})
export class GestionEmployeComponent {

  val : number = -1 ; 
  val2 : number = -1 ;
  email : string = "" ;
  
  formadd : boolean = false ;
  formupdate : boolean = false;

  listUsers : User[] = [] ;

  private apiUser = inject(ApiUserService);

  rr(v : number)
  {
    this.val2 = v ;
  }

  public addemployee()
  {
    this.formupdate = false ;
    this.formadd = true ;
  }

  public updateemployee(val : number){
    this.formadd = false;
    this.formupdate = true;
    
  }


  fetchUsers(){
    this.apiUser.getAllUsers().subscribe({
      next : l => this.listUsers = l ,  
      error : () => alert("probleme listuser!")
    })
  }



  addUser(user : User , fo: NgForm)
  {

    if(fo.valid){
    user.role = "EMPLOYEE"
    
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
        this.apiUser.AddUser(user).subscribe({
          next : ()=> { 
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
              this.fetchUsers()} ,
          error : () => alert("probleme Ajout user")
        })
      }
    });
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Fill the fields!",
        confirmButtonColor: "#3E5580"
      });
    }
  }

  deleteemployee()
  {
    if(this.val > -1 )
    {
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
          this.apiUser.DeleteUser(this.val).subscribe({
            next : () => {
              
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
              this.fetchUsers()
              this.val = -1
              },
            error : () => alert("Probleme Supprime user")
          })
        }
      }); 
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You must select a User!",
        confirmButtonColor: "#3E5580"
      });
    }

  }

  updateuser(updat : UserUpdate , fo:NgForm)
  {


      if(this.val > -1)
      {

        if(fo.valid){


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
              this.apiUser.UpdateUser(this.val , updat).subscribe({
                next : () => {

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

                  this.fetchUsers()
                  
                },
                error : (e) => alert("erreur update user" + e)
              }) 
            }
          }); 


         
        }else{
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Fill the fields!",
            confirmButtonColor: "#3E5580"
          });
        }
      }
      else{
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "You must select a User!",
          confirmButtonColor: "#3E5580"
        });
      }
  }


  ngOnInit(){
    this.fetchUsers();
  }



  search(emu:string)
  {
    this.email = emu ;
  }

  all(){
    this.email = ""
  }
 

}
