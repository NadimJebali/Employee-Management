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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("../entities/task.entity");
const evaluation_entity_1 = require("../entities/evaluation.entity");
let TasksService = class TasksService {
    taskRepository;
    evaluationRepository;
    constructor(taskRepository, evaluationRepository) {
        this.taskRepository = taskRepository;
        this.evaluationRepository = evaluationRepository;
    }
    async create(createTaskDto) {
        const { description, date, evaluationId } = createTaskDto;
        const evaluation = await this.evaluationRepository.findOne({
            where: { id: evaluationId },
        });
        if (!evaluation) {
            throw new common_1.NotFoundException('Evaluation not found');
        }
        const task = this.taskRepository.create({
            description,
            date,
            evaluation,
        });
        return await this.taskRepository.save(task);
    }
    async findAll() {
        return this.taskRepository.find({ relations: ['evaluation'] });
    }
    async findByEvaluationId(evaluationId) {
        return this.taskRepository.find({
            where: { evaluation: { id: evaluationId } },
            relations: ['evaluation'],
        });
    }
    async delete(id) {
        await this.taskRepository.delete(id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(evaluation_entity_1.Evaluation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map