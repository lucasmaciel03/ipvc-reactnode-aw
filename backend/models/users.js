import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const UserModel = dbInstance.define(
    "users" /* table name */,
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rentals: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }
);

export { UserModel };


