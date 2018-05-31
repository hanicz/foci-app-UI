import { Serializable } from '../utils/serializable'

export class League extends Serializable{
    public name: string;
    public id: Number;
    public doublePoint: Number;
    public active: Boolean;
}
