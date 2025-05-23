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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetController = void 0;
const common_1 = require("@nestjs/common");
const timesheet_service_1 = require("../services/timesheet.service");
const create_timesheet_dto_1 = require("../dto/create-timesheet.dto");
const update_timesheet_dto_1 = require("../dto/update-timesheet.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../decorator/role.decorator");
const roles_enum_1 = require("../enums/roles.enum");
let TimesheetController = class TimesheetController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.TimesheetController = TimesheetController;
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new timesheet entry' }),
    (0, swagger_1.ApiBody)({ type: create_timesheet_dto_1.CreateTimesheetDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_timesheet_dto_1.CreateTimesheetDto]),
    __metadata("design:returntype", void 0)
], TimesheetController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all timesheet entries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimesheetController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a timesheet entry by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TimesheetController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a timesheet entry by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_timesheet_dto_1.UpdateTimesheetDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_timesheet_dto_1.UpdateTimesheetDto]),
    __metadata("design:returntype", void 0)
], TimesheetController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a timesheet entry by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TimesheetController.prototype, "remove", null);
exports.TimesheetController = TimesheetController = __decorate([
    (0, swagger_1.ApiTags)('Timesheets'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('timesheets'),
    __metadata("design:paramtypes", [timesheet_service_1.TimesheetService])
], TimesheetController);
//# sourceMappingURL=timesheet.controller.js.map