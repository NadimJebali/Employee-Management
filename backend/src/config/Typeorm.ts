import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";


export const Typeorm = (configService:ConfigService):TypeOrmModuleOptions => ({
    
    type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: Number(configService.get('DB_PORT')),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [join(process.cwd(),'dist/**/*.entity.js')],
  synchronize: true,
  autoLoadEntities: true,
});

