import { IRecord } from './IRecord';

export interface ICollection<T extends IRecord> {
    name: string;

    getAll(): Promise<T[]>;
    add(items: Array<Omit<T, 'id'>>): Promise<void>;
    remove(items: Array<T['id']>): Promise<void>;
    update(item: T): Promise<void>;
}
