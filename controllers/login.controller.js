import { Users } from '../models/loginModel.js'

// create user
export const createUser = async (req, res) =>{
    try {
        const body = req.body;
        console.log(body)
        const response = await Users.create(body)
        console.log("response", response)
        res.status(200).json({"message": "working", "user created": response})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

// create user
export const createManyUser = async (req, res) =>{
    try {
        const {data} = req.body;
        const response = await Users.create(data)
        console.log("response", response)
        res.status(200).json({"message": "multiple user created", "success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

//show users
// http://localhost:2222/auth/show
export const showUsers = async (req, res) =>{
    try {
        const response = await Users.find()
        res.status(200).json({"message": "multiple get", data: response, "success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}


// get user login
export const getUser = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const response = await Users.findOne({'username': username})
        if(!response)
        {
            res.status(404).json({"message": "username not found", "success": "false"})
        }
        const responsePass = response.password === password
        if(response.isAttend){
            res.status(404).json({"message": "already quiz is submitted", "success": "false"})
        }
        if(!responsePass)
        {
            res.status(404).json({"message": "password is wrong", "success": "false"})
        }
        res.status(200).json({"message": "user found", "success": "true"})
        console.log("user login ", username, password)
    } catch (error) {
        res.status(404).json({"message": error.message, "success": "false"})
    }
}


//update users
// http://localhost:2222/auth/update
export const updateUser = async (req, res) =>{
    try {
        const {username, newUserName, password} = req.body;
        const response = await Users.findOneAndUpdate({username}, {"username": newUserName, "password": password})
        res.status(200).json({"message": "updated user", data: response, "success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

//delete users
// http://localhost:2222/auth/delete
export const deleteUser = async (req, res) =>{
    try {
        const {id} = req.body;
        const response = await Users.findByIdAndDelete(id)
        console.log("id: ", id)
        res.status(200).json({"message": "deleted user", data: response, "success": "true"})
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}