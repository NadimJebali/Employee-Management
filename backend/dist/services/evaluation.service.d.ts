import { Repository } from 'typeorm';
import { CreateEvaluationDto } from '../dto/create-evaluation.dto';
import { UpdateEvaluationDto } from '../dto/update-evaluation.dto';
import { Evaluation } from '../entities/evaluation.entity';
import { User } from 'src/entities/user.entity';
export declare class EvaluationService {
    private readonly evaluationRepo;
    private readonly userRepo;
    constructor(evaluationRepo: Repository<Evaluation>, userRepo: Repository<User>);
    create(createDto: CreateEvaluationDto): Promise<Evaluation>;
    findAll(): Promise<Evaluation[]>;
    findOne(id: number): Promise<Evaluation>;
    update(id: number, updateDto: UpdateEvaluationDto): Promise<Evaluation>;
    remove(id: number): Promise<void>;
}
