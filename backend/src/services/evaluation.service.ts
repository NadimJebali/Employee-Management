import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEvaluationDto } from '../dto/create-evaluation.dto';
import { UpdateEvaluationDto } from '../dto/update-evaluation.dto';
import { Evaluation } from '../entities/evaluation.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepo: Repository<Evaluation>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createDto: CreateEvaluationDto): Promise<Evaluation> {
    const user = await this.userRepo.findOne({ where: { id: createDto.employeeId } });
    if (!user) throw new NotFoundException(`User with ID ${createDto.employeeId} not found`);

    const evaluation = this.evaluationRepo.create({
      ...createDto,
      employee: user,
      nbTaches : 0,

    });

    return this.evaluationRepo.save(evaluation);
  }

  async findAll(): Promise<Evaluation[]> {
    return this.evaluationRepo.find({ relations: ['employee'] });
  }

  async findOne(id: number): Promise<Evaluation> {
    const evaluation = await this.evaluationRepo.findOne({ where: { id }, relations: ['employee'] });
    if (!evaluation) throw new NotFoundException(`Evaluation with ID ${id} not found`);
    return evaluation;
  }

  async update(id: number, updateDto: UpdateEvaluationDto): Promise<Evaluation> {
    await this.evaluationRepo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.evaluationRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Evaluation with ID ${id} not found`);
    }
  }
}
