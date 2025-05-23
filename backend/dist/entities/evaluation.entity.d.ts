import { User } from 'src/entities/user.entity';
import { Task } from 'src/entities/task.entity';
export declare class Evaluation {
    id: number;
    communication: number;
    productivity: number;
    teamwork: number;
    comments: string;
    nbTaches: number;
    createdAt: Date;
    employee: User;
    evaluator: User;
    task: Task[];
}
