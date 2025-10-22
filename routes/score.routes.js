import {Router} from 'express'
import { updateScore, getScore,resetScore, getScoreSort } from '../controllers/score.control.js'

const scoreRouter = Router();

scoreRouter.put("/scoreUpdate", updateScore)

scoreRouter.get('/getScoresSort', getScoreSort)

scoreRouter.get('/getScores', getScore)

scoreRouter.get('/resetscore', resetScore)

export default scoreRouter