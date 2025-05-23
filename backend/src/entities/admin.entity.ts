import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Admins' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Moggruk' }) 
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Da Brainbashah' }) 
  @Column()
  lastName: string;

  @ApiProperty({ example: 'moggruk@teef-net.krump' }) 
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: '**********' }) 
  @Column()
  password: string;

  @ApiProperty({ example: 51 }) 
  @Column()
  age: number;

  @ApiProperty({ example: 'BIGBOSS' }) 
  @Column({type: 'enum', enum: Role, default: Role.ADMIN})
  role: Role;
}
