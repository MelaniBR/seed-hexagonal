import {User} from '../../../domain/user.model';

export interface UserRepository {
    get(email:string): Promise<User>
}
