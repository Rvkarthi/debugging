import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "score": {
        type: Number,
        default: 0
    },
    "isAttend": {
        type: Boolean,
        default: false
    }
})

export const Users = mongoose.model("Users",loginSchema)