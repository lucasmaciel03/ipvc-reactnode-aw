import { LikeModel } from '../models/userLikes.js'
import { FilmModel } from '../models/films.js'
import { UserModel } from '../models/users.js'

// create new like
export const createLike = async (req, res) => {
    const { userId, filmId } = req.body;
    try {
        const user = await UserModel.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(400).json({ message: 'User not exist' });
        }
        const film = await FilmModel.findOne({ where: { id: filmId } });
        if (!film) {
            return res.status(400).json({ message: 'Film not exist' });
        }
        await Likes.create({
            userId,
            filmId
        });fi
        return res.status(201).json({ message: 'Like created' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}
