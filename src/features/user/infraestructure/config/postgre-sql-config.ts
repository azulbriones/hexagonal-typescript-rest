import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const postgreSqlConfig = {
  user: 'postgres',
  password: '0609_203720',
  host: 'database-1.cqpv58t1byxx.us-east-1.rds.amazonaws.com',
  port: '5432',
  database: 'hexagonal',
};
const pool = new Pool({
  user: postgreSqlConfig.user,
  password: postgreSqlConfig.password,
  host: postgreSqlConfig.host,
  port: parseInt(postgreSqlConfig.port ?? "5432", 10), // Asigna 5432 como valor predeterminado si el puerto no está definido
  database: postgreSqlConfig.database,
});

export default pool;
