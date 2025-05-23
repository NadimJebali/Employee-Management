import { LeaveStatus } from 'src/enums/leaveStatus.enum';
export declare class UpdateLeaveRequestDto {
    startDate?: string;
    endDate?: string;
    reason?: string;
    status?: LeaveStatus;
}
