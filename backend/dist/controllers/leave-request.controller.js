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
exports.LeaveRequestController = void 0;
const common_1 = require("@nestjs/common");
const leave_request_service_1 = require("../services/leave-request.service");
const create_leave_request_dto_1 = require("../dto/create-leave-request.dto");
const update_leave_request_dto_1 = require("../dto/update-leave-request.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../decorator/role.decorator");
const roles_enum_1 = require("../enums/roles.enum");
let LeaveRequestController = class LeaveRequestController {
    leaveRequestService;
    constructor(leaveRequestService) {
        this.leaveRequestService = leaveRequestService;
    }
    create(createLeaveRequestDto) {
        return this.leaveRequestService.create(createLeaveRequestDto);
    }
    findAll() {
        return this.leaveRequestService.findAll();
    }
    findOne(id) {
        return this.leaveRequestService.findOne(+id);
    }
    update(id, updateLeaveRequestDto) {
        return this.leaveRequestService.update(+id, updateLeaveRequestDto);
    }
    remove(id) {
        return this.leaveRequestService.remove(+id);
    }
};
exports.LeaveRequestController = LeaveRequestController;
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new leave request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_leave_request_dto_1.CreateLeaveRequestDto]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all leave requests' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a leave request by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a leave request by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_leave_request_dto_1.UpdateLeaveRequestDto]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a leave request by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveRequestController.prototype, "remove", null);
exports.LeaveRequestController = LeaveRequestController = __decorate([
    (0, swagger_1.ApiTags)('leave-request'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('leave-request'),
    __metadata("design:paramtypes", [leave_request_service_1.LeaveRequestService])
], LeaveRequestController);
//# sourceMappingURL=leave-request.controller.js.map