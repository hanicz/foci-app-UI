import { Serializable } from '../utils/serializable'

export class League extends Serializable{
    public name: string;
    public ID: Number;
    public doublePoint: Number;
    public active: Boolean;
}
