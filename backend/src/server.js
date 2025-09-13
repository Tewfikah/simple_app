import express from "express";
//importing routes
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 5001
const app = express();
//call DB
connectDB()
// API routes

//middleware to parse json
app.use(express.json());
app.use("/api/notes", notesRoutes); 

app.listen(5001, () => {
  console.log("Server is running on PORT:",PORT);
});


