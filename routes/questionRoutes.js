import express from 'express';
import { 
    createQuestion, 
    getAllQuestions, 
    updateQuestion, 
    deleteQuestion 
} from '../controllers/questionController.js';

const router = express.Router();

// Route for getting all questions and creating a new one
router.route('/')
    .get(getAllQuestions)
    .post(createQuestion);

// Route for updating and deleting a specific question by its ID
router.route('/:id')
    .put(updateQuestion)
    .delete(deleteQuestion);

export default router;