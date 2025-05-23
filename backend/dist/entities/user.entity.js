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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const roles_enum_1 = require("../enums/roles.enum");
const typeorm_1 = require("typeorm");
const leave_request_entity_1 = require("./leave-request.entity");
const evaluation_entity_1 = require("./evaluation.entity");
const timesheet_entity_1 = require("./timesheet.entity");
const class_validator_1 = require("class-validator");
let User = class User {
    id;
    firstName;
    lastName;
    email;
    password;
    age;
    phoneNumber;
    role;
    soldconge;
    department;
    leaveRequests;
    evaluations;
    timesheets;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Gorblak' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Da Choppa' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'gorblak@waaagh.krump' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '**********' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 42 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '50648974' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'WARBOSS' }),
    (0, typeorm_1.Column)({ type: 'enum', enum: roles_enum_1.Role, default: roles_enum_1.Role.EMPLOYEE }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.Min)(0),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "soldconge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kill squad' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [leave_request_entity_1.LeaveRequest] }),
    (0, typeorm_1.OneToMany)(() => leave_request_entity_1.LeaveRequest, (leaveRequest) => leaveRequest.user),
    __metadata("design:type", Array)
], User.prototype, "leaveRequests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [evaluation_entity_1.Evaluation] }),
    (0, typeorm_1.OneToMany)(() => evaluation_entity_1.Evaluation, (evaluation) => evaluation.employee),
    __metadata("design:type", Array)
], User.prototype, "evaluations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [timesheet_entity_1.Timesheet] }),
    (0, typeorm_1.OneToMany)(() => timesheet_entity_1.Timesheet, (timesheet) => timesheet.user),
    __metadata("design:type", Array)
], User.prototype, "timesheets", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'Users' })
], User);
//# sourceMappingURL=user.entity.js.map