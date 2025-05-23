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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    UserRepository;
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async create(createUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const newUser = this.UserRepository.create(createUserDto);
        return this.UserRepository.save(newUser);
    }
    findAll() {
        return this.UserRepository.find();
    }
    getUserLeaveRequest(id) {
        return this.UserRepository.findOne({ where: { id }, relations: ['leaveRequests'] });
    }
    getUserEvaluation(id) {
        return this.UserRepository.findOne({ where: { id }, relations: ['evaluations'] });
    }
    getUserTimesheet(id) {
        return this.UserRepository.findOne({ where: { id }, relations: ['timesheets'] });
    }
    findOne(id) {
        return this.UserRepository.findOne({ where: { id } });
    }
    findByEmail(email) {
        return this.UserRepository.findOneBy({ email });
    }
    async update(id, userUpdate) {
        await this.UserRepository.update(id, userUpdate);
        return this.findOne(id);
    }
    async delete(id) {
        await this.UserRepository.delete(id);
        return { deleted: true };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map