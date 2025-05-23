import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
    getEmployeeLeaveRequests(id: string): Promise<User | null>;
    getEmployeeEvaluation(id: string): Promise<User | null>;
    getEmployeeTimesheet(id: string): Promise<User | null>;
}
