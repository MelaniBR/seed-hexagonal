"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const user_controller_1 = require("./controller/user.controller");
const user_bob_rest_adapter_1 = require("./rest/user.bob.rest.adapter");
const application_module_1 = require("../application/application.module");
const avatar_pokemon_rest_adapter_1 = require("./rest/avatar.pokemon.rest.adapter");
const config_1 = require("@nestjs/config");
let AdapterModule = class AdapterModule {
};
AdapterModule = __decorate([
    (0, common_1.Module)({
        imports: [application_module_1.ApplicationModule, config_1.ConfigModule, axios_1.HttpModule],
        providers: [user_bob_rest_adapter_1.UserBobRestAdapter, avatar_pokemon_rest_adapter_1.AvatarPokemonRestAdapter],
        controllers: [user_controller_1.UserController]
    })
], AdapterModule);
exports.AdapterModule = AdapterModule;
//# sourceMappingURL=adapter.module.js.map