"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const getUser_usecase_1 = require("./usecase/getUser.usecase");
const user_rest_adapter_adapter_1 = require("../adapter/rest/user.rest.adapter.adapter");
const axios_1 = require("@nestjs/axios");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [
            getUser_usecase_1.GetUserUsecase,
            {
                provide: 'UserRepository',
                useClass: user_rest_adapter_adapter_1.UserRestAdapter,
            },
        ],
        exports: [getUser_usecase_1.GetUserUsecase],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map