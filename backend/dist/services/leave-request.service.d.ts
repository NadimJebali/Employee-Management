import { Repository } from 'typeorm';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from '../dto/update-leave-request.dto';
import { LeaveRequest } from '../entities/leave-request.entity';
import { User } from 'src/entities/user.entity';
export declare class LeaveRequestService {
    private leaveRequestRepository;
    private userRepository;
    constructor(leaveRequestRepository: Repository<LeaveRequest>, userRepository: Repository<User>);
    create(createLeaveRequestDto: CreateLeaveRequestDto): Promise<LeaveRequest>;
    findAll(): Promise<LeaveRequest[]>;
    findOne(id: number): Promise<LeaveRequest>;
    update(id: number, updateDto: UpdateLeaveRequestDto): Promise<LeaveRequest>;
    remove(id: number): Promise<void>;
}
