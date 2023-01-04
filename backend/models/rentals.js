import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const RentalsModel = dbInstance.define(
    "rentals" /* table name */,
    {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
        },
        filmId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'movies',
                key: 'id',
            },
            onUpdate: 'cascade', // if the id of the user is changed, the id of the user in the likes table will also be changed
            onDelete: 'cascade', // if the user is deleted, the likes of the user will also be deleted
        },
    },
    {
        timestamps: false,
    }
);

export { RentalsModel };


