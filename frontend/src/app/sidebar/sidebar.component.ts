import { Component, inject } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    private auth = inject(AuthService); 
    role : string | null = this.auth.getRole();


    
    ngOnInit(){
      
    }


}
