import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsEmail, Min, IsEnum, isString } from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'Gorblak' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Da Choppa' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'gorblak@waaagh.krump' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '**********' }) 
  @IsString()
  password: string;

  @ApiProperty({ example: 42 })
  @IsInt()
  age: number;

  @ApiProperty({ example: '50648974' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: 'WARBOSS', enum: Role })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(0)
  soldconge: number;

  @ApiProperty({ example: 9 })
  @IsInt()
  nbTaches: number;

  @ApiProperty({ example: 'Kill squad' })
  @IsString()
  department: string;
}
