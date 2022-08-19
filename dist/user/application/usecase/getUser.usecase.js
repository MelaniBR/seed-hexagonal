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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUsecase = void 0;
const common_1 = require("@nestjs/common");
let GetUserUsecase = class GetUserUsecase {
    constructor(userRepository, avatarRepository) {
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
    }
    execute(email) {
        let user;
        return this.userRepository.get(email)
            .then(function (rest) {
            user = rest;
            return user;
        })
            .then((user) => this.getIdByBirthDay(user.birthDate))
            .then((id) => {
            return this.getAvatar(id)
                .then((pokemon) => {
                console.log(pokemon);
                const result = this.buildUser(user, pokemon);
                console.log(result);
                return result;
            });
        });
    }
    buildUser(user, pokemon) {
        return {
            pokemon: pokemon,
            name: user.name,
            lastName: user.lastName,
            birthDate: user.birthDate,
            email: user.email
        };
    }
    getIdByBirthDay(birthDay) {
        const reggie = /(\d{4})-(\d{2})-(\d{2})/;
        const dateArray = reggie.exec('2022-' + birthDay);
        const date = new Date((+dateArray[1]), (+dateArray[2]) - 1, (+dateArray[3]));
        return this.daysIntoYear(date);
    }
    daysIntoYear(date) {
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }
    getAvatar(id) {
        return this.avatarRepository.get(id);
    }
};
GetUserUsecase = __decorate([
    __param(0, (0, common_1.Inject)('UserRepository')),
    __param(1, (0, common_1.Inject)('AvatarRepository')),
    __metadata("design:paramtypes", [Object, Object])
], GetUserUsecase);
exports.GetUserUsecase = GetUserUsecase;
//# sourceMappingURL=getUser.usecase.js.map