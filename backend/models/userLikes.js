import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";
import { UserModel } from "./users.js";
import { FilmModel } from "./films.js";

const LikeModel = dbInstance.define(
  "likes" /* table name */,
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      // primaryKey: false,
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
        model: 'films',
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

LikeModel.belongsToMany(UserModel, { through:'likes', foreignKey: 'userId' });
LikeModel.belongsToMany(FilmModel, { through: 'likes', foreignKey: 'filmId' });

export { LikeModel };


