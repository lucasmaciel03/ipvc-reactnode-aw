import { CategoryModel } from '../models/categories.js';

// get all categories from model and dont return the id
export const getAllCategories = async (req, res) => {
    const categories = await CategoryModel.findAll({
        attributes: ['name']
    });
    res.json(categories);
}

// create a new category dont accept number as name
export const createCategory = async (req, res) => {
    const { name } = req.body;
    if (isNaN(name)) {
        const newCategory = await CategoryModel.create({
            name
        });
        res.json(newCategory);
    } else {
        res.json('Name must be a string');
    }
}


