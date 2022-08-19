import {User} from '../../domain/user.model';
import {HttpService} from '@nestjs/axios';
import {UserRepository} from '../../application/port/out/user.repository';
import {Injectable} from '@nestjs/common';
import {UserBobRestModel} from "./model/user.bob.rest.model";
import {lastValueFrom} from "rxjs";
import {ConfigService} from "@nestjs/config";


@Injectable()
export class UserBobRestAdapter implements UserRepository {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService) {
    }

    async get(email:string): Promise<User> {
        const headersRequest = {
            'Content-Type': 'application/json',
            Authorization: 'JzTMuPog3aY8LQag0WdOuXuyG1Anu68uixzP25ur',
        };
        const response = await lastValueFrom(this.httpService.get<UserBobRestModel>(this.getUrl() + email, {
            headers: headersRequest,
        }))
        console.log('Bob Response:' + JSON.stringify(response.data))
        return this.mapToUser(response.data)
    }

    private mapToUser(user: UserBobRestModel): User {
        return {
            name: user.firstName,
            lastName: user.surname,
            birthDate: user.personal.shortBirthDate,
            pokemon: null,
            email:user.email
        }
    }

    private getUrl() {
        return this.configService.get<string>('BOB_URL')
    }
}
