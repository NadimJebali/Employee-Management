import { Component, inject} from '@angular/core';
import { Form, FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [FormsModule , NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showpassword : boolean = false; 
  ref : boolean = false
  private auth = inject(AuthService)
  private router = inject(Router)

  login(log :NgForm)
  {
    if(log.valid){

    this.auth.login(log.value).subscribe({
      next: () => {
        this.ref = true
        setTimeout(()=>{
          this.router.navigate(['/side/profile'])
          this.ref = false},1500)},
      error: () => {
        Swal.fire({
          title: '<span class="alert-title">Wrong</span>',
          html: '<span class="alert-message">Your Email or Password is Wrong !</span>',
          icon: 'error',
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          customClass: {
            popup: 'custom-toast-popup',
            icon: 'custom-toast-icon'
          }
        });
      }
    })

    }else
    {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Give Me Email And Password!",
        confirmButtonColor: "#3E5580"
      });
    }
  }

  
 
 

}
