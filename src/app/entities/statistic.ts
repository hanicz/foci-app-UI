import { Serializable } from '../utils/serializable'

export class Statistic extends Serializable{
    public users: string[];
    public statistics: number[];
}