import { Role } from 'src/enums/roles.enum';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    phoneNumber: string;
    role: Role;
    soldconge: number;
    nbTaches: number;
    department: string;
}
