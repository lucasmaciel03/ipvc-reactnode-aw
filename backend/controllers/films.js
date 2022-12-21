import { FilmModel } from "../models/films.js";
import { CategoryModel } from "../models/categories.js";
import fs from "fs";

export const createFilm = async (req, res) => {
  try {
    // Check if film already exists
    const film = await FilmModel.findOne({ where: { title: req.body.title } });
    if (film) {
      return res.status(400).json({ message: "Film already exist" });
    }

    // Check if category exists
    const category = await CategoryModel.findOne({ where: { id: req.body.id_category } });
    if (!category) {
      return res.status(400).json({ message: "Category not exist" });
    }

    // Read image file and store in a variable
    const imageData = fs.readFileSync(req.file.path);

    // Create film with image data
    const newFilm = await FilmModel.create({
      title: req.body.title,
      description: req.body.description,
      id_category: req.body.id_category,
      price: req.body.price,
      duration: req.body.duration,
      image: imageData,
    });
    return res.status(201).json({ message: "Film created", newFilm });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
