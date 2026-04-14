import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB()

// middleware
app.use(express.json())
app.use(cors())

// home route
app.get('/', (req, res)=>{
    res.send("Server is live...")
})
// user routes
app.use('/api/users', userRouter)
// resume routes
app.use('/api/resume', resumeRouter)



// start express app
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`); 
});