import { IRecord } from './IRecord';

export interface ICollection<T extends IRecord> {
    name: string;

    getAll(): Promise<T[]>;
    add(items: Array<Omit<T, 'id'> & Partial<Pick<T, 'id'>>>): Promise<void>;
    remove(items: Array<T['id']>): Promise<void>;
    removeAll(): Promise<void>;
    update(item: T): Promise<void>;
}
