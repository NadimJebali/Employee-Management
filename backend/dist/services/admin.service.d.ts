import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
export declare class AdminService {
    private AdminRepository;
    constructor(AdminRepository: Repository<Admin>);
    create(createAdminDto: Admin): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin | null>;
    findByEmail(email: string): Promise<Admin | null>;
    update(id: number, userUpdate: Partial<Admin>): Promise<Admin | null>;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
