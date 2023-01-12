import { FilmModel } from '../models/films.js';
import { CategoryModel } from '../models/categories.js';

// create new film, with this verifications, verify if name film already exit, if category id exist, verify if time > 0, verify if rent price > 0, save film in database
export const createFilm = async (req, res) => {
    const { name, categoryId, description, releaseDate, time, img, price } = req.body;
    try {
        const film = await FilmModel.findOne({ where: { name } });
        if (film) {
            return res.status(400).json({ message: 'Film already exist' });
        }
        const category = await CategoryModel.findOne({ where: { id: categoryId } });
        if (!category) {
            return res.status(400).json({ message: 'Category not exist' });
        }
        if (time <= 0) {
            return res.status(400).json({ message: 'Time must be greater than 0' });
        }
        if (price <= 0) {
            return res.status(400).json({ message: 'Rent price must be greater than 0' });
        }
        await FilmModel.create({
            name,
            categoryId,
            description,
            releaseDate,
            time,
            img,
            price,
        });
        return res.status(201).json({ message: 'Film created' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

//get all films and replace categoryId with category name
export const getAllFilmsWithCategoryName = async (req, res) => {
    const films = await FilmModel.findAll({
    });

    console.log(films)

    const films2 = await Promise.all(films.map(async (film) => {
        if (film.categoryId !== undefined && film.categoryId !== null) {
            // verify if categoryId is not null
            const category = await CategoryModel.findOne({
                where: {
                    id: film.categoryId
                },
                attributes: {
                    exclude: ['id']
                }
            });

            if (category !== null) {
                // verify if category exists
                return {
                    ...film.dataValues,
                    category: category.name
                }
            }
        }
    }));

    return res.status(200).json(films2);

}

// delete film by id and verify if film exist
export const deleteFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await FilmModel.findOne({ where: { id } });
        if (!film) {
            return res.status(400).json({ message: 'Film not exist' });
        }
        await film.destroy();
        return res.status(200).json({ message: 'Film deleted' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}






