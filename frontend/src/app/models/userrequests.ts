import { RequestLeave } from "./requestleave";

export class UserRequests
{
    age : number = 0 ;
    department : string ="";
    email : string = ""
    firstName : string = ""
    id : number = 0 ;
    lastName : string = ""
    leaveRequests : RequestLeave[] = []
    password : string = ""
    phoneNumber : string = ""
    role :string = "EMPLOYEE"
}