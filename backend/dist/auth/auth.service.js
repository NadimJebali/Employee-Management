"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../services/user.service");
const admin_service_1 = require("../services/admin.service");
const roles_enum_1 = require("../enums/roles.enum");
let AuthService = class AuthService {
    userService;
    adminService;
    jwtService;
    constructor(userService, adminService, jwtService) {
        this.userService = userService;
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    async signIn(email, pass) {
        let user;
        let role;
        user = await this.userService.findByEmail(email);
        if (user) {
            if (user.role == roles_enum_1.Role.EMPLOYEE) {
                role = roles_enum_1.Role.EMPLOYEE;
            }
            else {
                role = roles_enum_1.Role.HR;
            }
        }
        else {
            user = await this.adminService.findByEmail(email);
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            role = roles_enum_1.Role.ADMIN;
        }
        const passwordMatch = await bcrypt.compare(pass, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        admin_service_1.AdminService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map