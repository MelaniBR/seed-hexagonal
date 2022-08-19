"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBobRestAdapter = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const config_1 = require("@nestjs/config");
let UserBobRestAdapter = class UserBobRestAdapter {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    async get(email) {
        const headersRequest = {
            'Content-Type': 'application/json',
            Authorization: 'JzTMuPog3aY8LQag0WdOuXuyG1Anu68uixzP25ur',
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(this.getUrl() + email, {
            headers: headersRequest,
        }));
        console.log('Bob Response:' + JSON.stringify(response.data));
        return this.mapToUser(response.data);
    }
    mapToUser(user) {
        return {
            name: user.firstName,
            lastName: user.surname,
            birthDate: user.personal.shortBirthDate,
            pokemon: null,
            email: user.email
        };
    }
    getUrl() {
        return this.configService.get('BOB_URL');
    }
};
UserBobRestAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], UserBobRestAdapter);
exports.UserBobRestAdapter = UserBobRestAdapter;
//# sourceMappingURL=user.bob.rest.adapter.js.map