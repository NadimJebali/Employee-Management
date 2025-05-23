import { Module } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TasksController } from '../controllers/tasks.controller';
import { Evaluation } from 'src/entities/evaluation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Evaluation])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService]
})
export class TasksModule {}
