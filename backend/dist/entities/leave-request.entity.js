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
exports.LeaveRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
const leaveStatus_enum_1 = require("../enums/leaveStatus.enum");
const leaveType_enum_1 = require("../enums/leaveType.enum");
const typeorm_1 = require("typeorm");
let LeaveRequest = class LeaveRequest {
    id;
    type;
    startDate;
    endDate;
    reason;
    status;
    createdAt;
    updatedAt;
    user;
};
exports.LeaveRequest = LeaveRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LeaveRequest.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: leaveType_enum_1.LeaveType }),
    (0, typeorm_1.Column)({ type: 'enum', enum: leaveType_enum_1.LeaveType }),
    __metadata("design:type", String)
], LeaveRequest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-05-10' }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], LeaveRequest.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-05-10' }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], LeaveRequest.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'i pooped my pants' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LeaveRequest.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: leaveStatus_enum_1.LeaveStatus }),
    (0, typeorm_1.Column)({ type: 'enum', enum: leaveStatus_enum_1.LeaveStatus, default: leaveStatus_enum_1.LeaveStatus.PENDING }),
    __metadata("design:type", String)
], LeaveRequest.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], LeaveRequest.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], LeaveRequest.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.leaveRequests, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], LeaveRequest.prototype, "user", void 0);
exports.LeaveRequest = LeaveRequest = __decorate([
    (0, typeorm_1.Entity)({ name: 'LeaveRequest' })
], LeaveRequest);
//# sourceMappingURL=leave-request.entity.js.map