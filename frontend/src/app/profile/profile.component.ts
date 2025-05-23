import { Component, inject } from '@angular/core';
import { CardprofileComponent } from "../cardprofile/cardprofile.component";
import { ListnotifComponent } from "../listnotif/listnotif.component";
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ApiUserService } from '../services/Api/ApiUser/api-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  imports: [CardprofileComponent, ListnotifComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  private auth = inject(AuthService);
  private route = inject(Router);
  private userservice = inject(ApiUserService);
  userinfo : User = new User(); 
  iduser : number = Number(localStorage.getItem('id'))
  roleuser : string | null = "";

  admin : number = 0 ;
  employe : number = 0 ;
  hr : number = 0 ; 

  logout(){
    this.auth.logout();
    setTimeout(()=>{this.route.navigate(['/login'])},300)
  }

  ngOnInit(){
      this.userservice.getUserById(this.iduser).subscribe({
        next : l => this.userinfo = l ,
        error : () => alert("error get userbyid") 
      })
      this.compte();
      this.roleuser = localStorage.getItem("role");
  }

  compte()
  {
    this.userservice.getAllUsers().subscribe({
      next : l =>{
          l.map(u => {
            if(u.role == "HR")
              this.hr++
            else if(u.role == "EMPLOYEE")
              this.employe++
            else
              this.admin++
          })
      } 
    })
  }


  



}
