import { IRecord } from './IRecord';
import { ICollection } from './ICollection';

export interface IDatabase {
    rename(newName: string): Promise<void>;

    createCollection<T extends IRecord>(name: string): Promise<ICollection<T>>;
    getCollection<T extends IRecord>(name: string): Promise<ICollection<T>>;
}
