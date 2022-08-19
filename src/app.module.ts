import {Module} from '@nestjs/common';
import {UserController} from './user/adapter/controller/user.controller';
import {AppService} from './app.service';
import {ApplicationModule} from './user/application/application.module';
import {AdapterModule} from "./user/adapter/adapter.module";
import {ConfigModule} from "@nestjs/config";


@Module({
    imports: [ApplicationModule, AdapterModule, ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [AppService],
})
export class AppModule {
}
