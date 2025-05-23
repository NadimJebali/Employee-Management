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
exports.LeaveRequestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const leave_request_entity_1 = require("../entities/leave-request.entity");
const user_entity_1 = require("../entities/user.entity");
let LeaveRequestService = class LeaveRequestService {
    leaveRequestRepository;
    userRepository;
    constructor(leaveRequestRepository, userRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
        this.userRepository = userRepository;
    }
    async create(createLeaveRequestDto) {
        const { userId, ...rest } = createLeaveRequestDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const leaveRequest = this.leaveRequestRepository.create({
            ...rest,
            user,
        });
        return this.leaveRequestRepository.save(leaveRequest);
    }
    async findAll() {
        return this.leaveRequestRepository.find({ relations: ['user'] });
    }
    async findOne(id) {
        const request = await this.leaveRequestRepository.findOne({ where: { id }, relations: ['user'] });
        if (!request)
            throw new common_1.NotFoundException(`Leave request #${id} not found`);
        return request;
    }
    async update(id, updateDto) {
        await this.leaveRequestRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.leaveRequestRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Leave request #${id} not found`);
        }
    }
};
exports.LeaveRequestService = LeaveRequestService;
exports.LeaveRequestService = LeaveRequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leave_request_entity_1.LeaveRequest)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LeaveRequestService);
//# sourceMappingURL=leave-request.service.js.map