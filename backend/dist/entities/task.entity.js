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
exports.Task = void 0;
const swagger_1 = require("@nestjs/swagger");
const evaluation_entity_1 = require("./evaluation.entity");
const typeorm_1 = require("typeorm");
let Task = class Task {
    id;
    description;
    date;
    evaluation;
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'task about something' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "11/03/2025" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evaluation_entity_1.Evaluation, evaluation => evaluation.task, { onDelete: 'CASCADE' }),
    __metadata("design:type", evaluation_entity_1.Evaluation)
], Task.prototype, "evaluation", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)({ name: 'Tasks' })
], Task);
//# sourceMappingURL=task.entity.js.map