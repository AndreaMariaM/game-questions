const Pool = require('pg').Pool
require('dotenv').config();
const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: 'localhost',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});