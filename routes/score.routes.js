import {Router} from 'express'
import { updateScore, getScore,resetScore } from '../controllers/score.control.js'

const scoreRouter = Router();

scoreRouter.put("/scoreUpdate", updateScore)

scoreRouter.get('/getScore', getScore)

scoreRouter.get('/resetscore', resetScore)

export default scoreRouter