import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEvaluationDto {
  @ApiProperty({ example: 4, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  communication: number;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  productivity: number;

  @ApiProperty({ example: 3, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  teamwork: number;

  @ApiProperty({ example: 'Great work under pressure.', required: false })
  @IsString()
  comments?: string;

  @ApiProperty({ example: 42, description: 'ID of the employee being evaluated' })
  @IsInt()
  employeeId: number;
}
