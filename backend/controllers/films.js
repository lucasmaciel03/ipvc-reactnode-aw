import { FilmModel } from '../models/films.js';
import { CategoryModel } from '../models/categories.js';

import path from 'path';
import fs from 'fs';

export const createFilm = async (req, res) => {
  try {
    const {
      categoryId,
      name,
      description,
      releaseDate,
      time,
      image,
      rentPrice,
    } = req.body;

    // Verifica se o nome de filme já está sendo utilizado
    const filmWithSameName = await FilmModel.findOne({ where: { name } });
    if (filmWithSameName) {
      return res.status(400).send({ error: 'Film name already in use' });
    }

    // Verifica se a categoria existe
    const category = await CategoryModel.findByPk(categoryId);
    if (!category) {
      return res.status(400).send({ error: 'Category not found' });
    }

    // Verifica se o tempo do filme não é menor ou igual a 0
    if (time <= 0) {
      return res.status(400).send({ error: 'Invalid film time' });
    }

    // Verifica se o Rentprice não é menor ou igual a 0
    if (rentPrice <= 0) {
      return res.status(400).send({ error: 'Invalid film rent price' });
    }

    // Guarda a imagem tanto na base de dados como numa pasta de imagens
    const imagePath = path.join(__dirname, '../public/images', image.name);
    fs.writeFileSync(imagePath, image.data);

    const film = await FilmModel.create({
      categoryId,
      name,
      description,
      releaseDate,
      time,
      image: image.name,
      rentPrice,
    });

    return res.status(201).send({ film });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

