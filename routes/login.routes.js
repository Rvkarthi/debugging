import { Router } from "express";
import { createManyUser, getUser, createUser, showUsers,updateUser,deleteUser } from "../controllers/login.controller.js";

const loginRouter = Router()


// http://localhost:2222/auth/

//create account
loginRouter.post('/signup', createUser)

//create many account
loginRouter.post('/signup-many', createManyUser)

//create many account
loginRouter.get('/show', showUsers)

//login
loginRouter.post("/login", getUser)

//edit
loginRouter.put("/update-user", updateUser)

//delete User
loginRouter.delete("/delete-user", deleteUser)

export default loginRouter