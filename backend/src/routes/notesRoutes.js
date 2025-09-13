import express from "express";
import { createNote, deleteNote, getAllnotes, updateNote,getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

//route to get all notes
router.get("/", getAllnotes) 
// route to get by id
router.get("/:id", getNoteById)
//route to post and status and json
router.post("/",createNote)
//router put json
router.put("/:id", updateNote)
//router delete
router.delete("/:id", deleteNote)




export default router;
