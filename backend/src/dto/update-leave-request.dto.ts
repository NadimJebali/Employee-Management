import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsDateString, IsEnum, IsString, isEnum } from 'class-validator';
import { LeaveStatus } from 'src/enums/leaveStatus.enum';

export class UpdateLeaveRequestDto {
  
  @ApiProperty({ example: '2025-05-10' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ example: '2026-05-10' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ example: 'i have a stomach ache, aweeeeeeeeee' })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty({ example: 'PENDING' })
  @IsOptional()
  @IsEnum(LeaveStatus)
  status?: LeaveStatus;

  
}
