import { Serializable } from '../utils/serializable'

export class History extends Serializable{
    public id: Number;
    public home: string;
    public away: string;
    public homeLogo: string;
    public awayLogo: string;
}
