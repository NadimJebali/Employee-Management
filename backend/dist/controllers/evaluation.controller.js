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
exports.EvaluationController = void 0;
const common_1 = require("@nestjs/common");
const evaluation_service_1 = require("../services/evaluation.service");
const create_evaluation_dto_1 = require("../dto/create-evaluation.dto");
const update_evaluation_dto_1 = require("../dto/update-evaluation.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../decorator/role.decorator");
const roles_enum_1 = require("../enums/roles.enum");
let EvaluationController = class EvaluationController {
    evaluationService;
    constructor(evaluationService) {
        this.evaluationService = evaluationService;
    }
    create(createEvaluationDto) {
        return this.evaluationService.create(createEvaluationDto);
    }
    findAll() {
        return this.evaluationService.findAll();
    }
    findOne(id) {
        return this.evaluationService.findOne(+id);
    }
    update(id, updateEvaluationDto) {
        return this.evaluationService.update(+id, updateEvaluationDto);
    }
    remove(id) {
        return this.evaluationService.remove(+id);
    }
};
exports.EvaluationController = EvaluationController;
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new evaluation for an employee' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluation_dto_1.CreateEvaluationDto]),
    __metadata("design:returntype", void 0)
], EvaluationController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all evaluations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EvaluationController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.EMPLOYEE, roles_enum_1.Role.ADMIN, roles_enum_1.Role.HR),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific evaluation by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EvaluationController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an evaluation by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_evaluation_dto_1.UpdateEvaluationDto]),
    __metadata("design:returntype", void 0)
], EvaluationController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(roles_enum_1.Role.HR, roles_enum_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an evaluation by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EvaluationController.prototype, "remove", null);
exports.EvaluationController = EvaluationController = __decorate([
    (0, swagger_1.ApiTags)('Evaluations'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('evaluation'),
    __metadata("design:paramtypes", [evaluation_service_1.EvaluationService])
], EvaluationController);
//# sourceMappingURL=evaluation.controller.js.map