import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimesheetDto } from '../dto/create-timesheet.dto';
import { UpdateTimesheetDto } from '../dto/update-timesheet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Timesheet } from '../entities/timesheet.entity';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private readonly timesheetRepo: Repository<Timesheet>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTimesheetDto) {
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) throw new NotFoundException('User not found');

    const timesheet = this.timesheetRepo.create({ ...dto, user });
    return this.timesheetRepo.save(timesheet);
  }

  findAll() {
    return this.timesheetRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.timesheetRepo.findOne({ where: { id }, relations: ['user'] });
  }

  async update(id: number, dto: UpdateTimesheetDto) {
    await this.timesheetRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.timesheetRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException();
  }
}
