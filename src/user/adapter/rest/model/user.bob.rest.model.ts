export class UserBobRestModel {
    id: string;
    firstName: string;
    lastName: string;
    email:string;
    displayName: string;
    fullName:string;
    personal : Personal;
    avatarUrl: string;
    surname:string
}
class Personal{
    shortBirthDate: string;
}