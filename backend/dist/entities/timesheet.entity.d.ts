import { User } from 'src/entities/user.entity';
export declare class Timesheet {
    id: number;
    date: string;
    hoursWorked: number;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
