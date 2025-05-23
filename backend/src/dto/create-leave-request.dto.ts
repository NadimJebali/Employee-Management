import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { LeaveType } from 'src/enums/leaveType.enum';
import { LeaveStatus } from 'src/enums/leaveStatus.enum';

export class CreateLeaveRequestDto {
  @ApiProperty({ example: '2025-05-10' })
  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @ApiProperty({ example: '2025-05-15' })
  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty({ example: 'Family trip to Armageddon' })
  @IsString()
  @IsNotEmpty()
  reason: string;
  
  @ApiProperty({ enum: LeaveStatus, default: LeaveStatus.PENDING })
  @IsEnum(LeaveStatus)
  status: LeaveStatus;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ enum: LeaveType })
  @IsEnum(LeaveType)
  @IsNotEmpty()
  type: LeaveType;
}
