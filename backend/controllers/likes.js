import { LikeModel } from '../models/userLikes.js'
import { FilmModel } from '../models/films.js'
import { UserModel } from '../models/users.js'

// create new like verify if user and film exist
export const createLike = async (req, res) => {
    const { userId, filmId } = req.body
    console.log("-----------------------------------------" + userId, filmId)
    const user = await UserModel.findById(userId)
    const film = await FilmModel.findById (filmId)
    if (user && film) {
        const like = new LikeModel({ userId, filmId })
        await like.save()
        res.status(201).json({ message: 'Like created' })
    }

    res.status(404).json({ message: 'User or film not found' })

}

