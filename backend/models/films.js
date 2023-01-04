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
        id_category:{
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isAvailable: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isVisible: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
);

export { FilmModel };