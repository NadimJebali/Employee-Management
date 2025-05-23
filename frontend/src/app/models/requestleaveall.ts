import { User } from "./user";

export class RequestLeaveAll
{
    id: number = 0 ;
    type: string = "VACATION"
    startDate: string = "2025-05-10"
    endDate: string = "2025-05-15"
    reason: string = "Family trip to Armageddon"
    status: string = "PENDING"
    createdAt: string= "2025-05-07T08:55:30.643Z"
    updatedAt: string = "2025-05-07T08:55:30.643Z"
    user : User = new User()
}