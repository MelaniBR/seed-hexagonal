import { UserRepository } from '../port/out/user.repository';
import { User } from "../../domain/user.model";
import { AvatarRepository } from "../port/out/avatar.repository";
import { GetUserQuery } from "../port/in/getUser.query";
export declare class GetUserUsecase implements GetUserQuery {
    private userRepository;
    private avatarRepository;
    constructor(userRepository: UserRepository, avatarRepository: AvatarRepository);
    execute(email: string): Promise<User>;
    private buildUser;
    private getIdByBirthDay;
    private daysIntoYear;
    private getAvatar;
}
