import { UserRepository } from '../port/out/user.repository';
import { Observable } from "rxjs";
import { User } from "../../domain/user.model";
export declare class GetUserUsecase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(): Observable<User>;
}
