import { TimesheetService } from '../services/timesheet.service';
import { CreateTimesheetDto } from '../dto/create-timesheet.dto';
import { UpdateTimesheetDto } from '../dto/update-timesheet.dto';
import { Timesheet } from '../entities/timesheet.entity';
export declare class TimesheetController {
    private readonly service;
    constructor(service: TimesheetService);
    create(dto: CreateTimesheetDto): Promise<Timesheet>;
    findAll(): Promise<Timesheet[]>;
    findOne(id: number): Promise<Timesheet | null>;
    update(id: number, dto: UpdateTimesheetDto): Promise<Timesheet | null>;
    remove(id: number): Promise<void>;
}
