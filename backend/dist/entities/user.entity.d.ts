import { Role } from "src/enums/roles.enum";
import { LeaveRequest } from "./leave-request.entity";
import { Evaluation } from "src/entities/evaluation.entity";
import { Timesheet } from "src/entities/timesheet.entity";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    phoneNumber: string;
    role: Role;
    soldconge: number;
    department: string;
    leaveRequests: LeaveRequest[];
    evaluations: Evaluation[];
    timesheets: Timesheet[];
}
