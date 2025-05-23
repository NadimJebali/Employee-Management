import { Module } from '@nestjs/common';
import { EvaluationService } from '../services/evaluation.service';
import { EvaluationController } from '../controllers/evaluation.controller';
import { Evaluation } from '../entities/evaluation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, User])],
  controllers: [EvaluationController],
  providers: [EvaluationService],
  exports: [EvaluationService]
})
export class EvaluationModule {}
