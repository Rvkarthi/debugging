import { Users } from '../models/loginModel.js'

// update score
export const updateScore = async (req, res) =>{
    try {
        const {username, score} = req.body;
        console.log(username, score)
        const response = await Users.findOneAndUpdate({username},{"score": score, "isAttend": true})
        res.status(200).json({"message": "score updated", "success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

//get score 
export const getScore = async (req, res) =>{
    try {
        const response = await Users.find().sort({ score: -1 })
        res.status(200).json({"message": "working", "data": response,"success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

// reset score
// http://localhost:2222/score/resetscore
export const resetScore = async (req, res) =>{
    try {
        const response = await Users.updateMany({},{"score": 0, "isAttend":false})
        res.status(200).json({"message": "working", "data": response,"success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}