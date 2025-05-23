import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsEmail, IsEnum, Min } from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class UpdateUserDto {
  @ApiProperty({ example: 'Gorblak', required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ example: 'Da Choppa', required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ example: 'gorblak@waaagh.krump', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 42, required: false })
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiProperty({ example: '50648974', required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ example: 'WARBOSS', enum: Role, required: false })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiProperty({ example: 10, required: false })
  @IsOptional()
  @IsInt()
  @Min(0)
  soldconge?: number;

  @ApiProperty({ example: 'Kill squad', required: false })
  @IsOptional()
  @IsString()
  department?: string;
}
