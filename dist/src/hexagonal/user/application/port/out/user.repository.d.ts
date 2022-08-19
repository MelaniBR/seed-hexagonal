import { Observable } from 'rxjs';
import { User } from '../../../domain/user.model';
export interface UserRepository {
    get(): Observable<User>;
}
