import {forwardRef, Module} from '@nestjs/common';
import {GetUserUsecase} from './usecase/getUser.usecase';
import {UserBobRestAdapter} from '../adapter/rest/user.bob.rest.adapter';
import {HttpModule} from "@nestjs/axios";
import {AvatarPokemonRestAdapter} from "../adapter/rest/avatar.pokemon.rest.adapter";
import {AdapterModule} from "../adapter/adapter.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [HttpModule,ConfigModule],
    providers: [
        GetUserUsecase,
        {
            provide: 'UserRepository',
            useClass: UserBobRestAdapter,
        },
        {
            provide: 'AvatarRepository',
            useClass: AvatarPokemonRestAdapter
        }
    ],
    exports: [GetUserUsecase],
})
export class ApplicationModule {
}
