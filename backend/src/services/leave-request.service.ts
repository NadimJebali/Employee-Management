import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from '../dto/update-leave-request.dto';
import { LeaveRequest } from '../entities/leave-request.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class LeaveRequestService {
  constructor(
    @InjectRepository(LeaveRequest)
    private leaveRequestRepository: Repository<LeaveRequest>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createLeaveRequestDto: CreateLeaveRequestDto): Promise<LeaveRequest> {
    const { userId, ...rest } = createLeaveRequestDto;
  
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  
    const leaveRequest = this.leaveRequestRepository.create({
      ...rest,
      user,
    });
  
    return this.leaveRequestRepository.save(leaveRequest);
  }
  

  async findAll(): Promise<LeaveRequest[]> {
    return this.leaveRequestRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<LeaveRequest> {
    const request = await this.leaveRequestRepository.findOne({ where: { id }, relations: ['user'] });
    if (!request) throw new NotFoundException(`Leave request #${id} not found`);
    return request;
  }

  async update(id: number, updateDto: UpdateLeaveRequestDto): Promise<LeaveRequest> {
    await this.leaveRequestRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.leaveRequestRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Leave request #${id} not found`);
    }
  }
}
