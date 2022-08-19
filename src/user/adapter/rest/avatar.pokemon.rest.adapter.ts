import {lastValueFrom, map,} from 'rxjs';
import {HttpService} from '@nestjs/axios';
import {Injectable} from '@nestjs/common';
import {AvatarRepository} from "../../application/port/out/avatar.repository";
import {PokemonRestModel} from "./model/pokemon.rest.model";
import {ConfigService} from "@nestjs/config";
import {Pokemon} from "../../domain/pokemon.model";


@Injectable()
export class AvatarPokemonRestAdapter implements AvatarRepository {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService) {
    }

    //todo: manera de deseralizar en camelcase
    async get(id: number): Promise<Pokemon> {
        const response = await lastValueFrom(this.httpService.get<PokemonRestModel>(this.getUrl() + id))
        console.log('Pokemon Response:' + JSON.stringify(response.data.sprites.other.home))
        return this.mapToPokemon(response.data)
    }

    private mapToPokemon(pokemon: PokemonRestModel): Pokemon{
        return{
            name: pokemon.name,
            avatar: pokemon.sprites.other.home.front_default
        }
    }
    private getUrl() {
        return this.configService.get<string>('POKEMON_URL')
    }

}