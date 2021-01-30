import { IRecord } from './IRecord';
import { ICollection } from './ICollection';

export interface IDatabase {
    name: string;

    rename(newName: string): Promise<void>;

    createCollection<T extends IRecord>(name: string): Promise<ICollection<T>>;
    getCollection<T extends IRecord>(name: string): Promise<ICollection<T>>;
    getAllCollections(): Promise<ICollection<IRecord>[]>;
}
