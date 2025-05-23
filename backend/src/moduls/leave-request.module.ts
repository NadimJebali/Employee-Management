import { Module } from '@nestjs/common';
import { LeaveRequestService } from '../services/leave-request.service';
import { LeaveRequestController } from '../controllers/leave-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveRequest } from '../entities/leave-request.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequest, User])],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService],
  exports: [LeaveRequestService],
})
export class LeaveRequestModule {}
