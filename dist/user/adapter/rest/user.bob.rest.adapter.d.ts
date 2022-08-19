import { User } from '../../domain/user.model';
import { HttpService } from '@nestjs/axios';
import { UserRepository } from '../../application/port/out/user.repository';
import { ConfigService } from "@nestjs/config";
export declare class UserBobRestAdapter implements UserRepository {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    get(email: string): Promise<User>;
    private mapToUser;
    private getUrl;
}
