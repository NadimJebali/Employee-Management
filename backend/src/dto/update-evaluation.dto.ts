import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString } from 'class-validator';

export class UpdateEvaluationDto {
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

      @ApiProperty({ example: 9 })
      @IsInt()
      nbTaches: number;
    
      @ApiProperty({ example: 'Great work under pressure.', required: false })
      @IsString()
      comments?: string;
}
