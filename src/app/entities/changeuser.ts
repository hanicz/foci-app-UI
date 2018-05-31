import { User } from './user';

export class ChangeUser extends User{
    public newpassword: string;
    public notification: boolean;
}