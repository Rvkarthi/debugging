import { Question } from '../models/Question.model.js'; // Adjust the path to your model file

// --- CREATE a new question ---
// Route: POST /api/questions
export const createQuestion = async (req, res) => {
    try {
        const { question, options, correctOptionIndex } = req.body;

        // Basic validation
        if (!question || !options || correctOptionIndex === undefined) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const newQuestion = new Question({
            question,
            options,
            correctOptionIndex
        });

        await newQuestion.save();
        res.status(201).json(newQuestion); // 201 Created

    } catch (error) {
        res.status(400).json({ message: "Error creating question", error: error.message });
    }
};

// --- READ all questions ---
// Route: GET /api/questions
export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).json(questions); // 200 OK

    } catch (error) {
        res.status(500).json({ message: "Error fetching questions", error: error.message });
    }
};

// --- UPDATE a question by ID ---
// Route: PUT /api/questions/:id
export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Find and update the question
        // { new: true } returns the modified document
        const updatedQuestion = await Question.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        if (!updatedQuestion) {
            return res.status(404).json({ message: "Question not found." });
        }
        
        res.status(200).json(updatedQuestion);

    } catch (error) {
        res.status(400).json({ message: "Error updating question", error: error.message });
    }
};

// --- DELETE a question by ID ---
// Route: DELETE /api/questions/:id
export const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedQuestion = await Question.findByIdAndDelete(id);

        if (!deletedQuestion) {
            return res.status(404).json({ message: "Question not found." });
        }

        res.status(200).json({ message: "Question deleted successfully." });

    } catch (error) {
        res.status(500).json({ message: "Error deleting question", error: error.message });
    }
};