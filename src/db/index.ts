import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// DB_NAME as string,
// DB_USER as string,
// "V0GSTEWKYGgNkibcWycoz3W0IWsEg6Qm",
const sequelize = new Sequelize(process.env.DB_URL as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
