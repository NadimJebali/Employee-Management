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
exports.Timesheet = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const swagger_1 = require("@nestjs/swagger");
let Timesheet = class Timesheet {
    id;
    date;
    hoursWorked;
    description;
    status;
    createdAt;
    updatedAt;
    user;
};
exports.Timesheet = Timesheet;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier for the timesheet' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Timesheet.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-05-04', description: 'Date of the timesheet entry' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Timesheet.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, description: 'Number of hours worked on the specified date' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Timesheet.prototype, "hoursWorked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Worked on project A', description: 'Optional description of the work done' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Timesheet.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Holiday' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Timesheet.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of when the timesheet was created' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Timesheet.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timestamp of the last update to the timesheet' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Timesheet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.timesheets, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Timesheet.prototype, "user", void 0);
exports.Timesheet = Timesheet = __decorate([
    (0, typeorm_1.Entity)({ name: 'Timesheets' })
], Timesheet);
//# sourceMappingURL=timesheet.entity.js.map