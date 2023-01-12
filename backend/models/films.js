import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const FilmModel = dbInstance.define(
    "films" /* table name */,
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'categories',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        releaseDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        time: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        likes: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isRent: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isVisisble: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }
);

export { FilmModel };