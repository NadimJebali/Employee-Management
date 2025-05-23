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
exports.Evaluation = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const swagger_1 = require("@nestjs/swagger");
const task_entity_1 = require("./task.entity");
let Evaluation = class Evaluation {
    id;
    communication;
    productivity;
    teamwork;
    comments;
    nbTaches;
    createdAt;
    employee;
    evaluator;
    task;
};
exports.Evaluation = Evaluation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Evaluation.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4 }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Evaluation.prototype, "communication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Evaluation.prototype, "productivity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Evaluation.prototype, "teamwork", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Evaluation.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9 }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Evaluation.prototype, "nbTaches", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Evaluation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.evaluations, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Evaluation.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Evaluation.prototype, "evaluator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [task_entity_1.Task] }),
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.evaluation),
    __metadata("design:type", Array)
], Evaluation.prototype, "task", void 0);
exports.Evaluation = Evaluation = __decorate([
    (0, typeorm_1.Entity)({ name: 'Evaluations' })
], Evaluation);
//# sourceMappingURL=evaluation.entity.js.map