import { IsDateString, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTimesheetDto {
  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  hoursWorked: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty()
  @IsInt()
  userId: number;
}
