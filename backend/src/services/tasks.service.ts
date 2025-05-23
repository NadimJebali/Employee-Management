import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { Evaluation } from 'src/entities/evaluation.entity';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { description, date, evaluationId } = createTaskDto;

    const evaluation = await this.evaluationRepository.findOne({
      where: { id: evaluationId },
    });

    if (!evaluation) {
      throw new NotFoundException('Evaluation not found');
    }

    const task = this.taskRepository.create({
      description,
      date,
      evaluation,
    });

    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['evaluation'] });
  }

  async findByEvaluationId(evaluationId: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: { evaluation: { id: evaluationId } },
      relations: ['evaluation'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  } 
}
