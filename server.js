import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import hallRoutes from "./routes/hall.js"
import roomRoutes from "./routes/room.js"


const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(cookieParser());


mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connected to HallBookingApi MongoDB '))
.catch((err)=>console.log(err))

app.use(express.json());

app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/hall",hallRoutes);
app.use("/room",roomRoutes);


app.listen(7500,()=>{
    console.log('server listening on port 7500')
})