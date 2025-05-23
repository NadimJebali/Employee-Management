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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("../services/tasks.service");
const swagger_1 = require("@nestjs/swagger");
const create_task_dto_1 = require("../dto/create-task.dto");
const role_decorator_1 = require("../decorator/role.decorator");
const roles_enum_1 = require("../enums/roles.enum");
let TasksController = class TasksController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(createTaskDto) {
        return this.taskService.create(createTaskDto);
    }
    findAll() {
        return this.taskService.findAll();
    }
    findByEvaluation(id) {
        return this.taskService.findByEvaluationId(id);
    }
    delete(id) {
        return this.taskService.delete(id);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new task' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Find all tasks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN, roles_enum_1.Role.EMPLOYEE),
    (0, common_1.Get)('evaluation/:evaluationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Find the tasks by evaluation id' }),
    __param(0, (0, common_1.Param)('evaluationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findByEvaluation", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete task by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "delete", null);
exports.TasksController = TasksController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map