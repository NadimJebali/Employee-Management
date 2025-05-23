import { TasksService } from '../services/tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("../entities/task.entity").Task>;
    findAll(): Promise<import("../entities/task.entity").Task[]>;
    findByEvaluation(id: number): Promise<import("../entities/task.entity").Task[]>;
    delete(id: number): Promise<void>;
}
