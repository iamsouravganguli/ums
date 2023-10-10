import { DataSource } from 'typeorm';
import { User } from '../models/user.model.js';
export const database_init = new DataSource({
  type: 'mysql',
  connectorPackage: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: process.env.DEBUG !== 'false',
  entities: [User],
})
  .initialize()
  .then((status) => {
    console.log(status.isInitialized && 'Database Connected ');
  })
  .catch((error) => {
    console.log(error);
  });
