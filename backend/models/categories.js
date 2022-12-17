import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const CategoryModel = dbInstance.define(
  "categories" /* table name */,
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  }
);
export { CategoryModel };
