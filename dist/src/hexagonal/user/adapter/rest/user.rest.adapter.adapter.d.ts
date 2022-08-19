import { Observable } from 'rxjs';
import { User } from '../../domain/user.model';
import { HttpService } from '@nestjs/axios';
import { UserRepository } from '../../application/port/out/user.repository';
export declare class UserRestAdapter implements UserRepository {
    private readonly httpService;
    constructor(httpService: HttpService);
    get(): Observable<User>;
    private mapToUser;
}
