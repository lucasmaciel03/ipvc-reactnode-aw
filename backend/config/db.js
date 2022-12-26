import Sequelize from "sequelize";

const dbInstance = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "myUsername",
  password: "MySecretPassword",
  database: "db_video_club",
  dialect: "mysql",
});

export { dbInstance };





