import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routers/userRoutes.js'
import postRoutes from './routers/postRoutes.js'
import { v2 as cloudinary } from "cloudinary"


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

const PORT = process.env.PORT || 8080;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(express.json({ limit: "50mb" })); // to prase  Json data in the req.body
app.use(express.urlencoded({ extended: false })); // to prase from data in the req.body
app.use(cookieParser());


// routes

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
