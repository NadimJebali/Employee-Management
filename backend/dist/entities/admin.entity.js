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
exports.Admin = void 0;
const swagger_1 = require("@nestjs/swagger");
const roles_enum_1 = require("../enums/roles.enum");
const typeorm_1 = require("typeorm");
let Admin = class Admin {
    id;
    firstName;
    lastName;
    email;
    password;
    age;
    role;
};
exports.Admin = Admin;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Admin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Moggruk' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Da Brainbashah' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'moggruk@teef-net.krump' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '**********' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 51 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Admin.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BIGBOSS' }),
    (0, typeorm_1.Column)({ type: 'enum', enum: roles_enum_1.Role, default: roles_enum_1.Role.ADMIN }),
    __metadata("design:type", String)
], Admin.prototype, "role", void 0);
exports.Admin = Admin = __decorate([
    (0, typeorm_1.Entity)({ name: 'Admins' })
], Admin);
//# sourceMappingURL=admin.entity.js.map