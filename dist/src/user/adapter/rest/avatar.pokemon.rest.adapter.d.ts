import { HttpService } from '@nestjs/axios';
import { AvatarRepository } from "../../application/port/out/avatar.repository";
import { ConfigService } from "@nestjs/config";
import { Pokemon } from "../../domain/pokemon.model";
export declare class AvatarPokemonRestAdapter implements AvatarRepository {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    get(id: number): Promise<Pokemon>;
    private mapToPokemon;
    private getUrl;
}
