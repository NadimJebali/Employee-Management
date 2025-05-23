import { CreateTimesheetDto } from '../dto/create-timesheet.dto';
import { UpdateTimesheetDto } from '../dto/update-timesheet.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Timesheet } from '../entities/timesheet.entity';
export declare class TimesheetService {
    private readonly timesheetRepo;
    private readonly userRepo;
    constructor(timesheetRepo: Repository<Timesheet>, userRepo: Repository<User>);
    create(dto: CreateTimesheetDto): Promise<Timesheet>;
    findAll(): Promise<Timesheet[]>;
    findOne(id: number): Promise<Timesheet | null>;
    update(id: number, dto: UpdateTimesheetDto): Promise<Timesheet | null>;
    remove(id: number): Promise<void>;
}
