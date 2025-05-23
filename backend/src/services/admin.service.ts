import { Injectable, SetMetadata } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
import * as bcrypt from 'bcrypt';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';


@Injectable()
export class AdminService {

    constructor(@InjectRepository(Admin) private AdminRepository: Repository<Admin>){}

    async create(createAdminDto: Admin){
        createAdminDto.password = await bcrypt.hash(createAdminDto.password, 10)
        const newUser = this.AdminRepository.create(createAdminDto);
        return this.AdminRepository.save(newUser);
    }

    findAll(){
        return this.AdminRepository.find();
    }

    findOne(id: number){
        return this.AdminRepository.findOne({where: {id}});
    }

    findByEmail(email: string){
        return this.AdminRepository.findOneBy({email})
    }

    async update(id: number, userUpdate: Partial<Admin>){
        await this.AdminRepository.update(id, userUpdate);
        return this.findOne(id);
    }

    async delete(id: number){
        await this.AdminRepository.delete(id);
        return {deleted: true}
    }
}
