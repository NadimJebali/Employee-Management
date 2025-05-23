import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    getUserLeaveRequest(id: number): Promise<User | null>;
    getUserEvaluation(id: number): Promise<User | null>;
    getUserTimesheet(id: number): Promise<User | null>;
    findOne(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: number, userUpdate: UpdateUserDto): Promise<User | null>;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
