"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeorm = void 0;
const path_1 = require("path");
const Typeorm = (configService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [(0, path_1.join)(process.cwd(), 'dist/**/*.entity.js')],
    synchronize: true,
    autoLoadEntities: true,
});
exports.Typeorm = Typeorm;
//# sourceMappingURL=Typeorm.js.map