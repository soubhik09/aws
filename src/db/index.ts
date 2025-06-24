import { Sequelize } from "sequelize";

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

// DB_NAME as string,
// DB_USER as string,
// "V0GSTEWKYGgNkibcWycoz3W0IWsEg6Qm",
const sequelize = new Sequelize(
  "postgresql://random_db_5u8z_user:V0GSTEWKYGgNkibcWycoz3W0IWsEg6Qm@dpg-d1cldhidbo4c73cvpkv0-a.oregon-postgres.render.com/random_db_5u8z",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;
