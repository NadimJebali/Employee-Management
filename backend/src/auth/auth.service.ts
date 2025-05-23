import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/services/user.service';
import { AdminService } from 'src/services/admin.service';
import { Role } from 'src/enums/roles.enum';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string; role: string }> {
    let user;
    let role: Role;

  
    user = await this.userService.findByEmail(email);
    if (user) {
      if(user.role == Role.EMPLOYEE)
      {
        role = Role.EMPLOYEE;
      }else{
        role = Role.HR;
      }
    } else {
    
      user = await this.adminService.findByEmail(email);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      role = Role.ADMIN; 
    }

    // Validate password
    const passwordMatch = await bcrypt.compare(pass, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    
    const payload = {
      sub: user.id,
      email: user.email,
      role: role, 
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      role,
    };
  }
}
