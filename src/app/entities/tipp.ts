import { Serializable } from '../utils/serializable'

export class Tipp extends Serializable{
    public start: string;
    public home: string;
    public away: string;
    public id: Number;
    public score: string;
    public homelogo: string;
    public awaylogo: string;

}