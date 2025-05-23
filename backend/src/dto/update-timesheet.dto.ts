import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsInt, Min, IsOptional, IsString } from 'class-validator';

export class UpdateTimesheetDto{

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
}
