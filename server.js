import express from 'express'
import cors from 'cors'
import loginRouter from './routes/login.routes.js'
import scoreRouter from './routes/score.routes.js'
import questionRoutes from './routes/questionRoutes.js'; // Import the router
import { connectDb } from './models/connect.js'
import { fileURLToPath } from "url";
import path from "path";

// Convert module URL to file path
const __filename = fileURLToPath(import.meta.url);

// Get directory name from file path
const __dirname = path.dirname(__filename);

const PORT = 2222
const app = express()

// body and cross orgin
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

//static page
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,"public", "login.html"));
    // res.json({"code": __dirname})
})
app.get('/quiz',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
})
app.get('/admin',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
})
app.get('/userlist',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'userlist.html'));
})
app.get('/debug',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'debugging.html'));
})

// routes
app.use("/auth", loginRouter)
app.use("/score", scoreRouter)
app.use('/api/questions', questionRoutes);

// test
app.get("/", (req, res)=>{
    res.send("working")
})

if(connectDb())
{app.listen(PORT, ()=>{
    console.log(`server running in http://localhost:${PORT}/login`)
})}
