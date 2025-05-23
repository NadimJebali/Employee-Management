import { User } from "src/entities/user.entity";
import { LeaveStatus } from "src/enums/leaveStatus.enum";
import { LeaveType } from "src/enums/leaveType.enum";
export declare class LeaveRequest {
    id: number;
    type: LeaveType;
    startDate: string;
    endDate: string;
    reason: string;
    status: LeaveStatus;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
