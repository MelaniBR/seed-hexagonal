import { GetUserUsecase } from '../../application/usecase/getUser.usecase';
export declare class UserController {
    private readonly getUserUsecase;
    constructor(getUserUsecase: GetUserUsecase);
    getUser(email: any): Promise<import("../../domain/user.model").User>;
}
