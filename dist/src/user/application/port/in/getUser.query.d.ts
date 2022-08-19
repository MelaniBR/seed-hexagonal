import { User } from "../../../domain/user.model";
export interface GetUserQuery {
    execute(email: string): Promise<User>;
}
