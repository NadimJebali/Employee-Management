"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const Typeorm_1 = require("./config/Typeorm");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./moduls/user.module");
const admin_module_1 = require("./moduls/admin.module");
const auth_module_1 = require("./auth/auth.module");
const leave_request_module_1 = require("./moduls/leave-request.module");
const evaluation_module_1 = require("./moduls/evaluation.module");
const timesheet_module_1 = require("./moduls/timesheet.module");
const tasks_module_1 = require("./moduls/tasks.module");
const core_1 = require("@nestjs/core");
const role_guard_1 = require("./auth/role.guard");
const auth_guard_1 = require("./auth/auth.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: Typeorm_1.Typeorm
            }),
            user_module_1.UserModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            leave_request_module_1.LeaveRequestModule,
            evaluation_module_1.EvaluationModule,
            timesheet_module_1.TimesheetModule,
            tasks_module_1.TasksModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RolesGuard,
            },
            app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map