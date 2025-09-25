import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question text is required."], // Adds a custom error message
        trim: true // Removes whitespace from both ends
    },
    options: {
        type: [String], // ✅ Enforces that options must be an array of strings
        required: true,
        validate: [
            (val) => val.length === 4, // ✅ Ensures there are always exactly 4 options
            'There must be exactly 4 options.'
        ]
    },
    correctOptionIndex: { // ✅ More descriptive name
        type: Number,
        required: [true, "The correct option index is required."],
        min: [0, "Correct option index cannot be less than 0."],
        max: [3, "Correct option index cannot be greater than 3."] // ✅ Validates the index range
    }
});

// ✅ Using standard naming convention for the model
export const Question = mongoose.model("Question", questionSchema);