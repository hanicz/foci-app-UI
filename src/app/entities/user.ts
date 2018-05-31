import { Serializable } from '../utils/serializable'

export class User extends Serializable{
    public username: string;
    public email: string;
    public password: string;

    reset(){
        this.username = "";
        this.password = "";
        this.email = "";
    }
}