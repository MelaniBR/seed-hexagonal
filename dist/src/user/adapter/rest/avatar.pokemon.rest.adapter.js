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
exports.AvatarPokemonRestAdapter = void 0;
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AvatarPokemonRestAdapter = class AvatarPokemonRestAdapter {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    async get(id) {
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(this.getUrl() + id));
        console.log('Pokemon Response:' + JSON.stringify(response.data.sprites.other.home));
        return this.mapToPokemon(response.data);
    }
    mapToPokemon(pokemon) {
        return {
            name: pokemon.name,
            avatar: pokemon.sprites.other.home.front_default
        };
    }
    getUrl() {
        return this.configService.get('POKEMON_URL');
    }
};
AvatarPokemonRestAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], AvatarPokemonRestAdapter);
exports.AvatarPokemonRestAdapter = AvatarPokemonRestAdapter;
//# sourceMappingURL=avatar.pokemon.rest.adapter.js.map