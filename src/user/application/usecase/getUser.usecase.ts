import {Inject} from '@nestjs/common';
import {UserRepository} from '../port/out/user.repository';
import {User} from "../../domain/user.model";
import {AvatarRepository} from "../port/out/avatar.repository";
import {GetUserQuery} from "../port/in/getUser.query";
import {Pokemon} from "../../domain/pokemon.model";

export class GetUserUsecase implements GetUserQuery {
    constructor(
        @Inject('UserRepository')
        private userRepository: UserRepository,
        @Inject('AvatarRepository')
        private avatarRepository: AvatarRepository,
    ) {
    }

    //todo: mejorar
    public execute(email: string): Promise<User> {
        let user;
        return this.userRepository.get(email)
            .then(function (rest) {
                user = rest
                return user
            })
            .then((user) => this.getIdByBirthDay(user.birthDate))
            .then((id) => {
                return this.getAvatar(id)
                    .then((pokemon) => {
                        console.log(pokemon)
                        const result = this.buildUser(user, pokemon)
                        console.log(result)
                        return result
                    })
            })

    }

    private buildUser(user: User, pokemon: Pokemon): User {
        return {
            pokemon: pokemon,
            name: user.name,
            lastName: user.lastName,
            birthDate: user.birthDate,
            email: user.email
        }
    }

    private getIdByBirthDay(birthDay: string) {
        const reggie = /(\d{4})-(\d{2})-(\d{2})/;
        const dateArray = reggie.exec('2022-' + birthDay);
        const date = new Date((+dateArray[1]), (+dateArray[2]) - 1, (+dateArray[3]));
        return this.daysIntoYear(date)
    }

    private daysIntoYear(date) {
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }

    private getAvatar(id: number) {
        return this.avatarRepository.get(id)
    }
}
