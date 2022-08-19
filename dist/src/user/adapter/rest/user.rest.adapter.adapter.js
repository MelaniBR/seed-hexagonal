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
exports.UserRestAdapter = void 0;
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let UserRestAdapter = class UserRestAdapter {
    constructor(httpService) {
        this.httpService = httpService;
    }
    get() {
        const headersRequest = {
            'Content-Type': 'application/json',
            Authorization: 'JzTMuPog3aY8LQag0WdOuXuyG1Anu68uixzP25ur',
        };
        return this.httpService.get('https://api.hibob.com/api/user', {
            headers: headersRequest,
        }).pipe((0, rxjs_1.tap)(res => console.log(res.data)), (0, rxjs_1.map)(res => this.mapToUser(res.data)), (0, rxjs_1.tap)(user => console.log(user)));
    }
    mapToUser(user) {
        return {
            name: user.firstName,
            lastName: user.lastName
        };
    }
};
UserRestAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UserRestAdapter);
exports.UserRestAdapter = UserRestAdapter;
//# sourceMappingURL=user.rest.adapter.adapter.js.map