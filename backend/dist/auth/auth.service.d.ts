import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';
import { AdminService } from 'src/services/admin.service';
export declare class AuthService {
    private userService;
    private adminService;
    private jwtService;
    constructor(userService: UserService, adminService: AdminService, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
        role: string;
    }>;
}
