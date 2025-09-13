//import a mongoose library
import mongoose from "mongoose";
//create a schema for notes
const noteSchema = mongoose.Schema(
  {
    title: { required: true, type: String },
    content: { required: true, type: String },
    
  },{ timestamps: true,})

  //export the model
  const Note = mongoose.model("Note",noteSchema)
  export default Note