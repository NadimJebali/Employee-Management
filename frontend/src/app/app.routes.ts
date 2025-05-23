import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { CardprofileComponent } from './cardprofile/cardprofile.component';
import { HolidayComponent } from './holiday/holiday.component';
import { TimeworkComponent } from './timework/timework.component';
import { GestionEmployeComponent } from './gestion-employe/gestion-employe.component';
import { permissionGuard } from './services/guard/permission.guard';
import { permissionRoleGuard } from './services/guard/permission-role.guard';
import { HolidayhrComponent } from './holidayhr/holidayhr.component';
import { TimeworkhrComponent } from './timeworkhr/timeworkhr.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './homea/home.component';
import { AssessmenthrComponent } from './assessmenthr/assessmenthr.component';

export const routes: Routes = [
    {path : '', component : AcceuilComponent , children:[
        {path : 'login', component : LoginComponent },
        {path : 'home', component : HomeComponent }
    ] },
    {path : 'login', component : LoginComponent },
    {path : 'side' , component : SidebarComponent ,canActivate:[permissionGuard] , children : [
        {path : "profile" , component : ProfileComponent },
        //{path : "card" , component : CardprofileComponent},
        {path : "holiday" , component : HolidayComponent , canActivate:[permissionRoleGuard] , data:{role : 'EMPLOYEE'}},
        {path : "holidaysetting" , component:HolidayhrComponent , canActivate:[permissionRoleGuard] , data:{role : 'HR'}},
        {path : "work" , component : TimeworkComponent , canActivate:[permissionRoleGuard] , data:{role : 'EMPLOYEE'}},
        {path : "worksetting" , component : TimeworkhrComponent , canActivate:[permissionRoleGuard] , data:{role : 'HR'}},
        {path : "gestion" , component : GestionEmployeComponent ,canActivate:[permissionRoleGuard] ,data:{role : 'HR'}},
        {path : "assessment" , component : AssessmentComponent , canActivate:[permissionRoleGuard] , data:{role : 'EMPLOYEE'}},
        {path : "assessmentsetting" , component : AssessmenthrComponent , canActivate:[permissionRoleGuard] , data:{role : 'HR'}},

    ] },
    //{path : 'profile' , component : ProfileComponent },
    //{path : 'card' , component: CardprofileComponent }
];
