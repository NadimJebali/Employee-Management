import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/enums/roles.enum';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private UserRepository: Repository<User>){}

    async create(createUserDto: CreateUserDto){
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const newUser = this.UserRepository.create(createUserDto);
        return this.UserRepository.save(newUser);
    }

    findAll(){
        return this.UserRepository.find();
    }

    getUserLeaveRequest(id: number) {
        return this.UserRepository.findOne({ where: {id}, relations: ['leaveRequests'] });
    }

    getUserEvaluation(id: number) {
        return this.UserRepository.findOne({ where: {id}, relations: ['evaluations'] });
    }

    getUserTimesheet(id: number) {
        return this.UserRepository.findOne({ where: {id}, relations: ['timesheets'] });
    }
      

    findOne(id: number){
        return this.UserRepository.findOne({where: {id}});
    }

    findByEmail(email: string){
        return this.UserRepository.findOneBy({email})
    }

    async update(id: number, userUpdate: UpdateUserDto){
        await this.UserRepository.update(id, userUpdate);
        return this.findOne(id);
    }

    async delete(id: number){
        await this.UserRepository.delete(id);
        return {deleted: true}
    }
}