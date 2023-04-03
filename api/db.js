import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "whatodo",
});

export default pool;
