import { UserModel } from "../models/users.js";
import bcrypt from 'bcrypt';
import { createToken } from "../utils/jwt.js";

// create new user
export const createUser = async (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
    };
    // verify if name already exist in database
    const userName = await UserModel.findOne({
        where: {
            username: newUser.username
        }
    });
    if (userName) {
        res.status(400).json('Desculpe, este username já existe');
        return;
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    const asd = await UserModel.create(newUser);
    const { password, ...user } = asd.dataValues;


    const token = createToken(user);

    res.send(token);
}

// get all users who have isAdmin = 0 dont return the password and id
export const getAllUsers = async (req, res) => {
    const users = await UserModel.findAll({

    });
    res.json(users);
}

// get all admins who have isAdmin = 1 dont return the password and id
export const getAllAdmins = async (req, res) => {
    const admins = await UserModel.findAll({
        attributes: ['username', 'rentals'],
        where: {
            isAdmin: 1
        }
    });
    res.json(admins);
}

// update user to admin if isAdmin = false, else update is Admin to true, return message user.name becomer a Admin and return user informations, if not found a user return 404 not found message
export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({
        where: {
            id
        }
    });
    if (user) {
        if (user.isAdmin === false) {
            await UserModel.update({
                isAdmin: true
            }, {
                where: {
                    id
                }
            });
            res.json(user.username + ' became a Admin');
        } else {
            await UserModel.update({
                isAdmin: false
            }, {
                where: {
                    id
                }
            });
            res.json(user.username + ' is not an Admin anymore');
        }
    } else {
        res.status(404).json('User not found');
    }
}

// login
export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({
        where: {
            username
        }
    });

    if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        if (isValid) {
            const token = createToken({
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin
            });
            res.status(200).json({
                message: "Login successful",
                token,
                user
            });
        }
        else {
            res.status(401).json('Palavra Passe incorreta');
        }
    }
    else {
        res.status(401).json('Username ou Palavra Passe incorreta');
    }
}

// delete user by id, if he have rentals > 1 dont delete and return message  "User has rentals", if not found a user return 404 not found message
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({
        where: {
            id
        }
    });
    if (user) {
        if (user.rentals > 0) {
            res.json('User has rentals');
        } else {
            await UserModel.destroy({
                where: {
                    id
                }
            });
            res.json('User deleted');
        }
    } else {
        res.status(404).json('User not found');
    }
}