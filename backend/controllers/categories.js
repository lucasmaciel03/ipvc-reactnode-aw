import { CategoryModel } from '../models/categories.js';

// get all categories from model and dont return the id
export const getAllCategories = async (req, res) => {
    const categories = await CategoryModel.findAll({
    });
    res.json(categories);
}

// create a new category dont accept number as name, verify if the name is already in use
export const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!isNaN(name)) {
        res.status(400).json({ error: 'Name must be a string' });
        return;
    }
    const category = await CategoryModel.findOne({
        where: {
            name
        }
    });
    if (category) {
        res.status(400).json({ error: 'Category already exists' });
        return;
    }
    const newCategory = await CategoryModel.create({
        name
    });
    res.json(newCategory);
}

// delete a category by id
export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const category = await CategoryModel.findByPk(id);
    if (!category) {
        res.status(404).json({ error: 'Category not found' });
        return;
    }
    await category.destroy();
    res.json(category);
}

// count all categories
export const countCategories = async (req, res) => {
    const categories = await CategoryModel.findAll();
    res.json(categories.length);
}


