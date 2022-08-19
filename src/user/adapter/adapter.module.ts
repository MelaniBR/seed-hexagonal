import {forwardRef, Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {UserController} from "./controller/user.controller";
import {UserBobRestAdapter} from "./rest/user.bob.rest.adapter";
import {ApplicationModule} from "../application/application.module";
import {AvatarPokemonRestAdapter} from "./rest/avatar.pokemon.rest.adapter";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ApplicationModule,ConfigModule,HttpModule],
    providers: [UserBobRestAdapter,AvatarPokemonRestAdapter],
    controllers: [UserController]
})
export class AdapterModule {
}
