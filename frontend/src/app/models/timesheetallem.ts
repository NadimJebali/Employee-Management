import { User } from "./user"

export class TimeSheetAllEm
{
    id: number = 1
    date: string=""
    hoursWorked: number = 0
    description: string = ""
    status: string = ""
    createdAt : string = ""
    updatedAt : string = ""
    user: User = new User()
}
