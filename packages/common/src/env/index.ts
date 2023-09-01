import dotenv from "dotenv";

dotenv.config({path: "../../.env"});

interface IDatabase_env {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

export const DATABASE_ENV: IDatabase_env = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT as string) || 3306,
  database: process.env.DB_DATABASE || "default",
  username: process.env.USERNAME || "default",
  password: process.env.PASSWORD || "default",
};