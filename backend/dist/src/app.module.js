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
const config_1 = require("@nestjs/config");
const user_service_1 = require("./services/user.service");
const prisma_service_1 = require("./prisma.service");
const auth_module_1 = require("./auth/auth.module");
const user_repo_1 = require("./repository/user.repo");
const user_controller_1 = require("./controllers/user.controller");
const rental_controller_1 = require("./controllers/rental.controller");
const rental_service_1 = require("./services/rental.service");
const rental_repo_1 = require("./repository/rental.repo");
const message_service_1 = require("./services/message.service");
const message_repo_1 = require("./repository/message.repo");
const message_controller_1 = require("./controllers/message.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), auth_module_1.AuthModule],
        controllers: [user_controller_1.UserController, rental_controller_1.RentalController, message_controller_1.MessageController],
        providers: [user_service_1.UserService, prisma_service_1.PrismaService, user_repo_1.UserRepo, rental_service_1.RentalService, rental_repo_1.RentalRepo, message_service_1.MessageService, message_repo_1.MessageRepo],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map