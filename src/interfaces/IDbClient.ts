import { IDatabase } from './IDatabase';

export interface IDbClient {
    getDatabase(name: string): Promise<IDatabase>;
    createDatabase(name: string): Promise<IDatabase>;
    dropDatabase(): Promise<void>;
}
