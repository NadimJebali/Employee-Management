import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { Evaluation } from 'src/entities/evaluation.entity';
import { CreateTaskDto } from 'src/dto/create-task.dto';
export declare class TasksService {
    private readonly taskRepository;
    private readonly evaluationRepository;
    constructor(taskRepository: Repository<Task>, evaluationRepository: Repository<Evaluation>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findByEvaluationId(evaluationId: number): Promise<Task[]>;
    delete(id: number): Promise<void>;
}
