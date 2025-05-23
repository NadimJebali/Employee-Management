import { LeaveRequestService } from '../services/leave-request.service';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from '../dto/update-leave-request.dto';
import { LeaveRequest } from '../entities/leave-request.entity';
export declare class LeaveRequestController {
    private readonly leaveRequestService;
    constructor(leaveRequestService: LeaveRequestService);
    create(createLeaveRequestDto: CreateLeaveRequestDto): Promise<LeaveRequest>;
    findAll(): Promise<LeaveRequest[]>;
    findOne(id: string): Promise<LeaveRequest>;
    update(id: string, updateLeaveRequestDto: UpdateLeaveRequestDto): Promise<LeaveRequest>;
    remove(id: string): Promise<void>;
}
