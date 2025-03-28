import {DataSource, DataSourceOptions} from "typeorm";
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'db', // 'localhost' for local dev
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'test',
    schema: 'public',
    entities: ['src/entities/*{.js,.ts}'],
    synchronize: true,
};


export const appDataSource = new DataSource(options)
