import { LeaveType } from 'src/enums/leaveType.enum';
import { LeaveStatus } from 'src/enums/leaveStatus.enum';
export declare class CreateLeaveRequestDto {
    startDate: string;
    endDate: string;
    reason: string;
    status: LeaveStatus;
    userId: number;
    type: LeaveType;
}
