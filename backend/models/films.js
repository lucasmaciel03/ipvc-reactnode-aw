import { Sequelize } from "sequelize";
import { dbInstance } from "../config/db.js";

const FilmModel = dbInstance.define(
    "films" /* table name */,
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_category: {
            type: Sequelize.INTEGER,
            references: {
                model: "categories",
                key: "id",
            },
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        available: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }
);

export { FilmModel };