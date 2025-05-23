import { Admin } from '../entities/admin.entity';
import { AdminService } from 'src/services/admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: Admin): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<Admin | null>;
    update(id: string, updateAdminDto: Admin): Promise<Admin | null>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
