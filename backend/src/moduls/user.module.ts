import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { LeaveRequest } from 'src/entities/leave-request.entity';
import { Evaluation } from 'src/entities/evaluation.entity';
import { Timesheet } from 'src/entities/timesheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, LeaveRequest, Evaluation, Timesheet])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
  
}
