import { Serializable } from '../utils/serializable'

export class History extends Serializable{
    public home: String;
    public away: String;
    public hlogo: String;
    public alogo: String;
    public hgoals: Number;
    public agoals: Number;
    public tipps: String[];
}
